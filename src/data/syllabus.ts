import { SyllabusTopic } from '../types';

export const SYLLABUS_TOPICS: SyllabusTopic[] = [
  {
    id: 'tema-1',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'legislacion_cv',
    number: 1,
    title: 'Estatuto de Autonomía de la Comunitat Valenciana y Constitución Española',
    summary: 'Principios constitucionales, derecho a la salud (Art. 43 CE) y competencias sanitarias exclusivas de la Generalitat Valenciana (Art. 54 EACV).',
    readingTimeMinutes: 22,
    officialNorms: [
      'Constitución Española de 1978 (Título I, Art. 43)',
      'Ley Orgánica 1/2006, de 10 de abril, de Reforma del Estatuto de Autonomía de la Comunitat Valenciana',
      'Ley 5/1983, de 30 de diciembre, de Gobierno Valenciano'
    ],
    keyPoints: [
      'El Art. 43 de la CE reconoce el derecho a la protección de la salud y atribuye a los poderes públicos la tutela de la salud pública.',
      'El Art. 54 del Estatuto de Autonomía atribuye a la Generalitat competencia exclusiva en materia de organización y administración sanitaria interior.',
      'Las instituciones de la Generalitat son: Les Corts, el President de la Generalitat y el Consell.',
      'Sede de las instituciones: Les Corts tienen su sede en el Palau dels Borja (Valencia).'
    ],
    sections: [
      {
        title: '1. El Derecho a la Salud en la Constitución Española',
        content: `El artículo 43 de la Constitución Española de 1978 se encuentra encuadrado dentro del Capítulo III del Título I, dedicado a los "Principios rectores de la política social y económica". 
Establece literalmente:
1. Se reconoce el derecho a la protección de la salud.
2. Compete a los poderes públicos organizar y tutelar la salud pública a través de medidas preventivas y de las prestaciones y servicios necesarios. La ley establecerá los derechos y deberes de todos al respecto.
3. Los poderes públicos fomentarán la educación sanitaria, la educación física y el deporte. Asimismo facilitarán la adecuada utilización del ocio.

¡Clave de examen!: Al no encontrarse en la Sección 1ª del Capítulo II (derechos fundamentales), el derecho a la salud NO es susceptible de recurso de amparo directo ante el Tribunal Constitucional, sino que solo puede ser alegado de acuerdo con lo que dispongan las leyes de desarrollo ordinarias.`,
        highlightBox: 'Art. 43 CE: Principio rector de la política social, tutelado por ley ordinaria. No permite recurso de amparo directo.'
      },
      {
        title: '2. Competencias Sanitarias de la Generalitat Valenciana',
        content: `El Estatuto de Autonomía de la Comunitat Valenciana (LO 1/2006) dispone en su artículo 54 que corresponde a la Generalitat la competencia exclusiva en materia de:
- Organización, administración y gestión de todas las instituciones sanitarias públicas dentro del territorio de la Comunitat Valenciana.
- La ejecución de la legislación del Estado sobre productos farmacéuticos.
- La sanidad interior y la higiene pública, sin perjuicio de la coordinación general del Estado (Art. 149.1.16ª CE).`,
        highlightBox: 'Competencia exclusiva en organización y gestión del servicio sanitario autonómico.'
      }
    ]
  },
  {
    id: 'tema-2',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'legislacion_cv',
    number: 2,
    title: 'Ley 10/2014 de Salud de la Comunitat Valenciana y Ley 14/1986 General de Sanidad',
    summary: 'Principios rectores del Sistema Sanitario Público Valenciano, ordenación territorial en Departamentos de Salud, derechos del paciente y tarjeta sanitaria SIP.',
    readingTimeMinutes: 28,
    officialNorms: [
      'Ley 10/2014, de 29 de diciembre, de Salud de la Comunitat Valenciana',
      'Ley 14/1986, de 25 de abril, General de Sanidad',
      'Ley 41/2002, reguladora de la autonomía del paciente e historia clínica'
    ],
    keyPoints: [
      'El Sistema Valenciano de Salud se organiza en Departamentos de Salud, que integran la atención primaria y la atención especializada bajo dirección única.',
      'El SIP (Sistema de Información Poblacional) es el registro único de aseguramiento y tarjeta sanitaria de la Comunitat Valenciana.',
      'Principio de equidad, universalidad, accesibilidad y continuidad de cuidados.',
      'Consentimiento informado: verbal por regla general, por escrito en intervenciones quirúrgicas o procedimientos invasivos con riesgo relevante.'
    ],
    sections: [
      {
        title: '1. Principios del Sistema Valenciano de Salud',
        content: `La Ley 10/2014 consagra la universalización de la asistencia sanitaria pública, la atención integral a la salud (promoción, prevención, curación y rehabilitación), la equidad y la superación de las desigualdades territoriales y sociales.
El Departamento de Salud es la demarcación básica del sistema, garantizando la coordinación funcional entre centros de salud y hospitales de referencia.`
      },
      {
        title: '2. Historia Clínica y Consentimiento Informado',
        content: `En la Comunitat Valenciana, la Historia Clínica Electrónica se gestiona mediante los aplicativos Orion Clinic (hospitales) y Abucasis (Atención Primaria). Toda persona tiene derecho a que quede constancia escrita o en soporte técnico fehaciente de todo su proceso patológico.
El consentimiento es revocable libremente por escrito en cualquier momento antes de la intervención.`,
        highlightBox: 'Abucasis (AP) y Orion Clinic (Especializada) integran la historia de salud autonómica.'
      }
    ]
  },
  {
    id: 'tema-3',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'legislacion_cv',
    number: 3,
    title: 'Estatuto Marco del Personal Estatutario (Ley 55/2003) y Prevención de Riesgos',
    summary: 'Régimen estatutario: selección y provisión, situaciones administrativas, derechos y deberes, régimen disciplinario y prevención de riesgos laborales.',
    readingTimeMinutes: 25,
    officialNorms: [
      'Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud',
      'Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales'
    ],
    keyPoints: [
      'Clases de personal estatutario: fijo y temporal (interino, sustitución, eventual por acumulación de tareas).',
      'Situaciones administrativas: servicio activo, servicios especiales, servicios bajo otro régimen, excedencia por servicios en el sector público, excedencia voluntaria, suspensión de funciones.',
      'Faltas muy graves: prescriben a los 4 años. Faltas graves: a los 2 años. Faltas leves: a los 6 meses.',
      'Sanciones por faltas muy graves prescriben a los 4 años. Sanciones por leves prescriben a 1 año.'
    ],
    sections: [
      {
        title: '1. Clasificación del Personal Estatutario',
        content: `El personal estatutario sanitario de formación universitaria se clasifica en Licenciados con título de Especialista (Subgrupo A1) y Diplomados/Graduados universitarios sanitarios como Enfermería (Subgrupo A2).`
      },
      {
        title: '2. Régimen Disciplinario y Plazos de Prescripción',
        content: `¡Pregunta estrella de examen!:
- Falta muy grave: Prescripción de la falta en 4 años. Prescripción de la sanción en 4 años.
- Falta grave: Prescripción de la falta en 2 años. Prescripción de la sanción en 2 años.
- Falta leve: Prescripción de la falta en 6 meses. Prescripción de la sanción en 1 año.`
      }
    ]
  },
  {
    id: 'tema-4',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'fundamentos_pae',
    number: 4,
    title: 'El Proceso de Atención de Enfermería (PAE), Modelos Teóricos y Documentación',
    summary: 'Metodología científica: Valoración de Virginia Henderson y Marjory Gordon. Taxonomías NANDA-I, NOC, NIC y deber de secreto profesional.',
    readingTimeMinutes: 30,
    officialNorms: [
      'Ley 41/2002, reguladora de la autonomía del paciente e historia clínica',
      'Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales',
      'Ley 1/2003, de 28 de enero, de Derechos e Información al Paciente de la Comunitat Valenciana'
    ],
    keyPoints: [
      'Etapas del PAE: 1. Valoración, 2. Diagnóstico, 3. Planificación, 4. Ejecución, 5. Evaluación.',
      'Modelo de Virginia Henderson: 14 necesidades básicas y concepto de independencia/suplencia.',
      'Patrones funcionales de Marjory Gordon (11 patrones).',
      'Formato PES de diagnóstico enfermero real: Problema (etiqueta NANDA) + Etiología (Relacionado con - r/c) + Signos/Síntomas (Manifestado por - m/p).'
    ],
    sections: [
      {
        title: '1. Las 5 Fases del PAE',
        content: `La fase de Valoración es la recogida sistemática y organizada de datos objetivos y subjetivos.
La fase de Diagnóstico emite un juicio clínico.
La fase de Planificación determina prioridades (según Maslow/Kalish), objetivos (NOC) e intervenciones (NIC).
La Evaluación determina el grado de consecución de los resultados esperados.`
      },
      {
        title: '2. Estructura de Diagnósticos Enfermeros NANDA',
        content: `- Diagnóstico real: Problema r/c Etiología m/p Manifestaciones.
- Diagnóstico de riesgo: Problema r/c Factores de riesgo (¡No tiene manifestado por!).
- Diagnóstico de promoción de la salud: Disposición para mejorar... m/p Manifestaciones.`
      }
    ]
  },
  {
    id: 'tema-5',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'farmacologia_sva',
    number: 5,
    title: 'Farmacología Clínica, Cálculo de Dosis y Medicación de Alto Riesgo',
    summary: 'Regla de los correctos, farmacocinética y farmacodinámica, diluciones y antídotos esenciales en Urgencias y Hospitalización.',
    readingTimeMinutes: 35,
    officialNorms: [
      'Ley 10/2014, de 29 de diciembre, de Salud de la Comunitat Valenciana',
      'Decreto 74/2007, de 18 de mayo, de estructura y organización sanitaria en la Comunitat Valenciana'
    ],
    keyPoints: [
      'Los 5 correctos tradicionales ampliados a 10 correctos de administración de medicamentos.',
      'Medicamentos de Alto Riesgo (MAR): Heparinas, Insulinas, Citostáticos, Cloruro Potásico IV, Opiáceos.',
      'Fórmula de goteo: Gotas/minuto = (Volumen en ml * 20 gotas/ml) / (Tiempo en horas * 60 minutos).',
      'Microgotas/minuto = Gotas * 3 = ml / hora.',
      'Antídotos: Paracetamol -> N-acetilcisteína; Opiáceos -> Naloxona; Benzodiacepinas -> Flumazenilo; Heparina -> Sulfato de protamina.'
    ],
    sections: [
      {
        title: '1. Antídotos Clave en Oposiciones GVA',
        content: `1. Heparina no fraccionada: Sulfato de protamina (1 mg neutraliza ~100 UI).
2. Opiáceos (morfina, fentanilo): Naloxona (0,4 mg IV en bolos lentos).
3. Benzodiacepinas (diazepam, lorazepam): Flumazenilo (0,2 mg IV en 15 seg).
4. Intoxicación por Paracetamol: N-Acetilcisteína (protocolo precoz antes de 8-10h).
5. Digoxina: Anticuerpos antidigoxina (Fab fragmentos).
6. Metanol / Etilenglicol: Fomepizol o Etanol.
7. Insecticidas organofosforados: Atropina + Pralidoxima.`
      }
    ]
  },
  {
    id: 'tema-6',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'farmacologia_sva',
    number: 6,
    title: 'Soporte Vital Básico, Avanzado y Atención al Paro Cardiorrespiratorio',
    summary: 'Guías ERC 2021/2025: Cadena de supervivencia, ritmos desfibrilables (FV/TVSP) vs no desfibrilables (AESP/Asistolia) y fármacos en RCP.',
    readingTimeMinutes: 32,
    officialNorms: [
      'Decreto 74/2007, de 18 de mayo, de estructura y organización de la atención sanitaria en la Comunitat Valenciana',
      'Ley 10/2014, de 29 de diciembre, de Salud de la Comunitat Valenciana'
    ],
    keyPoints: [
      'Relación compresiones:ventilaciones en adultos 30:2 con frecuencia 100-120 cpm y profundidad 5-6 cm.',
      'Ritmos desfibrilables: Fibrilación Ventricular (FV) y Taquicardia Ventricular sin pulso (TVSP). Descarga inmediata 150-200J bifásica.',
      'Adrenalina en ritmos desfibrilables: 1 mg IV tras el 3er choque; repetir cada 3-5 min (cada 2 ciclos de 2 min).',
      'Amiodarona: 300 mg tras el 3er choque; 150 mg tras el 5º choque.',
      'En ritmos NO desfibrilables (Asistolia y AESP): Adrenalina 1 mg lo antes posible (primer ciclo).'
    ],
    sections: [
      {
        title: '1. Secuencia de Fármacos en SVA Adulto',
        content: `Ritmos Desfibrilables (FV / TVSP):
- Choque 1 -> RCP 2 min.
- Choque 2 -> RCP 2 min.
- Choque 3 -> RCP 2 min + ADRENALINA 1 mg IV + AMIODARONA 300 mg IV (o Lidocaína 100 mg).
- Choque 5 -> AMIODARONA 150 mg IV.`
      }
    ]
  },
  {
    id: 'tema-7',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'cuidados_medicoquirurgicos',
    number: 7,
    title: 'Cuidados de Heridas y Úlceras por Presión (UPP)',
    summary: 'Escalas de valoración de riesgo (Braden, Norton), estadios de las UPP según GNEAUPP y apósitos en cura en ambiente húmedo.',
    readingTimeMinutes: 26,
    officialNorms: [
      'Decreto 74/2007, de 18 de mayo, de estructura y organización sanitaria en la Comunitat Valenciana',
      'Ley 10/2014, de 29 de diciembre, de Salud de la Comunitat Valenciana'
    ],
    keyPoints: [
      'Escala de Braden: 6 subescalas (Percepción sensorial, Exposición a humedad, Actividad, Movilidad, Nutrición, Roce y cizallamiento). Puntuación menor = mayor riesgo (≤12 alto riesgo).',
      'Estadios UPP: Grado I (eritema no blanqueable), Grado II (pérdida espesor parcial dermis, flictena), Grado III (pérdida espesor total, tejido graso visible), Grado IV (músculo, tendón o hueso expuesto).',
      'Cura en ambiente húmedo (CAH): Hidrogeles (desbridamiento autolítico), Alginatos e hidrofibras (exudado moderado-alto), Hidrocoloides (exudado bajo-moderado).'
    ],
    sections: [
      {
        title: '1. Diferenciación de Apósito según Exudado y Tejido',
        content: `Exudado escaso + tejido necrótico seco: Hidrogel para hidratar y favorecer desbridamiento autolítico.
Exudado abundante: Alginato cálcico o Hidrofibra de hidrocoloide (absorben hasta 15-20 veces su peso).
Tejido de granulación limpio: Espuma de poliuretano o hidrocoloide fino.`
      }
    ]
  },
  {
    id: 'tema-8',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'salud_comunitaria_salud_publica',
    number: 8,
    title: 'Vacunación y Salud Comunitaria en la Comunitat Valenciana',
    summary: 'Calendario de vacunaciones e inmunizaciones para toda la vida en la CV, cadena de frío y reacciones adversas.',
    readingTimeMinutes: 24,
    officialNorms: [
      'Ley 8/2008, de los Derechos de Salud de Niños y Adolescentes de la Comunitat Valenciana',
      'Ley 10/2014, de 29 de diciembre, de Salud de la Comunitat Valenciana'
    ],
    keyPoints: [
      'Vacunas vivas atenuadas: Triple vírica (SRP), Varicela, Fiebre amarilla, Rotavirus. ¡Contraindicadas en embarazadas e inmunodeprimidos graves!',
      'Cadena de frío: Conservación entre +2ºC y +8ºC. Nunca congelar vacunas adyuvadas con sales de aluminio.',
      'Calendario CV incluye inmunización sistemática frente a VRS con nirsevimab en lactantes desde 2023.',
      'Vacunación frente al VPH: Cobertura sistemática en chicas y chicos a los 12 años.'
    ],
    sections: [
      {
        title: '1. Claves del Calendario Vacunal de la CV',
        content: `En la Comunitat Valenciana se administra la vacuna hexavalente a los 2 y 4 meses (DTPa-VPI-Hib-HB) con recuerdo a los 11 meses.
Nirsevimab (anticuerpo monoclonal frente a VRS) se administra al nacimiento en temporada o en menores de 6 meses.`
      }
    ]
  },
  {
    id: 'tema-9',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'materno_infantil',
    number: 9,
    title: 'Enfermería Materno-Infantil, Gestación y Cuidados Neonatales en la CV',
    summary: 'Control de la gestación en Atención Primaria, etapas del parto, puerperio, test de APGAR, cribados neonatales metabólicos y auditivos.',
    readingTimeMinutes: 28,
    officialNorms: [
      'Ley 8/2008, de los Derechos de Salud de Niños y Adolescentes de la Comunitat Valenciana',
      'Ley 10/2014, de 29 de diciembre, de Salud de la Comunitat Valenciana',
      'Ley 41/2002, reguladora de la autonomía del paciente e historia clínica'
    ],
    keyPoints: [
      'Test de APGAR: Evaluado al minuto 1 y a los 5 minutos de vida. Parámetros (0-2 pts cada uno): Apariencia (color), Pulso (FC), Gesticulación (reflejos), Actividad (tono muscular) y Respiración.',
      'Puntuación APGAR 7-10: Recién nacido vigoroso en estado óptimo. 4-6: Depresión moderada. 0-3: Depresión severa.',
      'Prueba del talón metabólica: Extracción capilar a las 48 horas de vida tras iniciar alimentación láctea para detectar hipotiroidismo congénito, fenilcetonuria, fibrosis quística, etc.',
      'Lactancia materna: Inicio precoz en la primera hora de vida (contacto piel con piel ininterrumpido).'
    ],
    sections: [
      {
        title: '1. Preeclampsia y Emergencias Obstétricas',
        content: `La preeclampsia se define por hipertensión arterial (TAS ≥ 140 o TAD ≥ 90 mmHg) detectada después de la semana 20 de gestación acompañada de proteinuria significativa (> 300 mg en 24 horas).
El Sulfato de Magnesio intravenoso es el fármaco de elección indiscutible para la profilaxis y tratamiento de las convulsiones de la eclampsia.`
      }
    ]
  },
  {
    id: 'tema-10',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'cuidados_medicoquirurgicos',
    number: 10,
    title: 'Urgencias, Emergencias Sanitarias y Triaje Hospitalario y Extrahospitalario',
    summary: 'Sistemas de clasificación y triaje (Modelo Manchester), Servicio de Emergencias Sanitarias (SES/SAMU CV), Código Ictus y Código Infarto.',
    readingTimeMinutes: 30,
    officialNorms: [
      'Decreto 74/2007, de 18 de mayo, de estructura y organización sanitaria en la Comunitat Valenciana',
      'Ley 10/2014, de 29 de diciembre, de Salud de la Comunitat Valenciana',
      'Ley 14/1986, de 25 de abril, General de Sanidad'
    ],
    keyPoints: [
      'Sistema Manchester de Triaje (MTS): 5 niveles de prioridad con código de colores (Rojo = Nivel 1 inmediato 0 min; Naranja = Nivel 2 muy urgente 10 min; Amarillo = Nivel 3 urgente 60 min; Verde = Nivel 4 estándar 120 min; Azul = Nivel 5 no urgente 240 min).',
      'Código Infarto CV: Tiempo puerta-aguja para fibrinolisis < 30 min; Tiempo puerta-balón para angioplastia primaria < 90 min (o < 120 min desde primer contacto médico).',
      'Código Ictus CV: Sospecha con escala Cincinnati (asimetría facial, debilidad en brazo, alteración del habla). Ventana terapéutica habitual para fibrinolisis IV con rtPA < 4.5 horas y trombectomía mecánica < 24 horas.'
    ],
    sections: [
      {
        title: '1. Organización del SAMU y CICU en la Comunitat Valenciana',
        content: `El Centro de Información y Coordinación de Urgencias (CICU) centraliza las llamadas de emergencia sanitaria del 112 en la Comunitat Valenciana, coordinando las unidades SAMU (Soporte Vital Avanzado médico-enfermero), unidades SVA de Enfermería (SVAE) y unidades de Soporte Vital Básico (SVB).`
      }
    ]
  }
];
