import React, { useState } from 'react';
import { 
  MessagesSquare, 
  ThumbsUp, 
  MessageSquare, 
  PlusCircle, 
  Search, 
  Send, 
  CheckCircle, 
  Sparkles,
  Tag,
  Clock,
  User,
  X
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ForumPost } from '../types';

export const ForumView: React.FC = () => {
  const { 
    forumPosts, 
    createForumPost, 
    addForumReply, 
    toggleLikePost, 
    user,
    activeOpposition 
  } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeThread, setActiveThread] = useState<ForumPost | null>(null);

  // New Post Form Modal State
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newCategory, setNewCategory] = useState<ForumPost['category']>('Temario y Normativa');
  const [newTagInput, setNewTagInput] = useState('');

  // Reply Input
  const [replyText, setReplyText] = useState('');

  const categories = [
    'all',
    'Temario y Normativa',
    'Dudas de Tests',
    'Impugnaciones',
    'Estrategia y Planificación'
  ];

  const filteredPosts = forumPosts.filter(p => {
    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = 
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const tags = newTagInput
      ? newTagInput.split(',').map(t => t.trim()).filter(Boolean)
      : ['OPE Sanitat CV'];

    createForumPost(newTitle.trim(), newContent.trim(), newCategory, tags);
    setNewTitle('');
    setNewContent('');
    setNewTagInput('');
    setShowNewPostModal(false);
  };

  const handleSendReply = (postId: string) => {
    if (!replyText.trim()) return;
    addForumReply(postId, replyText.trim());
    setReplyText('');

    // Update activeThread in view
    if (activeThread && activeThread.id === postId) {
      const updated = forumPosts.find(p => p.id === postId);
      if (updated) {
        setActiveThread({
          ...updated,
          replies: [
            ...updated.replies,
            {
              id: `rep-${Date.now()}`,
              author: {
                username: user?.username || 'Opositor_CV',
                avatar: user?.avatar || '🩺'
              },
              content: replyText.trim(),
              createdAt: 'Ahora mismo',
              likes: 0
            }
          ]
        });
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      {/* Top Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
            <MessagesSquare className="w-3.5 h-3.5" />
            <span>Comunidad de Opositores de Enfermería</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
            Foros de Dudas & Apoyo entre Compañeros
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Resuelve preguntas controvertidas, comparte esquemas y debate impugnaciones oficiales con otros aspirantes de la Comunitat Valenciana.
          </p>
        </div>

        <button
          onClick={() => setShowNewPostModal(true)}
          className="px-4 py-2.5 rounded-xl font-bold text-xs bg-teal-600 hover:bg-teal-700 text-white shadow-sm flex items-center space-x-2 shrink-0 transition-colors"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Publicar Nueva Duda</span>
        </button>
      </div>

      {/* Thread Detail View if a thread is opened */}
      {activeThread ? (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
          <button
            onClick={() => setActiveThread(null)}
            className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline flex items-center space-x-1"
          >
            ← Volver a la lista de debates
          </button>

          {/* Main Question Post */}
          <div className="border-b border-slate-100 dark:border-slate-800 pb-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <span className="text-2xl">{activeThread.author.avatar}</span>
                <div>
                  <div className="font-bold text-xs text-slate-900 dark:text-white">
                    @{activeThread.author.username}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {activeThread.createdAt} • <span className="text-teal-600 font-semibold">{activeThread.category}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => toggleLikePost(activeThread.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  activeThread.likedByCurrentUser
                    ? 'bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border border-teal-300'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>{activeThread.likes}</span>
              </button>
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {activeThread.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
              {activeThread.content}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {activeThread.tags.map((tag, tIdx) => (
                <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Replies Section */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Respuestas de Compañeros ({activeThread.replies.length})
            </h4>

            {activeThread.replies.map((rep) => (
              <div 
                key={rep.id}
                className={`p-4 rounded-xl border text-xs sm:text-sm space-y-2 ${
                  rep.author.isVerifiedTutor
                    ? 'bg-teal-50/50 dark:bg-teal-950/30 border-teal-300 dark:border-teal-800'
                    : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{rep.author.avatar}</span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      @{rep.author.username}
                    </span>
                    {rep.author.isVerifiedTutor && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-600 text-white flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Tutor Sanitat Verificado
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-slate-400">{rep.createdAt}</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {rep.content}
                </p>
              </div>
            ))}

            {/* Add Reply Input */}
            <div className="pt-2 flex items-center space-x-2">
              <input
                type="text"
                placeholder="Escribe tu respuesta o aclaración clínica..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendReply(activeThread.id)}
                className="flex-1 px-4 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                onClick={() => handleSendReply(activeThread.id)}
                className="p-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white shadow-xs transition-colors"
                title="Enviar respuesta"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Forum Threads List */
        <div className="space-y-4">
          
          {/* Search & Category Filter */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Buscar duda, tema, ley..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === c 
                      ? 'bg-teal-600 text-white' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                  }`}
                >
                  {c === 'all' ? 'Todos los temas' : c}
                </button>
              ))}
            </div>
          </div>

          {/* Posts list */}
          <div className="space-y-3">
            {filteredPosts.map(post => (
              <div
                key={post.id}
                onClick={() => setActiveThread(post)}
                className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-teal-500 cursor-pointer transition-all space-y-3"
              >
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{post.author.avatar}</span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      @{post.author.username}
                    </span>
                    <span className="text-[10px] text-slate-400">• {post.createdAt}</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {post.content}
                </p>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="w-3.5 h-3.5" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5" />
                      {post.replies.length} respuestas
                    </span>
                  </div>
                  <span className="text-teal-600 dark:text-teal-400 font-semibold text-[11px]">
                    Ver conversación →
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* Create New Post Modal */}
      {showNewPostModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 w-full max-w-xl rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Publicar Consulta en el Foro
              </h3>
              <button onClick={() => setShowNewPostModal(false)}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <form onSubmit={handleCreatePost} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Categoría
                </label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as any)}
                  className="w-full p-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                >
                  <option value="Temario y Normativa">Temario y Normativa</option>
                  <option value="Dudas de Tests">Dudas de Tests</option>
                  <option value="Impugnaciones">Impugnaciones Oficiales</option>
                  <option value="Estrategia y Planificación">Estrategia y Planificación</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Título de la Duda
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: ¿Plazos de recurso en la Ley 39/2015 para el examen?"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full p-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Explicación Detallada
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Detalla tu pregunta, opciones del test o motivo de discrepancia..."
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full p-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Etiquetas (separadas por comas)
                </label>
                <input
                  type="text"
                  placeholder="Ley 10/2014, Farmacología, Conselleria"
                  value={newTagInput}
                  onChange={(e) => setNewTagInput(e.target.value)}
                  className="w-full p-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>

              <div className="flex justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowNewPostModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold"
                >
                  Publicar en la Comunidad
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
