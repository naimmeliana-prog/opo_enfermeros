import { RealtimeOposicionCall } from '../types';

export const REALTIME_CALLS: RealtimeOposicionCall[] = [
  {
    id: 'call-gva-2024-main',
    organism: 'Generalitat Valenciana - Conselleria de Sanitat',
    scope: 'Comunitat Valenciana',
    title: 'Convocatoria Proceso Selectivo Ordinario y Estabilización - Enfermeras/os Estatutarios',
    status: 'Plazo Abierto',
    places: 3817,
    placesBreakdown: {
      libre: 2450,
      promocion: 1097,
      diversidad: 270
    },
    deadline: '28 de Noviembre de 2024 (23:59h)',
    examDate: 'Primer trimestre 2025 (Estimado Febrero)',
    dogvNum: 'DOGV Núm. 9724 / Res. 12/10/2024',
    dogvUrl: 'https://dogv.gva.es',
    applicationUrl: 'https://sede.gva.es/es/inicio/procedimientos?id_proc=18536',
    requirements: [
      'Grado o Diplomatura Universitaria en Enfermería',
      'Nacionalidad española o de estado miembro de la UE',
      'Capacidad funcional necesaria para el desempeño',
      'Certificado negativo del Registro Central de Delincuentes Sexuales'
    ]
  },
  {
    id: 'call-chguv-2024',
    organism: 'Consorci Hospital General Universitari de València',
    scope: 'Valencia',
    title: 'OPE 2024 CHGUV - 425 Plazas de Enfermería para el Hospital General y Centros Adscritos',
    status: 'Fecha Fijada',
    places: 425,
    placesBreakdown: {
      libre: 310,
      promocion: 85,
      diversidad: 30
    },
    deadline: 'Plazo de instancias finalizado',
    examDate: '15 de Diciembre de 2024 - 09:30h (Aulario Campus Tarongers)',
    dogvNum: 'DOGV Núm. 9641 / Acord Consorci',
    dogvUrl: 'https://dogv.gva.es',
    applicationUrl: 'http://chguv.san.gva.es/es/trabajar-en-el-consorcio',
    requirements: [
      'Grado/Diplomatura en Enfermería',
      'Acreditación de méritos según baremo CHGUV',
      'Carnet B (para unidades móviles periféricas si procede)'
    ]
  },
  {
    id: 'call-samu-ses-2024',
    organism: 'Servicio de Emergencias Sanitarias (SES CV)',
    scope: 'Comunitat Valenciana',
    title: 'Bolsa Extraordinaria y OPE Enfermería de Emergencias Extrahospitalarias SAMU/CICU',
    status: 'Lista Provisional',
    places: 190,
    placesBreakdown: {
      libre: 140,
      promocion: 38,
      diversidad: 12
    },
    deadline: 'Alegaciones a listas provisionales: Hasta 14 de Noviembre',
    examDate: 'Enero 2025',
    dogvNum: 'DOGV Núm. 9710 / Res. SES CV',
    dogvUrl: 'https://dogv.gva.es',
    applicationUrl: 'https://sede.gva.es',
    requirements: [
      'Grado/Diplomatura en Enfermería',
      'Certificado de capacitación o máster en Urgencias/Emergencias Sanitarias (baremable prioritario)',
      'Acreditación en Soporte Vital Avanzado (SVA)'
    ]
  },
  {
    id: 'call-dip-valencia',
    organism: 'Diputación Provincial de Valencia',
    scope: 'Valencia',
    title: 'Bolsa de Empleo Temporal y OPE - Enfermería Centros Asistenciales y Psiquiátrico de Bétera',
    status: 'Plazo Abierto',
    places: 42,
    placesBreakdown: {
      libre: 34,
      promocion: 6,
      diversidad: 2
    },
    deadline: '05 de Diciembre de 2024',
    examDate: 'Por determinar',
    dogvNum: 'BOP Valencia Núm. 198 / DOGV 9731',
    dogvUrl: 'https://dogv.gva.es',
    applicationUrl: 'https://sede.dival.es',
    requirements: [
      'Título oficial de Grado o Diplomatura en Enfermería',
      'Valenciano elemental / C1 baremable según normativa autonómica'
    ]
  },
  {
    id: 'call-ayto-valencia',
    organism: 'Ajuntament de València (Sanitat y Salud)',
    scope: 'Valencia',
    title: 'OPE Especialidad Enfermería del Trabajo y Salud Escolar Municipal',
    status: 'Próxima Publicación',
    places: 16,
    placesBreakdown: {
      libre: 12,
      promocion: 3,
      diversidad: 1
    },
    deadline: 'Bases aprobadas en Junta de Gobierno. Pendiente publicación DOGV',
    examDate: 'Primer semestre 2025',
    dogvNum: 'Pendiente DOGV',
    dogvUrl: 'https://valencia.es',
    applicationUrl: 'https://sede.valencia.es',
    requirements: [
      'Grado en Enfermería',
      'Permiso B de conducir'
    ]
  }
];
