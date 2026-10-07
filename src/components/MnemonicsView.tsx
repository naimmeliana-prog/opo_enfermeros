import React, { useState } from 'react';
import { 
  BrainCircuit, 
  Sparkles, 
  Bookmark, 
  Search, 
  Check, 
  Lightbulb, 
  Flame,
  ArrowRight
} from 'lucide-react';
import { MNEMONICS_DATA } from '../data/mnemonics';
import { MnemonicCard } from '../types';
import { useApp } from '../context/AppContext';

export const MnemonicsView: React.FC = () => {
  const { savedMnemonics, toggleSaveMnemonic } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', 'Escalas', 'Farmacología', 'Urgencias', 'Cuidados'];

  const filteredCards = MNEMONICS_DATA.filter(card => {
    const matchesCat = selectedCategory === 'all' || card.category === selectedCategory;
    const matchesSearch = 
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.acronym.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.explanation.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Top Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300">
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>Memoria Rápida para el Examen Oficial</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
            Mnemotecnias & Reglas de Oro en Enfermería
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Acrónimos clínicos, trucos de escalas y asociaciones nemotécnicas de máxima frecuencia en las pruebas de Sanitat GVA.
          </p>
        </div>

        <div className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-purple-800 dark:text-purple-300">
          ⭐ {savedMnemonics.length} tarjetas guardadas
        </div>
      </div>

      {/* Search and Category Filter */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Buscar por regla, Glasgow, APGAR..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat 
                  ? 'bg-purple-600 text-white shadow-xs' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              {cat === 'all' ? 'Todas' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Mnemonics Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredCards.map(card => {
          const isSaved = savedMnemonics.includes(card.id);

          return (
            <div
              key={card.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-purple-400 dark:hover:border-purple-600 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                
                {/* Header of Card */}
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                      {card.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white mt-1.5">
                      {card.title}
                    </h3>
                  </div>

                  <div className="flex items-center space-x-1.5">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                      OPE: {card.examFrequency}
                    </span>
                    <button
                      onClick={() => toggleSaveMnemonic(card.id)}
                      className={`p-1.5 rounded-lg transition-colors ${
                        isSaved ? 'text-purple-600' : 'text-slate-400 hover:text-slate-600'
                      }`}
                      title={isSaved ? 'Guardada' : 'Guardar en mi lista'}
                    >
                      <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-purple-600' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Big Acronym Pill */}
                <div className="p-3 rounded-xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900 flex items-center justify-between">
                  <span className="font-mono text-lg sm:text-xl font-black text-purple-800 dark:text-purple-300 tracking-wider">
                    {card.acronym}
                  </span>
                  <span className="text-xs text-purple-700 dark:text-purple-300 font-medium">
                    Regla Mnemotécnica
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {card.explanation}
                </p>

                {/* Letter by Letter Breakdown */}
                <div className="space-y-1.5 pt-1">
                  {card.breakdown.map((item, bIdx) => (
                    <div 
                      key={bIdx}
                      className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-start space-x-2 text-xs"
                    >
                      <span className="font-mono font-black text-purple-700 dark:text-purple-400 w-10 shrink-0">
                        {item.letter}
                      </span>
                      <div className="flex-1">
                        <span className="font-bold text-slate-800 dark:text-slate-200">{item.meaning}</span>
                        {item.detail && (
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{item.detail}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Clinical Exam Tip */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs flex items-start space-x-2 text-amber-900 dark:text-amber-200 bg-amber-50/50 dark:bg-amber-950/20 p-2.5 rounded-xl border border-amber-200 dark:border-amber-900">
                <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span className="font-medium text-[11px] leading-relaxed">
                  <strong>Tip de Tribunal:</strong> {card.clinicalTip}
                </span>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
