import React, { useState, useEffect } from 'react';
import { 
  X, 
  Search, 
  Printer, 
  Sparkles, 
  Lightbulb, 
  Scale, 
  FileText,
  ChevronRight,
  BookOpen,
  Building2,
  Copy,
  Check
} from 'lucide-react';
import { OFFICIAL_LEGAL_DOCS, OfficialLawDoc } from '../data/legalTexts';

interface LawReaderModalProps {
  lawId: string | null;
  onClose: () => void;
  onSelectLaw?: (id: string) => void;
}

export const LawReaderModal: React.FC<LawReaderModalProps> = ({ 
  lawId, 
  onClose,
  onSelectLaw 
}) => {
  const [currentLawId, setCurrentLawId] = useState<string | null>(lawId);
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    setCurrentLawId(lawId);
    setSearchTerm('');
  }, [lawId]);

  if (!currentLawId) return null;

  const law = OFFICIAL_LEGAL_DOCS[currentLawId];

  const handleCopyArticle = (articleNumber: string, content: string) => {
    navigator.clipboard?.writeText(`${articleNumber}: ${content}`);
    setCopiedId(articleNumber);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSwitchLaw = (newId: string) => {
    setCurrentLawId(newId);
    setSearchTerm('');
    if (onSelectLaw) {
      onSelectLaw(newId);
    }
  };

  if (!law) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-md w-full border border-slate-200 dark:border-slate-800 text-center space-y-4 shadow-2xl">
          <Scale className="w-10 h-10 text-teal-600 mx-auto" />
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Normativa Oficial</h3>
          <p className="text-xs text-slate-500">Seleccione una de las leyes oficiales completas del temario valenciano:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {Object.values(OFFICIAL_LEGAL_DOCS).map((item) => (
              <button
                key={item.id}
                onClick={() => handleSwitchLaw(item.id)}
                className="px-3 py-1.5 rounded-xl bg-teal-50 dark:bg-teal-950/70 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-bold hover:bg-teal-100"
              >
                {item.shortTitle}
              </button>
            ))}
          </div>
          <button onClick={onClose} className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold">Cerrar</button>
        </div>
      </div>
    );
  }

  // Filter articles based on search
  const filteredChapters = law.chapters.map(chapter => ({
    ...chapter,
    articles: chapter.articles.filter(art => 
      art.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (art.examTip && art.examTip.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })).filter(c => c.articles.length > 0);

  const totalFilteredArticles = filteredChapters.reduce((acc, c) => acc + c.articles.length, 0);

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
      <div className="bg-white dark:bg-slate-900 w-full max-w-5xl h-[92vh] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Top Law Quick Bar (Tabs of All Available Laws) */}
        <div className="bg-slate-900 text-white px-4 py-2.5 border-b border-slate-800 flex items-center justify-between gap-3 overflow-x-auto text-xs">
          <div className="flex items-center space-x-1.5 shrink-0 text-slate-400 font-bold">
            <BookOpen className="w-3.5 h-3.5 text-teal-400" />
            <span className="text-[11px] uppercase tracking-wider text-teal-300">Colección Legislativa CV:</span>
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 no-scrollbar">
            {Object.values(OFFICIAL_LEGAL_DOCS).map((item) => {
              const isActive = item.id === currentLawId;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSwitchLaw(item.id)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-teal-500 text-slate-950 shadow-xs ring-1 ring-white/20'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {item.shortTitle}
                </button>
              );
            })}
          </div>
        </div>

        {/* Modal Main Header */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-teal-800 via-teal-900 to-slate-900 text-white flex items-start justify-between gap-4 border-b border-teal-700/50">
          <div className="space-y-1.5 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-teal-200 border border-white/20">
                {law.scope}
              </span>
              <span className="text-xs font-mono text-teal-300">
                {law.bulletinReference}
              </span>
              <span className="text-xs text-slate-400">
                • Publicada: {law.enactedDate}
              </span>
            </div>
            <h2 className="text-base sm:text-xl font-black tracking-tight leading-snug">
              {law.fullTitle}
            </h2>
            <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
              {law.description}
            </p>
          </div>

          <div className="flex items-center space-x-1 shrink-0">
            <button
              onClick={() => window.print()}
              className="p-2 rounded-xl text-slate-300 hover:bg-white/10 transition-colors"
              title="Imprimir texto oficial"
            >
              <Printer className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-300 hover:bg-white/10 transition-colors"
              title="Cerrar visor legal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Highlights of Key Exam Articles & Search */}
        <div className="p-3.5 sm:p-4 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-2 text-xs text-teal-800 dark:text-teal-300 font-medium overflow-x-auto py-1">
            <Sparkles className="w-4 h-4 shrink-0 text-amber-500" />
            <span className="font-bold shrink-0">Artículos Clave OPE:</span>
            <div className="flex items-center gap-1.5 shrink-0">
              {law.keyExamArticles.map((art, aIdx) => (
                <button 
                  key={aIdx} 
                  onClick={() => setSearchTerm(art.split(' ')[1] || art)}
                  className="px-2.5 py-0.5 rounded-md bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-[11px] font-semibold cursor-pointer hover:bg-teal-200 transition-colors border border-teal-200 dark:border-teal-800"
                >
                  {art}
                </button>
              ))}
            </div>
          </div>

          <div className="relative w-full sm:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Buscar artículo, término o tip..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-8 py-1.5 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-2.5 top-2.5 text-xs text-slate-400 hover:text-slate-600"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Legal Articles Content Feed */}
        <div className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm">
          {filteredChapters.length === 0 ? (
            <div className="text-center py-12 text-slate-400 space-y-2">
              <Scale className="w-10 h-10 mx-auto text-slate-300 dark:text-slate-600" />
              <p className="font-bold text-sm text-slate-700 dark:text-slate-300">
                No se encontraron artículos que coincidan con "{searchTerm}"
              </p>
              <p className="text-xs text-slate-500">
                Prueba buscando por número de artículo (ej. "Artículo 3", "Art. 18") o por concepto.
              </p>
              <button 
                onClick={() => setSearchTerm('')} 
                className="mt-3 px-4 py-1.5 rounded-xl bg-teal-600 text-white text-xs font-bold shadow-xs hover:bg-teal-700"
              >
                Ver toda la ley completa
              </button>
            </div>
          ) : (
            filteredChapters.map((chapter, cIdx) => (
              <div key={cIdx} className="space-y-4">
                <div className="sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xs py-2 border-b border-slate-200 dark:border-slate-800 font-black text-teal-800 dark:text-teal-400 uppercase tracking-wider text-xs flex items-center justify-between">
                  <span>{chapter.title}</span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {chapter.articles.length} {chapter.articles.length === 1 ? 'artículo' : 'artículos'}
                  </span>
                </div>

                <div className="space-y-4">
                  {chapter.articles.map((art, aIdx) => (
                    <div 
                      key={aIdx}
                      className="p-4 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-3 relative group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="font-mono font-black text-teal-700 dark:text-teal-300 text-xs sm:text-sm">
                            {art.number} — {art.title}
                          </span>
                        </div>

                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleCopyArticle(art.number, art.content)}
                            className="p-1 rounded-md text-slate-400 hover:text-teal-600 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                            title="Copiar contenido"
                          >
                            {copiedId === art.number ? (
                              <Check className="w-3.5 h-3.5 text-teal-500" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                          <span className="text-[10px] uppercase font-bold text-teal-600/70 dark:text-teal-400/70 bg-teal-50 dark:bg-teal-950/80 px-2 py-0.5 rounded-md border border-teal-200 dark:border-teal-800">
                            Texto Oficial Íntegro
                          </span>
                        </div>
                      </div>

                      <p className="text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line font-serif sm:text-sm text-xs">
                        {art.content}
                      </p>

                      {art.examTip && (
                        <div className="p-3 sm:p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/80 text-xs text-amber-950 dark:text-amber-200 flex items-start space-x-2.5">
                          <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <div className="leading-relaxed font-sans font-medium">
                            {art.examTip}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 sm:p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center space-x-2 text-[11px]">
            <Building2 className="w-3.5 h-3.5 text-teal-600" />
            <span>Fuente: Diari Oficial de la Generalitat Valenciana (DOGV) & Boletín Oficial del Estado (BOE).</span>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
            <span className="text-[11px] font-semibold text-slate-400">
              Mostrando {totalFilteredArticles} artículos
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-slate-900 text-white dark:bg-teal-600 hover:bg-slate-800 dark:hover:bg-teal-700 font-bold text-xs shadow-xs"
            >
              Cerrar Visor
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
