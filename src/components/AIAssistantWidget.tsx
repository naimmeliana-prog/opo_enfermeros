import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Sparkles, 
  X, 
  Send, 
  MessageSquare, 
  ExternalLink, 
  HelpCircle, 
  Minimize2, 
  Maximize2,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';
import { useApp } from '../context/AppContext';

interface ChatMessageAI {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  isComplex?: boolean;
}

const FAQS_LIST = [
  '¿Cuáles son los plazos de prescripción de faltas en la Ley 55/2003?',
  '¿Diferencia entre Grado III y Grado IV de UPP?',
  '¿Qué antídotos caen siempre en la OPE de Sanitat GVA?',
  '¿Cómo se puntúa el examen con penalización (-0,33)?',
  '¿Qué competencias tiene la Generalitat según el Art. 54 del Estatuto?',
  '¿Secuencia de fármacos en parada con FV/TVSP según ERC?'
];

interface AIAssistantWidgetProps {
  onOpenForumWithQuery?: (title: string, details: string) => void;
}

export const AIAssistantWidget: React.FC<AIAssistantWidgetProps> = ({ onOpenForumWithQuery }) => {
  const { activeOpposition, isOnline } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessageAI[]>([
    {
      id: 'init-1',
      sender: 'assistant',
      text: `¡Hola! Soy tu Asistente de IA especializado en el temario de oposiciones de enfermería de la Comunitat Valenciana (${activeOpposition.shortName}).\n\nPuedo explicarte dudas de legislación (Ley 10/2014, Estatuto Marco), farmacología, metodología PAE, escalas clínicas o cálculos de dosis. ¿Qué necesitas repasar hoy?`,
      timestamp: 'Ahora'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (queryText?: string) => {
    const textToSend = queryText || inputText;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessageAI = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!queryText) setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend.trim() }),
      });

      if (!response.ok) {
        throw new Error('Error en la llamada al asistente');
      }

      const data = await response.json();
      const assistantMsg: ChatMessageAI = {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        text: data.text || 'Sin respuesta del asistente.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isComplex: data.isComplexQuery
      };
      setMessages(prev => [...prev, assistantMsg]);
    } catch (err) {
      // Fallback response if offline or server issue
      const fallbackMsg: ChatMessageAI = {
        id: `ai-err-${Date.now()}`,
        sender: 'assistant',
        text: `Respecto a "${textToSend}":\n\nEn las oposiciones de la Comunitat Valenciana (${activeOpposition.shortName}) este contenido se encuentra regulado en la normativa oficial autonómica (Ley 10/2014) y guías clínicas del Sistema Valenciano de Salud. Te sugerimos revisar el apartado del Temario o trasladar la consulta al Foro de Compañeros.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isComplex: true
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForwardToForum = (lastUserQuestion: string, aiExplanation: string) => {
    if (onOpenForumWithQuery) {
      onOpenForumWithQuery(
        lastUserQuestion.slice(0, 80),
        `Consulta iniciada con el Asistente de IA:\n"${lastUserQuestion}"\n\nRespuesta preliminar de la IA:\n${aiExplanation}\n\n¿Qué opináis los compañeros/as que os habéis presentado en anteriores convocatorias?`
      );
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Floating Launcher Button (Visible on all pages) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 z-40 px-4 py-3 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold text-xs shadow-xl shadow-teal-600/30 hover:scale-105 transition-all flex items-center space-x-2.5 border border-teal-400/30 group"
          title="Abrir Asistente de IA para dudas del temario"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-white animate-bounce" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full ring-2 ring-teal-600" />
          </div>
          <div className="text-left">
            <span className="block text-[10px] uppercase font-bold text-teal-200 leading-none">Tutor Inteligente</span>
            <span className="text-xs font-black tracking-tight">Preguntar a la IA</span>
          </div>
        </button>
      )}

      {/* Expanded AI Assistant Floating Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50 w-[95vw] sm:w-[440px] h-[600px] max-h-[85vh] bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-200">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-teal-700 to-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-teal-300">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <h3 className="text-sm font-bold tracking-tight">Tutor IA • OpoSanitat CV</h3>
                  <span className="px-1.5 py-0.2 rounded text-[10px] bg-teal-500/20 text-teal-300 border border-teal-400/30 font-semibold">
                    Enfermería
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 truncate max-w-[240px]">
                  Adaptado a: {activeOpposition.shortName}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <button
                onClick={() => setMessages([{
                  id: 'init-reset',
                  sender: 'assistant',
                  text: 'Conversación reiniciada. ¿En qué duda del temario te puedo ayudar ahora?',
                  timestamp: 'Ahora'
                }])}
                className="p-1.5 rounded-lg text-slate-300 hover:bg-white/10"
                title="Reiniciar chat"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-300 hover:bg-white/10"
                title="Cerrar asistente"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick FAQ Pills (When chat has few messages) */}
          {messages.length <= 2 && (
            <div className="p-3 bg-teal-50/70 dark:bg-teal-950/40 border-b border-teal-100 dark:border-teal-900/50">
              <div className="text-[10px] uppercase font-bold text-teal-800 dark:text-teal-300 mb-1.5 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>Preguntas Frecuentes Rápidas:</span>
              </div>
              <div className="flex flex-wrap gap-1 max-h-24 overflow-y-auto pr-1">
                {FAQS_LIST.map((faq, fIdx) => (
                  <button
                    key={fIdx}
                    onClick={() => handleSendMessage(faq)}
                    className="text-left text-[11px] px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-teal-200 dark:border-slate-700 hover:border-teal-500 transition-colors truncate max-w-full"
                  >
                    {faq}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50/30 dark:bg-slate-950/30 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`p-3.5 rounded-2xl max-w-[90%] leading-relaxed whitespace-pre-wrap ${
                    m.sender === 'user'
                      ? 'bg-teal-600 text-white rounded-tr-xs shadow-xs'
                      : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-tl-xs shadow-xs'
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[10px] text-slate-400 mt-1 px-1">
                  {m.timestamp}
                </span>

                {/* Forum Complementary Suggestion */}
                {m.sender === 'assistant' && (
                  <div className="mt-2 p-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 text-teal-900 dark:text-teal-200 max-w-[90%] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-[11px]">
                      💬 ¿Pregunta compleja o controvertida?
                    </span>
                    <button
                      onClick={() => {
                        const lastUser = messages.filter(x => x.sender === 'user').slice(-1)[0]?.text || 'Duda de Temario';
                        handleForwardToForum(lastUser, m.text);
                      }}
                      className="text-[11px] font-bold text-teal-700 dark:text-teal-300 hover:underline flex items-center gap-1 self-end sm:self-auto"
                    >
                      <span>Publicar en el Foro</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center space-x-2 p-3 bg-white dark:bg-slate-800 rounded-2xl max-w-[70%] border border-slate-200 dark:border-slate-700 text-slate-500">
                <Sparkles className="w-4 h-4 text-teal-600 animate-spin" />
                <span className="text-xs">Consultando temario y normativa...</span>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center space-x-2"
          >
            <input
              type="text"
              placeholder="Pregunta sobre temario, leyes o técnicas..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              disabled={isLoading}
              className="flex-1 px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className="p-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white shadow-xs disabled:opacity-40 transition-colors"
              title="Enviar consulta"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
