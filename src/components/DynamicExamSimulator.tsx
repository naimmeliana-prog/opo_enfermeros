import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Play, 
  Clock, 
  ShieldCheck, 
  AlertTriangle, 
  Award, 
  CheckCircle2, 
  XCircle, 
  TrendingUp, 
  BookOpen, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  Target, 
  Sparkles, 
  Bot, 
  BarChart3,
  Bookmark,
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useApp } from '../context/AppContext';
import { OPPOSITIONS } from '../data/oppositions';
import { QUESTIONS_BANK } from '../data/questions';
import { OppositionId, Question, QuestionBlock } from '../types';
import { randomizeQuestionsList } from '../utils/quizUtils';

interface DynamicExamSimulatorProps {
  onNavigateToSyllabus?: () => void;
  onOpenAIWithTopic?: (topic: string) => void;
}

export const DynamicExamSimulator: React.FC<DynamicExamSimulatorProps> = ({
  onNavigateToSyllabus,
  onOpenAIWithTopic
}) => {
  const { 
    activeOpposition, 
    setActiveOppositionId, 
    recordExamResult,
    bookmarkedQuestionIds, 
    toggleBookmarkQuestion 
  } = useApp();

  const [selectedOppId, setSelectedOppId] = useState<OppositionId>(activeOpposition.id);
  const [examLengthMode, setExamLengthMode] = useState<'full' | 'express'>('full');
  
  // Simulation Active State
  const [isSimulating, setIsSimulating] = useState(false);
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [reviewMarked, setReviewMarked] = useState<Record<number, boolean>>({});
  
  // Timer State
  const [timeLeft, setTimeLeft] = useState(90 * 60);
  const [totalTimeSeconds, setTotalTimeSeconds] = useState(90 * 60);
  
  // Results State
  const [isFinished, setIsFinished] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'mistakes' | 'correct' | 'blank'>('all');

  const targetOpp = OPPOSITIONS.find(o => o.id === selectedOppId) || activeOpposition;

  // Question generator algorithm
  const generateDynamicExam = () => {
    // 1. Gather pool matching opposition
    let pool = QUESTIONS_BANK.filter(q => q.oppositionIds.includes(selectedOppId));
    if (pool.length < 10) pool = [...QUESTIONS_BANK];

    const targetCount = examLengthMode === 'full' 
      ? Math.min(pool.length, targetOpp.examQuestionsCount || 70) 
      : 20;

    // 2. Shuffle randomly and randomize option order (A, B, C, D)
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const finalSet = randomizeQuestionsList(shuffled.slice(0, targetCount), true, false);

    setExamQuestions(finalSet);
    setSelectedAnswers({});
    setReviewMarked({});
    setCurrentIndex(0);

    const minutes = examLengthMode === 'full' 
      ? (targetOpp.examDurationMinutes || 90) 
      : 30;

    setTimeLeft(minutes * 60);
    setTotalTimeSeconds(minutes * 60);
    setIsSimulating(true);
    setIsFinished(false);
  };

  // Timer Tick
  useEffect(() => {
    if (!isSimulating || isFinished || timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          handleFinishSimulation();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isSimulating, isFinished, timeLeft]);

  const handleSelectOption = (optIdx: number) => {
    if (isFinished) return;
    setSelectedAnswers(prev => ({ ...prev, [currentIndex]: optIdx }));
  };

  const handleClearAnswer = () => {
    setSelectedAnswers(prev => {
      const copy = { ...prev };
      delete copy[currentIndex];
      return copy;
    });
  };

  const toggleMarkForReview = () => {
    setReviewMarked(prev => ({ ...prev, [currentIndex]: !prev[currentIndex] }));
  };

  const handleFinishSimulation = () => {
    setIsFinished(true);

    let correct = 0;
    let incorrect = 0;
    let blank = 0;
    const blockData: Record<QuestionBlock, { answered: number; correct: number }> = {
      legislacion_cv: { answered: 0, correct: 0 },
      fundamentos_pae: { answered: 0, correct: 0 },
      farmacologia_sva: { answered: 0, correct: 0 },
      cuidados_medicoquirurgicos: { answered: 0, correct: 0 },
      salud_comunitaria_salud_publica: { answered: 0, correct: 0 },
      materno_infantil: { answered: 0, correct: 0 },
    };

    examQuestions.forEach((q, idx) => {
      const chosen = selectedAnswers[idx];
      const blk = q.block || 'legislacion_cv';
      if (chosen === undefined) {
        blank++;
      } else if (chosen === q.correctIndex) {
        correct++;
        blockData[blk].answered++;
        blockData[blk].correct++;
      } else {
        incorrect++;
        blockData[blk].answered++;
      }
    });

    recordExamResult(`Simulacro Dinámico ${targetOpp.shortName}`, correct, incorrect, blank, blockData);

    const netScore = Math.max(0, correct - (incorrect / 3));
    const markOutOf10 = (netScore / examQuestions.length) * 10;
    if (markOutOf10 >= 5) {
      try {
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
      } catch (e) {}
    }
  };

  // Format Timer mm:ss
  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Score calculations
  let correctCount = 0;
  let incorrectCount = 0;
  let blankCount = 0;
  const blockPerformance: Record<QuestionBlock, { total: number; correct: number; incorrect: number }> = {
    legislacion_cv: { total: 0, correct: 0, incorrect: 0 },
    fundamentos_pae: { total: 0, correct: 0, incorrect: 0 },
    farmacologia_sva: { total: 0, correct: 0, incorrect: 0 },
    cuidados_medicoquirurgicos: { total: 0, correct: 0, incorrect: 0 },
    salud_comunitaria_salud_publica: { total: 0, correct: 0, incorrect: 0 },
    materno_infantil: { total: 0, correct: 0, incorrect: 0 },
  };

  examQuestions.forEach((q, idx) => {
    const chosen = selectedAnswers[idx];
    const blk = q.block || 'legislacion_cv';
    blockPerformance[blk].total++;
    if (chosen === undefined) {
      blankCount++;
    } else if (chosen === q.correctIndex) {
      correctCount++;
      blockPerformance[blk].correct++;
    } else {
      incorrectCount++;
      blockPerformance[blk].incorrect++;
    }
  });

  const netPoints = Math.max(0, correctCount - (incorrectCount / 3));
  const finalMark = examQuestions.length > 0 ? Number(((netPoints / examQuestions.length) * 10).toFixed(2)) : 0;
  const isPassed = finalMark >= 5.0;

  // Pacing (seconds spent per question)
  const timeElapsed = totalTimeSeconds - timeLeft;
  const answeredTotal = correctCount + incorrectCount;
  const pacingSeconds = answeredTotal > 0 ? Math.round(timeElapsed / answeredTotal) : 0;

  // Filtered review questions
  const filteredReviewQuestions = examQuestions.filter((q, idx) => {
    const chosen = selectedAnswers[idx];
    if (reviewFilter === 'all') return true;
    if (reviewFilter === 'mistakes') return chosen !== undefined && chosen !== q.correctIndex;
    if (reviewFilter === 'correct') return chosen === q.correctIndex;
    if (reviewFilter === 'blank') return chosen === undefined;
    return true;
  });

  // Block Labels
  const blockNames: Record<QuestionBlock, string> = {
    legislacion_cv: 'Legislación y Normativa Sanitaria CV',
    fundamentos_pae: 'Fundamentos de Enfermería y PAE',
    farmacologia_sva: 'Farmacología y Soporte Vital (SVA)',
    cuidados_medicoquirurgicos: 'Cuidados Médico-Quirúrgicos y UPP',
    salud_comunitaria_salud_publica: 'Salud Comunitaria y Vacunas CV',
    materno_infantil: 'Materno-Infantil y Salud Mental',
  };

  // If simulation is active and running (not finished yet)
  if (isSimulating && !isFinished) {
    const currentQ = examQuestions[currentIndex];
    const isBookmarked = bookmarkedQuestionIds.includes(currentQ?.id || '');

    return (
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Simulation Live Header Bar */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 animate-pulse">
                🔴 Simulación en Tiempo Real
              </span>
              <span className="text-xs font-semibold text-slate-500">
                {targetOpp.shortName} • {examQuestions.length} Preguntas
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white mt-1">
              Simulador Oficial OPE Enfermería Comunitat Valenciana
            </h2>
          </div>

          <div className="flex items-center space-x-3 self-end md:self-auto">
            {/* Live Clock */}
            <div className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-xl border text-sm font-mono font-bold ${
              timeLeft < 300 
                ? 'bg-rose-50 text-rose-700 border-rose-300 dark:bg-rose-950 dark:text-rose-300 animate-pulse'
                : 'bg-slate-50 text-slate-800 border-slate-200 dark:bg-slate-800 dark:text-slate-200'
            }`}>
              <Clock className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>{formatTimer(timeLeft)}</span>
            </div>

            {/* Pacing Speed Indicator */}
            <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium">
              <TrendingUp className="w-3.5 h-3.5 text-teal-600" />
              <span>{pacingSeconds > 0 ? `${pacingSeconds}s/preg` : 'Iniciando'}</span>
            </div>

            <button
              onClick={handleFinishSimulation}
              className="px-4 py-2 text-xs font-bold rounded-xl bg-teal-600 hover:bg-teal-700 text-white shadow-sm transition-colors"
            >
              Entregar y Calificar
            </button>
          </div>
        </div>

        {/* Current Question View */}
        {currentQ && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-teal-50 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                  Pregunta {currentIndex + 1} de {examQuestions.length}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {currentQ.blockName}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleMarkForReview}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    reviewMarked[currentIndex] 
                      ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' 
                      : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {reviewMarked[currentIndex] ? '★ Marcada para revisión' : '☆ Marcar para revisar'}
                </button>
                <button
                  onClick={() => toggleBookmarkQuestion(currentQ.id)}
                  className={`p-1.5 rounded-lg text-slate-400 hover:text-slate-600`}
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
                </button>
              </div>
            </div>

            <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
              {currentQ.question}
            </div>

            {/* Answer Options */}
            <div className="space-y-3">
              {currentQ.options.map((opt, oIdx) => {
                const isSelected = selectedAnswers[currentIndex] === oIdx;
                const letter = String.fromCharCode(65 + oIdx);

                return (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectOption(oIdx)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-xl border-2 transition-all flex items-start space-x-3 text-xs sm:text-sm ${
                      isSelected 
                        ? 'border-teal-600 bg-teal-50 dark:bg-teal-950/50 text-teal-900 dark:text-teal-100 font-bold' 
                        : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-lg font-bold flex items-center justify-center shrink-0 text-xs ${
                      isSelected ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                    }`}>
                      {letter}
                    </span>
                    <span className="flex-1 mt-0.5">{opt}</span>
                  </button>
                );
              })}
            </div>

            {selectedAnswers[currentIndex] !== undefined && (
              <div className="flex justify-end">
                <button
                  onClick={handleClearAnswer}
                  className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 underline"
                >
                  Dejar en blanco (anular respuesta seleccionada)
                </button>
              </div>
            )}

            {/* Pagination Controls */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <button
                onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
              </button>

              <button
                onClick={() => setCurrentIndex(prev => Math.min(examQuestions.length - 1, prev + 1))}
                disabled={currentIndex === examQuestions.length - 1}
                className="flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white dark:bg-teal-600 hover:bg-slate-800 dark:hover:bg-teal-700 disabled:opacity-30 disabled:pointer-events-none"
              >
                <span>Siguiente</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Question Matrix Palette */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-3 text-xs font-bold text-slate-700 dark:text-slate-300">
            <span>Matriz de Preguntas del Simulacro</span>
            <div className="flex items-center space-x-3 text-[11px] font-normal text-slate-500">
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-teal-600 inline-block"></span> Respondida ({Object.keys(selectedAnswers).length})</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 inline-block"></span> En blanco ({examQuestions.length - Object.keys(selectedAnswers).length})</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span> Revisar</span>
            </div>
          </div>

          <div className="grid grid-cols-8 sm:grid-cols-12 md:grid-cols-15 gap-1.5">
            {examQuestions.map((_, idx) => {
              const isAnswered = selectedAnswers[idx] !== undefined;
              const isCurrent = idx === currentIndex;
              const isMarked = reviewMarked[idx];

              let bg = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400';
              if (isAnswered) bg = 'bg-teal-600 text-white font-bold';
              if (isCurrent) bg += ' ring-2 ring-teal-500 ring-offset-2 dark:ring-offset-slate-900';

              return (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative h-9 rounded-lg text-xs font-mono transition-all flex items-center justify-center ${bg}`}
                >
                  {idx + 1}
                  {isMarked && (
                    <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-400 ring-1 ring-white" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    );
  }

  // If simulation is finished: Full Diagnostic Report and Improvement Areas Analysis
  if (isFinished) {
    return (
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Big Results Header */}
        <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-teal-800/40">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-teal-300">
                <Award className="w-4 h-4" />
                <span>Dictamen del Simulacro • {targetOpp.shortName}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black">
                {isPassed ? '¡APROBADO! Excelente desempeño para plaza' : 'Calificación Insuficiente. ¡Momento de ajustar!'}
              </h2>
              <p className="text-xs text-slate-300 max-w-lg">
                Fórmula oficial aplicada: <code>Aciertos - (Fallos ÷ 3) = {netPoints.toFixed(2)} netos</code>. 
                Corte de aprobado oficial: 5.00 puntos.
              </p>
            </div>

            {/* Score Dial */}
            <div className="text-center p-5 rounded-2xl bg-white/5 border border-white/10 min-w-[160px]">
              <div className={`text-5xl font-black tracking-tight ${isPassed ? 'text-teal-400' : 'text-amber-400'}`}>
                {finalMark}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mt-1">
                Sobre 10 Puntos
              </div>
              <div className={`text-xs font-bold mt-1 ${isPassed ? 'text-emerald-400' : 'text-rose-400'}`}>
                {isPassed ? 'Apto Convocatoria' : 'Bajo el corte de aprobado'}
              </div>
            </div>
          </div>

          {/* Metrics breakdown */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-white/10 text-center text-xs">
            <div className="bg-white/5 p-3 rounded-xl">
              <div className="text-slate-400">Aciertos (+1 pto)</div>
              <div className="text-xl font-bold text-emerald-400">{correctCount}</div>
            </div>
            <div className="bg-white/5 p-3 rounded-xl">
              <div className="text-slate-400">Fallos (-0.33 pto)</div>
              <div className="text-xl font-bold text-rose-400">{incorrectCount}</div>
            </div>
            <div className="bg-white/5 p-3 rounded-xl">
              <div className="text-slate-400">En Blanco (0 pto)</div>
              <div className="text-xl font-bold text-amber-300">{blankCount}</div>
            </div>
            <div className="bg-white/5 p-3 rounded-xl">
              <div className="text-slate-400">Ritmo de Examen</div>
              <div className="text-xl font-bold text-teal-300">{pacingSeconds}s/preg</div>
            </div>
          </div>
        </div>

        {/* CRITICAL REQUIREMENT: Análisis Detallado de Áreas de Mejora */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider">
                <BarChart3 className="w-4 h-4" />
                <span>Diagnóstico Personalizado de Rendimiento</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                Análisis Exhaustivo de Áreas de Mejora
              </h3>
            </div>
            <button
              onClick={() => {
                setIsSimulating(false);
                setIsFinished(false);
              }}
              className="px-4 py-2 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Configurar Nuevo Simulacro
            </button>
          </div>

          {/* Breakdown by Syllabus Block */}
          <div className="space-y-4">
            {(Object.keys(blockPerformance) as QuestionBlock[]).map(blk => {
              const data = blockPerformance[blk];
              if (data.total === 0) return null;
              const rate = Math.round((data.correct / data.total) * 100);
              const isCriticalWeakness = rate < 60;
              const isGood = rate >= 75;

              return (
                <div key={blk} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-slate-900 dark:text-white">{blockNames[blk]}</span>
                      {isCriticalWeakness && (
                        <span className="px-2 py-0.5 rounded text-[10px] bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 font-bold">
                          Área Crítica a Reforzar
                        </span>
                      )}
                      {isGood && (
                        <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold">
                          Punto Fuerte
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-slate-500 font-bold">
                      {data.correct} aciertos de {data.total} ({rate}%)
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-700 ${
                        rate >= 75 ? 'bg-emerald-500' : rate >= 60 ? 'bg-amber-500' : 'bg-rose-500'
                      }`}
                      style={{ width: `${Math.max(5, rate)}%` }}
                    />
                  </div>

                  {/* Personalized Clinical Recommendation */}
                  {isCriticalWeakness && (
                    <div className="pt-2 text-xs text-rose-900 dark:text-rose-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-slate-200 dark:border-slate-700">
                      <span>
                        ⚠️ <strong>Recomendación:</strong> Has tenido {data.incorrect} errores en este bloque. Te sugerimos revisar las leyes clave y los esquemas antes del próximo simulacro.
                      </span>
                      {onNavigateToSyllabus && (
                        <button
                          onClick={onNavigateToSyllabus}
                          className="font-bold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1 shrink-0"
                        >
                          <span>Ir al Temario</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Detailed Question Review with Justifications */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Revisión Pregunta por Pregunta y Justificación Razonada
            </h3>

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              <button
                onClick={() => setReviewFilter('all')}
                className={`px-3 py-1 rounded-lg font-bold ${
                  reviewFilter === 'all' ? 'bg-teal-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600'
                }`}
              >
                Todas ({examQuestions.length})
              </button>
              <button
                onClick={() => setReviewFilter('mistakes')}
                className={`px-3 py-1 rounded-lg font-bold ${
                  reviewFilter === 'mistakes' ? 'bg-rose-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600'
                }`}
              >
                Fallos ({incorrectCount})
              </button>
              <button
                onClick={() => setReviewFilter('correct')}
                className={`px-3 py-1 rounded-lg font-bold ${
                  reviewFilter === 'correct' ? 'bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600'
                }`}
              >
                Aciertos ({correctCount})
              </button>
              <button
                onClick={() => setReviewFilter('blank')}
                className={`px-3 py-1 rounded-lg font-bold ${
                  reviewFilter === 'blank' ? 'bg-amber-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600'
                }`}
              >
                En Blanco ({blankCount})
              </button>
            </div>
          </div>

          {/* Questions review list */}
          <div className="space-y-4">
            {filteredReviewQuestions.map((q, idx) => {
              const originalIndex = examQuestions.findIndex(x => x.id === q.id);
              const chosen = selectedAnswers[originalIndex];
              const isCorrect = chosen === q.correctIndex;
              const isBlank = chosen === undefined;

              return (
                <div 
                  key={q.id}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3 bg-slate-50/50 dark:bg-slate-900/50"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-500">
                      Pregunta #{originalIndex + 1} • {q.blockName}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full font-bold ${
                      isCorrect 
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' 
                        : isBlank 
                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                        : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                    }`}>
                      {isCorrect ? '✓ Acertada (+1)' : isBlank ? '— En blanco (0)' : '✗ Fallo (-0.33)'}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {q.question}
                  </h4>

                  {/* Options with clear validation */}
                  <div className="space-y-1.5 text-xs">
                    {q.options.map((opt, oIdx) => {
                      const isOptionCorrect = oIdx === q.correctIndex;
                      const isOptionChosen = chosen === oIdx;

                      let style = 'border-slate-200 dark:border-slate-800 opacity-70';
                      if (isOptionCorrect) {
                        style = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-100 font-bold opacity-100';
                      } else if (isOptionChosen && !isOptionCorrect) {
                        style = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-950 dark:text-rose-100 font-bold opacity-100';
                      }

                      return (
                        <div key={oIdx} className={`p-2.5 rounded-xl border flex items-center space-x-2 ${style}`}>
                          <span className="font-mono font-bold w-5">{String.fromCharCode(65 + oIdx)})</span>
                          <span className="flex-1">{opt}</span>
                          {isOptionCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                          {isOptionChosen && !isOptionCorrect && <XCircle className="w-4 h-4 text-rose-600 shrink-0" />}
                        </div>
                      );
                    })}
                  </div>

                  {/* Complete Official Justification */}
                  <div className="p-3.5 rounded-xl bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-xs space-y-1.5 text-teal-950 dark:text-teal-200">
                    <div className="font-bold text-teal-800 dark:text-teal-300">
                      💡 Justificación Oficial de la Respuesta Correcta:
                    </div>
                    <p>{q.explanation.correct}</p>
                    {q.explanation.legalOrClinicalReference && (
                      <div className="pt-1 text-[11px] text-teal-700 dark:text-teal-400 font-medium">
                        Referencia: {q.explanation.legalOrClinicalReference}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    );
  }

  // Pre-Simulation Setup Screen: Select Opposition & Options
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      {/* Top Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">
            <Clock className="w-3.5 h-3.5 text-rose-600" />
            <span>Simulador Dinámico de Examen Oficial</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
            Simulación de Examen en Tiempo Real
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Genera un examen completo similar a convocatorias oficiales con preguntas dinámicas, tiempo cronometrado estricto y análisis de áreas de mejora.
          </p>
        </div>

        <div className="text-xs font-mono p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <span className="text-slate-400">Penalización:</span>
          <div className="font-bold text-rose-600 text-sm mt-0.5">-0,33 puntos / error</div>
        </div>
      </div>

      {/* Configuration Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
        
        {/* Step 1: Opposition Selector */}
        <div>
          <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
            <span className="w-5 h-5 rounded-full bg-teal-600 text-white text-[11px] font-mono flex items-center justify-center">1</span>
            Selecciona la Oposición a Simular:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {OPPOSITIONS.map(opp => {
              const isSelected = selectedOppId === opp.id;
              return (
                <div
                  key={opp.id}
                  onClick={() => {
                    setSelectedOppId(opp.id);
                    setActiveOppositionId(opp.id); // Sync with context
                  }}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    isSelected 
                      ? 'border-teal-500 bg-teal-50/60 dark:bg-teal-950/40 text-teal-950 dark:text-teal-100 shadow-xs' 
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm">{opp.name}</span>
                    <span className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400">
                      {opp.places} Plazas
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                    {opp.description}
                  </p>
                  <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-between text-[11px] text-slate-500">
                    <span>{opp.examQuestionsCount} preguntas</span>
                    <span>{opp.examDurationMinutes} minutos</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 2: Exam Duration Mode */}
        <div>
          <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
            <span className="w-5 h-5 rounded-full bg-teal-600 text-white text-[11px] font-mono flex items-center justify-center">2</span>
            Extensión del Simulacro:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => setExamLengthMode('full')}
              className={`p-4 rounded-2xl border text-left transition-all ${
                examLengthMode === 'full' 
                  ? 'border-teal-600 bg-teal-50 dark:bg-teal-950/60 font-bold text-teal-950 dark:text-teal-100' 
                  : 'border-slate-200 dark:border-slate-800 text-slate-600'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>Simulacro Completo Oficial</span>
                <span className="text-xs font-mono bg-teal-600 text-white px-2 py-0.5 rounded-full">
                  {targetOpp.examQuestionsCount || 70} preguntas
                </span>
              </div>
              <div className="text-xs font-normal text-slate-500 mt-1">
                Tiempo oficial de {targetOpp.examDurationMinutes || 90} minutos con penalización estricta.
              </div>
            </button>

            <button
              onClick={() => setExamLengthMode('express')}
              className={`p-4 rounded-2xl border text-left transition-all ${
                examLengthMode === 'express' 
                  ? 'border-teal-600 bg-teal-50 dark:bg-teal-950/60 font-bold text-teal-950 dark:text-teal-100' 
                  : 'border-slate-200 dark:border-slate-800 text-slate-600'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>Simulacro Exprés Dinámico</span>
                <span className="text-xs font-mono bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded-full">
                  20 preguntas
                </span>
              </div>
              <div className="text-xs font-normal text-slate-500 mt-1">
                Tiempo de 30 minutos, ideal para sesiones rápidas entre turnos hospitalarios.
              </div>
            </button>
          </div>
        </div>

        {/* Start Button */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            onClick={generateDynamicExam}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-teal-600 to-rose-600 hover:from-teal-700 hover:to-rose-700 text-white shadow-lg shadow-teal-600/20 transition-all flex items-center justify-center space-x-2"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Generar y Comenzar Simulacro en Vivo</span>
          </button>
        </div>

      </div>

    </div>
  );
};
