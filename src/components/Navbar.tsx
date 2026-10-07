import React, { useState } from 'react';
import { 
  Building2, 
  Flame, 
  Moon, 
  Sun, 
  Wifi, 
  WifiOff, 
  Bell, 
  User, 
  CheckCircle, 
  ChevronDown,
  LogOut,
  Sparkles,
  ShieldAlert,
  Globe
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { OPPOSITIONS } from '../data/oppositions';
import { OppositionId } from '../types';

interface NavbarProps {
  onOpenAuthModal: () => void;
  onOpenDeploymentGuide?: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenAuthModal, 
  onOpenDeploymentGuide, 
  activeTab, 
  setActiveTab 
}) => {
  const { 
    isDarkMode, 
    toggleDarkMode, 
    isOnline, 
    activeOpposition, 
    setActiveOppositionId, 
    user, 
    logoutUser,
    stats,
    notifications,
    markNotificationRead,
    requestPushNotifications,
    pushPermission
  } = useApp();

  const [showOppDropdown, setShowOppDropdown] = useState(false);
  const [showNotifDropdown, setShowNotifDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Platform Title */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20">
              <span className="text-xl">🩺</span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">
                  OpoSanitat <span className="text-teal-600 dark:text-teal-400 font-extrabold">CV</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                  Enfermería Comunitat Valenciana
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
                Preparación integral para oposiciones sanitarias
              </p>
            </div>
          </div>

          {/* Active Opposition Selector Dropdown (Crucial Requirement: Content adapts) */}
          <div className="relative">
            <button
              onClick={() => setShowOppDropdown(!showOppDropdown)}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-200 text-xs sm:text-sm font-medium hover:bg-teal-100 dark:hover:bg-teal-900 transition-colors"
              title="Cambiar oposición objetivo"
            >
              <Building2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
              <div className="text-left max-w-[130px] sm:max-w-[210px] truncate">
                <span className="block text-[10px] text-teal-600 dark:text-teal-400 font-semibold uppercase tracking-wider">Oposición activa:</span>
                <span className="font-bold truncate block">{activeOpposition.shortName}</span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            </button>

            {showOppDropdown && (
              <div className="absolute left-0 sm:right-0 sm:left-auto mt-2 w-72 sm:w-80 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 p-2 z-50">
                <div className="p-2 border-b border-slate-100 dark:border-slate-800 mb-1">
                  <div className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">Seleccionar Oposición</div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Todo el temario, tests y avisos se adaptan a tu elección:</p>
                </div>
                <div className="space-y-1">
                  {OPPOSITIONS.map(opp => {
                    const isSelected = opp.id === activeOpposition.id;
                    return (
                      <button
                        key={opp.id}
                        onClick={() => {
                          setActiveOppositionId(opp.id);
                          setShowOppDropdown(false);
                        }}
                        className={`w-full text-left p-2.5 rounded-lg text-xs transition-colors flex items-start justify-between ${
                          isSelected 
                            ? 'bg-teal-50 dark:bg-teal-950/80 text-teal-900 dark:text-teal-200 font-bold border border-teal-200 dark:border-teal-800'
                            : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <div>
                          <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                            {opp.shortName}
                            {isSelected && <span className="w-2 h-2 rounded-full bg-teal-500 inline-block" />}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{opp.places} Plazas • {opp.status}</div>
                        </div>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono">
                          {opp.examQuestionsCount} preg.
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Action Icons: Streak, Offline status, Theme, Notifications, User */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Streak Counter */}
            <div 
              className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/80 text-xs font-semibold"
              title={`${stats.streakDays} días consecutivos de estudio`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500 animate-pulse" />
              <span>{stats.streakDays}d racha</span>
            </div>

            {/* Offline/Online Indicator */}
            <div 
              className={`p-1.5 rounded-lg text-xs flex items-center ${
                isOnline 
                  ? 'text-emerald-600 dark:text-emerald-400' 
                  : 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900'
              }`}
              title={isOnline ? 'Online - Datos sincronizados' : 'Modo Offline - Datos guardados en local'}
            >
              {isOnline ? <Wifi className="w-4 h-4" /> : <WifiOff className="w-4 h-4 animate-bounce" />}
              {!isOnline && <span className="text-[11px] font-bold ml-1 hidden sm:inline">Offline</span>}
            </div>

            {/* Deployment Guide Trigger */}
            {onOpenDeploymentGuide && (
              <button
                onClick={onOpenDeploymentGuide}
                className="hidden md:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-950/70 text-teal-800 dark:text-teal-300 text-xs font-bold hover:bg-teal-100 transition-colors shadow-2xs"
                title="Cómo desplegar en Render, Vercel o Netlify"
              >
                <Globe className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                <span>Desplegar Web</span>
              </button>
            )}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              aria-label="Alternar tema de color"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* Notifications Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowNotifDropdown(!showNotifDropdown)}
                className="relative p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Notificaciones y avisos DOGV"
              >
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-slate-900" />
                )}
              </button>

              {showNotifDropdown && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 p-3 z-50">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800 mb-2">
                    <span className="font-bold text-xs text-slate-800 dark:text-slate-200">Avisos y Recordatorios</span>
                    {pushPermission !== 'granted' && (
                      <button 
                        onClick={() => requestPushNotifications()}
                        className="text-[11px] text-teal-600 dark:text-teal-400 hover:underline font-semibold"
                      >
                        Activar Push
                      </button>
                    )}
                  </div>
                  <div className="max-h-64 overflow-y-auto space-y-2">
                    {notifications.length === 0 ? (
                      <p className="text-xs text-slate-500 py-3 text-center">No hay notificaciones pendientes</p>
                    ) : (
                      notifications.map(notif => (
                        <div
                          key={notif.id}
                          onClick={() => markNotificationRead(notif.id)}
                          className={`p-2.5 rounded-lg text-xs cursor-pointer transition-colors ${
                            notif.read 
                              ? 'bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400' 
                              : 'bg-teal-50 dark:bg-teal-950/50 text-slate-900 dark:text-slate-100 font-medium border-l-2 border-teal-500'
                          }`}
                        >
                          <div className="flex justify-between items-baseline">
                            <span className="font-semibold text-teal-800 dark:text-teal-300">{notif.title}</span>
                            <span className="text-[10px] text-slate-400">{notif.time}</span>
                          </div>
                          <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">{notif.message}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* User Profile / Auth Button (Username only, NO email required) */}
            <div className="relative">
              {user ? (
                <button
                  onClick={() => setShowUserDropdown(!showUserDropdown)}
                  className="flex items-center space-x-2 p-1.5 pl-2 pr-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors"
                >
                  <span className="text-base">{user.avatar}</span>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 max-w-[90px] truncate hidden sm:inline">
                    @{user.username}
                  </span>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </button>
              ) : (
                <button
                  onClick={onOpenAuthModal}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-teal-600 text-white hover:bg-teal-700 shadow-sm transition-colors"
                >
                  Entrar / Registro
                </button>
              )}

              {showUserDropdown && user && (
                <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 p-3 z-50">
                  <div className="flex items-center space-x-2.5 pb-2.5 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-2xl p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">{user.avatar}</span>
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">@{user.username}</div>
                      <div className="text-[11px] text-teal-600 dark:text-teal-400">Cuenta sin datos personales</div>
                    </div>
                  </div>
                  <div className="py-2 text-xs space-y-1 text-slate-600 dark:text-slate-300">
                    <div className="flex justify-between py-1">
                      <span>Tests completados:</span>
                      <span className="font-bold text-slate-900 dark:text-white">{stats.testsCompleted}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Racha activa:</span>
                      <span className="font-bold text-amber-600">{stats.streakDays} días</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                    <button
                      onClick={() => {
                        logoutUser();
                        setShowUserDropdown(false);
                      }}
                      className="w-full text-left flex items-center space-x-2 px-2 py-1.5 rounded text-xs text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/50 font-medium transition-colors"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Cerrar sesión</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </header>
  );
};
