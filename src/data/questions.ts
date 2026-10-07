import { Question } from '../types';

export const QUESTIONS_BANK: Question[] = [
  // LEGISLACIÓN COMUNITAT VALENCIANA
  {
    id: 'q-leg-01',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses'],
    block: 'legislacion_cv',
    blockName: 'Legislación y Normativa Sanitaria CV',
    topicNumber: 1,
    topicTitle: 'Estatuto de Autonomía de la Comunitat Valenciana',
    question: 'Según el artículo 54 del Estatuto de Autonomía de la Comunitat Valenciana, ¿qué tipo de competencia ostenta la Generalitat en materia de sanidad interior y ordenación de instituciones sanitarias públicas?',
    options: [
      'Competencia exclusiva',
      'Competencia delegada del Estado por Ley Orgánica',
      'Competencia compartida sujeta a autorización del Consejo Interterritorial',
      'Competencia concurrente sin potestad reglamentaria'
    ],
    correctIndex: 0,
    isTrapOrDifficult: true,
    trapWarning: '¡Cuidado con confundir la sanidad exterior (exclusiva del Estado art. 149.1.16ª CE) con la sanidad interior y organización del servicio de salud autonómico (exclusiva de la Generalitat art. 54 EACV)!',
    explanation: {
      correct: 'El artículo 54 del Estatuto de Autonomía de la Comunitat Valenciana atribuye a la Generalitat la competencia exclusiva en la organización, administración y gestión de todas las instituciones sanitarias públicas dentro de su territorio.',
      distractors: [
        'Incorrecta: No es una competencia delegada, emana directamente del Estatuto de Autonomía con rango de Ley Orgánica.',
        'Incorrecta: La competencia autonómica no está condicionada a autorización previa del Consejo Interterritorial, el cual es un órgano de coordinación.',
        'Incorrecta: La Generalitat sí ostenta potestad reglamentaria y legislativa plena en su ámbito competencial.'
      ],
      legalOrClinicalReference: 'Art. 54 de la Ley Orgánica 1/2006 (Estatuto de Autonomía de la Comunitat Valenciana).'
    },
    sourceExam: 'OPE Sanitat GVA 2023 - Turno Libre',
    year: 2023
  },
  {
    id: 'q-leg-02',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses'],
    block: 'legislacion_cv',
    blockName: 'Legislación y Normativa Sanitaria CV',
    topicNumber: 2,
    topicTitle: 'Ley 10/2014 de Salud de la Comunitat Valenciana',
    question: 'En el marco de la Ley 10/2014, de Salud de la Comunitat Valenciana, ¿cuál es la demarcación geográfica y funcional básica del Sistema Valenciano de Salud para la gestión integrada de la atención primaria y especializada?',
    options: [
      'El Departamento de Salud',
      'El Área Sanitaria Provincial',
      'La Zona Básica de Salud',
      'El Distrito Metropolitano Asistencial'
    ],
    correctIndex: 0,
    isTrapOrDifficult: false,
    explanation: {
      correct: 'El Departamento de Salud es la demarcación básica del Sistema Valenciano de Salud, responsabilizándose de la dirección y gestión integrada de los recursos y prestaciones de atención primaria y especializada.',
      distractors: [
        'Incorrecta: El área sanitaria provincial es un concepto administrativo general, no la unidad básica del modelo valenciano.',
        'Incorrecta: La Zona Básica de Salud es el marco territorial exclusivo de la Atención Primaria, pero no integra la atención especializada hospitalaria.',
        'Incorrecta: "Distrito Metropolitano" es una denominación inexistente en la estructura de la Ley 10/2014 CV.'
      ],
      legalOrClinicalReference: 'Art. 18 de la Ley 10/2014, de 29 de diciembre, de Salud de la Comunitat Valenciana.'
    },
    sourceExam: 'OPE Sanitat GVA 2021',
    year: 2021
  },
  {
    id: 'q-leg-03',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses'],
    block: 'legislacion_cv',
    blockName: 'Legislación y Normativa Sanitaria CV',
    topicNumber: 3,
    topicTitle: 'Estatuto Marco (Ley 55/2003) - Régimen Disciplinario',
    question: 'Conforme a la Ley 55/2003, de 16 de diciembre, del Estatuto Marco, ¿en qué plazo prescriben las faltas disciplinarias MUY GRAVES cometidas por el personal estatutario?',
    options: [
      'A los 4 años',
      'A los 2 años',
      'A los 3 años',
      'A los 6 meses'
    ],
    correctIndex: 0,
    isTrapOrDifficult: true,
    trapWarning: '¡Pregunta recurrente! Recuerda la escala 6 meses (leves), 2 años (graves) y 4 años (muy graves). No confundir con la Ley de Función Pública General que en algunas CCAA fija 3 años.',
    explanation: {
      correct: 'Según el artículo 74.1 de la Ley 55/2003, las faltas muy graves prescriben a los 4 años a contar desde su comisión.',
      distractors: [
        'Incorrecta: A los 2 años prescriben las faltas calificadas como graves.',
        'Incorrecta: El plazo de 3 años aplica en otros regímenes funcionariales, pero NO en el Estatuto Marco de los servicios de salud.',
        'Incorrecta: A los 6 meses prescriben las faltas leves.'
      ],
      legalOrClinicalReference: 'Art. 74 de la Ley 55/2003 del Estatuto Marco del Personal Estatutario.'
    },
    sourceExam: 'OPE Sanitat GVA 2018',
    year: 2018
  },

  // FARMACOLOGÍA Y SOPORTE VITAL (URGENCIAS)
  {
    id: 'q-farm-01',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'farmacologia_sva',
    blockName: 'Farmacología y Soporte Vital Avanzado',
    topicNumber: 5,
    topicTitle: 'Antídotos y Medicación de Urgencias',
    question: 'Durante la guardia, un paciente en tratamiento con bomba de perfusión de heparina sódica presenta sangrado activo masivo y sobredosificación crítica. ¿Cuál es el antídoto específico que debe administrar el profesional de enfermería?',
    options: [
      'Sulfato de protamina por vía intravenosa lenta',
      'Vitamina K1 (fitomenadiona) por vía intramuscular profunda',
      'Flumazenilo 0,5 mg en bolo IV rápido',
      'Complejo protrombínico con calcio gluconato'
    ],
    correctIndex: 0,
    isTrapOrDifficult: true,
    trapWarning: '¡Ojo con confundir anticoagulantes! Heparina = Sulfato de protamina. Acenocumarol/Warfarina (Sintrom) = Vitamina K / Complejo protrombínico.',
    explanation: {
      correct: 'El sulfato de protamina es el agente neutralizante de la heparina no fraccionada; 1 mg de protamina neutraliza aproximadamente 100 UI de heparina. Debe administrarse lentamente para evitar hipotensión severa.',
      distractors: [
        'Incorrecta: La Fitomenadiona (vitamina K) es el antídoto para antagonistas de la vitamina K como el Sintrom (acenocumarol), no para la heparina.',
        'Incorrecta: El Flumazenilo es el antídoto específico de las benzodiacepinas.',
        'Incorrecta: El concentrado de complejo protrombínico se utiliza de urgencia ante hemorragias por anticoagulantes orales o antivitamina K.'
      ],
      legalOrClinicalReference: 'Guía de Farmacoterapia en Urgencias Hospitalarias y Recomendaciones ISMP.'
    },
    sourceExam: 'OPE Sanitat GVA 2023 - Turno Libre',
    year: 2023
  },
  {
    id: 'q-farm-02',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'farmacologia_sva',
    blockName: 'Farmacología y Soporte Vital Avanzado',
    topicNumber: 6,
    topicTitle: 'Soporte Vital Avanzado en PCR (Guías ERC)',
    question: 'En un paciente adulto en parada cardiorrespiratoria con ritmo inicial de Fibrilación Ventricular (FV), tras administrar el tercer choque y reiniciar inmediatamente las compresiones torácicas durante el 3er ciclo, ¿qué fármacos y dosis están indicados según las recomendaciones ERC vigentes?',
    options: [
      'Adrenalina 1 mg IV y Amiodarona 300 mg IV',
      'Adrenalina 1 mg IV únicamente; la amiodarona se reserva para el 5º choque',
      'Amiodarona 150 mg IV y Bicarbonato 1M 50 ml',
      'Atropina 3 mg IV y Sulfato de magnesio 2 g'
    ],
    correctIndex: 0,
    isTrapOrDifficult: true,
    trapWarning: '¡Clásica trampa de examen!: En ritmos desfibrilables (FV/TVSP) la Adrenalina NO se pone en el 1er choque, se administra tras el 3er choque junto con Amiodarona 300 mg. En asistolia/AESP, la adrenalina va de inmediato.',
    explanation: {
      correct: 'Tras el 3er choque no efectivo en FV/TVSP refractaria se administra Adrenalina 1 mg IV diluida y Amiodarona 300 mg IV en bolo. Tras el 5º choque se administra una segunda dosis de Amiodarona (150 mg).',
      distractors: [
        'Incorrecta: La primera dosis de amiodarona es de 300 mg tras el 3er choque, no se espera al 5º.',
        'Incorrecta: La dosis inicial de amiodarona es 300 mg (no 150 mg) y el bicarbonato no está indicado de rutina salvo acidosis metabólica previa o hiperpotasemia.',
        'Incorrecta: La atropina fue retirada de los algoritmos de parada cardiorrespiratoria del ERC.'
      ],
      legalOrClinicalReference: 'Guías de Soporte Vital Avanzado en Adultos - European Resuscitation Council (ERC).'
    },
    sourceExam: 'OPE Sanitat GVA 2021',
    year: 2021
  },
  {
    id: 'q-farm-03',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'farmacologia_sva',
    blockName: 'Farmacología y Soporte Vital Avanzado',
    topicNumber: 5,
    topicTitle: 'Cálculo de Dosis y Velocidad de Perfusión',
    question: 'Se pauta a un paciente una perfusión de 1.500 ml de Suero Glucosado al 5% para infundir en 24 horas a través de un sistema de gotero convencional estándar (1 ml = 20 gotas). ¿A cuántas gotas por minuto debe programarse?',
    options: [
      '21 gotas por minuto',
      '62 gotas por minuto',
      '15 gotas por minuto',
      '31 gotas por minuto'
    ],
    correctIndex: 0,
    isTrapOrDifficult: false,
    explanation: {
      correct: 'Fórmula: Gotas/min = (Volumen ml * 20) / (Horas * 60) = (1500 * 20) / (24 * 60) = 30000 / 1440 = 20,83 ≈ 21 gotas/minuto.',
      distractors: [
        'Incorrecta: 62 gotas/min correspondería a pasar 1500 ml en solo 8 horas.',
        'Incorrecta: 15 gotas/min correspondería a 1.000 ml en 24 horas.',
        'Incorrecta: 31 gotas/min equivaldría a infundir más de 2.200 ml en 24 horas.'
      ],
      legalOrClinicalReference: 'Cálculo y dosimetría de fluidoterapia en enfermería.'
    },
    sourceExam: 'Consorcio Hospital General de Valencia 2022',
    year: 2022
  },

  // FUNDAMENTOS DE ENFERMERÍA Y PAE
  {
    id: 'q-pae-01',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'fundamentos_pae',
    blockName: 'Fundamentos de Enfermería y PAE',
    topicNumber: 4,
    topicTitle: 'Taxonomía Diagnóstica NANDA-I',
    question: 'De acuerdo con la metodología NANDA-I, ¿cuál de las siguientes afirmaciones describe con precisión la formulación de un diagnóstico enfermero de RIESGO?',
    options: [
      'Consta de etiqueta diagnóstica relacionada con (r/c) factores de riesgo, careciendo de manifestaciones o signos (m/p)',
      'Requiere obligatoriamente etiqueta diagnóstica, factores relacionados y características definitorias observables',
      'Se formula siempre precedido por la locución "Disposición para mejorar..."',
      'Solamente puede ser emitido por un facultativo especialista de área médica'
    ],
    correctIndex: 0,
    isTrapOrDifficult: true,
    trapWarning: '¡Trampa común de examen!: Un diagnóstico de riesgo NO tiene características definitorias (m/p) porque el problema AÚN NO HA OCURRIDO. Si tuviera m/p, sería un diagnóstico real.',
    explanation: {
      correct: 'Los diagnósticos de riesgo describen vulnerabilidad y se componen únicamente del problema y los factores de riesgo (r/c). Al no haberse materializado aún el problema, no existen manifestaciones clínicas (m/p).',
      distractors: [
        'Incorrecta: La presencia obligatoria de características definitorias define al diagnóstico real (PES: problema, etiología y signos).',
        'Incorrecta: "Disposición para..." es la estructura de los diagnósticos de promoción de la salud.',
        'Incorrecta: El diagnóstico enfermero es de competencia autónoma y privativa del profesional de enfermería.'
      ],
      legalOrClinicalReference: 'NANDA International: Definiciones y Clasificación 2021-2023 / 2024-2026.'
    },
    sourceExam: 'OPE Sanitat GVA 2023',
    year: 2023
  },
  {
    id: 'q-pae-02',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'fundamentos_pae',
    blockName: 'Fundamentos de Enfermería y PAE',
    topicNumber: 4,
    topicTitle: 'Modelos de Enfermería - Virginia Henderson',
    question: 'En el modelo conceptual de Virginia Henderson, ¿cómo se define el papel de la enfermera cuando el paciente carece transitoriamente de la capacidad física o volitiva para satisfacer sus 14 necesidades?',
    options: [
      'Fuerza de suplencia o ayuda sustitutiva',
      'Agente terapéutico de control social',
      'Coordinador del sistema de autocuidado de déficit',
      'Evaluador adaptativo de estímulos focales'
    ],
    correctIndex: 0,
    isTrapOrDifficult: false,
    explanation: {
      correct: 'Virginia Henderson postula que la enfermera asiste al paciente ayudándole a lograr la independencia o supliendo aquello de lo que carece (fuerza, voluntad o conocimiento) como suplente o sustituta.',
      distractors: [
        'Incorrecta: Agente de control social es una concepción sociológica ajena a Henderson.',
        'Incorrecta: El "déficit de autocuidado" es el núcleo de la teoría de Dorothea Orem, no de Henderson.',
        'Incorrecta: Los "estímulos focales y adaptación" corresponden al modelo de Callista Roy.'
      ],
      legalOrClinicalReference: 'Virginia Henderson: Principios básicos de los cuidados de enfermería.'
    },
    sourceExam: 'Consorcio Hospital General 2022',
    year: 2022
  },

  // CUIDADOS MÉDICO-QUIRÚRGICOS Y HERIDAS
  {
    id: 'q-cuid-01',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'cuidados_medicoquirurgicos',
    blockName: 'Cuidados Médico-Quirúrgicos y Heridas',
    topicNumber: 7,
    topicTitle: 'Estadios de Úlceras por Presión (UPP)',
    question: 'Un paciente encamado presenta en región sacra una lesión caracterizada por pérdida total del grosor de la piel con necrosis del tejido subcutáneo visible que no llega a exponer la fascia profunda, músculo ni hueso subyacente. ¿A qué estadio o grado de UPP corresponde según la clasificación GNEAUPP?',
    options: [
      'Estadio / Grado III',
      'Estadio / Grado II',
      'Estadio / Grado IV',
      'Estadio / Grado I'
    ],
    correctIndex: 0,
    isTrapOrDifficult: true,
    trapWarning: '¡Ojo con el límite entre grado III y IV!: En el grado III el tejido celular subcutáneo puede ser visible pero NUNCA hueso, tendón o músculo (eso sería grado IV).',
    explanation: {
      correct: 'El Grado III implica la pérdida total del grosor de la piel con lesión o necrosis del tejido celular subcutáneo hasta la fascia subyacente, sin sobrepasarla.',
      distractors: [
        'Incorrecta: El Grado II es una pérdida parcial del grosor cutáneo que afecta a dermis/epidermis (ampolla o flictena).',
        'Incorrecta: El Grado IV se define por exposición directa de músculo, tendón, articulación o hueso.',
        'Incorrecta: El Grado I es eritema cutáneo no blanqueable con piel intacta.'
      ],
      legalOrClinicalReference: 'Documentos de Posicionamiento GNEAUPP y Guía UPP Conselleria de Sanitat GVA.'
    },
    sourceExam: 'OPE Sanitat GVA 2021',
    year: 2021
  },
  {
    id: 'q-cuid-02',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'cuidados_medicoquirurgicos',
    blockName: 'Cuidados Médico-Quirúrgicos y Heridas',
    topicNumber: 7,
    topicTitle: 'Escala de Braden para Riesgo de UPP',
    question: 'En la escala de valoración de riesgo de úlceras por presión de Braden, ¿cuál de los siguientes enunciados es CORRECTO respecto a su puntuación?',
    options: [
      'A menor puntuación obtenida en la escala, MAYOR es el riesgo de desarrollar una UPP',
      'Una puntuación de 23 puntos indica riesgo muy alto de úlcera',
      'A mayor puntuación en la escala, mayor es la vulnerabilidad del paciente',
      'Evalúa 8 subescalas que puntúan de 1 a 10 cada una'
    ],
    correctIndex: 0,
    isTrapOrDifficult: true,
    trapWarning: '¡Clásica inversión de escalas!: En Braden, Norton y Glasgow a menor puntuación peor estado / mayor riesgo. En cambio, en Downton o Norton invertida a mayor puntuación peor estado. ¡No te fíes!',
    explanation: {
      correct: 'En la escala de Braden la puntuación oscila entre 6 y 23. Una puntuación baja (≤12) clasifica al paciente en alto/muy alto riesgo de presentar UPP.',
      distractors: [
        'Incorrecta: 23 es la puntuación máxima e indica paciente sin riesgo o riesgo mínimo.',
        'Incorrecta: Es una escala inversamente proporcional; mayor puntuación significa mejor estado funcional.',
        'Incorrecta: Consta de 6 subescalas (percepción sensorial, humedad, actividad, movilidad, nutrición y fricción/cizallamiento).'
      ],
      legalOrClinicalReference: 'Escala de Braden de Valoración del Riesgo de UPP.'
    },
    sourceExam: 'OPE Sanitat GVA 2018',
    year: 2018
  },

  // SALUD COMUNITARIA Y VACUNAS CV
  {
    id: 'q-com-01',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'salud_comunitaria_salud_publica',
    blockName: 'Salud Comunitaria y Vacunaciones CV',
    topicNumber: 8,
    topicTitle: 'Cadena de Frío y Clasificación de Vacunas',
    question: '¿Cuál de las siguientes vacunas incluidas en los programas sanitarios está clasificada como de MICROORGANISMOS VIVOS ATENUADOS y, por tanto, está FORMALMENTE CONTRAINDICADA durante el embarazo?',
    options: [
      'Vacuna Triple Vírica (Sarampión, Rubeola, Parotiditis)',
      'Vacuna frente al Tétanos y Difteria (Td)',
      'Vacuna frente a la Hepatitis B (HB)',
      'Vacuna antigripal inactivada convencional'
    ],
    correctIndex: 0,
    isTrapOrDifficult: true,
    trapWarning: '¡Pregunta recurrente! Recuerda la regla mnemotécnica de vivas atenuadas: "La Fiebre Amarilla y el Rota-Virus hacen el Trío (Triple Vírica) con la Varicela". ¡Todas contraindicadas en embarazo!',
    explanation: {
      correct: 'La vacuna Triple Vírica contiene virus vivos atenuados y su administración está contraindicada en mujeres embarazadas por riesgo teórico de transmisión fetal. Se debe recomendar evitar embarazo durante las 4 semanas posteriores.',
      distractors: [
        'Incorrecta: La Td es una vacuna de toxoides inactivados, segura y recomendada durante la gestación (especialmente dTpa para tos ferina).',
        'Incorrecta: La vacuna de la Hepatitis B es recombinante inactivada, compatible con el embarazo.',
        'Incorrecta: La vacuna antigripal inactivada está expresamente recomendada en cualquier trimestre de la gestación.'
      ],
      legalOrClinicalReference: 'Calendario de Vacunaciones de la Comunitat Valenciana y Guía de Vacunación en Adultos.'
    },
    sourceExam: 'OPE Sanitat GVA 2023 - Turno Libre',
    year: 2023
  },
  {
    id: 'q-com-02',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'salud_comunitaria_salud_publica',
    blockName: 'Salud Comunitaria y Vacunaciones CV',
    topicNumber: 8,
    topicTitle: 'Cadena de Frío',
    question: 'En el almacén de un Centro de Salud de la Comunitat Valenciana, ¿en qué rango estricto de temperatura debe mantenerse el frigorífico de vacunas para preservar la cadena de frío?',
    options: [
      'Entre +2 ºC y +8 ºC',
      'Entre 0 ºC y +4 ºC',
      'Entre -5 ºC y +5 ºC',
      'Entre +5 ºC y +12 ºC'
    ],
    correctIndex: 0,
    isTrapOrDifficult: false,
    explanation: {
      correct: 'La temperatura estándar para la conservación de vacunas es de +2 ºC a +8 ºC, con una temperatura óptima ideal de +4 ºC a +5 ºC.',
      distractors: [
        'Incorrecta: Temperaturas por debajo de +2 ºC entrañan grave riesgo de congelación de vacunas adyuvadas con aluminio, inactivándolas irreversiblemente.',
        'Incorrecta: Nunca deben almacenarse bajo cero las vacunas habituales de centro de salud.',
        'Incorrecta: Superar los +8 ºC degrada rápidamente la potencia inmunógena del antígeno.'
      ],
      legalOrClinicalReference: 'Protocolo de Mantenimiento de la Cadena de Frío en Centros de Salud GVA.'
    },
    sourceExam: 'OPE Sanitat GVA 2021',
    year: 2021
  },

  // CASOS Y PREGUNTAS TRAMPA ADICIONALES
  {
    id: 'q-trap-03',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'farmacologia_sva',
    blockName: 'Farmacología y Soporte Vital Avanzado',
    topicNumber: 5,
    topicTitle: 'Cloruro Potásico Intravenoso (KCl)',
    question: 'Respecto a la administración de Cloruro Potásico (KCl) por vía intravenosa, ¿cuál de las siguientes prácticas está ABSOLUTAMENTE PROHIBIDA bajo cualquier circunstancia?',
    options: [
      'Administración en bolo intravenoso directo o sin diluir',
      'Perfusión a una concentración máxima de 40 mEq/litro por vía periférica',
      'Infusión continua mediante bomba de perfusión volumétrica',
      'Monitorización electrocardiográfica continua en perfusiones a ritmos elevados'
    ],
    correctIndex: 0,
    isTrapOrDifficult: true,
    trapWarning: '¡Pregunta de seguridad crítica!: El Cloruro Potásico en bolo directo produce paro cardíaco fulminante e irreversible por fibrilación ventricular/asistolia.',
    explanation: {
      correct: 'El KCl es un Medicamento de Alto Riesgo (MAR) de máxima alerta. NUNCA se administra en inyección intravenosa directa en bolo, debe infundirse siempre rigurosamente diluido y a velocidad controlada.',
      distractors: [
        'Incorrecta: 40 mEq/L es el límite de seguridad habitual recomendado para venas periféricas a fin de evitar flebitis química.',
        'Incorrecta: La infusión mediante bomba de infusión es la vía de elección recomendada obligatoria.',
        'Incorrecta: La monitorización ECG es una medida de seguridad necesaria ante ritmos de reposición mayores a 10-20 mEq/h.'
      ],
      legalOrClinicalReference: 'Alerta de Seguridad del ISMP: Cloruro Potásico Intravenoso.'
    },
    sourceExam: 'OPE Sanitat GVA 2023',
    year: 2023
  },
  {
    id: 'q-trap-04',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'cuidados_medicoquirurgicos',
    blockName: 'Cuidados Médico-Quirúrgicos y Heridas',
    topicNumber: 7,
    topicTitle: 'Escala de Coma de Glasgow (GCS)',
    question: 'En la valoración neurológica mediante la Escala de Coma de Glasgow, un paciente que no abre los ojos ante estímulos dolorosos, emite sonidos incomprensibles y presenta respuesta motora de flexión anormal (postura de decorticación), ¿qué puntuación exacta tiene?',
    options: [
      '6 puntos (Ocular: 1, Verbal: 2, Motora: 3)',
      '7 puntos (Ocular: 1, Verbal: 3, Motora: 3)',
      '5 puntos (Ocular: 1, Verbal: 2, Motora: 2)',
      '8 puntos (Ocular: 2, Verbal: 2, Motora: 4)'
    ],
    correctIndex: 0,
    isTrapOrDifficult: true,
    trapWarning: '¡Ojo con la puntuación motora!: Flexión anormal o decorticación = 3 puntos. Extensión anormal o descerebración = 2 puntos. Ninguna respuesta = 1 punto.',
    explanation: {
      correct: 'Apertura ocular: Ninguna = 1 punto. Respuesta verbal: Sonidos incomprensibles = 2 puntos. Respuesta motora: Flexión anormal (decorticación) = 3 puntos. Total: 1 + 2 + 3 = 6 puntos (TCE grave).',
      distractors: [
        'Incorrecta: Respuesta verbal de 3 puntos correspondería a palabras inapropiadas, no sonidos incomprensibles.',
        'Incorrecta: 5 puntos sumaría con respuesta motora de extensión (2 puntos).',
        'Incorrecta: Respuesta ocular al dolor puntúa 2; aquí no abre los ojos (1 punto).'
      ],
      legalOrClinicalReference: 'Teasdale & Jennett: Glasgow Coma Scale.'
    },
    sourceExam: 'Consorcio Hospital General de Valencia 2022',
    year: 2022
  },

  // PREGUNTAS ADICIONALES PARA SIMULACIÓN DINÁMICA
  {
    id: 'q-leg-04',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses'],
    block: 'legislacion_cv',
    blockName: 'Legislación y Normativa Sanitaria CV',
    topicNumber: 2,
    topicTitle: 'Historia Clínica y Aplicativos Sanitarios CV',
    question: 'En el Sistema Sanitario Público de la Comunitat Valenciana, ¿cuáles son los sistemas de información corporativos utilizados como Historia Clínica Electrónica en Atención Primaria y en Atención Especializada hospitalaria respectivamente?',
    options: [
      'Abucasis en Atención Primaria y Orion Clinic en Atención Especializada',
      'Diraya en Atención Primaria e IANUS en Atención Especializada',
      'Medora en Atención Primaria y Selene en Atención Especializada',
      'Mambrino XXI en Atención Primaria y Drago en Atención Especializada'
    ],
    correctIndex: 0,
    isTrapOrDifficult: false,
    explanation: {
      correct: 'Abucasis es el aplicativo oficial de historia de salud en los Centros de Salud (Atención Primaria) y Orion Clinic es el aplicativo de gestión clínica hospitalaria de la Conselleria de Sanitat GVA.',
      distractors: [
        'Incorrecta: Diraya es el sistema de Andalucía e IANUS de Galicia.',
        'Incorrecta: Medora corresponde a Castilla y León y Selene a otras CCAA.',
        'Incorrecta: Mambrino XXI es de Castilla-La Mancha y Drago de Canarias.'
      ],
      legalOrClinicalReference: 'Plan Estratégico de Sistemas de Información de la Conselleria de Sanitat GVA.'
    },
    sourceExam: 'OPE Sanitat GVA 2021',
    year: 2021
  },
  {
    id: 'q-leg-05',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia'],
    block: 'legislacion_cv',
    blockName: 'Legislación y Normativa Sanitaria CV',
    topicNumber: 3,
    topicTitle: 'Ley 41/2002 Autonomía del Paciente e Instrucciones Previas',
    question: 'Conforme a la Ley 41/2002 y la Ley 1/2003 de la Comunitat Valenciana sobre Voluntades Anticipadas, ¿en cuál de los siguientes supuestos es OBLIGATORIO recabar el consentimiento informado del paciente por ESCRITO?',
    options: [
      'Intervenciones quirúrgicas, procedimientos diagnósticos o terapéuticos invasores y procedimientos con riesgo notorio o previsible',
      'Cualquier administración de medicación por vía oral o intramuscular en consulta ambulatoria',
      'Extracción rutinaria de analítica sanguínea venosa para control básico de salud',
      'Exploración física preventiva mediante auscultación y toma de constantes'
    ],
    correctIndex: 0,
    isTrapOrDifficult: true,
    trapWarning: '¡Regla general vs excepción!: El consentimiento informado es VERBAL por regla general. Solo es por ESCRITO en intervenciones quirúrgicas, procedimientos invasores o con riesgos notorios para la salud del paciente.',
    explanation: {
      correct: 'El artículo 8.2 de la Ley 41/2002 exige consentimiento por escrito en intervenciones quirúrgicas, procedimientos invasores y, en general, aplicación de procedimientos que suponen riesgos o repercusión notable en la salud del paciente.',
      distractors: [
        'Incorrecta: La administración rutinaria de fármacos no requiere consentimiento escrito formal, basta con la información verbal y aceptación.',
        'Incorrecta: Las venopunciones diagnósticas estándar no exigen documento formal firmado.',
        'Incorrecta: La exploración física rutinaria opera bajo consentimiento tácito o verbal.'
      ],
      legalOrClinicalReference: 'Art. 8 de la Ley 41/2002 reguladora de la autonomía del paciente.'
    },
    sourceExam: 'OPE Sanitat GVA 2023',
    year: 2023
  },
  {
    id: 'q-farm-04',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'farmacologia_sva',
    blockName: 'Farmacología y Soporte Vital Avanzado',
    topicNumber: 5,
    topicTitle: 'Shock Anafiláctico y Adrenalina',
    question: 'En un paciente adulto que sufre un shock anafiláctico grave con estridor laríngeo, broncoespasmo severo e hipotensión arterial profunda tras recibir medicación, ¿cuál es el tratamiento farmacológico de PRIMERA ELECCIÓN y su vía de administración prioritaria?',
    options: [
      'Adrenalina (Epinefrina) 0,5 mg (1:1.000) por vía Intramuscular en la cara anterolateral del muslo',
      'Metilprednisolona (Urbason) 80 mg por vía intravenosa lenta',
      'Dexclorfeniramina (Polaramine) 5 mg por vía subcutánea en deltoides',
      'Salbutamol en aerosol con cámara espaciadora sin administrar fármacos inyectables'
    ],
    correctIndex: 0,
    isTrapOrDifficult: true,
    trapWarning: '¡Error muy frecuente en examen!: El fármaco de primera elección y salvavidas es la Adrenalina IM inmediata en vasto externo del muslo (NO los corticoides ni los antihistamínicos, que tardan horas en actuar).',
    explanation: {
      correct: 'La adrenalina intramuscular (0,5 mg en adultos, dilución 1:1.000) es el fármaco de primera línea sin demora en anafilaxia. Actúa en minutos revirtiendo la vasodilatación, el edema laríngeo y el broncoespasmo.',
      distractors: [
        'Incorrecta: Los corticoides (corticosteroides) son fármacos de segunda línea con inicio de acción tardío (4-6 horas); nunca sustituyen a la adrenalina.',
        'Incorrecta: Los antihistamínicos (anti-H1) son adyuvantes sintomáticos de segunda línea, no estabilizan el shock hemodinámico ni el edema de glotis.',
        'Incorrecta: El salbutamol inhalado solo actúa en bronquios, no revierte el colapso cardiovascular ni el shock sistémico.'
      ],
      legalOrClinicalReference: 'Guías de Manejo de la Anafilaxia de la EAACI y Protocolos SAMU CV.'
    },
    sourceExam: 'SAMU / SES CV 2022',
    year: 2022
  },
  {
    id: 'q-farm-05',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'farmacologia_sva',
    blockName: 'Farmacología y Soporte Vital Avanzado',
    topicNumber: 5,
    topicTitle: 'Insulinas y Tiempos de Acción',
    question: '¿Cuál de las siguientes insulinas se clasifica como de ACCIÓN ULTRARÁPIDA y presenta un inicio de acción de 10 a 15 minutos con un pico máximo entre 30 y 90 minutos?',
    options: [
      'Insulina Lispro (Humalog) o Aspart (NovoRapid)',
      'Insulina NPH (Humulina NPH / Insulatard)',
      'Insulina Glargina (Lantus / Toujeo)',
      'Insulina Degludec (Tresiba)'
    ],
    correctIndex: 0,
    isTrapOrDifficult: false,
    explanation: {
      correct: 'Las insulinas análogas de acción ultrarrápida (Lispro, Aspart y Glulisina) tienen un inicio de 10-15 min, pico de 30-90 min y duración de 3-5 horas, debiendo administrarse inmediatamente antes de la ingesta de comida.',
      distractors: [
        'Incorrecta: La NPH es de acción intermedia, con inicio en 1-2h, pico a las 4-8h y duración de 12-18h.',
        'Incorrecta: La Glargina es una insulina basal de acción prolongada sin pico marcado, con duración de 20-24h.',
        'Incorrecta: La Degludec es un análogo basal ultralargo con vida media superior a 25h y duración superior a 42h.'
      ],
      legalOrClinicalReference: 'Guía Terapéutica en Diabetes Mellitus de la Conselleria de Sanitat GVA.'
    },
    sourceExam: 'Consorcio Hospital General 2022',
    year: 2022
  },
  {
    id: 'q-cuid-03',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'cuidados_medicoquirurgicos',
    blockName: 'Cuidados Médico-Quirúrgicos y Heridas',
    topicNumber: 7,
    topicTitle: 'Grandes Quemados y Fórmula de Parkland',
    question: 'Un paciente varón de 70 kg sufre quemaduras de segundo grado y tercer grado que afectan a toda la cara anterior del tronco (tórax y abdomen) y a toda la extremidad superior derecha. Utilizando la fórmula de Parkland (4 ml x kg x % SCQ), ¿cuántos mililitros de Ringer Lactato deben administrarse en las PRIMERAS 8 HORAS desde que se produjo la quemadura?',
    options: [
      '3.780 ml en las primeras 8 horas',
      '7.560 ml en las primeras 8 horas',
      '1.890 ml en las primeras 8 horas',
      '5.200 ml en las primeras 8 horas'
    ],
    correctIndex: 0,
    isTrapOrDifficult: true,
    trapWarning: '¡Clásica trampa matemática en quemados!: La regla de Wallace da: Tronco anterior = 18%, Brazo derecho completo = 9%. Total SCQ = 27%. Parkland total en 24h = 4 * 70 * 27 = 7.560 ml. ¡Pero en las PRIMERAS 8 HORAS se pasa la MITAD! (7.560 / 2 = 3.780 ml).',
    explanation: {
      correct: 'Cálculo SCQ: Tronco anterior = 18% + Brazo derecho = 9% -> 27% SCQ. Volumen total 24h = 4 ml * 70 kg * 27 = 7.560 ml. Las primeras 8 horas reciben el 50% del total: 7.560 / 2 = 3.780 ml.',
      distractors: [
        'Incorrecta: 7.560 ml es el volumen total para las 24 horas completas, no para las primeras 8 horas.',
        'Incorrecta: 1.890 ml correspondería al 25% del volumen total.',
        'Incorrecta: 5.200 ml parte de un cálculo incorrecto de la superficie quemada sin aplicar la regla de los 9.'
      ],
      legalOrClinicalReference: 'Manejo del Paciente Gran Quemado en Unidades de Cuidados Críticos (Hospital La Fe Valencia).'
    },
    sourceExam: 'OPE Sanitat GVA 2021',
    year: 2021
  },
  {
    id: 'q-com-03',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'salud_comunitaria_salud_publica',
    blockName: 'Salud Comunitaria y Vacunaciones CV',
    topicNumber: 8,
    topicTitle: 'Inmunización frente a Virus Respiratorio Sincitial (VRS) en CV',
    question: 'En la Comunitat Valenciana, desde la campaña 2023-2024, ¿qué estrategia sistemática de prevención del Virus Respiratorio Sincitial (VRS) se aplica a los recién nacidos y lactantes menores de 6 meses?',
    options: [
      'Administración de una dosis única del anticuerpo monoclonal Nirsevimab (Beyfortus) por vía intramuscular',
      'Administración de una vacuna viva atenuada por vía oral al cumplir 2 meses de vida',
      'Vacunación obligatoria exclusivamente a niños prematuros con Palivizumab hospitalario',
      'Pauta de tres dosis de vacuna recombinante intramuscular en las semanas 2, 4 y 6 de vida'
    ],
    correctIndex: 0,
    isTrapOrDifficult: false,
    explanation: {
      correct: 'La Conselleria de Sanitat de la Comunitat Valenciana incorporó la inmunización universal de lactantes frente al VRS con Nirsevimab (anticuerpo monoclonal de semivida prolongada en dosis única IM) antes de la temporada epidémica.',
      distractors: [
        'Incorrecta: Nirsevimab no es una vacuna ni es por vía oral, es una inmunización pasiva con anticuerpo monoclonal recombinante.',
        'Incorrecta: No está restringida a prematuros; la Comunitat Valenciana extendió la indicación a todos los recién nacidos de la temporada.',
        'Incorrecta: Se administra en monodosis de 50 mg o 100 mg según el peso, no en pauta de tres dosis.'
      ],
      legalOrClinicalReference: 'Instrucción de la Dirección General de Salud Pública GVA sobre inmunización frente a VRS.'
    },
    sourceExam: 'OPE Sanitat GVA 2023',
    year: 2023
  },
  {
    id: 'q-urg-01',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses'],
    block: 'farmacologia_sva',
    blockName: 'Farmacología y Soporte Vital Avanzado',
    topicNumber: 6,
    topicTitle: 'Sistema de Triaje de Urgencias Manchester (MTS)',
    question: 'En los Servicios de Urgencias Hospitalarias de la Comunitat Valenciana que utilizan el Sistema de Triaje de Manchester (MTS), ¿cuál es el tiempo de atención médica máximo recomendado para un paciente clasificado en NIVEL 2 (Color NARANJA - Muy Urgente)?',
    options: [
      '10 minutos',
      '0 minutos (Atención inmediata)',
      '60 minutos',
      '120 minutos'
    ],
    correctIndex: 0,
    isTrapOrDifficult: true,
    trapWarning: '¡Tiempos del Triaje Manchester!: Nivel 1 (Rojo) = Inmediato (0 min). Nivel 2 (Naranja) = 10 min. Nivel 3 (Amarillo) = 60 min. Nivel 4 (Verde) = 120 min. Nivel 5 (Azul) = 240 min.',
    explanation: {
      correct: 'El Nivel 2 del MTS (código Naranja) califica la situación clínica como "Muy Urgente", estableciendo un tiempo objetivo de respuesta de hasta 10 minutos.',
      distractors: [
        'Incorrecta: 0 minutos (inmediato) corresponde al Nivel 1 (Rojo - Reanimación).',
        'Incorrecta: 60 minutos corresponde al Nivel 3 (Amarillo - Urgente).',
        'Incorrecta: 120 minutos corresponde al Nivel 4 (Verde - Estándar / Poco urgente).'
      ],
      legalOrClinicalReference: 'Protocolo de Triaje Manchester en Urgencias de Hospitales GVA.'
    },
    sourceExam: 'SAMU / SES CV 2021',
    year: 2021
  },

  // MÁS PREGUNTAS TRAMPA Y DIFÍCILES RECURRENTES
  {
    id: 'q-trap-05',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses'],
    block: 'legislacion_cv',
    blockName: 'Legislación y Normativa Sanitaria CV',
    topicNumber: 3,
    topicTitle: 'Recursos Administrativos en la OPE (Ley 39/2015)',
    question: 'Publicada en el DOGV la lista definitiva de personas aspirantes aprobadas en la fase de oposición por el Tribunal Calificador, si un opositor desea interponer RECURSO DE ALZADA ante la Dirección General de Recursos Humanos de la Conselleria de Sanitat, ¿de qué plazo legal dispone si la resolución fue expresa?',
    options: [
      'Un mes a contar desde el día siguiente a la publicación en el DOGV',
      'Tres meses desde la fecha de realización de la prueba',
      'Veinte días hábiles según el cómputo judicial ordinario',
      'Dos meses conforme a la Ley de la Jurisdicción Contencioso-Administrativa'
    ],
    correctIndex: 0,
    isTrapOrDifficult: true,
    trapWarning: '¡Clásica confusión de plazos de recursos administrativos!: Recurso de Alzada y Potestativo de Reposición = 1 mes (si acto expreso). Recurso Contencioso-Administrativo ante los juzgados = 2 meses.',
    explanation: {
      correct: 'El artículo 122.1 de la Ley 39/2015 establece que el plazo para la interposición del recurso de alzada será de un mes, si el acto fuera expreso, contado a partir del día siguiente a aquel en que tenga lugar la notificación o publicación.',
      distractors: [
        'Incorrecta: Tres meses es el plazo si el acto administrativo fuera presunto (silencio administrativo).',
        'Incorrecta: Veinte días hábiles es el plazo para interponer demanda laboral o subsanaciones de listas de admitidos en convocatorias.',
        'Incorrecta: Dos meses es el plazo para acudir a la vía judicial (recurso contencioso-administrativo), no para el recurso de alzada en vía administrativa.'
      ],
      legalOrClinicalReference: 'Art. 122 de la Ley 39/2015, del Procedimiento Administrativo Común.'
    },
    sourceExam: 'OPE Sanitat GVA 2018 - Turno Libre',
    year: 2018
  },
  {
    id: 'q-trap-06',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'cuidados_medicoquirurgicos',
    blockName: 'Cuidados Médico-Quirúrgicos y Heridas',
    topicNumber: 7,
    topicTitle: 'Inversión de Escalas: Riesgo de Caídas vs UPP',
    question: 'En la valoración geriátrica y de seguridad del paciente, ¿en cuál de las siguientes escalas una MAYOR PUNTUACIÓN numérica indica un MAYOR RIESGO de sufrir un evento adverso?',
    options: [
      'Escala de J.H. Downton (Riesgo de Caídas)',
      'Escala de Braden (Riesgo de Úlceras por Presión)',
      'Escala de Norton (Riesgo de Úlceras por Presión)',
      'Escala de Coma de Glasgow (Nivel de Consciencia)'
    ],
    correctIndex: 0,
    isTrapOrDifficult: true,
    trapWarning: '¡Trampa de inversión de polaridad!: En Downton, mayor puntuación = mayor riesgo de caída (≥ 3 puntos = alto riesgo). En cambio, en Braden, Norton y Glasgow la escala es inversa: MENOR puntuación = PEOR estado o mayor riesgo.',
    explanation: {
      correct: 'En la escala de Downton, cada ítem de riesgo suma 1 punto (caídas previas, medicamentos, déficits sensoriales, estado mental, deambulación). A mayor puntuación (≥3 puntos), mayor es el riesgo de caídas.',
      distractors: [
        'Incorrecta: En Braden (6 a 23 ptos), una puntuación baja (≤12) define alto riesgo.',
        'Incorrecta: En Norton (5 a 20 ptos), una puntuación baja (≤12) define muy alto riesgo.',
        'Incorrecta: En Glasgow (3 a 15 ptos), una puntuación baja (≤8) define coma grave.'
      ],
      legalOrClinicalReference: 'Escalas de Valoración en Cuidados Geriátricos de la Conselleria de Sanitat.'
    },
    sourceExam: 'OPE Sanitat GVA 2021',
    year: 2021
  },
  {
    id: 'q-trap-07',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'fundamentos_pae',
    blockName: 'Fundamentos de Enfermería y PAE',
    topicNumber: 4,
    topicTitle: 'Sondaje Nasogástrico y Seguridad',
    question: 'Tras colocar una sonda nasogástrica (SNG) a un paciente para nutrición enteral, ¿cuál es el método considerado "ESTÁNDAR DE ORO" (Gold Standard) para verificar de forma inequívoca la correcta ubicación de la punta en la cavidad gástrica antes de iniciar la infusión?',
    options: [
      'Comprobación mediante Radiografía simple de tórax/abdomen',
      'Insuflación rápida de 20-30 ml de aire con jeringa y auscultación epigástrica con fonendoscopio',
      'Introducción del extremo distal de la sonda en un vaso de agua para observar si burbujea',
      'Aspiración de líquido y observación visual de su color sin medir el pH'
    ],
    correctIndex: 0,
    isTrapOrDifficult: true,
    trapWarning: '¡Práctica desaconsejada en protocolos!: La clásica auscultación de la "burbuja de aire" en epigastrio (whoosh test) NO es segura porque puede sonar igual en el árbol bronquial. El estándar de oro absoluto es la radiografía.',
    explanation: {
      correct: 'La radiografía de control es la prueba de referencia inequívoca (Gold Standard) para confirmar la posición gástrica del tubo antes de administrar nutrición o fármacos.',
      distractors: [
        'Incorrecta: El "whoosh test" (auscultar aire) está desaconsejado como método único por las guías internacionales por su alto porcentaje de falsos positivos en vía respiratoria.',
        'Incorrecta: El método del vaso con agua es peligroso (riesgo de aspiración si el paciente inspira con la sonda en pulmón).',
        'Incorrecta: La simple observación visual del aspirado no garantiza la localización gástrica; se requiere tiras reactivas de pH (< 5.5) si no hay radiografía.'
      ],
      legalOrClinicalReference: 'Recomendaciones de Seguridad del Paciente del ISMP y Guías de Nutrición Enteral.'
    },
    sourceExam: 'Consorcio Hospital General 2022',
    year: 2022
  },
  {
    id: 'q-trap-08',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'salud_comunitaria_salud_publica',
    blockName: 'Salud Comunitaria y Vacunaciones CV',
    topicNumber: 8,
    topicTitle: 'Cadena de Frío y Test de Agitación (Shake Test)',
    question: 'En un Centro de Salud de la Comunitat Valenciana, el termómetro de máxima y mínima registra una temperatura accidental de -2 ºC durante la noche. Respecto a las vacunas que contienen coadyuvantes de sales de aluminio (como Tétanos-Difteria o Hepatitis B), ¿cuál es la consecuencia técnica y la actuación de enfermería?',
    options: [
      'La congelación rompe irreversiblemente la emulsión del adyuvante mineral disminuyendo su inmunogenicidad y aumentando los efectos adversos locales; deben desecharse tras realizar el test de agitación',
      'Basta con esperar a que alcancen +4 ºC a temperatura ambiente antes de administrarlas',
      'La congelación mejora la estabilidad de los toxoides aumentando su eficacia protectora',
      'Se pueden administrar con normalidad duplicando la dosis habitual en mililitros'
    ],
    correctIndex: 0,
    isTrapOrDifficult: true,
    trapWarning: '¡Falso mito en vacunas!: Mucha gente piensa que "cuanto más frío mejor". Las vacunas adyuvadas con sales de aluminio se destruyen al congelarse (< 0 ºC). Solo las vacunas vivas víricas toleran la congelación.',
    explanation: {
      correct: 'Las vacunas inactivadas adyuvadas con sales de aluminio (DTPa, Td, Hepatitis A y B, VPH, Neumococo conjugada) se degradan de forma irreversible al congelarse. El test de agitación (Shake test) confirma la pérdida de suspensión coloidal.',
      distractors: [
        'Incorrecta: El descongelamiento no repara el daño físico-químico del complejo antígeno-adyuvante.',
        'Incorrecta: La congelación nunca mejora la eficacia de las vacunas adyuvadas.',
        'Incorrecta: Está terminantemente prohibido alterar las dosis de ficha técnica autorizadas.'
      ],
      legalOrClinicalReference: 'Guía de Mantenimiento de la Cadena de Frío de la Conselleria de Sanitat GVA.'
    },
    sourceExam: 'OPE Sanitat GVA 2023',
    year: 2023
  },
  {
    id: 'q-trap-09',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'cuidados_medicoquirurgicos',
    blockName: 'Cuidados Médico-Quirúrgicos del Adulto',
    topicNumber: 5,
    topicTitle: 'Retención Aguda de Orina y Descompresión Vesical',
    question: 'Al colocar una sonda vesical a un paciente con globo vesical agudo y dolor suprapúbico intenso con retención de 1.200 ml de orina, ¿cuál es la técnica de evacuación recomendada para prevenir complicaciones hemodinámicas y urológicas?',
    options: [
      'Pinzar la sonda intermitentemente cada 400-500 ml evacuados durante unos 15-20 minutos para evitar descompresión brusca, hematuria ex-vacuo y colapso por reflejo vagal',
      'Dejar salir todo el volumen de forma rápida e ininterrumpida a caída libre',
      'Aspirar activamente con una jeringa de 50 ml para acelerar el vaciado',
      'Retirar la sonda de inmediato tan pronto como salgan los primeros 100 ml de orina'
    ],
    correctIndex: 0,
    isTrapOrDifficult: true,
    trapWarning: '¡Pregunta clásica trampa en tribunales de oposición!: El vaciado brusco masivo de una vejiga hiperdistendida puede causar hipotensión brusca vasovagal y hematuria "ex vacuo" por rotura de capilares de la pared vesical.',
    explanation: {
      correct: 'La descompresión vesical progresiva (pinzando la sonda tras evacuar unos 400-500 ml y esperando 15-20 minutos) previene la caída súbita de la presión intravesical que origina hematuria por descompresión (hematuria ex vacuo) y síncope vagal.',
      distractors: [
        'Incorrecta: El vaciado brusco completo a chorro está formalmente desaconsejado en globos vesicales de gran volumen.',
        'Incorrecta: La aspiración activa con jeringa puede traumatizar la mucosa vesical y colapsar la pared contra los orificios de la sonda.',
        'Incorrecta: La sonda debe mantenerse colocada conectada a bolsa colectora cerrada hasta resolver la etiología de la retención.'
      ],
      legalOrClinicalReference: 'Manual de Procedimientos Urológicos y Cuidados de Enfermería GVA.'
    },
    sourceExam: 'OPE Sanitat GVA 2024 - Concurso-Oposición',
    year: 2024
  },
  {
    id: 'q-trap-10',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'fundamentos_pae',
    blockName: 'Fundamentos de Enfermería y PAE',
    topicNumber: 4,
    topicTitle: 'Toma de Presión Arterial y Selección del Manguito',
    question: 'Al medir la Tensión Arterial a un paciente obeso con un perímetro braquial de 42 cm, la enfermera utiliza por error un manguito estándar para adultos normales (anchura 12 cm). ¿Qué efecto tendrá este manguito inadecuado sobre la lectura de las cifras de tensión arterial?',
    options: [
      'Sobreestimará falsamente los valores reales de tensión arterial (cifras falsamente elevadas)',
      'Subestimará falsamente los valores reales (cifras falsamente bajas)',
      'No alterará en absoluto la medición al utilizar esfingomanómetro automático',
      'Hará imposible detectar el pulso radial pero marcará cifras idénticas'
    ],
    correctIndex: 0,
    isTrapOrDifficult: true,
    trapWarning: '¡Regla mnemotécnica clave!: Manguito PEQUEÑO/ESTRECHO = Tensión FALSAMENTE ALTA (sobreestima). Manguito GRANDE/ANCHO = Tensión FALSAMENTE BAJA (subestima).',
    explanation: {
      correct: 'Un manguito demasiado pequeño o estrecho para la circunferencia del brazo requiere mayor presión insuflada para ocluir la arteria braquial, dando lugar a lecturas artificialmente sobreestimadas (falsos diagnósticos de HTA).',
      distractors: [
        'Incorrecta: La subestimación se produce cuando el manguito es excesivamente ancho o grande.',
        'Incorrecta: El error físico por desfase de tamaño del manguito ocurre tanto con aparatos manuales como automáticos oscilométricos.',
        'Incorrecta: El pulso sí se detecta pero con un valor numérico erróneo.'
      ],
      legalOrClinicalReference: 'Guía Europea de Hipertensión Arterial (ESH/ESC) y Protocolo de Exploración Física GVA.'
    },
    sourceExam: 'Consorci Hospital General Universitari València 2023',
    year: 2023
  },
  {
    id: 'q-trap-11',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'farmacologia_sva',
    blockName: 'Farmacología y Soporte Vital Avanzado',
    topicNumber: 6,
    topicTitle: 'Insulinoterapia y Compatibilidad de Mezclas',
    question: 'En un paciente diabético hospitalizado que tiene pautada Insulina Glargina (análogo basal de acción prolongada) e Insulina Lispro (análogo ultrarrápido preprandial), ¿cuál es la indicación correcta respecto a su administración simultánea?',
    options: [
      'Deben administrarse en dos inyecciones separadas y en jeringas o plumas distintas, ya que la Insulina Glargina NUNCA debe mezclarse con ninguna otra insulina en el mismo dispositivo',
      'Pueden cargarse ambas en la misma jeringa cargando primero la Glargina y luego la Lispro',
      'Deben mezclarse en la misma jeringa para evitar dos punciones dolorosas',
      'La Glargina debe administrarse por vía intravenosa lenta en bomba de infusión'
    ],
    correctIndex: 0,
    isTrapOrDifficult: true,
    trapWarning: '¡Alerta de farmacocinética!: La Insulina Glargina tiene un pH ácido (pH 4) que precipita en el tejido subcutáneo para liberar insulina de forma sostenida durante 24h. Si se mezcla con insulinas neutras pierde su estabilidad y altera bruscamente su perfil de absorción.',
    explanation: {
      correct: 'Los análogos de insulina basal de acción prolongada como Glargina o Degludec no deben mezclarse jamás con otras insulinas en el mismo vial o jeringa, requiriendo inyecciones subcutáneas independientes en zonas anatómicas distintas.',
      distractors: [
        'Incorrecta: La mezcla física en una jeringa está contraindicada por ficha técnica.',
        'Incorrecta: El orden de carga aplica a la mezcla clásica de NPH con Insulina Regular rápida, pero nunca con análogos como Glargina.',
        'Incorrecta: La Glargina es de uso estrictamente subcutáneo; la única insulina para vía IV es la Insulina Humana Regular (rápida).'
      ],
      legalOrClinicalReference: 'Ficha técnica oficial de la AEMPS y Guía de Diabetes de la Comunitat Valenciana.'
    },
    sourceExam: 'OPE Sanitat GVA 2022',
    year: 2022
  },
  {
    id: 'q-trap-12',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'materno_infantil',
    blockName: 'Enfermería Materno-Infantil y Pediatría',
    topicNumber: 7,
    topicTitle: 'Inyección Intramuscular en Lactantes',
    question: 'Al administrar una vacuna por vía intramuscular a un lactante de 4 meses en un Centro de Salud de Valencia, ¿cuál es el sitio anatómico de inyección PRIORITARIO y por qué razón clínica?',
    options: [
      'El tercio medio de la cara anterolateral del muslo (músculo vasto externo), porque es la masa muscular más desarrollada a esta edad y evita el riesgo de lesión del nervio ciático',
      'El cuadrante superoexterno del glúteo mayor, porque tiene mayor vascularización',
      'El músculo deltoides en el hombro, con aguja de 40 mm',
      'La zona dorsoglútea profunda con técnica en Z'
    ],
    correctIndex: 0,
    isTrapOrDifficult: true,
    trapWarning: '¡Error asistencial grave en pediatría!: NUNCA se debe usar la zona glútea en niños menores de 18-24 meses o que aún no hayan adquirido la bipedestación y deambulación firme, por la proximidad y altísimo riesgo de lesión del nervio ciático.',
    explanation: {
      correct: 'El vasto externo (cara anterolateral del tercio medio del muslo) es la zona de elección obligatoria para inyecciones intramusculares en lactantes y niños pequeños menores de 2 años.',
      distractors: [
        'Incorrecta: El glúteo mayor no está desarrollado y el nervio ciático transcurre muy superficialmente en el lactante.',
        'Incorrecta: El deltoides solo se recomienda a partir de los 12-18 meses si la masa muscular es adecuada.',
        'Incorrecta: La técnica dorsoglútea está contraindicada en lactantes.'
      ],
      legalOrClinicalReference: 'Manual de Vacunaciones de la Asociación Española de Pediatría (AEP) y Conselleria de Sanitat GVA.'
    },
    sourceExam: 'OPE Sanitat GVA 2021',
    year: 2021
  },
  {
    id: 'q-trap-13',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'salud_comunitaria_salud_publica',
    blockName: 'Salud Comunitaria y Vacunaciones CV',
    topicNumber: 8,
    topicTitle: 'Prueba de la Tuberculina (Técnica de Mantoux)',
    question: 'A las 72 horas de realizar la prueba de la tuberculina (Mantoux) con 2 UT de PPD RT-23 intradérmico en el antebrazo a un paciente, ¿cómo debe realizar la enfermera la lectura e interpretación correcta del resultado?',
    options: [
      'Palpar y medir con regla transparente milimetrada exclusivamente el diámetro transversal de la INDURACIÓN palpable, ignorando el eritema o enrojecimiento periférico',
      'Medir con cinta métrica el diámetro longitudinal máximo del área eritematosa enrojecida',
      'Calcular el área geométrica multiplicando longitud por anchura del eritema',
      'Considerar positivo si el paciente refiere picor intenso sin necesidad de medir la induración'
    ],
    correctIndex: 0,
    isTrapOrDifficult: true,
    trapWarning: '¡Clásica trampa de examen!: Solo se mide la INDURACIÓN (el endurecimiento palpable al deslizar la yema del dedo), NUNCA el eritema (enrojecimiento). El eritema carece de valor diagnóstico.',
    explanation: {
      correct: 'La lectura se realiza a las 48-72 horas palpando el borde de la induración con la yema del dedo y midiendo en milímetros el diámetro transversal (perpendicular al eje mayor del antebrazo).',
      distractors: [
        'Incorrecta: El eritema periférico no tiene significación inmunológica ni diagnóstica.',
        'Incorrecta: Se mide un único eje milimétrico transversal de la induración, no un área superficial.',
        'Incorrecta: El prurito es un síntoma inespecífico que no define positividad.'
      ],
      legalOrClinicalReference: 'Protocolo de Vigilancia y Control de la Tuberculosis de la Generalitat Valenciana.'
    },
    sourceExam: 'SAMU / SES CV 2020',
    year: 2020
  },
  {
    id: 'q-trap-14',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'fundamentos_pae',
    blockName: 'Fundamentos de Enfermería y PAE',
    topicNumber: 4,
    topicTitle: 'Comparativa de Escalas de Riesgo de UPP (Norton vs Braden)',
    question: 'Respecto a las escalas de valoración del riesgo de desarrollar Úlceras por Presión (UPP), ¿cuál de las siguientes afirmaciones es CORRECTA sobre las escalas de Norton y Braden?',
    options: [
      'Ambas escalas presentan una puntuación inversamente proporcional al riesgo (a menor puntuación, mayor riesgo de lesión), siendo el punto de corte tradicional de riesgo en Norton ≤ 14 puntos y en Braden ≤ 16-18 puntos',
      'A mayor puntuación en la escala de Braden mayor es el riesgo de sufrir una úlcera',
      'La escala de Norton evalúa 6 parámetros incluyendo la percepción sensorial y la fricción',
      'En la escala de Braden la puntuación máxima posible es de 14 puntos'
    ],
    correctIndex: 0,
    isTrapOrDifficult: true,
    trapWarning: '¡Ojo a la escala invertida!: Las escalas de riesgo de UPP (Norton, Braden, Waterlow) funcionan al revés que las escalas habituales de gravedad (Glasgow). ¡A menor puntuación, peor estado y mayor riesgo!',
    explanation: {
      correct: 'En ambas escalas la puntuación es inversamente proporcional al riesgo. Norton evalúa 5 parámetros (rango 5 a 20, riesgo ≤ 14). Braden evalúa 6 parámetros (rango 6 a 23, riesgo moderado 13-14, alto ≤ 12).',
      distractors: [
        'Incorrecta: En Braden, a mayor puntuación menor riesgo (23 puntos es el estado óptimo sin riesgo).',
        'Incorrecta: Norton evalúa solo 5 parámetros (Estado físico, Estado mental, Actividad, Movilidad e Incontinencia). Percepción sensorial y fricción son de Braden.',
        'Incorrecta: La puntuación máxima de Braden es 23 puntos.'
      ],
      legalOrClinicalReference: 'Guía de Práctica Clínica para la Prevención y Tratamiento de UPP de la GNEAUPP y Conselleria de Sanitat.'
    },
    sourceExam: 'Consorci Hospital General Universitari València 2019',
    year: 2019
  },
  {
    id: 'q-trap-15',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'farmacologia_sva',
    blockName: 'Farmacología y Soporte Vital Avanzado',
    topicNumber: 6,
    topicTitle: 'Seguridad en la Infusión de Cloruro Potásico (ClK)',
    question: 'En un paciente con hipopotasemia severa (K+ 2.7 mEq/L) que tiene canalizada una vía venosa periférica, el médico prescribe reposición de Cloruro Potásico (ClK). ¿Cuál es la norma de administración y límite de seguridad que debe aplicar estrictamente la enfermera?',
    options: [
      'Está terminantemente PROHIBIDO administrar ClK en bolo intravenoso directo; debe infundirse siempre diluido, no superando habitualmente una velocidad de 10-20 mEq/h ni una concentración de 40 mEq/L en vía periférica',
      'Se puede administrar en bolo IV rápido de 20 mEq en 2 minutos para corregir la urgencia analítica',
      'El ClK concentrado debe inyectarse directamente en la llave de tres pasos sin mezclar en el suero',
      'La velocidad máxima por vía periférica es de 100 mEq/hora sin necesidad de monitorización'
    ],
    correctIndex: 0,
    isTrapOrDifficult: true,
    trapWarning: '¡Alerta de medicación de alto riesgo (ISMP)!: El cloruro potásico concentrado por vía IV directa causa paro cardíaco fulminante e irreversible. Es el error de medicación letal más temido en enfermería.',
    explanation: {
      correct: 'El ClK nunca se administra en bolo directo. En vía periférica se diluye para evitar flebitis química severa y dolor intenso, recomendándose velocidades no superiores a 10-20 mEq/h y concentración máxima de 40 mEq/L.',
      distractors: [
        'Incorrecta: El bolo rápido de potasio induce asistolia ventricular inmediata y muerte.',
        'Incorrecta: Nunca se inyecta en la llave de tres pasos sin dilución previa homogénea.',
        'Incorrecta: 100 mEq/h es una velocidad potencialmente letal.'
      ],
      legalOrClinicalReference: 'Recomendaciones para el uso seguro de soluciones concentradas de potasio del ISMP España.'
    },
    sourceExam: 'OPE Sanitat GVA 2018',
    year: 2018
  },
  {
    id: 'q-trap-16',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'cuidados_medicoquirurgicos',
    blockName: 'Cuidados Médico-Quirúrgicos del Adulto',
    topicNumber: 5,
    topicTitle: 'Gasometría Arterial y Test de Allen',
    question: 'Antes de realizar una punción de la arteria radial para gasometría arterial, la enfermera comprime simultáneamente las arterias radial y cubital pidiendo al paciente que abra y cierre la mano hasta que palidezca. Al liberar la compresión de la arteria cubital, la mano tarda 18 segundos en recuperar su coloración normal. ¿Qué significa este resultado y qué conducta debe adoptarse?',
    options: [
      'Test de Allen negativo (anormal): indica circulación colateral cubital insuficiente; está CONTRAINDICADO puncionar la arteria radial de esa extremidad',
      'Test de Allen positivo (normal): la perfusión es adecuada y puede procederse a la punción radial de inmediato',
      'Indica que debe puncionarse la arteria radial con una aguja de mayor calibre (18G)',
      'Significa que la arteria radial está permeable y se debe puncionar sin anestesia'
    ],
    correctIndex: 0,
    isTrapOrDifficult: true,
    trapWarning: '¡Confusión terminológica en oposiciones!: Se considera "normal" cuando la mano se sonrosa en < 7-10 segundos (Allen positivo en la literatura clásica, arco palmar competente). Si tarda > 10-15 segundos, la circulación colateral es deficiente y la punción radial puede provocar isquemia de la mano.',
    explanation: {
      correct: 'Una recuperación del color superior a 10-15 segundos evidencia una irrigación colateral insuficiente por la arteria cubital. Si se dañase o trombosara la arteria radial durante la punción, la mano quedaría en isquemia aguda.',
      distractors: [
        'Incorrecta: Un tiempo de 18 segundos es manifiestamente patológico.',
        'Incorrecta: No debe puncionarse la arteria radial en esa extremidad; debe explorarse el otro brazo o valorar la arteria femoral/braquial.',
        'Incorrecta: Para gasometrías arteriales se utilizan agujas finas de 22-25G con heparina de litio.'
      ],
      legalOrClinicalReference: 'Guías de Práctica Clínica de la Sociedad Española de Neumología (SEPAR).'
    },
    sourceExam: 'OPE Sanitat GVA 2017',
    year: 2017
  },
  {
    id: 'q-trap-17',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'legislacion_cv',
    blockName: 'Legislación y Normativa Sanitaria CV',
    topicNumber: 2,
    topicTitle: 'Consentimiento Informado en Menores (Ley 41/2002)',
    question: 'Según el artículo 9 de la Ley 41/2002 de Autonomía del Paciente, ¿a partir de qué edad se considera, como regla general, que un menor de edad tiene capacidad para prestar su propio consentimiento informado a una intervención médica sin necesidad de consentimiento por representación de sus progenitores?',
    options: [
      'A partir de los 16 años cumplidos (o si está emancipado)',
      'A partir de los 18 años exclusivamente en todos los casos',
      'A partir de los 12 años en cualquier procedimiento quirúrgico',
      'A partir de los 14 años con autorización del director del hospital'
    ],
    correctIndex: 0,
    isTrapOrDifficult: true,
    trapWarning: '¡Articulado legal clave muy preguntado!: En el ámbito sanitario español, la mayoría de edad para el consentimiento informado asistencial ordinario es a los 16 AÑOS (menor maduro), no a los 18 años.',
    explanation: {
      correct: 'El artículo 9.3.c de la Ley 41/2002 establece que cuando el menor tenga 16 años cumplidos o esté emancipado, no cabe prestar el consentimiento por representación, debiendo prestarlo el menor por sí mismo (salvo supuestos de grave riesgo o incapacidad).',
      distractors: [
        'Incorrecta: Los 18 años son la mayoría de edad civil general, pero la ley sanitaria fija la capacidad asistencial en los 16 años.',
        'Incorrecta: A los 12 años el menor tiene derecho a ser escuchado e informado, pero el consentimiento formal lo otorgan los padres.',
        'Incorrecta: Los 14 años es la edad penal y testifical, pero no la del consentimiento informado de la Ley 41/2002.'
      ],
      legalOrClinicalReference: 'Art. 9 de la Ley 41/2002 de Autonomía del Paciente.'
    },
    sourceExam: 'OPE Sanitat GVA 2016',
    year: 2016
  },
  {
    id: 'q-trap-18',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'cuidados_medicoquirurgicos',
    blockName: 'Cuidados Médico-Quirúrgicos del Adulto',
    topicNumber: 5,
    topicTitle: 'Tiempos de Seguridad en Transfusión Sanguínea',
    question: 'Al recibir en la unidad de hospitalización un Concentrado de Hematíes enviado por el Banco de Sangre, ¿cuál es el tiempo MÁXIMO recomendado para INICIAR la transfusión y el tiempo LÍMITE para COMPLETAR la infusión de la bolsa?',
    options: [
      'Iniciar en menos de 30 minutos desde su salida de la nevera del banco de sangre, y finalizar la infusión en un máximo de 4 horas',
      'Iniciar en las primeras 2 horas y mantener la infusión durante 8 horas',
      'Iniciar inmediatamente en 5 minutos y pasar la bolsa en menos de 15 minutos en todo paciente',
      'Guardar la bolsa en la nevera de la medicación de la planta durante 24 horas antes de colgarla'
    ],
    correctIndex: 0,
    isTrapOrDifficult: true,
    trapWarning: '¡Parámetros de seguridad hemoterápica obligatorios!: Inicio < 30 minutos (evitar calentamiento y pérdida de cadena de frío) y duración máxima < 4 horas (evitar proliferación bacteriana en sangre a temperatura ambiente).',
    explanation: {
      correct: 'Los estándares de hemoterapia exigen iniciar la transfusión antes de 30 minutos para no romper la cadena de frío y no exceder nunca las 4 horas de infusión por el riesgo crítico de contaminación y shock endotóxico bacteriano.',
      distractors: [
        'Incorrecta: Transfundir durante más de 4 horas incrementa drásticamente el riesgo de septicemia por bacterias psicrófilas.',
        'Incorrecta: Una infusión en 15 minutos solo está justificada en shock hemorrágico masivo; en pacientes normovolémicos puede inducir sobrecarga circulatoria (TACO).',
        'Incorrecta: Está prohibido almacenar sangre en frigoríficos de planta sin control estricto de temperatura homologado.'
      ],
      legalOrClinicalReference: 'Guía sobre la Transfusión de Componentes Sanguíneos de la Sociedad Española de Transfusión Sanguínea (SETS).'
    },
    sourceExam: 'OPE Sanitat GVA 2015',
    year: 2015
  },
  {
    id: 'q-trap-19',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'farmacologia_sva',
    blockName: 'Farmacología y Soporte Vital Avanzado',
    topicNumber: 6,
    topicTitle: 'Contraindicaciones de Descontaminación Digestiva en Intoxicaciones',
    question: 'Acude a Urgencias un paciente que ha ingerido accidentalmente una solución desatascadora doméstica de Sosa Cáustica (hidróxido sódico concentrado). ¿Cuál de las siguientes intervenciones está FORMALMENTE CONTRAINDICADA?',
    options: [
      'Inducción del vómito, lavado gástrico, administración de carbón activado o neutralización química con ácidos débiles como vinagre o zumo de limón',
      'Canalización de vía venosa periférica para analgesia y fluidoterapia',
      'Mantenimiento de la vía aérea permeable y control de constantes vitales',
      'Avisar al Servicio de Información Toxicológica (SIT) y valorar endoscopia digestiva precoz'
    ],
    correctIndex: 0,
    isTrapOrDifficult: true,
    trapWarning: '¡Grave error en urgencias toxicológicas!: En cáusticos e hidrocarburos está contraindicado el lavado y el vómito (doble quemadura esofágica y riesgo de perforación gástrica). El carbón activado no absorbe álcalis y dificulta la endoscopia.',
    explanation: {
      correct: 'En la ingestión de cáusticos (ácidos y álcalis fuertes) están contraindicados el vómito, el lavado gástrico y el carbón activado. Intentar neutralizar químicamente produce una reacción exotérmica térmica añadida que agrava la necrosis tisular.',
      distractors: [
        'Incorrecta: El acceso venoso y la analgesia son medidas de soporte prioritarias.',
        'Incorrecta: La monitorización y la vigilancia de la vía aérea son indispensables.',
        'Incorrecta: La endoscopia digestiva urgente en las primeras 24-48 horas es el procedimiento diagnóstico de elección para clasificar las quemaduras (Zargar).'
      ],
      legalOrClinicalReference: 'Guía de Manejo del Intoxicado Agudo del Servicio de Emergencias Sanitarias (SES CV).'
    },
    sourceExam: 'EIR CV 2024 - Cuaderno Oficial',
    year: 2024
  },
  {
    id: 'q-trap-20',
    oppositionIds: ['gva-enfermeria', 'chguv-valencia', 'samu-ses', 'eir-cv'],
    block: 'legislacion_cv',
    blockName: 'Legislación y Normativa Sanitaria CV',
    topicNumber: 3,
    topicTitle: 'Prescripción Enfermera en la Comunitat Valenciana',
    question: 'En el marco del Real Decreto 954/2015 (modificado por el RD 1302/2018) y la normativa de la Conselleria de Sanitat, ¿cuál es el requisito para que las enfermeras/os puedan indicar, usar y autorizar la dispensación de medicamentos no sujetos a prescripción médica y productos sanitarios de uso humano?',
    options: [
      'Estar en posesión del título de Grado/Diplomado en Enfermería y contar con la acreditación preceptiva emitida por la Dirección General competente de la Conselleria de Sanitat (acreditada de oficio con al menos 1 año de experiencia profesional)',
      'Tener autorización escrita individualizada del médico de cabecera por cada receta emitida',
      'Haber completado obligatoriamente la especialidad de EIR en Enfermería Médico-Quirúrgica',
      'Obtener una resolución favorable individual del Ministerio de Sanidad para cada paciente'
    ],
    correctIndex: 0,
    isTrapOrDifficult: true,
    trapWarning: '¡Actualidad legislativa imprescindible!: En medicamentos NO sujetos a prescripción médica y productos sanitarios, las enfermeras acreditadas de la Comunitat Valenciana actúan de forma autónoma con orden de dispensación enfermera oficial, sin precisar supervisión médica.',
    explanation: {
      correct: 'La acreditación para la indicación de medicamentos no sujetos a prescripción médica se otorga de oficio en la CV a quienes acrediten al menos un año de ejercicio profesional como enfermera/o, permitiendo emitir órdenes de dispensación enfermera.',
      distractors: [
        'Incorrecta: No se precisa autorización médica para medicamentos de uso humano no sujetos a receta médica ni productos sanitarios.',
        'Incorrecta: No es exigible disponer de título de especialista EIR para la prescripción enfermera general.',
        'Incorrecta: La competencia de acreditación corresponde a la comunidad autónoma (Conselleria de Sanitat), no al Ministerio caso por caso.'
      ],
      legalOrClinicalReference: 'RD 954/2015, modificado por RD 1302/2018, y Resolución de la Conselleria de Sanitat de la Comunitat Valenciana.'
    },
    sourceExam: 'EIR CV 2023 - Cuaderno Oficial',
    year: 2023
  }
];
