import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageCircle, 
  Send, 
  Users, 
  Hash, 
  Sparkles, 
  Smile, 
  Volume2, 
  ShieldCheck,
  Radio
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const GroupChatView: React.FC = () => {
  const { chatMessages, sendChatMessage, user } = useApp();
  const [selectedRoom, setSelectedRoom] = useState<string>('general');
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const rooms = [
    { id: 'general', name: 'Canal General OPE GVA', desc: 'Dudas globales, avisos DOGV y motivación' },
    { id: 'farmaco', name: 'Farmaco & Soporte Vital', desc: 'Cálculo de dosis, antídotos y ritmos PCR' },
    { id: 'legis', name: 'Legislación Sanitaria CV', desc: 'Estatuto Marco, Ley 10/2014 y decretos' },
    { id: 'guardias', name: 'Opositores Turno Noche', desc: 'Estudio de madrugada y guardias de hospital' },
  ];

  const filteredMessages = chatMessages.filter(m => m.room === selectedRoom || (!m.room && selectedRoom === 'general'));

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [filteredMessages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    sendChatMessage(selectedRoom, inputMessage.trim());
    setInputMessage('');
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Top Header */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">
            <Radio className="w-3.5 h-3.5 animate-pulse text-rose-600" />
            <span>Chat Grupal de Opositores</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
            Salas de Estudio y Comunicación Directa
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Comparte dudas sobre convocatorias y mantén el contacto con otros aspirantes en tiempo real.
          </p>
        </div>

        <div className="flex items-center space-x-2 text-xs font-semibold px-3 py-1.5 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
          <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse inline-block" />
          <span>Sala Activa • Conectado</span>
        </div>
      </div>

      {/* Main Chat Box Container */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[580px]">
        
        {/* Rooms Sidebar (4 Cols) */}
        <div className="md:col-span-4 border-r border-slate-200 dark:border-slate-800 p-4 space-y-2 bg-slate-50/50 dark:bg-slate-950/40">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 mb-2">
            Salas Temáticas
          </div>

          {rooms.map(room => {
            const isActive = selectedRoom === room.id;
            return (
              <button
                key={room.id}
                onClick={() => setSelectedRoom(room.id)}
                className={`w-full text-left p-3 rounded-xl transition-all flex items-start justify-between ${
                  isActive 
                    ? 'bg-white dark:bg-slate-800 text-teal-900 dark:text-teal-200 shadow-sm border border-slate-200 dark:border-slate-700' 
                    : 'hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                }`}
              >
                <div className="space-y-0.5">
                  <div className="flex items-center space-x-1.5 text-xs font-bold">
                    <Hash className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    <span>{room.name}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 line-clamp-1">{room.desc}</div>
                </div>
              </button>
            );
          })}

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 mb-2 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              <span>Privacidad & Convivencia</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-100/70 dark:bg-slate-800/50 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              Mensajes anónimos o con tu apodo sin exponer tu correo electrónico ni datos personales.
            </div>
          </div>
        </div>

        {/* Chat Stream & Input (8 Cols) */}
        <div className="md:col-span-8 flex flex-col justify-between h-[580px]">
          
          {/* Room Header */}
          <div className="p-3.5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-slate-900">
            <div className="flex items-center space-x-2">
              <Hash className="w-4 h-4 text-teal-600" />
              <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                {rooms.find(r => r.id === selectedRoom)?.name}
              </span>
            </div>
            <span className="text-[11px] text-slate-400">
              Conectado como <strong className="text-teal-600">@{user?.username || 'Opositor_CV'}</strong>
            </span>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/30 dark:bg-slate-950/20">
            {filteredMessages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-2 text-slate-400">
                <MessageCircle className="w-10 h-10 stroke-1 text-slate-300 dark:text-slate-600" />
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Canal listo para conversar
                </p>
                <p className="text-xs max-w-xs">
                  No hay mensajes todavía en esta sala. Escribe un mensaje abajo para iniciar la conversación.
                </p>
              </div>
            ) : (
              filteredMessages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex items-start space-x-2.5 max-w-[85%] ${
                    msg.isCurrentUser ? 'ml-auto flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <span className="text-xl shrink-0 p-1 bg-white dark:bg-slate-800 rounded-lg shadow-xs">{msg.avatar}</span>
                  <div
                    className={`p-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      msg.isCurrentUser
                        ? 'bg-teal-600 text-white rounded-tr-xs'
                        : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-tl-xs shadow-xs'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3 text-[10px] mb-1 opacity-70">
                      <span className="font-bold">@{msg.sender}</span>
                      <span>{msg.timestamp}</span>
                    </div>
                    <div>{msg.text}</div>
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <form 
            onSubmit={handleSend}
            className="p-3 border-t border-slate-100 dark:border-slate-800 flex items-center space-x-2 bg-white dark:bg-slate-900"
          >
            <input
              type="text"
              placeholder={`Enviar mensaje a #${selectedRoom}...`}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="p-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white shadow-xs disabled:opacity-40 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>

    </div>
  );
};
