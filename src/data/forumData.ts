import { ForumPost } from '../types';

export const INITIAL_FORUM_POSTS: ForumPost[] = [
  {
    id: 'post-1',
    oppositionId: 'gva-enfermeria',
    author: {
      username: 'MartaEnf_VLC',
      avatar: '👩‍⚕️',
      badge: 'Opositora Activa - Valencia'
    },
    title: '¿Pregunta sobre prescripción de faltas graves en la Ley 55/2003?',
    content: 'Hola compañeras/os, haciendo tests de la OPE 2021 de Sanitat me he equivocado con el plazo de prescripción de faltas graves. ¿Eran 2 años o 3 años? En la ley de función pública valenciana creo que ponía 3, pero aquí en el Estatuto Marco dice 2. ¿Confirmáis si siempre prevalece el Estatuto Marco en el examen?',
    category: 'Temario y Normativa',
    createdAt: 'Hace 3 horas',
    likes: 14,
    tags: ['Ley 55/2003', 'Estatuto Marco', 'Faltas Disciplinarias'],
    replies: [
      {
        id: 'rep-1-1',
        author: {
          username: 'Carlos_TutorSanitat',
          avatar: '👨‍⚕️',
          isVerifiedTutor: true
        },
        content: '¡Hola Marta! Efectivamente: para personal estatutario sanitario SIEMPRE prevalece la Ley 55/2003 (Estatuto Marco) como norma sectorial preferente sobre la ley de función pública general. La regla de oro para la OPE de Conselleria es: Leves = 6 meses, Graves = 2 años, Muy graves = 4 años. ¡No dudes en memorizar ese esquema!',
        createdAt: 'Hace 2 horas',
        likes: 22
      },
      {
        id: 'rep-1-2',
        author: {
          username: 'Laura_HospitalLaFe',
          avatar: '👩‍🔬'
        },
        content: '¡Totalmente de acuerdo! Esa pregunta cayó casi literal en la última convocatoria y fue un fallo masivo de gente que se preparaba con temario general.',
        createdAt: 'Hace 1 hora',
        likes: 7
      }
    ]
  },
  {
    id: 'post-2',
    oppositionId: 'gva-enfermeria',
    author: {
      username: 'David_SamuAlicante',
      avatar: '🚑',
      badge: 'Urgencias SAMU'
    },
    title: 'Secuencia de Adrenalina y Amiodarona en FV/TVSP según ERC',
    content: 'En las academias a veces dicen que la Adrenalina va en el 2º choque y otros en el 3º. ¿Podemos confirmar que en la plantilla oficial de la Conselleria de Sanitat se ciñen a las guías ERC vigentes (3er choque)?',
    category: 'Dudas de Tests',
    createdAt: 'Ayer',
    likes: 18,
    tags: ['Soporte Vital Avanzado', 'Guías ERC', 'Farmacología'],
    replies: [
      {
        id: 'rep-2-1',
        author: {
          username: 'Sonia_EnfermeraUCI',
          avatar: '🩺',
          isVerifiedTutor: true
        },
        content: 'Correcto David. Según las guías vigentes del ERC, en ritmos desfibrilables (FV y TVSP): tras el 3er choque se administra 1 mg de Adrenalina IV y 300 mg de Amiodarona IV. La segunda dosis de amiodarona (150 mg) se aplica tras el 5º choque. La plantilla oficial de Sanitat GVA siempre se apega a este estándar.',
        createdAt: 'Ayer',
        likes: 19
      }
    ]
  },
  {
    id: 'post-3',
    oppositionId: 'chguv-valencia',
    author: {
      username: 'Vicente_Castello',
      avatar: '👨‍💼',
      badge: 'CHGUV Candidato'
    },
    title: '¿Dónde consultar la publicación de las sedes de examen del Campus Tarongers?',
    content: 'Para los que os presentáis al Consorcio Hospital General: ¿alguien sabe si han publicado ya la distribución de aulas por apellidos en el aulario de Tarongers?',
    category: 'Estrategia y Planificación',
    createdAt: 'Hace 2 días',
    likes: 9,
    tags: ['CHGUV', 'Sedes', 'Tarongers'],
    replies: [
      {
        id: 'rep-3-1',
        author: {
          username: 'Nuria_Valencia',
          avatar: '👩‍💻'
        },
        content: 'Suelen publicarla unos 10 días naturales antes de la fecha fijada en el portal web de empleo del Consorcio (apartado de Selección de Personal) y en el tablón del DOGV.',
        createdAt: 'Hace 1 día',
        likes: 11
      }
    ]
  }
];
