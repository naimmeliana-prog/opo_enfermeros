import React from 'react';
import { 
  Award, 
  Flame, 
  Target, 
  Clock, 
  Layers, 
  AlertTriangle, 
  FileText, 
  BookOpen, 
  TrendingUp, 
  CheckCircle, 
  Calendar, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { QuestionBlock } from '../types';

interface DashboardProps {
  setActiveTab: (tab: string) => void;
  onStartQuickTest: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ setActiveTab, onStartQuickTest }) => {
  const { stats, activeOpposition, user } = useApp();

  const totalAttempted = stats.totalCorrect + stats.totalIncorrect;
  const accuracyRate = totalAttempted > 0 
    ? Math.round((stats.totalCorrect / totalAttempted) * 100) 
    : 78;

  // Formula: Aciertos - (Fallos / 3) normalized to 10
  const netEstimatedMark = totalAttempted > 0
    ? Math.max(0, Number((((stats.totalCorrect - (stats.totalIncorrect / 3)) / totalAttempted) * 10).toFixed(1)))
    : 7.6;

  const blockNames: Record<QuestionBlock, string> = {
    legislacion_cv: 'Legislación y Normativa Sanitaria CV',
    fundamentos_pae: 'Fundamentos de Enfermería y PAE',
    farmacologia_sva: 'Farmacología y Soporte Vital (SVA)',
    cuidados_medicoquirurgicos: 'Cuidados Médico-Quirúrgicos y UPP',
    salud_comunitaria_salud_publica: 'Salud Comunitaria y Vacunaciones CV',
    materno_infantil: 'Materno-Infantil y Salud Mental',
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-700 via-teal-800 to-slate-900 text-white p-6 sm:p-8 shadow-xl">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold bg-white/10 backdrop-blur-xs border border-white/20 text-teal-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Oposiciones de Enfermería Comunitat Valenciana</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              ¡Hola de nuevo, {user ? `@${user.username}` : 'Futura Enfermera/o'}!
            </h1>
            <p className="text-sm text-slate-200 leading-relaxed">
              Preparando <span className="font-bold text-teal-300">{activeOpposition.name}</span>. 
              {activeOpposition.places} plazas en juego con penalización oficial de 0,33 puntos por fallo.
            </p>
            
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setActiveTab('dynamic-simulator')}
                className="px-5 py-2.5 rounded-xl font-bold text-xs bg-rose-600 hover:bg-rose-700 text-white shadow-md shadow-rose-600/30 transition-all flex items-center space-x-2"
              >
                <Clock className="w-4 h-4 text-white" />
                <span>Simulador Oficial Dinámico</span>
              </button>
              <button
                onClick={onStartQuickTest}
                className="px-5 py-2.5 rounded-xl font-bold text-xs bg-white text-teal-900 hover:bg-teal-50 shadow-md transition-all flex items-center space-x-2"
              >
                <Layers className="w-4 h-4 text-teal-700" />
                <span>Test Rápido (10 Preguntas)</span>
              </button>
              <button
                onClick={() => setActiveTab('trap-questions')}
                className="px-4 py-2.5 rounded-xl font-bold text-xs bg-teal-900/60 hover:bg-teal-900 text-teal-100 border border-teal-500/30 transition-all flex items-center space-x-2"
              >
                <AlertTriangle className="w-4 h-4 text-amber-300" />
                <span>Preguntas Trampa</span>
              </button>
            </div>
          </div>

          {/* Opposition Quick Counter Box */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 min-w-[260px] text-center lg:text-left">
            <div className="text-xs uppercase font-bold tracking-wider text-teal-200">
              Estado de la Convocatoria
            </div>
            <div className="text-xl font-extrabold mt-1 text-white">
              {activeOpposition.status}
            </div>
            <div className="text-xs text-slate-300 mt-1 flex items-center justify-center lg:justify-start gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-teal-300" />
              <span>Examen estimado: {activeOpposition.estimatedDate}</span>
            </div>
            <div className="mt-3 pt-3 border-t border-white/15 flex justify-between text-xs">
              <span className="text-slate-300">DOGV:</span>
              <span className="font-mono text-teal-200 font-semibold truncate max-w-[150px]">{activeOpposition.dogvReference}</span>
            </div>
          </div>
        </div>

        {/* Decorative background circle */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-teal-500/20 blur-3xl pointer-events-none" />
      </div>

      {/* Key Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Estimated Mark */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/80 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Nota Estimada OPE</div>
            <div className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              {netEstimatedMark} <span className="text-xs font-normal text-slate-400">/ 10</span>
            </div>
            <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1 mt-0.5">
              <ShieldCheck className="w-3 h-3" />
              <span>Con penalización oficial</span>
            </div>
          </div>
        </div>

        {/* Accuracy Rate */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/80 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Aciertos Netos</div>
            <div className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              {accuracyRate}%
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              {stats.totalCorrect} de {stats.totalAnswered} respondidas
            </div>
          </div>
        </div>

        {/* Streak */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/80 flex items-center justify-center text-amber-500 shrink-0">
            <Flame className="w-6 h-6 fill-amber-500 animate-pulse" />
          </div>
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Racha de Estudio</div>
            <div className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              {stats.streakDays} <span className="text-xs font-normal text-slate-400">días</span>
            </div>
            <div className="text-[11px] text-amber-600 dark:text-amber-400 font-semibold mt-0.5">
              ¡Constancia de plaza!
            </div>
          </div>
        </div>

        {/* Study Time */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/80 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Tiempo de Práctica</div>
            <div className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              {Math.floor(stats.studyMinutes / 60)}h {stats.studyMinutes % 60}m
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              {stats.testsCompleted} tests completados
            </div>
          </div>
        </div>

      </div>

      {/* Grid: Topic Breakdown vs Recent Performance & Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Performance by Block & Weak Spots */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Syllabus Blocks Performance */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Rendimiento por Bloques del Temario
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Porcentaje de acierto en cada área específica de la oposición
                </p>
              </div>
              <button 
                onClick={() => setActiveTab('test-generator')}
                className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1"
              >
                <span>Generar por bloques</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-4">
              {(Object.keys(blockNames) as QuestionBlock[]).map(blk => {
                const item = stats.blockStats[blk] || { answered: 0, correct: 0 };
                const rate = item.answered > 0 ? Math.round((item.correct / item.answered) * 100) : 0;
                const isWeak = item.answered > 0 && rate < 65;

                return (
                  <div key={blk} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                        {blockNames[blk]}
                        {isWeak && (
                          <span className="px-1.5 py-0.2 rounded text-[10px] bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300 font-bold">
                            Reforzar
                          </span>
                        )}
                      </span>
                      <span className="font-mono text-slate-500 dark:text-slate-400">
                        {item.correct}/{item.answered} ({rate}%)
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          rate >= 80 
                            ? 'bg-emerald-500' 
                            : rate >= 60 
                            ? 'bg-teal-500' 
                            : rate > 0 
                            ? 'bg-amber-500' 
                            : 'bg-slate-300 dark:bg-slate-700'
                        }`}
                        style={{ width: `${Math.max(4, rate)}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Diagnosis / Weak Spots Alert */}
          <div className="bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 rounded-2xl p-5">
            <div className="flex items-start space-x-3">
              <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-amber-900 dark:text-amber-200">
                  Punto Débil Detectado: Legislación Sanitaria CV y Faltas Estatutarias
                </h4>
                <p className="text-xs text-amber-800 dark:text-amber-300/90 mt-1 leading-relaxed">
                  Los opositores a la Conselleria de Sanitat suelen fallar en los plazos de prescripción de la Ley 55/2003 y las competencias de los Departamentos de Salud en la Ley 10/2014. Te recomendamos practicar las preguntas trampa antes de pasar a simulacros completos.
                </p>
                <div className="mt-3 flex items-center space-x-3">
                  <button 
                    onClick={() => setActiveTab('trap-questions')}
                    className="text-xs font-bold px-3 py-1.5 rounded-lg bg-amber-600 text-white hover:bg-amber-700 transition-colors"
                  >
                    Repasar Preguntas Trampa
                  </button>
                  <button 
                    onClick={() => setActiveTab('syllabus')}
                    className="text-xs font-semibold text-amber-900 dark:text-amber-200 hover:underline"
                  >
                    Ver Tema 1 y 2 del Temario
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right 1 Col: Quick Shortuts & Recent Scores */}
        <div className="space-y-6">
          
          {/* Quick Access Tiles */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">
              Accesos Rápidos
            </h3>

            <button
              onClick={() => setActiveTab('dynamic-simulator')}
              className="w-full p-3 rounded-xl border-2 border-rose-500/40 bg-rose-50/40 dark:bg-rose-950/20 hover:border-rose-500 hover:bg-rose-50/70 transition-all flex items-center justify-between text-left group"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-rose-500 text-white shadow-xs">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-rose-600 transition-colors flex items-center gap-1.5">
                    <span>Simulador Dinámico en Vivo</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-rose-600 text-white font-mono">Nuevo</span>
                  </div>
                  <div className="text-[11px] text-slate-500">Examen completo con áreas de mejora</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-rose-600" />
            </button>
            
            <button
              onClick={() => setActiveTab('official-exams')}
              className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-teal-500 hover:bg-teal-50/50 dark:hover:bg-teal-950/30 transition-all flex items-center justify-between text-left group"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">
                    Examen Oficial GVA 2023
                  </div>
                  <div className="text-[11px] text-slate-500">Plantilla con soluciones razonadas</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600" />
            </button>

            <button
              onClick={() => setActiveTab('clinical-cases')}
              className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-teal-500 hover:bg-teal-50/50 dark:hover:bg-teal-950/30 transition-all flex items-center justify-between text-left group"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">
                    Casos Prácticos de Urgencias
                  </div>
                  <div className="text-[11px] text-slate-500">SCACEST, CAD y cálculo de dosis</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600" />
            </button>

            <button
              onClick={() => setActiveTab('mnemonics')}
              className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-teal-500 hover:bg-teal-50/50 dark:hover:bg-teal-950/30 transition-all flex items-center justify-between text-left group"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">
                    Tarjetas & Mnemotecnia
                  </div>
                  <div className="text-[11px] text-slate-500">APGAR, Glasgow, Wallace, Antídotos</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600" />
            </button>

            <button
              onClick={() => setActiveTab('opposition-finder')}
              className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-teal-500 hover:bg-teal-50/50 dark:hover:bg-teal-950/30 transition-all flex items-center justify-between text-left group"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">
                    Buscador Oposiciones DOGV
                  </div>
                  <div className="text-[11px] text-slate-500">3.817 plazas en tiempo real</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600" />
            </button>
          </div>

          {/* Recent Test History */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs">
            <h3 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3">
              Últimos Resultados
            </h3>
            <div className="space-y-2.5">
              {stats.recentScores.map((scoreItem, idx) => (
                <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-xs">
                  <div className="max-w-[170px]">
                    <div className="font-semibold text-slate-800 dark:text-slate-200 truncate">{scoreItem.testName}</div>
                    <div className="text-[10px] text-slate-400">{scoreItem.date}</div>
                  </div>
                  <div className={`font-black font-mono px-2 py-1 rounded-md text-xs ${
                    scoreItem.score >= 8 
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                      : scoreItem.score >= 5
                      ? 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300'
                      : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                  }`}>
                    {scoreItem.score.toFixed(1)}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
