import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { TestGenerator } from './components/TestGenerator';
import { OfficialExamsView } from './components/OfficialExamsView';
import { DynamicExamSimulator } from './components/DynamicExamSimulator';
import { TrapQuestions } from './components/TrapQuestions';
import { SyllabusView } from './components/SyllabusView';
import { OppositionFinder } from './components/OppositionFinder';
import { ClinicalCasesView } from './components/ClinicalCasesView';
import { MnemonicsView } from './components/MnemonicsView';
import { DownloadableResources } from './components/DownloadableResources';
import { ForumView } from './components/ForumView';
import { GroupChatView } from './components/GroupChatView';
import { StudyCalendarView } from './components/StudyCalendarView';
import { AuthModal } from './components/AuthModal';
import { ExamRunner } from './components/ExamRunner';
import { AIAssistantWidget } from './components/AIAssistantWidget';
import { QUESTIONS_BANK } from './data/questions';
import { Menu, X } from 'lucide-react';

const MainLayout: React.FC = () => {
  const { activeOpposition, createForumPost } = useApp();
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [quickExamActive, setQuickExamActive] = useState(false);

  // Quick 10-question practice test from dashboard
  const handleStartQuickTest = () => {
    setQuickExamActive(true);
  };

  const handleOpenForumWithQuery = (title: string, details: string) => {
    createForumPost(title, details, 'Temario y Normativa', ['Asistente IA', activeOpposition.shortName]);
    setActiveTab('forum');
  };

  const quickQuestions = QUESTIONS_BANK.slice(0, 10);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col transition-colors">
      
      {/* Top Navbar */}
      <Navbar 
        onOpenAuthModal={() => setAuthModalOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Mobile Drawer Trigger Floating Bar */}
      <div className="lg:hidden sticky top-16 z-30 bg-white/95 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800 px-4 py-2.5 flex items-center justify-between backdrop-blur-md">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center space-x-2 text-xs font-bold text-slate-700 dark:text-slate-200 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-teal-600" /> : <Menu className="w-5 h-5 text-teal-600" />}
          <span>Menú de Módulos</span>
        </button>
        <span className="text-xs font-semibold text-teal-600 dark:text-teal-400">
          {activeOpposition.shortName}
        </span>
      </div>

      <div className="flex-1 flex">
        {/* Sidebar Navigation */}
        <Sidebar 
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setQuickExamActive(false);
          }}
          mobileOpen={mobileMenuOpen}
          setMobileOpen={setMobileMenuOpen}
        />

        {/* Main Content Area */}
        <main className="flex-1 lg:pl-64 p-4 sm:p-6 lg:p-8 transition-all max-w-[100vw] overflow-x-hidden">
          
          {quickExamActive ? (
            <ExamRunner
              title={`Test Rápido de Diagnóstico - ${activeOpposition.shortName}`}
              subtitle="10 preguntas clave del temario general y autonómico"
              questions={quickQuestions}
              durationMinutes={15}
              isSimulatedOfficial={false}
              onExit={() => setQuickExamActive(false)}
            />
          ) : (
            <>
              {activeTab === 'dashboard' && (
                <Dashboard 
                  setActiveTab={setActiveTab}
                  onStartQuickTest={handleStartQuickTest}
                />
              )}
              {activeTab === 'dynamic-simulator' && (
                <DynamicExamSimulator 
                  onNavigateToSyllabus={() => setActiveTab('syllabus')}
                />
              )}
              {activeTab === 'test-generator' && <TestGenerator />}
              {activeTab === 'official-exams' && <OfficialExamsView />}
              {activeTab === 'trap-questions' && <TrapQuestions />}
              {activeTab === 'syllabus' && <SyllabusView />}
              {activeTab === 'opposition-finder' && <OppositionFinder />}
              {activeTab === 'clinical-cases' && <ClinicalCasesView />}
              {activeTab === 'mnemonics' && <MnemonicsView />}
              {activeTab === 'downloads' && <DownloadableResources />}
              {activeTab === 'forum' && <ForumView />}
              {activeTab === 'group-chat' && <GroupChatView />}
              {activeTab === 'study-calendar' && <StudyCalendarView />}
            </>
          )}

        </main>
      </div>

      {/* Floating AI Assistant Widget - Accessible from any page of the web */}
      <AIAssistantWidget 
        onOpenForumWithQuery={handleOpenForumWithQuery} 
      />

      {/* Auth Modal (Username + Password only, NO email needed) */}
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
      />

    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
