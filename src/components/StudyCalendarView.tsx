import React, { useState } from 'react';
import { 
  CalendarDays, 
  Clock, 
  Bell, 
  Users, 
  Plus, 
  CheckCircle2, 
  AlertCircle, 
  Radio, 
  Sparkles,
  BookmarkCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const StudyCalendarView: React.FC = () => {
  const { 
    studySessions, 
    toggleSessionRegistration, 
    requestPushNotifications, 
    pushPermission,
    addNotification 
  } = useApp();

  const [currentMonth, setCurrentMonth] = useState('Noviembre 2024');
  const [selectedDay, setSelectedDay] = useState(15);

  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  const handleTogglePush = async () => {
    const granted = await requestPushNotifications();
    if (!granted && pushPermission === 'unsupported') {
      addNotification('Avisos Activados en la App', 'Te mostraremos notificaciones locales antes de cada sesión.', 'info');
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Top Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
            <CalendarDays className="w-3.5 h-3.5" />
            <span>Calendario Sincronizado</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
            Sesiones de Estudio Grupal & Avisos Sincronizados
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Planifica tus jornadas de simulacros en vivo con compañeros y activa recordatorios automáticos push.
          </p>
        </div>

        {/* Push Notification Enabler */}
        <div className="bg-slate-50 dark:bg-slate-800 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center space-x-3">
          <div className="p-2 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300">
            <Bell className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">
              Notificaciones de Sesión
            </div>
            <div className="text-[11px] text-slate-500">
              {pushPermission === 'granted' ? '✓ Alertas push activadas' : 'Avisar 15 min antes de simulacros'}
            </div>
          </div>
          <button
            onClick={handleTogglePush}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              pushPermission === 'granted'
                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                : 'bg-teal-600 text-white hover:bg-teal-700 shadow-xs'
            }`}
          >
            {pushPermission === 'granted' ? 'Activado' : 'Activar Push'}
          </button>
        </div>
      </div>

      {/* Grid: Interactive Calendar & Scheduled Sessions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Calendar Picker (5 Cols) */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">{currentMonth}</h3>
            <div className="flex space-x-1 text-slate-400">
              <button className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"><ChevronLeft className="w-4 h-4" /></button>
              <button className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>

          {/* Days of week */}
          <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-bold text-slate-400">
            <span>L</span><span>M</span><span>X</span><span>J</span><span>V</span><span>S</span><span>D</span>
          </div>

          {/* Days grid */}
          <div className="grid grid-cols-7 gap-1.5 text-center text-xs">
            {daysInMonth.map(day => {
              const hasEvent = [15, 18, 22, 25].includes(day);
              const isSelected = selectedDay === day;

              let style = 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300';
              if (isSelected) {
                style = 'bg-teal-600 text-white font-bold shadow-xs';
              } else if (hasEvent) {
                style = 'bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-200 font-bold border border-teal-200 dark:border-teal-800';
              }

              return (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`h-9 rounded-xl flex flex-col items-center justify-center relative transition-all ${style}`}
                >
                  <span>{day}</span>
                  {hasEvent && !isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 absolute bottom-1" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 space-y-1">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500 inline-block" />
              <span>Días con simulacro en vivo o masterclass</span>
            </div>
          </div>
        </div>

        {/* Sessions List (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider text-xs">
              Próximas Sesiones Sincronizadas
            </h3>
            <span className="text-xs text-teal-600 font-semibold">
              {studySessions.filter(s => s.isRegistered).length} inscritas por ti
            </span>
          </div>

          <div className="space-y-3">
            {studySessions.map(session => (
              <div
                key={session.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-teal-500 transition-all space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300">
                        {session.topic}
                      </span>
                      <span className="text-xs text-slate-400">
                        Por {session.organizer}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {session.title}
                    </h4>
                  </div>

                  <button
                    onClick={() => toggleSessionRegistration(session.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1 ${
                      session.isRegistered
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300'
                        : 'bg-teal-600 text-white hover:bg-teal-700 shadow-xs'
                    }`}
                  >
                    {session.isRegistered ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Inscrito</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Unirme</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {session.description}
                </p>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                      <CalendarDays className="w-3.5 h-3.5 text-teal-600" />
                      {session.date}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-slate-700 dark:text-slate-300">
                      <Clock className="w-3.5 h-3.5 text-teal-600" />
                      {session.time}h ({session.durationMinutes} min)
                    </span>
                  </div>

                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    {session.participantsCount} inscritos
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
};
