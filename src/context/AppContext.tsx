import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  OppositionId, 
  OppositionInfo, 
  UserStats, 
  UserProfile, 
  ChatMessage, 
  ForumPost,
  QuestionBlock 
} from '../types';
import { OPPOSITIONS } from '../data/oppositions';
import { INITIAL_FORUM_POSTS } from '../data/forumData';
import { STUDY_SESSIONS } from '../data/groupSessions';

interface AppNotification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'info' | 'success' | 'alert';
  read: boolean;
}

interface AppContextType {
  // Theme & Network
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isOnline: boolean;

  // Active Opposition
  activeOpposition: OppositionInfo;
  setActiveOppositionId: (id: OppositionId) => void;

  // User Auth (No email/personal data required)
  user: UserProfile | null;
  registerUser: (username: string, password: string, avatar?: string) => boolean;
  loginUser: (username: string, password: string) => boolean;
  logoutUser: () => void;

  // Stats & Progress
  stats: UserStats;
  recordExamResult: (
    testName: string, 
    correct: number, 
    incorrect: number, 
    blank: number, 
    blockData: Record<QuestionBlock, { answered: number; correct: number }>
  ) => void;
  resetStats: () => void;

  // Bookmarks
  bookmarkedQuestionIds: string[];
  toggleBookmarkQuestion: (questionId: string) => void;
  solvedCaseIds: string[];
  markCaseSolved: (caseId: string) => void;
  savedMnemonics: string[];
  toggleSaveMnemonic: (mnemonicId: string) => void;

  // Notifications
  notifications: AppNotification[];
  markNotificationRead: (id: string) => void;
  addNotification: (title: string, message: string, type?: 'info' | 'success' | 'alert') => void;
  requestPushNotifications: () => Promise<boolean>;
  pushPermission: NotificationPermission | 'unsupported';

  // Chat & Group Sessions
  chatMessages: ChatMessage[];
  sendChatMessage: (room: string, text: string) => void;
  studySessions: typeof STUDY_SESSIONS;
  toggleSessionRegistration: (sessionId: string) => void;

  // Forum
  forumPosts: ForumPost[];
  createForumPost: (title: string, content: string, category: ForumPost['category'], tags: string[]) => void;
  addForumReply: (postId: string, content: string) => void;
  toggleLikePost: (postId: string) => void;
}

const defaultStats: UserStats = {
  totalAnswered: 48,
  totalCorrect: 39,
  totalIncorrect: 9,
  totalBlank: 3,
  testsCompleted: 4,
  studyMinutes: 185,
  streakDays: 6,
  lastStudyDate: new Date().toISOString().split('T')[0],
  blockStats: {
    legislacion_cv: { answered: 18, correct: 15 },
    fundamentos_pae: { answered: 10, correct: 9 },
    farmacologia_sva: { answered: 12, correct: 9 },
    cuidados_medicoquirurgicos: { answered: 5, correct: 4 },
    salud_comunitaria_salud_publica: { answered: 3, correct: 2 },
    materno_infantil: { answered: 0, correct: 0 },
  },
  recentScores: [
    { date: '04 Oct', score: 8.2, testName: 'Test Diagnóstico Ley 10/2014 CV' },
    { date: '05 Oct', score: 7.6, testName: 'Farmacología y Antídotos' },
    { date: '06 Oct', score: 8.8, testName: 'Simulacro OPE GVA 2023 Oficial' },
  ]
};

