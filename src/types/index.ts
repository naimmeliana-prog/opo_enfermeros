export type OppositionId = 'gva-enfermeria' | 'chguv-valencia' | 'samu-ses' | 'eir-cv';

export interface OppositionInfo {
  id: OppositionId;
  name: string;
  shortName: string;
  organism: string;
  scope: string;
  category: string;
  places: number;
  status: 'Inscripción abierta' | 'Lista admitidos publicada' | 'Fecha examen fijada' | 'Oferta de empleo aprobada';
  estimatedDate: string;
  dogvReference: string;
  description: string;
  penaltyFormula: string; // e.g. "Aciertos - (Fallos / 3)"
  examQuestionsCount: number;
  examDurationMinutes: number;
}

export type QuestionBlock = 
  | 'legislacion_cv' 
  | 'fundamentos_pae' 
  | 'cuidados_medicoquirurgicos' 
  | 'farmacologia_sva' 
  | 'materno_infantil' 
  | 'salud_comunitaria_salud_publica';

export interface Question {
  id: string;
  oppositionIds: OppositionId[];
  block: QuestionBlock;
  blockName: string;
  topicNumber: number;
  topicTitle: string;
  question: string;
  options: string[];
  correctIndex: number; // 0, 1, 2, 3
  isTrapOrDifficult?: boolean;
  trapWarning?: string; // Explain the trap / distractor
  explanation: {
    correct: string;
    distractors: string[]; // reasons why each distractor is wrong
    legalOrClinicalReference: string;
  };
  sourceExam?: string; // e.g. "OPE Sanitat GVA 2023 - Pregunta 42"
  year?: number;
}

export interface OfficialExam {
  id: string;
  oppositionId: OppositionId;
  title: string;
  subtitle: string;
  year: number;
  organism: string;
  questionsCount: number;
  durationMinutes: number;
  passingScore: number; // out of 10 or 100
  questions: Question[];
}

export interface SyllabusTopic {
  id: string;
  oppositionIds: OppositionId[];
  block: QuestionBlock;
  number: number;
  title: string;
  summary: string;
  readingTimeMinutes: number;
  officialNorms: string[];
  keyPoints: string[];
  sections: {
    title: string;
    content: string;
    highlightBox?: string;
  }[];
}

export interface ClinicalCase {
  id: string;
  title: string;
  service: string;
  patientData: {
    age: number;
    gender: string;
    triageLevel: string;
    vitals: {
      bp: string;
      hr: number;
      spo2: number;
      rr: number;
      temp: number;
      glycemia?: number;
    };
    clinicalDescription: string;
  };
  steps: {
    stepNumber: number;
    question: string;
    options: string[];
    correctIndex: number;
    justification: string;
  }[];
}

export interface MnemonicCard {
  id: string;
  acronym: string;
  title: string;
  category: 'Escalas' | 'Farmacología' | 'Urgencias' | 'Legislación CV' | 'Cuidados';
  explanation: string;
  breakdown: { letter: string; meaning: string; detail?: string }[];
  clinicalTip: string;
  examFrequency: 'Muy Alta' | 'Alta' | 'Media';
}

export interface DownloadableResource {
  id: string;
  title: string;
  category: 'Resúmenes' | 'Tablas Clínicas' | 'Legislación' | 'Plantillas' | 'Procedimientos' | 'Protocolos';
  format: 'PDF' | 'Imprimible';
  pages: number;
  description: string;
  contentHtmlOrMarkdown: string;
  downloadCount: number;
}

export interface ForumPost {
  id: string;
  oppositionId: OppositionId;
  author: {
    username: string;
    avatar: string;
    badge?: string;
  };
  title: string;
  content: string;
  category: 'Temario y Normativa' | 'Dudas de Tests' | 'Impugnaciones' | 'Estrategia y Planificación';
  createdAt: string;
  likes: number;
  likedByCurrentUser?: boolean;
  replies: ForumReply[];
  tags: string[];
}

export interface ForumReply {
  id: string;
  author: {
    username: string;
    avatar: string;
    isVerifiedTutor?: boolean;
  };
  content: string;
  createdAt: string;
  likes: number;
}

export interface ChatMessage {
  id: string;
  room: string;
  sender: string;
  avatar: string;
  text: string;
  timestamp: string;
  isCurrentUser: boolean;
}

export interface StudySession {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  durationMinutes: number;
  organizer: string;
  topic: string;
  participantsCount: number;
  isRegistered?: boolean;
  description: string;
}

export interface RealtimeOposicionCall {
  id: string;
  organism: string;
  scope: string; // "Comunitat Valenciana", "Valencia", "Alicante", "Castellón"
  title: string;
  status: 'Plazo Abierto' | 'Lista Provisional' | 'Fecha Fijada' | 'Próxima Publicación';
  places: number;
  placesBreakdown: { libre: number; promocion: number; diversidad: number };
  deadline: string;
  examDate?: string;
  dogvNum: string;
  dogvUrl: string;
  applicationUrl: string;
  requirements: string[];
}

export interface UserStats {
  totalAnswered: number;
  totalCorrect: number;
  totalIncorrect: number;
  totalBlank: number;
  testsCompleted: number;
  studyMinutes: number;
  streakDays: number;
  lastStudyDate: string;
  blockStats: Record<QuestionBlock, { answered: number; correct: number }>;
  recentScores: { date: string; score: number; testName: string }[];
}

export interface UserProfile {
  username: string;
  avatar: string;
  createdAt: string;
  targetOpposition: OppositionId;
  dailyGoalQuestions: number;
  bookmarkedQuestionIds: string[];
  solvedCaseIds: string[];
  savedMnemonics: string[];
}
