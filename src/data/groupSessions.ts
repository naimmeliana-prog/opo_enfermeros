import { StudySession } from '../types';

export const STUDY_SESSIONS: StudySession[] = [
  {
    id: 'ses-1',
    title: 'Simulacro OPE GVA 2024 en Vivo (70 Preguntas - 90 Minutos)',
    date: '2024-11-15',
    time: '18:00',
    durationMinutes: 90,
    organizer: 'Comunidad OpoSanitat Valencia',
    topic: 'Simulacro Global con Fórmula Oficial (-0.33 fallos)',
    participantsCount: 384,
    isRegistered: true,
    description: 'Simulacro sincronizado en tiempo real con ranking en directo entre los aspirantes a las 3.817 plazas de Sanitat GVA.'
  },
  {
    id: 'ses-2',
    title: 'Masterclass: Legislación Sanitaria CV (Ley 10/2014 & Decreto 74/2007)',
    date: '2024-11-18',
    time: '19:30',
    durationMinutes: 60,
    organizer: 'Prof. J. Martínez (Estatutario GVA)',
    topic: 'Normativa Autonómica y Órganos de la Conselleria',
    participantsCount: 215,
    isRegistered: false,
    description: 'Repaso en directo de las preguntas más repetidas y trampas de legislación sanitaria valenciana de los últimos 10 años.'
  },
  {
    id: 'ses-3',
    title: 'Maratón de Casos Clínicos y Cálculo Rápido de Dosis',
    date: '2024-11-22',
    time: '17:00',
    durationMinutes: 75,
    organizer: 'Grupo Urgencias SAMU / La Fe',
    topic: 'Farmacología, Fluidoterapia y Shock',
    participantsCount: 167,
    isRegistered: false,
    description: 'Resolución conjunta de casos clínicos de urgencias, triaje Manchester y cálculo matemático de diluciones complejas.'
  },
  {
    id: 'ses-4',
    title: 'Sesión Nocturna Pomodoro: Preguntas Trampa Recurrentes',
    date: '2024-11-25',
    time: '21:00',
    durationMinutes: 50,
    organizer: 'Compañeros de Turno Noche',
    topic: '50 Preguntas con mayor tasa de error en la OPE',
    participantsCount: 129,
    isRegistered: true,
    description: 'Sesión intensiva enfocada exclusivamente en trampas de enunciados, excepciones y distractores habituales.'
  }
];
