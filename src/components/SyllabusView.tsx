import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  CheckCircle, 
  ChevronRight, 
  FileText, 
  Sparkles, 
  Search, 
  Printer, 
  Share2,
  BookmarkCheck,
  Building2,
  Scale,
  ExternalLink,
  BookMarked
} from 'lucide-react';
import { SYLLABUS_TOPICS } from '../data/syllabus';
import { SyllabusTopic } from '../types';
import { useApp } from '../context/AppContext';
import { LawReaderModal } from './LawReaderModal';
import { OFFICIAL_LEGAL_DOCS } from '../data/legalTexts';

export const SyllabusView: React.FC = () => {
  const { activeOpposition } = useApp();

  // Filter topics matching active opposition
  const topics = SYLLABUS_TOPICS.filter(t => 
    t.oppositionIds.includes(activeOpposition.id)
  );

  const [selectedTopic, setSelectedTopic] = useState<SyllabusTopic>(topics[0] || SYLLABUS_TOPICS[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLawId, setSelectedLawId] = useState<string | null>(null);

  const filteredTopics = topics.filter(t => 
    t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getLawIdFromText = (text: string): string => {
    const lower = text.toLowerCase();
    if (lower.includes('10/2014') || lower.includes('salud de la comunitat')) return 'ley-10-2014';
    if (lower.includes('14/1986') || lower.includes('general de sanidad')) return 'ley-14-1986';
    if (lower.includes('41/2002') || lower.includes('autonomía del paciente') || lower.includes('autonomia')) return 'ley-41-2002';
    if (lower.includes('55/2003') || lower.includes('estatuto marco')) return 'ley-55-2003';
    if (lower.includes('1/2006') || lower.includes('estatut') || lower.includes('estatuto de autonomía')) return 'estatut-cv-2006';
    if (lower.includes('constitución') || lower.includes('constitucion') || lower.includes('1978')) return 'ce-1978';
    if (lower.includes('1/2003') || lower.includes('derechos e información')) return 'ley-1-2003-cv';
    if (lower.includes('31/1995') || lower.includes('riesgos laborales')) return 'ley-31-1995';
    if (lower.includes('74/2007') || lower.includes('estructura') && lower.includes('sanitaria')) return 'decreto-74-2007';
    if (lower.includes('8/2008') || lower.includes('niños') || lower.includes('adolescentes')) return 'ley-8-2008-cv';
    if (lower.includes('3/2018') || lower.includes('protección de datos') || lower.includes('lopdgdd')) return 'lo-3-2018';
    if (lower.includes('5/1983') || lower.includes('gobierno valenciano') || lower.includes('consell')) return 'ley-5-1983-cv';
    return 'ley-10-2014';
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Top Banner with Active Opposition info */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
            <Building2 className="w-3.5 h-3.5" />
            <span>Temario Adaptado: {activeOpposition.shortName}</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
            Temario Oficial Actualizado de Enfermería CV
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Normativa autonómica valenciana, gestión asistencial de la Conselleria de Sanitat y temario de cuidados.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 no-print self-start sm:self-auto">
          <button 
            onClick={() => setSelectedLawId('ley-10-2014')}
            className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold flex items-center space-x-2 shadow-xs transition-colors"
          >
            <Scale className="w-4 h-4" />
            <span>Biblioteca de Leyes Íntegras</span>
          </button>

          <button 
            onClick={() => window.print()}
            className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center space-x-2 transition-colors"
          >
            <Printer className="w-4 h-4 text-slate-500" />
            <span>Imprimir</span>
          </button>
        </div>
      </div>

      {/* Main Layout: Topic List on Left, Topic Reader on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Sidebar List of Topics (4 Cols) */}
        <div className="lg:col-span-4 space-y-3">
          
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Buscar tema, ley, artículo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="space-y-2 max-h-[700px] overflow-y-auto pr-1">
            {filteredTopics.map((topic) => {
              const isSelected = selectedTopic?.id === topic.id;
              return (
                <div
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    isSelected 
                      ? 'bg-teal-50 dark:bg-teal-950/70 border-teal-500 text-teal-950 dark:text-teal-100 shadow-xs' 
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] mb-1 font-semibold text-slate-500 dark:text-slate-400">
                    <span className="font-mono text-teal-600 dark:text-teal-400 font-bold">Tema {topic.number}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {topic.readingTimeMinutes} min
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold line-clamp-2">
                    {topic.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
                    {topic.summary}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Right Reader View (8 Cols) */}
        <div className="lg:col-span-8">
          {selectedTopic && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
              
              {/* Topic Header */}
              <div className="border-b border-slate-100 dark:border-slate-800 pb-5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-lg text-xs font-bold bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                    Tema {selectedTopic.number} Oficial • OPE Sanitat CV
                  </span>
                  <div className="flex items-center space-x-2 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{selectedTopic.readingTimeMinutes} minutos de lectura</span>
                  </div>
                </div>

                <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
                  {selectedTopic.title}
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {selectedTopic.summary}
                </p>
              </div>

              {/* Official Norms Cited - Interactive Full Law Access */}
              {selectedTopic.officialNorms && selectedTopic.officialNorms.length > 0 && (
                <div className="p-4 sm:p-5 rounded-2xl bg-teal-50/70 dark:bg-teal-950/40 border-2 border-teal-300 dark:border-teal-800/80 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="text-xs font-black uppercase tracking-wider text-teal-900 dark:text-teal-200 flex items-center gap-2">
                      <Scale className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                      <span>Normativa Oficial de Referencia (Haz clic en cualquier ley para ver su contenido íntegro)</span>
                    </div>
                    <span className="text-[11px] font-bold text-teal-700 dark:text-teal-300">
                      Artículos, Capítulos y Tips OPE
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5">
                    {selectedTopic.officialNorms.map((norm, nIdx) => {
                      const lawId = getLawIdFromText(norm);
                      const matchingLaw = OFFICIAL_LEGAL_DOCS[lawId];
                      return (
                        <div
                          key={nIdx}
                          onClick={() => setSelectedLawId(lawId)}
                          className="p-3 sm:p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-teal-300 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-400 hover:shadow-md cursor-pointer transition-all flex items-center justify-between group"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                              <FileText className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                                {norm}
                              </div>
                              {matchingLaw && (
                                <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-0.5">
                                  <span className="font-mono text-teal-600 dark:text-teal-400 font-semibold">{matchingLaw.bulletinReference}</span>
                                  <span>•</span>
                                  <span>{matchingLaw.chapters.length} títulos disponibles</span>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center space-x-1.5 text-xs text-teal-600 dark:text-teal-400 font-black shrink-0 bg-teal-50 dark:bg-teal-950 px-3 py-1.5 rounded-lg border border-teal-200 dark:border-teal-800 group-hover:bg-teal-600 group-hover:text-white transition-all">
                            <span>Ver Ley Completa</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Key Takeaways Box (Preguntas clave de examen) */}
              <div className="p-4 sm:p-5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/80 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Puntos Clave Frecuentes en el Examen Oficial</span>
                </div>
                <div className="space-y-1.5 text-xs text-amber-950 dark:text-amber-200 font-medium">
                  {selectedTopic.keyPoints.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold shrink-0">✓</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Structured Sections */}
              <div className="space-y-6 pt-2">
                {selectedTopic.sections.map((sec, sIdx) => (
                  <div key={sIdx} className="space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-1">
                      {sec.title}
                    </h3>
                    <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                      {sec.content}
                    </div>

                    {sec.highlightBox && (
                      <div className="p-3.5 rounded-xl bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 text-xs font-semibold text-teal-900 dark:text-teal-200">
                        💡 {sec.highlightBox}
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          )}
        </div>

      </div>

      {/* Full Law Reader Modal */}
      <LawReaderModal
        lawId={selectedLawId}
        onClose={() => setSelectedLawId(null)}
        onSelectLaw={(newId) => setSelectedLawId(newId)}
      />

    </div>
  );
};
