import { ClinicalCase } from '../types';

export const CLINICAL_CASES: ClinicalCase[] = [
  {
    id: 'caso-scacest-01',
    title: 'Caso Clínico 1: Dolor Torácico Opresivo y Código Infarto',
    service: 'Urgencias Hospitalarias (Área de Críticos)',
    patientData: {
      age: 62,
      gender: 'Varón',
      triageLevel: 'Nivel II (Naranja - Muy urgente)',
      vitals: {
        bp: '88/54 mmHg',
        hr: 118,
        spo2: 91,
        rr: 24,
        temp: 36.4,
        glycemia: 142
      },
      clinicalDescription: 'Varón de 62 años que acude acompañado por familiares por dolor retroesternal opresivo de 75 minutos de evolución, irradiado a mandíbula y brazo izquierdo, acompañado de cortejo vegetativo severo (diaforesis fría, náuseas y palidez intensa). Refiere antecedentes de HTA y dislipemia.'
    },
    steps: [
      {
        stepNumber: 1,
        question: '¿Cuál es la primera intervención de enfermería prioritaria en los primeros 10 minutos desde la llegada del paciente a Urgencias según el protocolo de dolor torácico de la Conselleria de Sanitat?',
        options: [
          'Realizar un Electrocardiograma (ECG) de 12 derivaciones en menos de 10 minutos y canalizar vía venosa periférica con toma de muestra sanguínea',
          'Administrar inmediatamente 2 comprimidos de Cafinitrina sublingual sin esperar al trazado ECG',
          'Iniciar perfusión rápida de 1.000 ml de Suero Salino Fisiológico al 0.9% a chorro',
          'Trasladar al paciente a la sala de espera de observación ambulatoria para esperar al facultativo'
        ],
        correctIndex: 0,
        justification: 'En todo paciente con dolor torácico sospechoso de SCA, la guía clínica y el Código Infarto exigen la realización e interpretación de un ECG de 12 derivaciones en los primeros 10 minutos ("door-to-ECG < 10 min"), canalización de vía periférica y monitorización ECG continua.'
      },
      {
        stepNumber: 2,
        question: 'El ECG muestra elevación del segmento ST de 3 mm en derivaciones II, III y aVF (cara inferior). Dado que su Tensión Arterial es 88/54 mmHg y sospechamos posible afectación de ventrículo derecho, ¿qué fármaco habitual está CONTRAINDICADO por riesgo de colapso hemodinámico?',
        options: [
          'Nitroglicerina sublingual o intravenosa',
          'Ácido Acetilsalicílico (AAS) 300 mg oral masticado',
          'Heparina sódica o enoxaparina en dosis protocolizada',
          'Oxigenoterapia con gafas nasales a 2-3 lpm si SatO2 < 90%'
        ],
        correctIndex: 0,
        justification: 'Los nitratos (nitroglicerina) reducen la precarga cardíaca. En el infarto de cara inferior con sospecha de afectación del ventrículo derecho y en pacientes hipotensos (TAS < 90 mmHg), los nitratos pueden provocar hipotensión severa catastrófica y colapso circulatorio.'
      },
      {
        stepNumber: 3,
        question: 'Tras confirmar la activación del Código Infarto para angioplastia primaria urgente, el intensivista pauta Ácido Acetilsalicílico 300 mg y Ticagrelor 180 mg. ¿Cómo debe indicar la enfermera la toma del AAS al paciente consciente?',
        options: [
          'Masticar completamente el comprimido antes de tragarlo para acelerar la absorción gástrica',
          'Tragar entero con abundante agua fría sin masticar',
          'Disolver lentamente bajo la lengua con hielo',
          'Aplazar la administración hasta la llegada a la sala de hemodinámica'
        ],
        correctIndex: 0,
        justification: 'El AAS administrado como dosis de carga antiagregante en el SCA debe masticarse exhaustivamente para que la absorción por la mucosa bucogástrica sea inmediata y bloquee la síntesis de tromboxano A2 en minutos.'
      }
    ]
  },
  {
    id: 'caso-cetoacidosis-02',
    title: 'Caso Clínico 2: Cetoacidosis Diabética (CAD) e Insulinoterapia',
    service: 'Medicina Interna / UCI',
    patientData: {
      age: 24,
      gender: 'Mujer',
      triageLevel: 'Nivel II (Naranja)',
      vitals: {
        bp: '95/60 mmHg',
        hr: 125,
        spo2: 98,
        rr: 32,
        temp: 37.1,
        glycemia: 485
      },
      clinicalDescription: 'Mujer de 24 años diagnosticada de Diabetes Mellitus Tipo 1 hace 3 años. Acude por dolor abdominal difuso, vómitos incoercibles de 24h de evolución, aliento con olor afrutado ("manzana reineta") y respiración profunda y rápida (respiración de Kussmaul). Gasometría venosa: pH 7.15, HCO3 9 mEq/L, Cetonemia capilar 4.8 mmol/L.'
    },
    steps: [
      {
        stepNumber: 1,
        question: 'Ante una Cetoacidosis Diabética severa, ¿cuál es la piedra angular del tratamiento de enfermería que debe iniciarse de manera PRIORITARIA antes o simultáneamente a la insulina?',
        options: [
          'Fluidoterapia intensiva con Suero Salino Fisiológico al 0.9% para reexpansión del volumen intravascular',
          'Bolo rápido intravenoso de Bicarbonato Sódico 1M',
          'Bolo de 20 UI de Insulina Glargina subcutánea',
          'Restricción hídrica absoluta durante las primeras 6 horas'
        ],
        correctIndex: 0,
        justification: 'La fluidoterapia enérgica es el pilar prioritario inicial: restablece la perfusión tisular, disminuye las concentraciones plasmáticas de glucosa y contrarresta el shock hipovolémico osmótico severo que presentan estos pacientes (déficit habitual de 3-5 litros).'
      },
      {
        stepNumber: 2,
        question: 'El médico pauta bomba de infusión continua de Insulina Regular (humana rápida) a 0.1 UI/kg/h. Antes de iniciar la infusión de insulina, ¿qué parámetro analítico debe verificar obligatoriamente la enfermera?',
        options: [
          'Nivel de Potasio sérico (K+), asegurando que sea > 3.3 mEq/L',
          'Nivel de Calcio iónico total',
          'Transaminasas hepáticas (GOT y GPT)',
          'Tasa de sedimentación globular (VSG)'
        ],
        correctIndex: 0,
        justification: 'La insulina promueve la entrada masiva de potasio hacia el espacio intracelular. Si el potasio basal está por debajo de 3.3 mEq/L, la administración de insulina inducirá hipopotasemia crítica con arritmias ventriculares letales. Primero debe reponerse potasio.'
      }
    ]
  },
  {
    id: 'caso-sepsis-03',
    title: 'Caso Clínico 3: Código Sepsis y Shock Séptico en Urgencias',
    service: 'Servicio de Urgencias Hospitalarias (Box de Reanimación)',
    patientData: {
      age: 78,
      gender: 'Mujer',
      triageLevel: 'Nivel II (Naranja - Muy urgente)',
      vitals: {
        bp: '82/46 mmHg',
        hr: 122,
        spo2: 92,
        rr: 28,
        temp: 38.9,
        glycemia: 165
      },
      clinicalDescription: 'Mujer de 78 años procedente de residencia sociosanitaria. Presenta deterioro agudo del nivel de consciencia (Glasgow 11), confusión, oliguria, fiebre de 38.9 ºC y orina colúrica fétida en pañal. Tensión arterial media (TAM) de 58 mmHg y lactato capilar en gasometría de 4.2 mmol/L. Sospecha de shock séptico de origen urológico.'
    },
    steps: [
      {
        stepNumber: 1,
        question: 'Tras activar el Código Sepsis del hospital, ¿cuál es el paquete de medidas de enfermería de la PRIMERA HORA ("Hour-1 Bundle") según las guías Surviving Sepsis Campaign y Conselleria de Sanitat?',
        options: [
          'Medir lactato sérico, obtener hemocultivos previos al antibiótico, iniciar antibioterapia IV de amplio espectro e infundir cristaloides a 30 ml/kg si hipotensión o lactato ≥ 4',
          'Administrar inmediatamente noradrenalina por vía periférica antes de iniciar cualquier suero salino',
          'Esperar a los resultados microbiológicos de urocultivo antes de infundir cualquier antibiótico para evitar resistencias',
          'Iniciar hemodiálisis urgente con catéter venoso femoral'
        ],
        correctIndex: 0,
        justification: 'El bundle de la primera hora exige medir lactato, extraer 2 tandas de hemocultivos antes de los antibióticos, iniciar antibioterapia empírica precoz y comenzar fluidoterapia intensiva con cristaloides (30 ml/kg en primeras 3 horas).'
      },
      {
        stepNumber: 2,
        question: 'Tras infundir 2.000 ml de Suero Salino Fisiológico al 0.9%, la paciente mantiene TAM de 55 mmHg y persistencia de mala perfusión. ¿Cuál es el fármaco vasopresor de PRIMERA ELECCIÓN para restablecer la perfusión orgánica?',
        options: [
          'Noradrenalina en perfusión intravenosa continua',
          'Dopamina a dosis dopaminérgica renal baja (2 mcg/kg/min)',
          'Adrenalina en bolos intravenosos rápidos repetidos',
          'Atropina sulfato 1 mg en bolo IV'
        ],
        correctIndex: 0,
        justification: 'La Noradrenalina es el vasopresor de primera elección en el shock séptico resistente a fluidos para mantener una Tensión Arterial Media (TAM) ≥ 65 mmHg.'
      }
    ]
  },
  {
    id: 'caso-pcr-04',
    title: 'Caso Clínico 4: Parada Cardiorrespiratoria Extrahospitalaria (SVA SAMU)',
    service: 'Unidad Móvil SAMU Comunitat Valenciana',
    patientData: {
      age: 55,
      gender: 'Varón',
      triageLevel: 'Nivel I (Rojo - Emergencia Vital)',
      vitals: {
        bp: 'Indetectable (0/0 mmHg)',
        hr: 0,
        spo2: 0,
        rr: 0,
        temp: 35.8
      },
      clinicalDescription: 'Aviso por varón de 55 años con colapso súbito en vía pública en Valencia. A la llegada del SAMU, el SVB lleva 4 minutos realizando compresiones torácicas con DESA colocado. El monitor del SAMU identifica ritmo de Fibrilación Ventricular (FV) de alto voltaje.'
    },
    steps: [
      {
        stepNumber: 1,
        question: 'En el algoritmo de SVA para ritmos desfibrilables, ¿cuál es la conducta inmediata que debe ejecutar el equipo de enfermería tras confirmar la Fibrilación Ventricular en el monitor?',
        options: [
          'Desfibrilación inmediata con choque eléctrico bifásico no sincronizado a 150-200 Joules y reiniciar compresiones al instante durante 2 minutos',
          'Pausar compresiones durante 3 minutos y administrar Adrenalina 1 mg IV antes del choque',
          'Intubar inmediatamente al paciente con laringoscopio antes de aplicar cualquier descarga',
          'Infundir Bicarbonato 1M 100 ml y calcio gluconato'
        ],
        correctIndex: 0,
        justification: 'En ritmos desfibrilables (FV/TVSP) la desfibrilación eléctrica precoz es el factor pronóstico más determinante. Tras la descarga se reinician inmediatamente las compresiones 30:2 durante 2 minutos sin parar a comprobar pulso.'
      },
      {
        stepNumber: 2,
        question: 'Tras el 3er choque no efectivo en FV refractaria, ¿qué fármacos antiarrítmicos y vasopresores protocolizados debe preparar la enfermera?',
        options: [
          'Adrenalina 1 mg IV y Amiodarona 300 mg IV en bolo',
          'Adrenalina 1 mg IV y Atropina 3 mg IV',
          'Amiodarona 150 mg IV únicamente sin adrenalina',
          'Lidocaína 5 mg/kg y Magnesio sulfato 10 g'
        ],
        correctIndex: 0,
        justification: 'En las guías ERC de SVA, tras el tercer choque en FV/TVSP persistente se administra Adrenalina 1 mg IV y Amiodarona 300 mg IV.'
      }
    ]
  },
  {
    id: 'caso-upp-05',
    title: 'Caso Clínico 5: Manejo Integral de Úlcera por Presión Grado IV Infectada',
    service: 'Atención Primaria y Unidad de Heridas Complejas',
    patientData: {
      age: 84,
      gender: 'Mujer',
      triageLevel: 'Nivel IV (Verde - Consulta Programada)',
      vitals: {
        bp: '130/75 mmHg',
        hr: 76,
        spo2: 96,
        rr: 16,
        temp: 36.8
      },
      clinicalDescription: 'Mujer de 84 años encamada con demencia avanzada en domicilio. Presenta lesión sacra de 7x5 cm con exposición de hueso sacro visible, bordes macerados, abundante exudado purulento maloliente y esfacelos adheridos. Escala de Braden: 10 puntos (Riesgo muy alto).'
    },
    steps: [
      {
        stepNumber: 1,
        question: '¿A qué estadio o grado corresponde la lesión según la clasificación de la GNEAUPP y qué riesgo principal conlleva?',
        options: [
          'Estadio IV (Pérdida total del espesor con hueso expuesto); riesgo inminente de osteomielitis',
          'Estadio III (Llega a tejido celular subcutáneo); sin riesgo óseo',
          'Estadio II (Afectación exclusiva epidérmica superficial)',
          'Estadio I (Eritema cutáneo blanqueable)'
        ],
        correctIndex: 0,
        justification: 'La exposición de tejido óseo, articular, tendinoso o muscular define inequívocamente el Estadio IV, requiriendo descarte activo de osteomielitis.'
      },
      {
        stepNumber: 2,
        question: 'Para la cura en ambiente húmedo (CAH) de esta úlcera con abundante exudado purulento y carga bacteriana elevada, ¿qué combinación de apósitos está MÁS INDICADA?',
        options: [
          'Limpieza con suero salino fisiológico a baja presión, desbridamiento cortante de esfacelos y apósito de alginato cálcico o hidrofibra con plata',
          'Povidona yodada tópica continua y apósito oclusivo plástico impermeable',
          'Hidrogel amorfo exclusivo cubierto únicamente con gasa seca',
          'Pomada de sulfadiacina de plata cubierta con algodón'
        ],
        correctIndex: 0,
        justification: 'Los alginatos e hidrofibras con plata absorben grandes volúmenes de exudado formando un gel no traumático y liberan iones de plata antimicrobianos contra la infección local.'
      }
    ]
  },
  {
    id: 'caso-politrauma-06',
    title: 'Caso Clínico 6: Politraumatismo Grave y Shock Hemorrágico',
    service: 'Urgencias Hospitalarias (Trauma Box)',
    patientData: {
      age: 38,
      gender: 'Varón',
      triageLevel: 'Nivel I (Rojo - Emergencia Vital)',
      vitals: {
        bp: '78/42 mmHg',
        hr: 138,
        spo2: 89,
        rr: 32,
        temp: 35.2,
        glycemia: 110
      },
      clinicalDescription: 'Accidente de tráfico en autovía A-3. Conductor atrapado durante 45 minutos. A la llegada a Urgencias: dolor pélvico intenso con inestabilidad pélvica a la palpación, hematoma en flanco izquierdo, taquipnea y frialdad periférica. Se sospecha shock hemorrágico por fractura de pelvis y posible rotura esplénica.'
    },
    steps: [
      {
        stepNumber: 1,
        question: 'En la valoración inicial y soporte vital según metodología ATLS/PHTLS (secuencia ABCDE), ¿cuál es la primera medida de acceso vascular prioritario que debe ejecutar enfermería?',
        options: [
          'Canalizar 2 vías venosas periféricas cortas de grueso calibre (14G o 16G) e iniciar infusión de cristaloides tibios o hemoderivados según protocolo de transfusión masiva',
          'Insertar un catéter venoso central monolumen por vía subclavia como primera opción obligatoria',
          'Colocar una vía periférica fina de 22G en dorso de la mano',
          'Retrasar accesos venosos hasta completar la tomografía axial computarizada (TAC)'
        ],
        correctIndex: 0,
        justification: 'La ley de Poiseuille determina que el flujo es inversamente proporcional a la longitud del catéter y proporcional a la 4ª potencia del radio. Dos vías cortas y gruesas (14G naranja o 16G gris) permiten infundir fluidos y sangre mucho más rápido que un catéter venoso central largo.'
      },
      {
        stepNumber: 2,
        question: 'El traumatólogo solicita colocar una faja pélvica. Al inspeccionar los genitales externos se aprecia sangre en el meato uretral (uretrorragia) y hematoma perineal. ¿Qué técnica habitual está CONTRAINDICADA de forma absoluta en este momento?',
        options: [
          'Sondaje vesical uretral con sonda Foley',
          'Canalización de vía venosa periférica adicional',
          'Extracción de gasometría arterial',
          'Colocación de collarín cervical rígido'
        ],
        correctIndex: 0,
        justification: 'La presencia de uretrorragia, hematoma escrotal o próstata flotante indica rotura o lesión de uretra. El sondaje vesical a ciegas puede completar una rotura parcial de uretra o crear una falsa vía. Está contraindicado hasta realizar uretrografía o requerir cistostomía suprapúbica.'
      },
      {
        stepNumber: 3,
        question: 'En el shock hemorrágico traumático, ¿qué antifibrinolítico ha demostrado disminuir la mortalidad si se administra en las primeras 3 horas tras el trauma según el ensayo CRASH-2?',
        options: [
          'Ácido Tranexámico (dosis de 1 g IV en 10 minutos seguido de 1 g en perfusión durante 8 horas)',
          'Heparina sódica en bolo de 5.000 UI',
          'Vitamina K1 (Fitomenadiona) 20 mg intramuscular',
          'Ácido Acetilsalicílico 500 mg intravenoso'
        ],
        correctIndex: 0,
        justification: 'El Ácido Tranexámico administrado precozmente (< 3 horas desde el traumatismo) bloquea la hiperfibrinólisis y reduce significativamente la mortalidad por hemorragia sin incrementar eventos trombóticos.'
      }
    ]
  },
  {
    id: 'caso-ictus-07',
    title: 'Caso Clínico 7: Accidente Cerebrovascular Agudo (Código Ictus GVA)',
    service: 'Neurología y Servicio de Urgencias',
    patientData: {
      age: 69,
      gender: 'Mujer',
      triageLevel: 'Nivel II (Naranja - Muy urgente)',
      vitals: {
        bp: '192/105 mmHg',
        hr: 82,
        spo2: 97,
        rr: 18,
        temp: 36.7,
        glycemia: 128
      },
      clinicalDescription: 'Mujer de 69 años que mientras comía con su familia sufre pérdida súbita de fuerza en hemicuerpo derecho e incapacidad para hablar (afasia motora de Broca). Inicio presenciado hace exactamente 80 minutos. Escala prehospitalaria Cincinnati positiva en los 3 ítems (asimetría facial, debilidad en brazo, alteración del habla).'
    },
    steps: [
      {
        stepNumber: 1,
        question: 'A la llegada al hospital, se activa el Código Ictus de la Comunitat Valenciana. ¿Cuál es la prueba de neuroimagen urgente inmediata requerida para descartar hemorragia cerebral antes de plantear reperfusión?',
        options: [
          'TC (Tomografía Computarizada) craneal simple urgente sin contraste',
          'Electroencefalograma de 24 horas',
          'Radiografía simple de cráneo anteroposterior',
          'Punción lumbar diagnóstica inmediata'
        ],
        correctIndex: 0,
        justification: 'El TC craneal sin contraste es la prueba diagnóstica de elección para diferenciar con rapidez un ictus isquémico de un ictus hemorrágico (este último contraindicaría absolutamente la fibrinolisis).'
      },
      {
        stepNumber: 2,
        question: 'Descartada hemorragia, la paciente es candidata a fibrinólisis intravenosa con Alteplasa (rtPA). Sin embargo, su TA es 192/105 mmHg. Según los criterios de seguridad del protocolo de ictus, ¿cuál es el objetivo de Tensión Arterial exigido antes de iniciar el bolo de fibrinolítico?',
        options: [
          'Tensión Arterial inferior a 185/110 mmHg (administrando antihipertensivos IV como Labetalol si es preciso)',
          'Tensión Arterial sistólica por debajo de 90 mmHg',
          'No importa la tensión arterial; el rtPA se infunde sin considerar cifras tensionales',
          'Aumentar la tensión arterial por encima de 220/120 mmHg para mejorar la perfusión cerebral'
        ],
        correctIndex: 0,
        justification: 'Para iniciar la fibrinólisis con rtPA, la TA debe ser estrictamente menor de 185/110 mmHg para evitar el riesgo devastador de transformación hemorrágica cerebral.'
      }
    ]
  },
  {
    id: 'caso-anafilaxia-08',
    title: 'Caso Clínico 8: Shock Anafiláctico Grave por Medicamento',
    service: 'Hospitalización Quirúrgica',
    patientData: {
      age: 46,
      gender: 'Varón',
      triageLevel: 'Nivel I (Rojo - Emergencia Vital)',
      vitals: {
        bp: '70/40 mmHg',
        hr: 142,
        spo2: 86,
        rr: 36,
        temp: 36.6,
        glycemia: 105
      },
      clinicalDescription: 'Varón intervenido de apendicectomía. A los 5 minutos de iniciar la perfusión intravenosa de Cefazolina (antibiótico profiláctico), el paciente refiere prurito palmo-plantar intenso, calor generalizado, aparición de habones eritematosos confluentes, estridor inspiratorio laríngeo, disnea severa y mareo inmediato.'
    },
    steps: [
      {
        stepNumber: 1,
        question: 'Ante un shock anafiláctico de instauración rápida, ¿cuál es el PRIMER fármaco de elección indiscutible, su vía y su localización de administración recomendada?',
        options: [
          'Adrenalina 1:1.000 (0.5 mg) administrada por vía Intramuscular en la cara anterolateral del muslo (vasto externo)',
          'Hidrocortisona 200 mg intravenosa lenta',
          'Dexclorfeniramina 5 mg intramuscular en glúteo',
          'Bolo de salbutamol inhalado 2 puffs'
        ],
        correctIndex: 0,
        justification: 'La adrenalina intramuscular es el fármaco de primera línea que salva vidas en anafilaxia. La inyección en el vasto externo del muslo alcanza niveles plasmáticos pico mucho más rápidos que en el deltoides o el glúteo. Corticoides y antihistamínicos son fármacos de segunda línea de acción lenta.'
      },
      {
        stepNumber: 2,
        question: 'Además de administrar la adrenalina y suspender inmediatamente la infusión del antibiótico causal, ¿en qué posición corporal debe colocarse al paciente para evitar el colapso vascular por "síndrome de ventrículo vacío"?',
        options: [
          'Decúbito supino con elevación de las extremidades inferiores (Trendelenburg), siempre que la vía aérea y la mecánica ventilatoria lo toleren',
          'Bipedestación forzada para favorecer la ventilación',
          'Fowler alto a 90 grados con las piernas colgando fuera de la cama',
          'Decúbito prono'
        ],
        correctIndex: 0,
        justification: 'En el shock anafiláctico hay vasodilatación masiva y fuga capilar severa. Incorporar bruscamente al paciente puede provocar paro cardiorrespiratorio por falta de retorno venoso (síndrome de ventrículo vacío). La posición en decúbito supino con piernas elevadas es mandatoria.'
      }
    ]
  },
  {
    id: 'caso-asma-09',
    title: 'Caso Clínico 9: Crisis Asmática Aguda en Paciente Pediátrico',
    service: 'Urgencias Pediátricas',
    patientData: {
      age: 6,
      gender: 'Niño',
      triageLevel: 'Nivel II (Naranja - Muy urgente)',
      vitals: {
        bp: '100/62 mmHg',
        hr: 145,
        spo2: 90,
        rr: 48,
        temp: 36.9
      },
      clinicalDescription: 'Niño de 6 años con antecedentes de asma bronquial que acude por dificultad respiratoria progresiva de 4 horas de evolución. A la exploración: tiraje intercostal y subcostal moderado-grave, aleteo nasal, sibilancias espiratorias audibles sin fonendoscopio y habla entrecortada (frases de 2 palabras). Escala Pulmonary Score: 6 puntos.'
    },
    steps: [
      {
        stepNumber: 1,
        question: 'En el tratamiento de rescate del broncoespasmo agudo en pediatría, ¿cuál es el método de administración del broncodilatador (Salbutamol) con mayor evidencia científica y menor tasa de efectos secundarios?',
        options: [
          'Inhalador dosificador presurizado (MDI) acoplado a cámara espaciadora con mascarilla o boquilla (4 a 8 pulsaciones)',
          'Nebulizador ultrasónico con suero hipertónico al 7%',
          'Jarabe de salbutamol por vía oral',
          'Inyección subcutánea de teofilina'
        ],
        correctIndex: 0,
        justification: 'Las guías clínicas internacionales (GINA, GEMA) confirman que el inhalador MDI con cámara espaciadora es tan eficaz o superior al nebulizador para crisis asmáticas leves-moderadas, requiriendo menos tiempo, depositando más fármaco en el árbol bronquial y generando menos taquicardia.'
      },
      {
        stepNumber: 2,
        question: 'Para evitar la recaída inflamatoria precoz, se prescribe corticoterapia sistémica oral. ¿Cuál es el corticoide y la dosis habitual de pauta en crisis pediátricas?',
        options: [
          'Prednisolona u oral Prednisona a 1-2 mg/kg/día durante 3 a 5 días',
          'Dexametasona 50 mg en dosis única intramuscular',
          'Budesonida inhalada 50 mcg al mes',
          'Hidrocortisona en crema tópica peribucal'
        ],
        correctIndex: 0,
        justification: 'La prednisolona oral a 1-2 mg/kg/día (máximo 40-50 mg/día) durante 3-5 días reduce la inflamación de la vía aérea, previene ingresos hospitalarios y no precisa pauta descendente en tandas cortas.'
      }
    ]
  },
  {
    id: 'caso-preeclampsia-10',
    title: 'Caso Clínico 10: Preeclampsia Grave y Profilaxis de Eclampsia',
    service: 'Urgencias Tocoginecológicas y Paritorio',
    patientData: {
      age: 32,
      gender: 'Mujer (Gestante 35 semanas)',
      triageLevel: 'Nivel II (Naranja - Muy urgente)',
      vitals: {
        bp: '174/112 mmHg',
        hr: 94,
        spo2: 98,
        rr: 20,
        temp: 36.5
      },
      clinicalDescription: 'Primigesta de 35 semanas de gestación que acude a urgencias maternales por cefalea occipital pulsátil refractaria a paracetamol, fosfenos (visión de lucecitas), dolor en epigastrio en "barra" y edemas marcados en miembros inferiores y cara. Tira de orina: proteinuria 3+.'
    },
    steps: [
      {
        stepNumber: 1,
        question: 'Ante una preeclampsia grave con síntomas premonitorios de eclampsia, ¿cuál es el fármaco de elección para la prevención y tratamiento de las convulsiones eclámpticas?',
        options: [
          'Sulfato de Magnesio intravenoso (dosis de carga de 4 g en 20 min seguida de perfusión continua de 1-2 g/h)',
          'Diazepam 10 mg en bolo rápido repetido',
          'Fenitoína intravenosa a dosis neurológica',
          'Paracetamol 1 g intravenoso'
        ],
        correctIndex: 0,
        justification: 'El Sulfato de Magnesio es el anticonvulsivante de referencia absoluto en obstetricia para la prevención y tratamiento de la eclampsia (ensayo Magpie). Las benzodiacepinas y la fenitoína son significativamente inferiores.'
      },
      {
        stepNumber: 2,
        question: 'Durante la infusión continua de Sulfato de Magnesio, ¿qué parámetro clínico debe valorar la enfermera de forma prioritaria, cuya desaparición indica toxicidad por magnesio?',
        options: [
          'Presencia del reflejo rotuliano (osteotendinoso)',
          'Coloración de la esclera ocular',
          'Capacidad para tragar líquidos',
          'Nivel de glucemia capilar'
        ],
        correctIndex: 0,
        justification: 'La abolición del reflejo rotuliano es el signo clínico más precoz de intoxicación por magnesio (niveles > 4-5 mmol/L), previo al paro respiratorio. Su control horario es indispensable junto a la diuresis (> 30 ml/h) y la frecuencia respiratoria (> 12-14 rpm).'
      },
      {
        stepNumber: 3,
        question: 'Si la paciente presenta signos de toxicidad grave por Sulfato de Magnesio (hiporreflexia rotuliana severa y frecuencia respiratoria < 10 rpm), ¿cuál es el antídoto específico inmediato que debe tener disponible enfermería?',
        options: [
          'Gluconato de Calcio al 10% (1 gramo IV lento en 3-5 minutos)',
          'Sulfato de Protamina 50 mg IV',
          'Flumazenilo 0.5 mg IV',
          'Naloxona 0.4 mg IV'
        ],
        correctIndex: 0,
        justification: 'El Gluconato de Calcio al 10% es el antagonista fisiológico directo de los efectos tóxicos del magnesio sobre la placa neuromuscular y el centro respiratorio.'
      }
    ]
  }
];
