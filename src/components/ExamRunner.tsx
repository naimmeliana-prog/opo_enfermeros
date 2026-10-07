import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Bookmark, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  Award, 
  BookOpen, 
  HelpCircle,
  Flag,
  Share2,
  Shuffle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Question, QuestionBlock } from '../types';
import { useApp } from '../context/AppContext';
import { randomizeQuestionsList } from '../utils/quizUtils';

interface ExamRunnerProps {
  title: string;
  subtitle?: string;
  questions: Question[];
  durationMinutes?: number;
  isSimulatedOfficial?: boolean; // if true, timer + -0.33 penalty calculation
  onExit: () => void;
}

export const ExamRunner: React.FC<ExamRunnerProps> = ({
  title,
  subtitle,
  questions,
  durationMinutes = 60,
  isSimulatedOfficial = false,
  onExit
}) => {
  const { 
    recordExamResult, 
    bookmarkedQuestionIds, 
    toggleBookmarkQuestion, 
    activeOpposition 
  } = useApp();

  // Answer options randomization state (enabled by default)
  const [randomizeAnswers, setRandomizeAnswers] = useState(true);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>(() =>
    randomizeQuestionsList(questions, true, false)
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showImmediateFeedback, setShowImmediateFeedback] = useState(!isSimulatedOfficial);
  const [isFinished, setIsFinished] = useState(false);

  // Timer
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(durationMinutes * 60);

  // When input questions or randomization toggle changes, refresh active questions
  useEffect(() => {
    setActiveQuestions(randomizeQuestionsList(questions, randomizeAnswers, false));
    setSelectedAnswers({});
    setCurrentIndex(0);
    setIsFinished(false);
  }, [questions, randomizeAnswers]);

  useEffect(() => {
    if (isFinished || timeLeftSeconds <= 0) return;
    const interval = setInterval(() => {
      setTimeLeftSeconds(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          handleFinishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isFinished, timeLeftSeconds]);

  const currentQ = activeQuestions[currentIndex];
  if (!currentQ) return null;

  const isCurrentBookmarked = bookmarkedQuestionIds.includes(currentQ.id);

  const handleSelectOption = (optIndex: number) => {
    if (isFinished && !showImmediateFeedback) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [currentIndex]: optIndex
    }));
  };

  const handleClearAnswer = () => {
    setSelectedAnswers(prev => {
      const copy = { ...prev };
      delete copy[currentIndex];
      return copy;
    });
  };

  const handleReshuffleNow = () => {
    if (isFinished) return;
    setActiveQuestions(randomizeQuestionsList(questions, true, false));
    setSelectedAnswers({});
  };

  const handleToggleRandomize = () => {
    const nextVal = !randomizeAnswers;
    setRandomizeAnswers(nextVal);
    setActiveQuestions(randomizeQuestionsList(questions, nextVal, false));
    setSelectedAnswers({});
  };

  // Play synthetic tone using Web Audio API
  const playSound = (type: 'correct' | 'wrong') => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      if (type === 'correct') {
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      } else {
        osc.frequency.setValueAtTime(220, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(146.83, ctx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      }
    } catch (e) {
      // Audio not supported or blocked
    }
  };

  const handleFinishExam = () => {
    setIsFinished(true);

    // Calculate score
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

    activeQuestions.forEach((q, idx) => {
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

    recordExamResult(title, correct, incorrect, blank, blockData);

    const netScore = correct - (incorrect / 3);
    const maxScore = activeQuestions.length;
    const percentage = (netScore / maxScore) * 10;

    if (percentage >= 5) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // ignore
      }
    }
  };

  // Score statistics
  let correctCount = 0;
  let incorrectCount = 0;
  let blankCount = 0;
  activeQuestions.forEach((q, idx) => {
    const chosen = selectedAnswers[idx];
    if (chosen === undefined) blankCount++;
    else if (chosen === q.correctIndex) correctCount++;
    else incorrectCount++;
  });

  const netPoints = Math.max(0, correctCount - (incorrectCount / 3));
  const finalMarkOutOf10 = activeQuestions.length > 0 ? Number(((netPoints / activeQuestions.length) * 10).toFixed(2)) : 0;
  const isPassed = finalMarkOutOf10 >= 5.0;

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Top Controls Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
              {isSimulatedOfficial ? 'Simulacro Oficial' : 'Modo Práctica'}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {activeQuestions.length} preguntas • {activeOpposition.shortName}
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1">
            {title}
          </h2>
          {subtitle && <p className="text-xs text-slate-500 dark:text-slate-400">{subtitle}</p>}
        </div>

        {/* Timer, Randomizer & Controls */}
        <div className="flex flex-wrap items-center gap-2.5 self-end md:self-auto">
          
          {/* Answer Randomizer Badge / Control */}
          <button
            onClick={handleToggleRandomize}
            className={`px-2.5 py-1.5 rounded-xl border text-xs font-bold flex items-center space-x-1.5 transition-all ${
              randomizeAnswers 
                ? 'bg-teal-50 border-teal-300 text-teal-800 dark:bg-teal-950/70 dark:border-teal-700 dark:text-teal-300'
                : 'bg-slate-50 border-slate-200 text-slate-500 dark:bg-slate-800 dark:border-slate-700'
            }`}
            title="Alterna entre respuestas aleatorias (A, B, C, D equilibradas) o fijas"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Respuestas Aleatorias:</span>
            <span>{randomizeAnswers ? 'ACTIVO' : 'FIJO'}</span>
          </button>

          <div className={`flex items-center space-x-2 px-3 py-1.5 rounded-xl border text-sm font-mono font-bold ${
            timeLeftSeconds < 300 
              ? 'bg-rose-50 text-rose-700 border-rose-300 dark:bg-rose-950 dark:text-rose-300 animate-pulse'
              : 'bg-slate-50 text-slate-800 border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700'
          }`}>
            <Clock className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span>{formatTimer(timeLeftSeconds)}</span>
          </div>

          {!isFinished ? (
            <button
              onClick={handleFinishExam}
              className="px-4 py-1.5 text-xs font-bold rounded-xl bg-teal-600 hover:bg-teal-700 text-white shadow-sm transition-colors"
            >
              Finalizar y Calificar
            </button>
          ) : (
            <button
              onClick={onExit}
              className="px-4 py-1.5 text-xs font-bold rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 transition-colors"
            >
              Volver al Menú
            </button>
          )}
        </div>
      </div>

      {/* When Finished: Summary Score Card */}
      {isFinished && (
        <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white rounded-2xl p-6 shadow-xl border border-teal-800/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-teal-300">
                <Award className="w-4 h-4" />
                <span>Resultado Oficial Convocatoria CV</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black">
                {isPassed ? '¡APROBADO! Excelente rendimiento' : 'No superado. ¡Sigue practicando!'}
              </h3>
              <p className="text-xs text-slate-300 max-w-md">
                Calificación obtenida con la fórmula oficial de la Conselleria de Sanitat: <br />
                <code className="text-teal-300 font-mono text-[11px]">Aciertos - (Fallos ÷ 3) = {netPoints.toFixed(2)} puntos netos</code>
              </p>
            </div>

            {/* Big Score Dial */}
            <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10 min-w-[140px]">
              <div className={`text-4xl sm:text-5xl font-black tracking-tight ${isPassed ? 'text-teal-400' : 'text-amber-400'}`}>
                {finalMarkOutOf10}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mt-1">
                Sobre 10 Puntos
              </div>
              <div className={`text-xs font-bold mt-1 ${isPassed ? 'text-emerald-400' : 'text-rose-400'}`}>
                {isPassed ? 'Apto con Plaza Potencial' : 'Requiere Refuerzo'}
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-white/10">
            <div className="bg-white/5 rounded-xl p-3 text-center">
              <div className="text-xs text-slate-400">Aciertos (+1 pto)</div>
              <div className="text-xl font-bold text-emerald-400">{correctCount}</div>
            </div>
            <div className="bg-white/5 rounded-xl p-3 text-center">
              <div className="text-xs text-slate-400">Fallos (-0.33 pto)</div>
              <div className="text-xl font-bold text-rose-400">{incorrectCount}</div>
            </div>
            <div className="bg-white/5 rounded-xl p-3 text-center">
              <div className="text-xs text-slate-400">En Blanco (0 pto)</div>
              <div className="text-xl font-bold text-amber-300">{blankCount}</div>
            </div>
            <div className="bg-white/5 rounded-xl p-3 text-center">
              <div className="text-xs text-slate-400">Puntos Netos</div>
              <div className="text-xl font-bold text-teal-300">{netPoints.toFixed(2)}</div>
            </div>
          </div>
        </div>
      )}

      {/* Main Question Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        
        {/* Question Header & Badges */}
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-teal-50 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
              Pregunta {currentIndex + 1} de {activeQuestions.length}
            </span>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              {currentQ.blockName}
            </span>
            {currentQ.sourceExam && (
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                {currentQ.sourceExam}
              </span>
            )}
          </div>

          {/* Bookmark & Report question */}
          <div className="flex items-center space-x-1">
            <button
              onClick={() => toggleBookmarkQuestion(currentQ.id)}
              className={`p-2 rounded-lg transition-colors ${
                isCurrentBookmarked 
                  ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/50' 
                  : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              title={isCurrentBookmarked ? 'Guardada para repasar' : 'Guardar pregunta'}
            >
              <Bookmark className={`w-4 h-4 ${isCurrentBookmarked ? 'fill-amber-500' : ''}`} />
            </button>
          </div>
        </div>

        {/* Trap Warning Alert if applicable */}
        {currentQ.isTrapOrDifficult && (
          <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/80 flex items-start space-x-3">
            <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-bold text-amber-900 dark:text-amber-200">
                ¡Pregunta Trampa / Alta Dificultad recurrente en oposiciones CV!
              </span>
              {currentQ.trapWarning && (
                <p className="text-amber-800 dark:text-amber-300/90 mt-0.5 font-medium">
                  {currentQ.trapWarning}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Question Statement */}
        <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
          {currentQ.question}
        </div>

        {/* Answer Options */}
        <div className="space-y-3">
          {currentQ.options.map((option, optIdx) => {
            const isSelected = selectedAnswers[currentIndex] === optIdx;
            const letter = String.fromCharCode(65 + optIdx); // A, B, C, D
            const isCorrect = optIdx === currentQ.correctIndex;
            const showAnswerColors = isFinished || showImmediateFeedback && selectedAnswers[currentIndex] !== undefined;

            let optionStyle = 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-800 dark:text-slate-200';
            let badgeStyle = 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300';

            if (showAnswerColors) {
              if (isCorrect) {
                optionStyle = 'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-100 font-semibold';
                badgeStyle = 'bg-emerald-600 text-white';
              } else if (isSelected && !isCorrect) {
                optionStyle = 'border-rose-500 bg-rose-50/80 dark:bg-rose-950/50 text-rose-900 dark:text-rose-100 font-semibold';
                badgeStyle = 'bg-rose-600 text-white';
              } else {
                optionStyle = 'opacity-60 border-slate-200 dark:border-slate-800';
              }
            } else if (isSelected) {
              optionStyle = 'border-teal-600 bg-teal-50 dark:bg-teal-950/50 text-teal-900 dark:text-teal-100 font-bold';
              badgeStyle = 'bg-teal-600 text-white';
            }

            return (
              <button
                key={optIdx}
                onClick={() => {
                  handleSelectOption(optIdx);
                  if (showImmediateFeedback && !isFinished) {
                    playSound(isCorrect ? 'correct' : 'wrong');
                  }
                }}
                className={`w-full text-left p-3.5 sm:p-4 rounded-xl border-2 transition-all flex items-start space-x-3 text-xs sm:text-sm ${optionStyle}`}
              >
                <span className={`w-6 h-6 rounded-lg font-bold flex items-center justify-center shrink-0 text-xs ${badgeStyle}`}>
                  {letter}
                </span>
                <span className="flex-1 mt-0.5">{option}</span>
                {showAnswerColors && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                )}
                {showAnswerColors && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Clear Answer Button */}
        {selectedAnswers[currentIndex] !== undefined && !isFinished && (
          <div className="flex justify-end">
            <button
              onClick={handleClearAnswer}
              className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 underline"
            >
              Dejar en blanco (anular respuesta)
            </button>
          </div>
        )}

        {/* Detailed Explanation / Justification Box (When revealed) */}
        {(isFinished || (showImmediateFeedback && selectedAnswers[currentIndex] !== undefined)) && (
          <div className="mt-6 p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="flex items-center space-x-2 text-teal-700 dark:text-teal-300 font-bold text-xs uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Justificación Oficial y Desglose Razonado</span>
            </div>

            {/* Why the correct is correct */}
            <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-950 dark:text-emerald-200">
              <span className="font-bold text-emerald-800 dark:text-emerald-300">
                ✓ ¿Por qué la opción {String.fromCharCode(65 + currentQ.correctIndex)} es correcta?
              </span>
              <p className="mt-1 leading-relaxed">{currentQ.explanation.correct}</p>
            </div>

            {/* Why distractors are wrong */}
            {currentQ.explanation.distractors.length > 0 && (
              <div className="text-xs space-y-1.5 pt-1">
                <span className="font-bold text-slate-700 dark:text-slate-300 block">
                  ✗ Descarte de distractores:
                </span>
                {currentQ.explanation.distractors.map((dis, idx) => (
                  <div key={idx} className="text-slate-600 dark:text-slate-400 pl-2 border-l-2 border-slate-300 dark:border-slate-700">
                    {dis}
                  </div>
                ))}
              </div>
            )}

            {/* Legal or Clinical Citation */}
            {currentQ.explanation.legalOrClinicalReference && (
              <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span>Fundamento normativo/clínico:</span>
                <span className="font-medium text-slate-700 dark:text-slate-300">{currentQ.explanation.legalOrClinicalReference}</span>
              </div>
            )}
          </div>
        )}

        {/* Bottom Pagination & Question Switcher */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <button
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>

          {/* Quick toggle for instant feedback mode */}
          {!isSimulatedOfficial && (
            <label className="hidden sm:flex items-center space-x-2 text-xs text-slate-600 dark:text-slate-400 cursor-pointer">
              <input
                type="checkbox"
                checked={showImmediateFeedback}
                onChange={(e) => setShowImmediateFeedback(e.target.checked)}
                className="rounded text-teal-600 focus:ring-teal-500"
              />
              <span>Retroalimentación instantánea</span>
            </label>
          )}

          <button
            onClick={() => setCurrentIndex(prev => Math.min(activeQuestions.length - 1, prev + 1))}
            disabled={currentIndex === activeQuestions.length - 1}
            className="flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white dark:bg-teal-600 hover:bg-slate-800 dark:hover:bg-teal-700 disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <span>Siguiente</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Grid Question Navigator */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center justify-between mb-3 text-xs font-bold text-slate-700 dark:text-slate-300">
          <span>Mapa de Preguntas ({activeQuestions.length})</span>
          <div className="flex items-center space-x-3 text-[11px] font-normal text-slate-500">
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-teal-600 inline-block"></span> Respondida</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 inline-block"></span> En blanco</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span> Guardada</span>
          </div>
        </div>

        <div className="grid grid-cols-8 sm:grid-cols-12 md:grid-cols-15 gap-1.5 sm:gap-2">
          {activeQuestions.map((q, idx) => {
            const isAnswered = selectedAnswers[idx] !== undefined;
            const isCurrent = idx === currentIndex;
            const isBookmarked = bookmarkedQuestionIds.includes(q.id);

            let bgClass = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200';
            if (isAnswered) {
              bgClass = 'bg-teal-600 text-white font-bold';
            }
            if (isCurrent) {
              bgClass += ' ring-2 ring-teal-500 ring-offset-2 dark:ring-offset-slate-900';
            }

            return (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative h-9 rounded-lg text-xs font-mono transition-all flex items-center justify-center ${bgClass}`}
              >
                {idx + 1}
                {isBookmarked && (
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-amber-400" />
                )}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
