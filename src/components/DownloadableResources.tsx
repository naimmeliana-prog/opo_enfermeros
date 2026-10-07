import React, { useState } from 'react';
import { 
  DownloadCloud, 
  FileText, 
  Printer, 
  Check, 
  ExternalLink, 
  Eye, 
  Layers, 
  Sparkles, 
  BookDown, 
  X,
  Search,
  Filter
} from 'lucide-react';
import { DOWNLOADABLE_RESOURCES } from '../data/resources';
import { DownloadableResource } from '../types';
import { useApp } from '../context/AppContext';

export const DownloadableResources: React.FC = () => {
  const { addNotification } = useApp();
  const [previewResource, setPreviewResource] = useState<DownloadableResource | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleDownload = (res: DownloadableResource) => {
    // Generate blob and trigger browser download
    const blob = new Blob([res.contentHtmlOrMarkdown], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${res.title.replace(/\s+/g, '_')}_OpoSanitatCV.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    addNotification('Recurso Descargado', `"${res.title}" se ha descargado correctamente.`, 'success');
  };

  const categories = ['all', 'Tablas Clínicas', 'Procedimientos', 'Protocolos', 'Legislación', 'Resúmenes', 'Plantillas'];

  const filteredResources = DOWNLOADABLE_RESOURCES.filter(res => {
    if (selectedCategory !== 'all' && res.category !== selectedCategory) {
      return false;
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        res.title.toLowerCase().includes(q) ||
        res.description.toLowerCase().includes(q) ||
        res.category.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Top Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
            <BookDown className="w-3.5 h-3.5" />
            <span>Biblioteca de Materiales Imprimibles y Chuletas ({DOWNLOADABLE_RESOURCES.length} Recursos)</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
            Recursos y Chuletas Descargables para Opositores
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Esquemas en alta resolución, tablas farmacológicas, algoritmos SVA, modelos de impugnación oficial y resúmenes ejecutivos de la normativa valenciana.
          </p>
        </div>

        <div className="text-xs font-mono bg-slate-50 dark:bg-slate-800 px-3 py-2 rounded-xl text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shrink-0">
          Formato optimizado para impresión (A4)
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Buscar recurso, tabla, guía..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto no-scrollbar text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              {cat === 'all' ? 'Todos' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredResources.map(resource => (
          <div
            key={resource.id}
            className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-teal-500 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                  {resource.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {resource.pages} páginas • {resource.downloadCount} descargas
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {resource.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {resource.description}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center space-x-2">
              <button
                onClick={() => setPreviewResource(resource)}
                className="flex-1 py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-center space-x-1.5 transition-colors"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Vista Previa</span>
              </button>
              <button
                onClick={() => handleDownload(resource)}
                className="flex-1 py-2 px-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shadow-xs flex items-center justify-center space-x-1.5 transition-colors"
              >
                <DownloadCloud className="w-3.5 h-3.5" />
                <span>Descargar</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      {previewResource && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[85vh] flex flex-col overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                  {previewResource.category} • {previewResource.format}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                  {previewResource.title}
                </h3>
              </div>
              <button
                onClick={() => setPreviewResource(null)}
                className="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 p-6 overflow-y-auto font-mono text-xs text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed bg-slate-50/50 dark:bg-slate-950/50">
              {previewResource.contentHtmlOrMarkdown}
            </div>

            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 flex items-center space-x-1.5"
              >
                <Printer className="w-4 h-4" />
                <span>Imprimir Hoja</span>
              </button>

              <button
                onClick={() => {
                  handleDownload(previewResource);
                  setPreviewResource(null);
                }}
                className="px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shadow-xs flex items-center space-x-1.5"
              >
                <DownloadCloud className="w-4 h-4" />
                <span>Descargar Archivo</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
