import React, { useState } from 'react';
import { 
  FileText, 
  Calendar, 
  Clock, 
  CheckCircle, 
  Award, 
  Play, 
  DownloadCloud, 
  ShieldCheck, 
  ChevronRight,
  Sparkles,
  Search,
  Filter
} from 'lucide-react';
import { OFFICIAL_EXAMS } from '../data/officialExams';
import { OfficialExam } from '../types';
import { ExamRunner } from './ExamRunner';
import { useApp } from '../context/AppContext';

export const OfficialExamsView: React.FC = () => {
  const { activeOpposition } = useApp();
  const [selectedExam, setSelectedExam] = useState<OfficialExam | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [showAllOppositions, setShowAllOppositions] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Extract all available years
  const availableYears = Array.from(new Set(OFFICIAL_EXAMS.map(e => e.year))).sort((a, b) => b - a);

  // Filter exams based on opposition, year and search
  const filteredExams = OFFICIAL_EXAMS.filter(exam => {
    if (!showAllOppositions && exam.oppositionId !== activeOpposition.id) {
      return false;
    }
    if (selectedYear !== 'all' && exam.year !== selectedYear) {
      return false;
    }
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      return (
        exam.title.toLowerCase().includes(q) ||
        exam.subtitle.toLowerCase().includes(q) ||
        exam.organism.toLowerCase().includes(q) ||
        exam.year.toString().includes(q)
      );
    }
    return true;
  });

  if (selectedExam) {
    return (
      <ExamRunner
        title={selectedExam.title}
        subtitle={`${selectedExam.organism} • Plantilla Definitiva y Justificaciones`}
        questions={selectedExam.questions}
        durationMinutes={selectedExam.durationMinutes}
        isSimulatedOfficial={true}
        onExit={() => setSelectedExam(null)}
      />
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Archivo Histórico Oficial (2015 - 2024)</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Exámenes Oficiales OPE Comunitat Valenciana
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Cuadernillos íntegros de exámenes celebrados con sus plantillas definitivas oficiales y justificación razonada de cada respuesta y distractor.
          </p>
        </div>

        <div className="text-xs bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 shrink-0">
          <span className="text-slate-500 dark:text-slate-400">Fórmula de corrección oficial:</span>
          <div className="font-mono font-bold text-teal-600 dark:text-teal-400 text-sm mt-0.5">
            Aciertos - (Fallos ÷ 3)
          </div>
        </div>
      </div>

      {/* Filter and Search Toolbar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowAllOppositions(true)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                showAllOppositions
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              Todos los Exámenes ({OFFICIAL_EXAMS.length})
            </button>
            <button
              onClick={() => setShowAllOppositions(false)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                !showAllOppositions
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              Solo {activeOpposition.shortName}
            </button>
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Buscar por año o examen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        {/* Year Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-1 no-scrollbar text-xs">
          <span className="text-[11px] font-bold text-slate-400 mr-1 flex items-center gap-1 shrink-0">
            <Calendar className="w-3.5 h-3.5" />
            Año:
          </span>
          <button
            onClick={() => setSelectedYear('all')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold shrink-0 transition-colors ${
              selectedYear === 'all'
                ? 'bg-slate-900 text-white dark:bg-teal-500 dark:text-slate-950 font-black'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
            }`}
          >
            Todos los años
          </button>
          {availableYears.map(yr => (
            <button
              key={yr}
              onClick={() => setSelectedYear(yr)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold shrink-0 transition-colors ${
                selectedYear === yr
                  ? 'bg-slate-900 text-white dark:bg-teal-500 dark:text-slate-950 font-black'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              {yr}
            </button>
          ))}
        </div>
      </div>

      {/* Exams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredExams.map(exam => (
          <div 
            key={exam.id}
            className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-teal-500 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-teal-50 dark:bg-teal-950/70 text-teal-800 dark:text-teal-300 font-mono border border-teal-200 dark:border-teal-800">
                  Año {exam.year}
                </span>
                <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Plantilla Verificada
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {exam.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {exam.subtitle}
              </p>
              <div className="text-[11px] font-medium text-teal-700 dark:text-teal-300">
                {exam.organism}
              </div>
            </div>

            {/* Metrics Chips */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-slate-50 dark:bg-slate-800/60 p-2 rounded-xl">
                <div className="text-slate-400 text-[10px]">Preguntas</div>
                <div className="font-bold font-mono text-slate-900 dark:text-white">{exam.questionsCount}</div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/60 p-2 rounded-xl">
                <div className="text-slate-400 text-[10px]">Tiempo</div>
                <div className="font-bold font-mono text-slate-900 dark:text-white">{exam.durationMinutes} min</div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/60 p-2 rounded-xl">
                <div className="text-slate-400 text-[10px]">Corte Aprobado</div>
                <div className="font-bold font-mono text-teal-600 dark:text-teal-400">5.0 / 10</div>
              </div>
            </div>

            {/* Start Button */}
            <div className="pt-2 flex items-center gap-2">
              <button
                onClick={() => setSelectedExam(exam)}
                className="flex-1 py-2.5 px-4 rounded-xl font-bold text-xs bg-teal-600 hover:bg-teal-700 text-white shadow-sm transition-colors flex items-center justify-center space-x-2"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Realizar Examen Oficial ({exam.year})</span>
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
