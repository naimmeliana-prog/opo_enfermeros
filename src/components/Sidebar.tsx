import React from 'react';
import { 
  LayoutDashboard, 
  Layers, 
  FileText, 
  AlertTriangle, 
  BookOpen, 
  Search, 
  Stethoscope, 
  BrainCircuit, 
  DownloadCloud, 
  MessagesSquare, 
  MessageCircle, 
  CalendarDays,
  Sparkles,
  Clock,
  Globe
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  badge?: string;
  badgeColor?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Panel de Control', icon: LayoutDashboard },
  { id: 'dynamic-simulator', label: 'Simulador Dinámico', icon: Clock, badge: 'Tiempo Real', badgeColor: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300' },
  { id: 'test-generator', label: 'Generador de Tests', icon: Layers, badge: 'Por Bloques', badgeColor: 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300' },
  { id: 'official-exams', label: 'Exámenes Oficiales', icon: FileText, badge: 'GVA Oficial', badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300' },
  { id: 'trap-questions', label: 'Preguntas Trampa', icon: AlertTriangle, badge: 'Alta Frecuencia', badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' },
  { id: 'syllabus', label: 'Temario Completo CV', icon: BookOpen },
  { id: 'opposition-finder', label: 'Buscador en Tiempo Real', icon: Search, badge: 'DOGV Live', badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' },
  { id: 'clinical-cases', label: 'Casos Prácticos', icon: Stethoscope },
  { id: 'mnemonics', label: 'Preguntas & Mnemotecnia', icon: BrainCircuit },
  { id: 'downloads', label: 'Recursos Descargables', icon: DownloadCloud },
  { id: 'forum', label: 'Foros de Dudas', icon: MessagesSquare },
  { id: 'group-chat', label: 'Chat Grupal en Vivo', icon: MessageCircle, badge: 'En Directo', badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300' },
  { id: 'study-calendar', label: 'Calendario y Sesiones', icon: CalendarDays },
];

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  onOpenDeploymentGuide?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  activeTab, 
  setActiveTab, 
  mobileOpen, 
  setMobileOpen,
  onOpenDeploymentGuide
}) => {
  const { activeOpposition } = useApp();

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div 
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-30 lg:hidden"
        />
      )}

      {/* Navigation Container */}
      <aside className={`fixed top-16 bottom-0 left-0 z-30 w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-transform duration-200 ease-in-out lg:translate-x-0 ${
        mobileOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="h-full flex flex-col justify-between p-3 overflow-y-auto">
          
          <div className="space-y-1">
            <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Módulos de Preparación
            </div>

            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive 
                      ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center space-x-3 truncate">
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`} />
                    <span className="truncate">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold shrink-0 ml-1.5 ${
                      isActive ? 'bg-white/20 text-white' : item.badgeColor
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick info card for target opposition at bottom of sidebar */}
          <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-[10px] uppercase font-bold">
              <span>Meta Actual</span>
              <span className="text-teal-600 dark:text-teal-400 font-bold">{activeOpposition.shortName}</span>
            </div>
            <p className="text-[11px] font-semibold text-slate-800 dark:text-slate-200 mt-1 line-clamp-1">
              {activeOpposition.category}
            </p>
            <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
              <span>Plazas:</span>
              <span className="font-mono font-bold text-slate-900 dark:text-white">{activeOpposition.places}</span>
            </div>
            <div className="mt-1 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
              <span>Fórmula:</span>
              <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400">-0.33</span>
            </div>
          </div>

          {/* Deployment Guide Button */}
          {onOpenDeploymentGuide && (
            <button
              onClick={onOpenDeploymentGuide}
              className="mt-3 w-full p-2.5 rounded-xl border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-950/60 hover:bg-teal-100 dark:hover:bg-teal-900/60 text-teal-800 dark:text-teal-300 text-xs font-bold flex items-center justify-center space-x-2 transition-all shadow-2xs"
            >
              <Globe className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>Desplegar en Render / Vercel</span>
            </button>
          )}

        </div>
      </aside>
    </>
  );
};