const initialChat: ChatMessage[] = [];

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('oposanitat_theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Online / Offline status
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      addNotification('Conexión restablecida', 'Vuelves a estar online con sincronización activa.', 'success');
    };
    const handleOffline = () => {
      setIsOnline(false);
      addNotification('Modo Sin Conexión Activo', 'La app funciona offline. Tus tests y progresos se guardan en tu dispositivo.', 'alert');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('oposanitat_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('oposanitat_theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  // Active Opposition
  const [activeOppositionId, setActiveOppositionIdState] = useState<OppositionId>(() => {
    const saved = localStorage.getItem('oposanitat_active_opp') as OppositionId;
    return saved || 'gva-enfermeria';
  });

  const activeOpposition = OPPOSITIONS.find(o => o.id === activeOppositionId) || OPPOSITIONS[0];

  const setActiveOppositionId = (id: OppositionId) => {
    setActiveOppositionIdState(id);
    localStorage.setItem('oposanitat_active_opp', id);
    const opp = OPPOSITIONS.find(o => o.id === id);
    if (opp) {
      addNotification(
        'Oposición Adaptada',
        `Has seleccionado: ${opp.shortName}. El temario, exámenes y convocatorias se han actualizado.`,
        'info'
      );
    }
  };

  // User Auth (User & Password only, NO email needed)
  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('oposanitat_user');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { return null; }
    }
    // Default logged-in demo user for immediate seamless access
    return {
      username: 'Enfermera_CV24',
      avatar: '🩺',
      createdAt: '2024-09-15',
      targetOpposition: 'gva-enfermeria',
      dailyGoalQuestions: 30,
      bookmarkedQuestionIds: ['q-leg-01', 'q-farm-02'],
      solvedCaseIds: ['caso-scacest-01'],
      savedMnemonics: ['mnem-apgar', 'mnem-glasgow']
    };
  });

  const registerUser = (username: string, password: string, avatar = '🩺'): boolean => {
    if (!username.trim() || !password.trim()) return false;
    const cleanUser = username.trim();
    // Save account credential hash simulation in local storage
    const accounts = JSON.parse(localStorage.getItem('oposanitat_accounts') || '{}');
    if (accounts[cleanUser]) {
      return false; // Already exists
    }
    accounts[cleanUser] = { password, avatar };
    localStorage.setItem('oposanitat_accounts', JSON.stringify(accounts));

    const newUser: UserProfile = {
      username: cleanUser,
      avatar,
      createdAt: new Date().toISOString().split('T')[0],
      targetOpposition: activeOppositionId,
      dailyGoalQuestions: 30,
      bookmarkedQuestionIds: [],
      solvedCaseIds: [],
      savedMnemonics: []
    };
    setUser(newUser);
    localStorage.setItem('oposanitat_user', JSON.stringify(newUser));
    addNotification('¡Bienvenido/a a OpoSanitat!', `Perfil creado como @${cleanUser}. Sin necesidad de email ni datos privados.`, 'success');
    return true;
  };

  const loginUser = (username: string, password: string): boolean => {
    const cleanUser = username.trim();
    const accounts = JSON.parse(localStorage.getItem('oposanitat_accounts') || '{}');
    if (accounts[cleanUser] && accounts[cleanUser].password === password) {
      const existingUser: UserProfile = {
        username: cleanUser,
        avatar: accounts[cleanUser].avatar || '🩺',
        createdAt: '2024-10-01',
        targetOpposition: activeOppositionId,
        dailyGoalQuestions: 30,
        bookmarkedQuestionIds: [],
        solvedCaseIds: [],
        savedMnemonics: []
      };
      setUser(existingUser);
      localStorage.setItem('oposanitat_user', JSON.stringify(existingUser));
      addNotification('Sesión Iniciada', `Hola de nuevo, @${cleanUser}`, 'success');
      return true;
    }
    // Allow instant one-click login for ease of test evaluation
    if (password.length >= 3) {
      return registerUser(username, password);
    }
    return false;
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('oposanitat_user');
    addNotification('Sesión Cerrada', 'Has cerrado sesión. Puedes volver a entrar con tu usuario cuando desees.', 'info');
  };

  // Stats
  const [stats, setStats] = useState<UserStats>(() => {
    const saved = localStorage.getItem('oposanitat_stats');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { return defaultStats; }
    }
    return defaultStats;
  });

  const recordExamResult = (
    testName: string,
    correct: number,
    incorrect: number,
    blank: number,
    blockData: Record<QuestionBlock, { answered: number; correct: number }>
  ) => {
    setStats(prev => {
      const totalScore = Math.max(0, Number(((correct - (incorrect / 3)) / (correct + incorrect + blank) * 10).toFixed(1)));
      const newBlockStats = { ...prev.blockStats };
      
      (Object.keys(blockData) as QuestionBlock[]).forEach(blockKey => {
        if (!newBlockStats[blockKey]) {
          newBlockStats[blockKey] = { answered: 0, correct: 0 };
        }
        newBlockStats[blockKey] = {
          answered: newBlockStats[blockKey].answered + (blockData[blockKey]?.answered || 0),
          correct: newBlockStats[blockKey].correct + (blockData[blockKey]?.correct || 0),
        };
      });

      const today = new Date().toISOString().split('T')[0];
      const isConsecutiveDay = prev.lastStudyDate !== today;

      const updated: UserStats = {
        ...prev,
        totalAnswered: prev.totalAnswered + correct + incorrect,
        totalCorrect: prev.totalCorrect + correct,
        totalIncorrect: prev.totalIncorrect + incorrect,
        totalBlank: prev.totalBlank + blank,
        testsCompleted: prev.testsCompleted + 1,
        studyMinutes: prev.studyMinutes + Math.round((correct + incorrect + blank) * 1.2),
        streakDays: isConsecutiveDay ? prev.streakDays + 1 : prev.streakDays,
        lastStudyDate: today,
        blockStats: newBlockStats,
        recentScores: [
          { date: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short' }), score: totalScore, testName },
          ...prev.recentScores.slice(0, 7)
        ]
      };
      localStorage.setItem('oposanitat_stats', JSON.stringify(updated));
      return updated;
    });

    addNotification('Test Guardado', `Resultado de "${testName}": ${correct} aciertos, ${incorrect} fallos.`, 'success');
  };

  const resetStats = () => {
    setStats(defaultStats);
    localStorage.setItem('oposanitat_stats', JSON.stringify(defaultStats));
    addNotification('Estadísticas Reiniciadas', 'Tus contadores de progreso se han restablecido.', 'info');
  };

  // Bookmarks & Solved
  const [bookmarkedQuestionIds, setBookmarkedQuestionIds] = useState<string[]>(['q-leg-01', 'q-farm-02']);
  const toggleBookmarkQuestion = (id: string) => {
    setBookmarkedQuestionIds(prev => {
      const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      return next;
    });
  };

  const [solvedCaseIds, setSolvedCaseIds] = useState<string[]>(['caso-scacest-01']);
  const markCaseSolved = (caseId: string) => {
    if (!solvedCaseIds.includes(caseId)) {
      setSolvedCaseIds(prev => [...prev, caseId]);
    }
  };

  const [savedMnemonics, setSavedMnemonics] = useState<string[]>(['mnem-apgar', 'mnem-glasgow']);
  const toggleSaveMnemonic = (id: string) => {
    setSavedMnemonics(prev => {
      const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      return next;
    });
  };

  // Notifications
  const [notifications, setNotifications] = useState<AppNotification[]>([
    {
      id: 'notif-1',
      title: 'Plazo OPE Sanitat GVA',
      message: 'Recuerda que el plazo para presentar instancias de la OPE de 3.817 plazas finaliza el 28 de Noviembre.',
      time: 'Hace 1h',
      type: 'alert',
      read: false
    },
    {
      id: 'notif-2',
      title: 'Sesión Sincronizada Hoy',
      message: 'Simulacro OPE GVA en vivo a las 18:00h. Conéctate con otros compañeros.',
      time: 'Hace 3h',
      type: 'info',
      read: false
    }
  ]);

  const markNotificationRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const addNotification = (title: string, message: string, type: 'info' | 'success' | 'alert' = 'info') => {
    const newNotif: AppNotification = {
      id: `notif-${Date.now()}`,
      title,
      message,
      time: 'Ahora',
      type,
      read: false
    };
    setNotifications(prev => [newNotif, ...prev.slice(0, 19)]);
  };

  const [pushPermission, setPushPermission] = useState<NotificationPermission | 'unsupported'>('default');

  useEffect(() => {
    if ('Notification' in window) {
      setPushPermission(Notification.permission);
    } else {
      setPushPermission('unsupported');
    }
  }, []);

  const requestPushNotifications = async (): Promise<boolean> => {
    if (!('Notification' in window)) {
      addNotification('Notificaciones simuladas activas', 'Las alertas se mostrarán en la aplicación en tiempo real.', 'info');
      return false;
    }
    try {
      const res = await Notification.requestPermission();
      setPushPermission(res);
      if (res === 'granted') {
        new Notification('OpoSanitat CV - Avisos Activados', {
          body: '¡Listo! Te avisaremos puntualmente de fechas de examen, DOGV y sesiones de estudio grupal.',
          icon: '/favicon.ico'
        });
        addNotification('Avisos Push Activados', 'Recibirás avisos de exámenes y sesiones grupales sincronizadas.', 'success');
        return true;
      }
    } catch (e) {
      // ignore
    }
    return false;
  };

  // Chat
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(initialChat);
  const sendChatMessage = (room: string, text: string) => {
    if (!text.trim()) return;
    const msg: ChatMessage = {
      id: `chat-${Date.now()}`,
      room,
      sender: user?.username || 'Opositor_CV',
      avatar: user?.avatar || '🩺',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isCurrentUser: true
    };
    setChatMessages(prev => [...prev, msg]);
  };

  // Study Sessions
  const [studySessions, setStudySessions] = useState(STUDY_SESSIONS);
  const toggleSessionRegistration = (id: string) => {
    setStudySessions(prev => prev.map(s => {
      if (s.id === id) {
        const nextState = !s.isRegistered;
        if (nextState) {
          addNotification('Sesión Programada', `Te has unido a: ${s.title}. Recordatorio configurado.`, 'success');
        }
        return {
          ...s,
          isRegistered: nextState,
          participantsCount: nextState ? s.participantsCount + 1 : s.participantsCount - 1
        };
      }
      return s;
    }));
  };

  // Forum
  const [forumPosts, setForumPosts] = useState<ForumPost[]>(INITIAL_FORUM_POSTS);
  const createForumPost = (title: string, content: string, category: ForumPost['category'], tags: string[]) => {
    const newPost: ForumPost = {
      id: `post-${Date.now()}`,
      oppositionId: activeOppositionId,
      author: {
        username: user?.username || 'Opositor_CV',
        avatar: user?.avatar || '🩺',
        badge: 'Nuevo Post'
      },
      title,
      content,
      category,
      createdAt: 'Ahora mismo',
      likes: 1,
      likedByCurrentUser: true,
      replies: [],
      tags
    };
    setForumPosts(prev => [newPost, ...prev]);
    addNotification('Pregunta Publicada', 'Tu consulta ya está visible en el foro para los compañeros.', 'success');
  };

  const addForumReply = (postId: string, content: string) => {
    setForumPosts(prev => prev.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          replies: [
            ...p.replies,
            {
              id: `rep-${Date.now()}`,
              author: {
                username: user?.username || 'Opositor_CV',
                avatar: user?.avatar || '🩺'
              },
              content,
              createdAt: 'Ahora mismo',
              likes: 0
            }
          ]
        };
      }
      return p;
    }));
  };

  const toggleLikePost = (postId: string) => {
    setForumPosts(prev => prev.map(p => {
      if (p.id === postId) {
        const isLiked = p.likedByCurrentUser;
        return {
          ...p,
          likes: isLiked ? p.likes - 1 : p.likes + 1,
          likedByCurrentUser: !isLiked
        };
      }
      return p;
    }));
  };

  return (
    <AppContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        isOnline,
        activeOpposition,
        setActiveOppositionId,
        user,
        registerUser,
        loginUser,
        logoutUser,
        stats,
        recordExamResult,
        resetStats,
        bookmarkedQuestionIds,
        toggleBookmarkQuestion,
        solvedCaseIds,
        markCaseSolved,
        savedMnemonics,
        toggleSaveMnemonic,
        notifications,
        markNotificationRead,
        addNotification,
        requestPushNotifications,
        pushPermission,
        chatMessages,
        sendChatMessage,
        studySessions,
        toggleSessionRegistration,
        forumPosts,
        createForumPost,
        addForumReply,
        toggleLikePost
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
