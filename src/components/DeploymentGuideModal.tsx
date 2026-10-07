import React, { useState } from 'react';
import { 
  X, 
  Globe, 
  Terminal, 
  Copy, 
  Check, 
  ExternalLink, 
  Server, 
  Sparkles, 
  Cloud, 
  CheckCircle2,
  Code2
} from 'lucide-react';

interface DeploymentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentGuideModal: React.FC<DeploymentGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'vercel' | 'render' | 'netlify' | 'github'>('render');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-hidden">
      <div className="bg-white dark:bg-slate-900 w-full max-w-3xl rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-teal-800 via-teal-900 to-slate-900 text-white flex items-center justify-between border-b border-teal-700/50">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-white/10 text-teal-300">
              <Globe className="w-3.5 h-3.5" />
              <span>Guía Oficial de Despliegue en la Nube</span>
            </div>
            <h2 className="text-lg sm:text-xl font-black">
              Cómo Desplegar OpoSanitat CV en Render, Vercel o Netlify
            </h2>
            <p className="text-xs text-slate-300">
              Paso a paso para publicar tu web gratis en Internet conectando tu repositorio de GitHub.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-300 hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Platform Selector Tabs */}
        <div className="bg-slate-100 dark:bg-slate-800/80 p-2 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2 overflow-x-auto text-xs font-bold">
          <button
            onClick={() => setActiveTab('render')}
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center space-x-1.5 ${
              activeTab === 'render'
                ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Server className="w-4 h-4 text-emerald-500" />
            <span>1. Render (Recomendado Fullstack)</span>
          </button>

          <button
            onClick={() => setActiveTab('vercel')}
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center space-x-1.5 ${
              activeTab === 'vercel'
                ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Cloud className="w-4 h-4 text-blue-500" />
            <span>2. Vercel (Rápido y Fácil)</span>
          </button>

          <button
            onClick={() => setActiveTab('netlify')}
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center space-x-1.5 ${
              activeTab === 'netlify'
                ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Globe className="w-4 h-4 text-teal-500" />
            <span>3. Netlify</span>
          </button>

          <button
            onClick={() => setActiveTab('github')}
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center space-x-1.5 ${
              activeTab === 'github'
                ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Code2 className="w-4 h-4 text-purple-500" />
            <span>Subir a GitHub</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-5 sm:p-6 overflow-y-auto space-y-5 text-xs sm:text-sm">
          
          {/* TAB 1: RENDER */}
          {activeTab === 'render' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200 space-y-1.5">
                <div className="font-bold flex items-center gap-1.5 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>¿Por qué Render es la mejor opción para esta web?</span>
                </div>
                <p className="text-xs leading-relaxed text-emerald-900 dark:text-emerald-300">
                  Render te permite ejecutar tanto el servidor Express backend (donde funciona el Asistente de IA Gemini y las APIs) como el frontend Vite compilado en el mismo puerto, sin configuraciones complejas.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-white">Pasos en Render.com:</h4>
                <ol className="list-decimal pl-5 space-y-2 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
                  <li>Entra en <a href="https://render.com" target="_blank" rel="noreferrer" className="text-teal-600 underline font-bold">render.com</a> y crea una cuenta gratis con tu GitHub.</li>
                  <li>Haz clic en <strong>New +</strong> y selecciona <strong>Web Service</strong>.</li>
                  <li>Selecciona tu repositorio: <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded font-mono text-xs">naimmeliana-prog/opo_enfermeros</code>.</li>
                  <li>Rellena estos campos exactos:</li>
                </ol>

                <div className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 font-mono text-xs space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div><span className="text-slate-400">Environment:</span> <strong className="text-teal-600 dark:text-teal-300">Node</strong></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div><span className="text-slate-400">Build Command:</span> <strong>npm install && npm run build</strong></div>
                    <button onClick={() => handleCopy('npm install && npm run build', 'render-build')} className="text-slate-400 hover:text-teal-600">
                      {copiedText === 'render-build' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div><span className="text-slate-400">Start Command:</span> <strong>npm start</strong></div>
                    <button onClick={() => handleCopy('npm start', 'render-start')} className="text-slate-400 hover:text-teal-600">
                      {copiedText === 'render-start' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <h5 className="font-bold text-xs text-slate-800 dark:text-slate-200 mb-1.5">Variables de Entorno (Environment Variables):</h5>
                  <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-mono space-y-1">
                    <div><span className="text-slate-400">NODE_ENV:</span> production</div>
                    <div><span className="text-slate-400">GEMINI_API_KEY:</span> tu_clave_de_gemini (opcional, tiene fallback local)</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: VERCEL */}
          {activeTab === 'vercel' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-950 dark:text-blue-200 space-y-1.5">
                <div className="font-bold flex items-center gap-1.5 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Vercel: Despliegue en 60 segundos con URL global ultrarrápida</span>
                </div>
                <p className="text-xs leading-relaxed text-blue-900 dark:text-blue-300">
                  Ya hemos creado el archivo <code className="font-mono bg-blue-100 dark:bg-blue-900 px-1 rounded">vercel.json</code> y la función serverless <code className="font-mono bg-blue-100 dark:bg-blue-900 px-1 rounded">api/chat-ai.ts</code> para que Vercel sirva tanto la SPA React como el endpoint de IA automáticamente.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-white">Pasos en Vercel.com:</h4>
                <ol className="list-decimal pl-5 space-y-2 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
                  <li>Entra en <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-teal-600 underline font-bold">vercel.com</a> e inicia sesión con GitHub.</li>
                  <li>Haz clic en <strong>Add New... ➔ Project</strong>.</li>
                  <li>Importa tu repositorio: <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded font-mono text-xs">naimmeliana-prog/opo_enfermeros</code>.</li>
                  <li>Vercel detectará automáticamente <strong>Framework: Vite</strong>.</li>
                  <li>(Opcional) En <strong>Environment Variables</strong> añade <code className="font-mono text-xs">GEMINI_API_KEY</code>.</li>
                  <li>Haz clic en <strong>Deploy</strong>. En menos de 1 minuto tendrás tu dominio tipo <code className="text-blue-600 dark:text-blue-400 font-mono">opo-enfermeros.vercel.app</code>.</li>
                </ol>
              </div>
            </div>
          )}

          {/* TAB 3: NETLIFY */}
          {activeTab === 'netlify' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-teal-950 dark:text-teal-200 space-y-1.5">
                <div className="font-bold flex items-center gap-1.5 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Netlify: Despliegue estático continuo</span>
                </div>
                <p className="text-xs leading-relaxed text-teal-900 dark:text-teal-300">
                  Ya hemos configurado <code className="font-mono bg-teal-100 dark:bg-teal-900 px-1 rounded">netlify.toml</code> y <code className="font-mono bg-teal-100 dark:bg-teal-900 px-1 rounded">public/_redirects</code> para evitar el típico error 404 de recarga en aplicaciones SPA de React.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-white">Pasos en Netlify.com:</h4>
                <ol className="list-decimal pl-5 space-y-2 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
                  <li>Entra en <a href="https://netlify.com" target="_blank" rel="noreferrer" className="text-teal-600 underline font-bold">netlify.com</a> y pulsa <strong>Sign up with GitHub</strong>.</li>
                  <li>Pulsa en <strong>Add new site ➔ Import an existing project</strong>.</li>
                  <li>Elige tu repositorio de GitHub.</li>
                  <li>Comandos de build:
                    <div className="bg-slate-50 dark:bg-slate-800 p-2.5 rounded-xl font-mono text-xs my-2 border border-slate-200 dark:border-slate-700">
                      <div>Build command: <strong>npm run build</strong></div>
                      <div>Publish directory: <strong>dist</strong></div>
                    </div>
                  </li>
                  <li>Pulsa en <strong>Deploy site</strong>.</li>
                </ol>
              </div>
            </div>
          )}

          {/* TAB 4: GITHUB */}
          {activeTab === 'github' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-purple-950 dark:text-purple-200 space-y-1.5">
                <div className="font-bold flex items-center gap-1.5 text-xs sm:text-sm">
                  <Terminal className="w-4 h-4 text-purple-600" />
                  <span>Comandos para sincronizar tu carpeta local con GitHub</span>
                </div>
                <p className="text-xs leading-relaxed text-purple-900 dark:text-purple-300">
                  Ejecuta estos comandos en tu terminal de Windows (PowerShell o Git Bash) en tu carpeta local <code className="font-mono bg-purple-100 dark:bg-purple-900 px-1 rounded">C:\Users\USUARIO\Downloads\opo_enfermeros</code>:
                </p>
              </div>

              <div className="bg-slate-950 text-slate-200 rounded-2xl p-4 font-mono text-xs space-y-2 border border-slate-800">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Comandos Git Bash / CMD:</span>
                  <button 
                    onClick={() => handleCopy(`git add .\ngit commit -m "Actualizar con opciones aleatorias y configuraciones de despliegue"\ngit push -u origin main`, 'git-push')}
                    className="flex items-center space-x-1 text-teal-400 hover:text-teal-300 font-sans text-xs font-bold"
                  >
                    {copiedText === 'git-push' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copiar todos los comandos</span>
                  </button>
                </div>

                <div className="text-emerald-400"># 1. Añadir todos los archivos modificados</div>
                <div>git add .</div>

                <div className="text-emerald-400 mt-2"># 2. Crear commit con los cambios</div>
                <div>git commit -m "Actualizar OpoSanitat CV con opciones aleatorias y despliegue"</div>

                <div className="text-emerald-400 mt-2"># 3. Subir a tu repositorio remoto en GitHub</div>
                <div>git push origin main</div>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Una vez hagas <code className="font-mono">git push</code>, Render o Vercel o Netlify detectarán automáticamente el commit y publicarán tu versión más reciente en vivo.
              </p>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between text-xs text-slate-500">
          <span>Configuraciones generadas: vercel.json, netlify.toml y render.yaml</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 text-white dark:bg-teal-600 hover:bg-slate-800 font-bold text-xs shadow-xs"
          >
            Entendido, cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
