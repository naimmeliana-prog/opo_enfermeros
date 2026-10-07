import React, { useState } from 'react';
import { 
  Stethoscope, 
  Activity, 
  Heart, 
  AlertCircle, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  RotateCcw,
  Sparkles,
  Award,
  Check
} from 'lucide-react';
import { CLINICAL_CASES } from '../data/clinicalCases';
import { ClinicalCase } from '../types';
import { useApp } from '../context/AppContext';
import { randomizeClinicalCaseSteps } from '../utils/quizUtils';

export const ClinicalCasesView: React.FC = () => {
  const { solvedCaseIds, markCaseSolved } = useApp();
  const [selectedCase, setSelectedCase] = useState<ClinicalCase>(() => 
    randomizeClinicalCaseSteps(CLINICAL_CASES[0])
  );
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [stepConfirmed, setStepConfirmed] = useState<Record<number, boolean>>({});

  const handleSelectOption = (optIdx: number) => {
    if (stepConfirmed[currentStepIdx]) return;
    setSelectedAnswers(prev => ({ ...prev, [currentStepIdx]: optIdx }));
  };

  const handleConfirmStep = () => {
    setStepConfirmed(prev => ({ ...prev, [currentStepIdx]: true }));
    // If last step, mark case as solved
    if (currentStepIdx === selectedCase.steps.length - 1) {
      markCaseSolved(selectedCase.id);
    }
  };

  const currentStep = selectedCase.steps[currentStepIdx];
  const isConfirmed = stepConfirmed[currentStepIdx];
  const chosenOpt = selectedAnswers[currentStepIdx];

  const handleResetCase = (targetCase = selectedCase) => {
    setSelectedAnswers({});
    setStepConfirmed({});
    setCurrentStepIdx(0);
    setSelectedCase(randomizeClinicalCaseSteps(targetCase));
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Casos Prácticos de Oposiciones Sanitarias ({CLINICAL_CASES.length} Casos Reales)</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
            Simulación de Casos Clínicos y Toma de Decisiones
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Escenarios reales de triaje, administración farmacológica de urgencia y cálculo de dosis aplicados a la práctica asistencial en la Comunitat Valenciana.
          </p>
        </div>

        <div className="text-xs font-semibold bg-teal-50 dark:bg-teal-950/70 border border-teal-200 dark:border-teal-800 px-3 py-2 rounded-xl text-teal-800 dark:text-teal-300 shrink-0">
          Progreso: {solvedCaseIds.length} de {CLINICAL_CASES.length} casos resueltos
        </div>
      </div>

      {/* Case Selector Tabs Strip */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-3 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-2 overflow-x-auto no-scrollbar">
        {CLINICAL_CASES.map((c, i) => {
          const isSelected = selectedCase.id === c.id;
          const isSolved = solvedCaseIds.includes(c.id);
          return (
            <button
              key={c.id}
              onClick={() => {
                handleResetCase(c);
              }}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 shrink-0 whitespace-nowrap ${
                isSelected 
                  ? 'bg-teal-600 text-white shadow-sm' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              <span>Caso #{i + 1}</span>
              {isSolved && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 fill-emerald-500" />}
            </button>
          );
        })}
      </div>

      {/* Case Overview Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-5">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 gap-2">
          <div>
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
              {selectedCase.service}
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
              {selectedCase.title}
            </h3>
          </div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200">
              Triaje: {selectedCase.patientData.triageLevel}
            </span>
            <button
              onClick={() => handleResetCase()}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              title="Reiniciar caso clínico"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Patient Profile & Baseline Vitals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-bold text-slate-700 dark:text-slate-300">
                Anamnesis y Motivo de Consulta
              </span>
              <span>{selectedCase.patientData.gender}, {selectedCase.patientData.age} años</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {selectedCase.patientData.clinicalDescription}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
            <span className="font-bold text-slate-700 dark:text-slate-300 block">
              Constantes a la Llegada
            </span>
            <div className="grid grid-cols-2 gap-2 text-slate-600 dark:text-slate-300">
              <div>TA: <strong className="font-mono text-slate-900 dark:text-white">{selectedCase.patientData.vitals.bp}</strong></div>
              <div>FC: <strong className="font-mono text-slate-900 dark:text-white">{selectedCase.patientData.vitals.hr} lpm</strong></div>
              <div>SatO2: <strong className="font-mono text-slate-900 dark:text-white">{selectedCase.patientData.vitals.spo2}%</strong></div>
              <div>FR: <strong className="font-mono text-slate-900 dark:text-white">{selectedCase.patientData.vitals.rr} rpm</strong></div>
              <div>Temp: <strong className="font-mono text-slate-900 dark:text-white">{selectedCase.patientData.vitals.temp} ºC</strong></div>
              {selectedCase.patientData.vitals.glycemia && (
                <div>Gluc: <strong className="font-mono text-slate-900 dark:text-white">{selectedCase.patientData.vitals.glycemia} mg/dl</strong></div>
              )}
            </div>
          </div>
        </div>

        {/* Steps Stepper */}
        <div className="flex items-center space-x-2 border-t border-slate-100 dark:border-slate-800 pt-4 overflow-x-auto">
          {selectedCase.steps.map((st, sIdx) => {
            const isStepActive = sIdx === currentStepIdx;
            const isStepSolved = stepConfirmed[sIdx];
            return (
              <button
                key={sIdx}
                onClick={() => setCurrentStepIdx(sIdx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  isStepActive 
                    ? 'bg-slate-900 text-white dark:bg-teal-600' 
                    : isStepSolved
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                }`}
              >
                <span>Fase #{st.stepNumber}</span>
                {isStepSolved && <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />}
              </button>
            );
          })}
        </div>

        {/* Current Active Step Interactive Area */}
        {currentStep && (
          <div className="space-y-4 pt-2">
            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed">
              {currentStep.question}
            </h4>

            {/* Options */}
            <div className="space-y-2.5">
              {currentStep.options.map((opt, oIdx) => {
                const isSelected = chosenOpt === oIdx;
                const isCorrect = oIdx === currentStep.correctIndex;

                let optionStyle = 'border-slate-200 dark:border-slate-700 hover:border-teal-500 bg-white dark:bg-slate-800';

                if (isConfirmed) {
                  if (isCorrect) {
                    optionStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-950 dark:text-emerald-100 font-bold';
                  } else if (isSelected) {
                    optionStyle = 'border-red-500 bg-red-50 dark:bg-red-950/50 text-red-950 dark:text-red-100 line-through';
                  } else {
                    optionStyle = 'border-slate-200 dark:border-slate-800 opacity-60';
                  }
                } else if (isSelected) {
                  optionStyle = 'border-teal-600 bg-teal-50 dark:bg-teal-950 text-teal-950 dark:text-teal-100 font-semibold';
                }

                return (
                  <div
                    key={oIdx}
                    onClick={() => handleSelectOption(oIdx)}
                    className={`p-3.5 rounded-xl border text-xs sm:text-sm cursor-pointer transition-all flex items-start space-x-3 ${optionStyle}`}
                  >
                    <span className={`w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-teal-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                    }`}>
                      {String.fromCharCode(65 + oIdx)}
                    </span>
                    <span className="flex-1 mt-0.5 leading-relaxed">{opt}</span>
                    {isConfirmed && isCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    )}
                    {isConfirmed && isSelected && !isCorrect && (
                      <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Action Button & Justification */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                {!isConfirmed ? (
                  <button
                    disabled={chosenOpt === undefined}
                    onClick={handleConfirmStep}
                    className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 disabled:opacity-40 text-white font-bold text-xs shadow-xs transition-colors"
                  >
                    Confirmar Decisión Clínica
                  </button>
                ) : (
                  <div className="flex items-center space-x-2">
                    {currentStepIdx < selectedCase.steps.length - 1 ? (
                      <button
                        onClick={() => setCurrentStepIdx(prev => prev + 1)}
                        className="px-5 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-teal-600 hover:bg-slate-800 font-bold text-xs flex items-center space-x-1.5"
                      >
                        <span>Siguiente Fase del Caso</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                        <Award className="w-4 h-4" />
                        <span>¡Caso Resuelto con Éxito!</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Justification Box */}
            {isConfirmed && (
              <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs space-y-1.5 animate-in fade-in">
                <div className="font-bold text-teal-800 dark:text-teal-300 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-teal-600" />
                  <span>Razonamiento Clínico Oficial:</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {currentStep.justification}
                </p>
              </div>
            )}
          </div>
        )}

      </div>

    </div>
  );
};
