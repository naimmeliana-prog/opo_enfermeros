import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Lightbulb, 
  ShieldAlert, 
  Play, 
  HelpCircle, 
  CheckCircle2, 
  XCircle,
  Eye,
  Bookmark,
  Search,
  Filter
} from 'lucide-react';
import { QUESTIONS_BANK } from '../data/questions';
import { Question } from '../types';
import { ExamRunner } from './ExamRunner';
import { useApp } from '../context/AppContext';
import { randomizeQuestionsList } from '../utils/quizUtils';

export const TrapQuestions: React.FC = () => {
  const { bookmarkedQuestionIds, toggleBookmarkQuestion } = useApp();
  const [trapQuestions, setTrapQuestions] = useState<Question[]>(() =>
    randomizeQuestionsList(QUESTIONS_BANK.filter(q => q.isTrapOrDifficult), true, false)
  );

  const [activeTest, setActiveTest] = useState<Question[] | null>(null);
  const [revealedIds, setRevealedIds] = useState<string[]>([]);
  const [selectedBlock, setSelectedBlock] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleReveal = (id: string) => {
    setRevealedIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const filteredQuestions = trapQuestions.filter(q => {
    if (selectedBlock !== 'all' && q.block !== selectedBlock) {
      return false;
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        q.question.toLowerCase().includes(query) ||
        (q.trapWarning && q.trapWarning.toLowerCase().includes(query)) ||
        q.topicTitle.toLowerCase().includes(query) ||
        q.blockName.toLowerCase().includes(query)
      );
    }
    return true;
  });

  const availableBlocks = Array.from(new Set(trapQuestions.map(q => q.block)));

  if (activeTest) {
    return (
      <ExamRunner
        title="Batería Especial: Preguntas Trampa y Difíciles OPE"
        subtitle="Entrenamiento intensivo en distractores y matices de examen"
        questions={activeTest}
        durationMinutes={35}
        isSimulatedOfficial={false}
        onExit={() => setActiveTest(null)}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent dark:from-amber-950/40 p-6 rounded-2xl border border-amber-300 dark:border-amber-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            <span>Módulo Antirresbalones de Examen ({trapQuestions.length} Preguntas Analizadas)</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Preguntas Trampa y Difíciles Recurrentes
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xl">
            Los tribunales de la Conselleria de Sanitat y el CHGUV suelen formular preguntas con trampas lingüísticas, plazos contra-intuitivos y falsos amigos clínicos.
          </p>
        </div>

        <button
          onClick={() => setActiveTest(filteredQuestions.length > 0 ? filteredQuestions : trapQuestions)}
          className="px-5 py-3 rounded-xl font-bold text-xs bg-amber-600 hover:bg-amber-700 text-white shadow-md shadow-amber-600/20 transition-all flex items-center justify-center space-x-2 shrink-0"
        >
          <Play className="w-4 h-4 fill-white" />
          <span>Hacer Test en Vivo ({filteredQuestions.length})</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Buscar pregunta o trampa..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto no-scrollbar text-xs">
          <button
            onClick={() => setSelectedBlock('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors whitespace-nowrap ${
              selectedBlock === 'all'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
            }`}
          >
            Todas ({trapQuestions.length})
          </button>
          <button
            onClick={() => setSelectedBlock('legislacion_cv')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors whitespace-nowrap ${
              selectedBlock === 'legislacion_cv'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
            }`}
          >
            Leyes CV
          </button>
          <button
            onClick={() => setSelectedBlock('farmacologia_sva')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors whitespace-nowrap ${
              selectedBlock === 'farmacologia_sva'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
            }`}
          >
            Fármacos & SVA
          </button>
          <button
            onClick={() => setSelectedBlock('cuidados_medicoquirurgicos')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors whitespace-nowrap ${
              selectedBlock === 'cuidados_medicoquirurgicos'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
            }`}
          >
            Clínica
          </button>
        </div>
      </div>

      {/* Trap Cards List */}
      <div className="space-y-5">
        {filteredQuestions.map((q, idx) => {
          const isRevealed = revealedIds.includes(q.id);
          const isBookmarked = bookmarkedQuestionIds.includes(q.id);

          return (
            <div 
              key={q.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200">
                    Trampa #{idx + 1}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {q.blockName} • {q.topicTitle}
                  </span>
                </div>
                <button
                  onClick={() => toggleBookmarkQuestion(q.id)}
                  className={`p-1.5 rounded-lg transition-colors ${
                    isBookmarked ? 'text-amber-500' : 'text-slate-400 hover:text-slate-600'
                  }`}
                  title="Guardar pregunta"
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
                </button>
              </div>

              {/* The Trap Warning Explaining the trick */}
              {q.trapWarning && (
                <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-xs">
                  <div className="font-bold text-amber-900 dark:text-amber-200 flex items-center gap-1.5 mb-1">
                    <Lightbulb className="w-4 h-4 text-amber-600" />
                    <span>¿Dónde está el matiz que induce al error?</span>
                  </div>
                  <p className="text-amber-800 dark:text-amber-300/90 leading-relaxed font-medium">
                    {q.trapWarning}
                  </p>
                </div>
              )}

              {/* Statement */}
              <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed">
                {q.question}
              </div>

              {/* Options */}
              <div className="space-y-2">
                {q.options.map((opt, oIdx) => {
                  const letter = String.fromCharCode(65 + oIdx);
                  const isCorrect = oIdx === q.correctIndex;

                  let borderClass = 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40';
                  if (isRevealed) {
                    borderClass = isCorrect 
                      ? 'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-100 font-bold'
                      : 'border-slate-200 dark:border-slate-800 opacity-60';
                  }

                  return (
                    <div
                      key={oIdx}
                      className={`p-3 rounded-xl border text-xs sm:text-sm flex items-start space-x-3 transition-colors ${borderClass}`}
                    >
                      <span className={`w-5 h-5 rounded font-bold flex items-center justify-center shrink-0 text-xs ${
                        isRevealed && isCorrect ? 'bg-emerald-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                      }`}>
                        {letter}
                      </span>
                      <span className="flex-1 mt-0.5">{opt}</span>
                      {isRevealed && isCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Reveal Justification toggle */}
              <div className="pt-2 flex justify-between items-center">
                <button
                  onClick={() => toggleReveal(q.id)}
                  className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{isRevealed ? 'Ocultar Justificación y Descarte' : 'Ver Solución Oficial y Descarte de Opciones'}</span>
                </button>
                <span className="text-[11px] text-slate-400">{q.sourceExam}</span>
              </div>

              {/* Detailed Breakdown */}
              {isRevealed && (
                <div className="mt-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs space-y-2.5">
                  <div className="text-emerald-800 dark:text-emerald-300 font-medium">
                    <span className="font-bold">✓ Respuesta Correcta ({String.fromCharCode(65 + q.correctIndex)}):</span> {q.explanation.correct}
                  </div>
                  <div className="space-y-1 pt-1 border-t border-slate-200 dark:border-slate-700">
                    <div className="font-bold text-slate-700 dark:text-slate-300">✗ Análisis de distractores erróneos:</div>
                    {q.explanation.distractors.map((d, dIdx) => (
                      <div key={dIdx} className="text-slate-600 dark:text-slate-400 pl-2 border-l-2 border-slate-300 dark:border-slate-600">
                        {d}
                      </div>
                    ))}
                  </div>
                  <div className="text-[11px] text-slate-400 pt-1">
                    📖 Referencia oficial: {q.explanation.legalOrClinicalReference}
                  </div>
                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
};
