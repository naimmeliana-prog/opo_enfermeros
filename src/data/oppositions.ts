import { OppositionInfo } from '../types';

export const OPPOSITIONS: OppositionInfo[] = [
  {
    id: 'gva-enfermeria',
    name: 'Conselleria de Sanitat - OPE Enfermería GVA',
    shortName: 'Sanitat GVA',
    organism: 'Generalitat Valenciana - Conselleria de Sanitat',
    scope: 'Comunitat Valenciana (Alicante, Castellón, Valencia)',
    category: 'Enfermera/o (Subgrupo A2 Sanitario)',
    places: 3817,
    status: 'Inscripción abierta',
    estimatedDate: '24 de Noviembre de 2024',
    dogvReference: 'DOGV Núm. 9582 / Res. Conselleria de Sanitat',
    description: 'Convocatoria oficial para provisión de plazas estatutarias fijas de enfermería en centros hospitalarios y de atención primaria del Sistema Sanitario Público Valenciano.',
    penaltyFormula: 'Aciertos - (Fallos / 3) [Cada fallo resta 0,33 puntos]',
    examQuestionsCount: 70,
    examDurationMinutes: 90
  },
  {
    id: 'chguv-valencia',
    name: 'Consorcio Hospital General Universitario de Valencia',
    shortName: 'CHGUV Valencia',
    organism: 'Consorci Hospital General Universitari de València',
    scope: 'Área Metropolitana de Valencia',
    category: 'Enfermero/a Consorcial',
    places: 425,
    status: 'Fecha examen fijada',
    estimatedDate: '15 de Diciembre de 2024',
    dogvReference: 'DOGV Núm. 9641 / Acord CHGUV',
    description: 'Proceso selectivo de plazas de enfermería para el Hospital General de Valencia y su departamento asistencial integrado.',
    penaltyFormula: 'Aciertos - (Fallos / 3.33) [Penalización 25% o 33% según bases]',
    examQuestionsCount: 80,
    examDurationMinutes: 100
  },
  {
    id: 'samu-ses',
    name: 'Servicio de Emergencias Sanitarias CV (SAMU / SVB)',
    shortName: 'SAMU / SES CV',
    organism: 'Conselleria de Sanitat - SES Comunitat Valenciana',
    scope: 'Unidades Móviles SAMU y Bases SES',
    category: 'Enfermero/a SAMU Emergencias',
    places: 190,
    status: 'Lista admitidos publicada',
    estimatedDate: '18 de Enero de 2025',
    dogvReference: 'DOGV Núm. 9710 / Res. SES CV',
    description: 'Puestos de enfermería de soporte vital avanzado (SVA) y coordinación en el Centro de Información y Coordinación de Urgencias (CICU).',
    penaltyFormula: 'Aciertos - (Fallos / 3)',
    examQuestionsCount: 75,
    examDurationMinutes: 90
  },
  {
    id: 'eir-cv',
    name: 'EIR - Enfermera Interna Residente (Plazas CV)',
    shortName: 'EIR CV',
    organism: 'Ministerio de Sanidad & Conselleria de Sanitat CV',
    scope: 'Hospitales docentes y Áreas de Salud CV',
    category: 'Enfermería Especialista (EFyC, Pediatría, Matrona, Salud Mental)',
    places: 312,
    status: 'Inscripción abierta',
    estimatedDate: '25 de Enero de 2025',
    dogvReference: 'BOE Núm. 219 / DOGV Concurrente',
    description: 'Pruebas selectivas para el acceso a plazas de formación sanitaria especializada para la profesión de enfermería en centros acreditados de la CV.',
    penaltyFormula: 'Aciertos - (Fallos / 3)',
    examQuestionsCount: 200,
    examDurationMinutes: 240
  }
];
