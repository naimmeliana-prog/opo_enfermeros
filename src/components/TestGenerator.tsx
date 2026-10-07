import React, { useState } from 'react';
import { 
  Layers, 
  Settings2, 
  CheckSquare, 
  Square, 
  Play, 
  Flame, 
  BookOpen, 
  AlertTriangle, 
  Bookmark, 
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { QUESTIONS_BANK } from '../data/questions';
import { QuestionBlock, Question } from '../types';
import { ExamRunner } from './ExamRunner';

const BLOCK_OPTIONS: { id: QuestionBlock; label: string; count: number }[] = [
  { id: 'legislacion_cv', label: 'Bloque I: Legislación Sanitaria Comunitat Valenciana y EACV', count: 3 },
  { id: 'fundamentos_pae', label: 'Bloque II: Fundamentos de Enfermería y Metodología PAE (NANDA-NOC-NIC)', count: 2 },
  { id: 'farmacologia_sva', label: 'Bloque III: Farmacología Clínica, Antídotos y Soporte Vital (SVA)', count: 4 },
  { id: 'cuidados_medicoquirurgicos', label: 'Bloque IV: Cuidados Médico-Quirúrgicos, UPP y Glasgow', count: 3 },
  { id: 'salud_comunitaria_salud_publica', label: 'Bloque V: Salud Comunitaria, Vacunación CV y Cadena de Frío', count: 2 },
];

export const TestGenerator: React.FC = () => {
  const { activeOpposition, bookmarkedQuestionIds } = useApp();

  const [selectedBlocks, setSelectedBlocks] = useState<QuestionBlock[]>([
    'legislacion_cv',
    'fundamentos_pae',
    'farmacologia_sva',
    'cuidados_medicoquirurgicos',
    'salud_comunitaria_salud_publica'
  ]);

  const [questionCount, setQuestionCount] = useState<number>(10);
  const [filterType, setFilterType] = useState<'all' | 'traps' | 'bookmarked'>('all');
  const [isOfficialSimulation, setIsOfficialSimulation] = useState<boolean>(false);

  // Active Running Exam State
  const [activeTestQuestions, setActiveTestQuestions] = useState<Question[] | null>(null);

  const toggleBlock = (block: QuestionBlock) => {
    setSelectedBlocks(prev => 
      prev.includes(block) ? prev.filter(b => b !== block) : [...prev, block]
    );
  };

  const handleSelectAllBlocks = () => {
    setSelectedBlocks(BLOCK_OPTIONS.map(b => b.id));
  };

  const handleGenerateTest = () => {
    // Filter questions adapted to active opposition
    let pool = QUESTIONS_BANK.filter(q => q.oppositionIds.includes(activeOpposition.id));

    // Filter by selected blocks
    pool = pool.filter(q => selectedBlocks.includes(q.block));

    // Filter by type
    if (filterType === 'traps') {
      pool = pool.filter(q => q.isTrapOrDifficult);
    } else if (filterType === 'bookmarked') {
      pool = pool.filter(q => bookmarkedQuestionIds.includes(q.id));
    }

    if (pool.length === 0) {
      // Fallback to all available in bank
      pool = QUESTIONS_BANK.slice(0, questionCount);
    }

    // Shuffle pool
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const finalSet = shuffled.slice(0, Math.min(questionCount, shuffled.length));

    setActiveTestQuestions(finalSet);
  };

  if (activeTestQuestions) {
    return (
      <ExamRunner
        title={`Test Generado - ${activeOpposition.shortName}`}
        subtitle={`${activeTestQuestions.length} preguntas • ${isOfficialSimulation ? 'Simulacro con penalización (-0.33)' : 'Modo Práctica Guiada'}`}
        questions={activeTestQuestions}
        durationMinutes={isOfficialSimulation ? Math.ceil(activeTestQuestions.length * 1.25) : 45}
        isSimulatedOfficial={isOfficialSimulation}
        onExit={() => setActiveTestQuestions(null)}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Title Header */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex items-center space-x-3 mb-2">
          <div className="p-2.5 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Generador de Tests por Bloques del Temario
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Personaliza tu batería de preguntas adaptada a <span className="font-semibold text-teal-600 dark:text-teal-400">{activeOpposition.name}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Configuration Form */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
        
        {/* Step 1: Syllabus Blocks selection */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-teal-600 text-white text-[11px] font-mono flex items-center justify-center">1</span>
              Selecciona los Bloques del Temario a Evaluar:
            </label>
            <button
              onClick={handleSelectAllBlocks}
              className="text-xs text-teal-600 dark:text-teal-400 hover:underline font-semibold"
            >
              Seleccionar Todos
            </button>
          </div>

          <div className="space-y-2.5">
            {BLOCK_OPTIONS.map(b => {
              const isSelected = selectedBlocks.includes(b.id);
              return (
                <div
                  key={b.id}
                  onClick={() => toggleBlock(b.id)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                    isSelected 
                      ? 'border-teal-500 bg-teal-50/60 dark:bg-teal-950/40 text-teal-950 dark:text-teal-100 font-semibold' 
                      : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="flex items-center space-x-3 text-xs sm:text-sm">
                    {isSelected ? (
                      <CheckSquare className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                    <span>{b.label}</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 font-mono">
                    Activo
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 2: Question Count */}
        <div>
          <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
            <span className="w-5 h-5 rounded-full bg-teal-600 text-white text-[11px] font-mono flex items-center justify-center">2</span>
            Número de Preguntas:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[10, 20, 50, 70].map(count => (
              <button
                key={count}
                onClick={() => setQuestionCount(count)}
                className={`py-3 px-4 rounded-xl border text-xs sm:text-sm font-bold transition-all text-center ${
                  questionCount === count 
                    ? 'border-teal-600 bg-teal-600 text-white shadow-md shadow-teal-600/20' 
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                <div>{count} Preguntas</div>
                <div className="text-[10px] font-normal opacity-80 mt-0.5">
                  {count === 70 ? 'Formato Oficial OPE' : `~${Math.round(count * 1.2)} min`}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Question Filter & Difficulty */}
        <div>
          <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
            <span className="w-5 h-5 rounded-full bg-teal-600 text-white text-[11px] font-mono flex items-center justify-center">3</span>
            Filtro de Dificultad y Tipo:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            
            <button
              onClick={() => setFilterType('all')}
              className={`p-3 rounded-xl border text-left text-xs transition-all ${
                filterType === 'all' 
                  ? 'border-teal-600 bg-teal-50 dark:bg-teal-950/60 font-bold text-teal-950 dark:text-teal-100' 
                  : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50'
              }`}
            >
              <div className="font-bold">Todas las preguntas</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Distribución estándar de examen</div>
            </button>

            <button
              onClick={() => setFilterType('traps')}
              className={`p-3 rounded-xl border text-left text-xs transition-all ${
                filterType === 'traps' 
                  ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/60 font-bold text-amber-950 dark:text-amber-100' 
                  : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-1.5 font-bold text-amber-600 dark:text-amber-400">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Solo Preguntas Trampa</span>
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">Alta tasa de error recurrente</div>
            </button>

            <button
              onClick={() => setFilterType('bookmarked')}
              className={`p-3 rounded-xl border text-left text-xs transition-all ${
                filterType === 'bookmarked' 
                  ? 'border-purple-600 bg-purple-50 dark:bg-purple-950/60 font-bold text-purple-950 dark:text-purple-100' 
                  : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-1.5 font-bold text-purple-600 dark:text-purple-400">
                <Bookmark className="w-3.5 h-3.5" />
                <span>Mis Preguntas Guardadas</span>
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">{bookmarkedQuestionIds.length} guardadas para repasar</div>
            </button>

          </div>
        </div>

        {/* Step 4: Execution Mode */}
        <div>
          <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
            <span className="w-5 h-5 rounded-full bg-teal-600 text-white text-[11px] font-mono flex items-center justify-center">4</span>
            Modalidad de Examen:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            
            <div
              onClick={() => setIsOfficialSimulation(false)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                !isOfficialSimulation 
                  ? 'border-teal-500 bg-teal-50/60 dark:bg-teal-950/40 text-teal-900 dark:text-teal-100' 
                  : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="font-bold text-xs sm:text-sm">Modo Práctica Guiada</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Conoce de inmediato si has acertado y lee las explicaciones con artículos legales y guías clínicas opción por opción.
              </p>
            </div>

            <div
              onClick={() => setIsOfficialSimulation(true)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                isOfficialSimulation 
                  ? 'border-teal-500 bg-teal-50/60 dark:bg-teal-950/40 text-teal-900 dark:text-teal-100' 
                  : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="font-bold text-xs sm:text-sm flex items-center gap-1.5">
                <span>Simulacro OPE con Penalización (-0.33)</span>
                <span className="text-[10px] bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-100 px-1.5 py-0.5 rounded font-mono font-bold">Oficial</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Tiempo cronometrado oficial, sin retroalimentación durante el test y puntuación estricta al terminar según las bases del DOGV.
              </p>
            </div>

          </div>
        </div>

        {/* Start Button */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            onClick={handleGenerateTest}
            disabled={selectedBlocks.length === 0}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-lg shadow-teal-600/25 transition-all flex items-center justify-center space-x-2 disabled:opacity-40"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Comenzar Test Personalizado</span>
          </button>
        </div>

      </div>

    </div>
  );
};
