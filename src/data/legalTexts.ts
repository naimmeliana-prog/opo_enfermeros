export interface OfficialLawDoc {
  id: string;
  shortTitle: string;
  fullTitle: string;
  scope: 'Comunitat Valenciana' | 'Estatal';
  bulletinReference: string;
  enactedDate: string;
  description: string;
  keyExamArticles: string[];
  chapters: {
    title: string;
    articles: {
      number: string;
      title: string;
      content: string;
      examTip?: string;
    }[];
  }[];
}

export const OFFICIAL_LEGAL_DOCS: Record<string, OfficialLawDoc> = {
  'ley-10-2014': {
    id: 'ley-10-2014',
    shortTitle: 'Ley 10/2014 de Salud de la CV',
    fullTitle: 'Ley 10/2014, de 29 de diciembre, de Salud de la Comunitat Valenciana',
    scope: 'Comunitat Valenciana',
    bulletinReference: 'DOGV Núm. 7434 / BOE Núm. 28',
    enactedDate: '29 de diciembre de 2014',
    description: 'Norma institucional básica del Sistema Sanitario Público de la Comunitat Valenciana. Regula los derechos y deberes en materia de salud, las actuaciones sanitarias, la ordenación territorial en Departamentos de Salud y la tarjeta sanitaria SIP.',
    keyExamArticles: [
      'Art. 3 (Principios rectores)',
      'Art. 18 (Departamentos de Salud)',
      'Art. 22 (Centros de Salud y Zonas Básicas)',
      'Art. 42 (SIP y Tarjeta Sanitaria)',
      'Art. 56 (Historia Clínica y Abucasis/Orion)',
      'Art. 68 (Derecho a la segunda opinión)'
    ],
    chapters: [
      {
        title: 'Título Preliminar: Disposiciones Generales y Principios',
        articles: [
          {
            number: 'Artículo 1',
            title: 'Objeto de la Ley',
            content: 'La presente ley tiene por objeto la ordenación del sistema sanitario en el territorio de la Comunitat Valenciana, garantizando a todas las personas el derecho a la protección de la salud conforme a la Constitución Española y el Estatuto de Autonomía de la Comunitat Valenciana.'
          },
          {
            number: 'Artículo 2',
            title: 'Titulares del Derecho a la Salud',
            content: '1. Son titulares del derecho a la protección de la salud y a la atención sanitaria pública todos los ciudadanos españoles y los extranjeros con residencia legal o de hecho en cualquier municipio de la Comunitat Valenciana.\n2. Se garantiza la atención de urgencia médica y quirúrgica a toda persona, independientemente de su situación administrativa, hasta el alta médica.'
          },
          {
            number: 'Artículo 3',
            title: 'Principios Rectores del Sistema Sanitario Valenciano',
            content: `El Sistema Valenciano de Salud se fundamenta en los siguientes principios:
1. Universalidad de la cobertura sanitaria pública para toda la ciudadanía valenciana.
2. Equidad y superación de las desigualdades territoriales y de género en el acceso a las prestaciones.
3. Concepción integral de la salud, abarcando promoción, prevención, asistencia curativa, cuidados de enfermería y rehabilitación.
4. Descentralización, desconcentración y coordinación funcional de los servicios sanitarios.
5. Continuidad asistencial entre la Atención Primaria de Salud y la Atención Especializada gestionada por el personal de enfermería.
6. Participación comunitaria y democrática a través de los Consejos de Salud.`,
            examTip: '¡Clave de examen!: Principio rector esencial es la continuidad de cuidados gestionada por el personal de enfermería entre centros de salud y hospitales.'
          }
        ]
      },
      {
        title: 'Título I: Derechos y Deberes de la Ciudadanía en Salud',
        articles: [
          {
            number: 'Artículo 8',
            title: 'Derecho a la Intimidad y Confidencialidad',
            content: '1. Toda persona tiene derecho a que se respete el carácter confidencial de los datos referentes a su salud y que nadie pueda acceder a ellos sin previa autorización legal o consentimiento expreso.\n2. En los centros sanitarios se velará por que la recogida, almacenamiento y tratamiento de datos asistenciales cumpla estrictamente la legislación de protección de datos.'
          },
          {
            number: 'Artículo 12',
            title: 'Derecho a la Libre Elección',
            content: 'La ciudadanía tiene derecho a la libre elección de médico de familia, pediatra y enfermera comunitaria en el ámbito de su Departamento de Salud, así como de centro hospitalario según la normativa de desarrollo de la Conselleria.'
          },
          {
            number: 'Artículo 15',
            title: 'Deberes de la Ciudadanía',
            content: '1. Cuidar de su salud de forma responsable y cumplir las prescripciones generales de naturaleza sanitaria comunes a toda la población.\n2. Cuidar las instalaciones y colaborar en el mantenimiento de la habitabilidad de los centros sanitarios del Sistema Valenciano de Salud.\n3. Tratar con el máximo respeto al personal sanitario y no sanitario de los centros.'
          }
        ]
      },
      {
        title: 'Título II: Ordenación Territorial y Departamentos de Salud',
        articles: [
          {
            number: 'Artículo 18',
            title: 'El Departamento de Salud como Demarcación Básica',
            content: `1. El Departamento de Salud es la estructura y demarcación territorial y funcional básica del Sistema Valenciano de Salud.
2. Cada Departamento de Salud integra, bajo una dirección y gerencia única, la totalidad de los recursos, centros y prestaciones de Atención Primaria y de Atención Especializada que le están adscritos.
3. Se garantiza la accesibilidad geográfica de la población a un Hospital de referencia y su red de Centros de Salud de Zona Básica.`,
            examTip: 'Pregunta fija de OPE: La demarcación básica del sistema valenciano es el Departamento de Salud (no el área provincial ni el distrito).'
          },
          {
            number: 'Artículo 22',
            title: 'Zonas Básicas de Salud y Centros de Salud',
            content: `1. El Departamento de Salud se divide territorialmente en Zonas Básicas de Salud para la prestación de la Atención Primaria.
2. En cada Zona Básica de Salud existirá un Centro de Salud como cabecera física del Equipo de Atención Primaria (EAP), integrado por médicos de familia, pediatras, enfermeras y personal de apoyo.
3. En los núcleos de población periféricos podrán existir Consultorios Auxiliares dependientes del Centro de Salud cabecera.`
          },
          {
            number: 'Artículo 42',
            title: 'Sistema de Información Poblacional (SIP) y Tarjeta Sanitaria',
            content: `1. El Sistema de Información Poblacional (SIP) es el registro administrativo único e integrado de aseguramiento sanitario público de la Comunitat Valenciana.
2. La Tarjeta Sanitaria SIP acredita individualmente a los ciudadanos en el acceso a los centros y a la prestación farmacéutica dispensable en oficinas de farmacia de la CV.`,
            examTip: 'SIP es el acrónimo oficial valenciano evaluado en prácticamente todos los exámenes de Sanitat GVA.'
          }
        ]
      },
      {
        title: 'Título IV: Historia de Salud Electrónica y Calidad Asistencial',
        articles: [
          {
            number: 'Artículo 56',
            title: 'Historia de Salud y Aplicativos Corporativos',
            content: `1. Toda persona atendida en el Sistema Valenciano de Salud tendrá una Historia de Salud Electrónica única por paciente que recolectará cronológicamente todos sus actos asistenciales.
2. El registro clínico se realiza a través de las plataformas corporativas oficiales: Abucasis en los centros de Atención Primaria y Orion Clinic en la red hospitalaria y de consultas especializadas.`,
            examTip: 'Herramientas informáticas oficiales de la Conselleria de Sanitat: Abucasis (AP) y Orion Clinic (Hospitales).'
          },
          {
            number: 'Artículo 68',
            title: 'Derecho a la Segunda Opinión Médica',
            content: 'Los usuarios del Sistema Valenciano de Salud tienen derecho a solicitar una segunda opinión médica en procesos que impliquen un diagnóstico con pronóstico fatal o tratamientos con elevado riesgo vital, en los términos reglamentariamente fijados.'
          }
        ]
      }
    ]
  },
  'ley-14-1986': {
    id: 'ley-14-1986',
    shortTitle: 'Ley 14/1986 General de Sanidad',
    fullTitle: 'Ley 14/1986, de 25 de abril, General de Sanidad',
    scope: 'Estatal',
    bulletinReference: 'BOE Núm. 102',
    enactedDate: '25 de abril de 1986',
    description: 'Pilar legislativo del Sistema Nacional de Salud español. Crea la estructura del SNS con financiación pública, cobertura universal y descentralización autonómica.',
    keyExamArticles: [
      'Art. 1 (Objeto y base constitucional art. 43)',
      'Art. 3 (Financiación y universalidad)',
      'Art. 12 (Orientación preventiva)',
      'Art. 56 (Áreas de Salud: 200.000 a 250.000 hab)',
      'Art. 62 (Zonas Básicas de Salud)'
    ],
    chapters: [
      {
        title: 'Título Preliminar: Del Derecho a la Protección de la Salud',
        articles: [
          {
            number: 'Artículo 1',
            title: 'Fundamento Constitucional',
            content: 'La presente ley tiene por objeto la regulación general de todas las acciones que permitan hacer efectivo el derecho a la protección de la salud reconocido en el artículo 43 y concordantes de la Constitución.'
          },
          {
            number: 'Artículo 3',
            title: 'Principios Fundamentales del SNS',
            content: `1. Los medios y actuaciones del sistema sanitario estarán orientados prioritariamente a la promoción de la salud y a la prevención de las enfermedades.
2. El acceso a las prestaciones sanitarias se realizará en condiciones de igualdad efectiva.
3. La política de salud estará orientada a la superación de los desequilibrios territoriales y sociales.`
          }
        ]
      },
      {
        title: 'Título III: De la Estructura del Sistema Sanitario Público',
        articles: [
          {
            number: 'Artículo 56',
            title: 'Las Áreas de Salud',
            content: `1. Las Comunidades Autónomas delimitarán y constituirán en su territorio demarcaciones denominadas Áreas de Salud.
2. Las Áreas de Salud son las piezas fundamentales de los Servicios de Salud de las Comunidades Autónomas, encargadas de la gestión unitaria de los centros y establecimientos del servicio de salud.
3. El Área de Salud extenderá su acción a una población no inferior a 200.000 habitantes ni superior a 250.000, salvo excepciones geográficas debidamente justificadas.`,
            examTip: '¡Dato numérico preguntado con frecuencia!: Población de referencia de 200.000 a 250.000 habitantes.'
          },
          {
            number: 'Artículo 62',
            title: 'La Zona Básica de Salud y los Centros de Salud',
            content: `1. Para conseguir la máxima operatividad y eficacia en el nivel de Atención Primaria, las Áreas de Salud se dividirán en Zonas Básicas de Salud.
2. En la delimitación de las Zonas Básicas de Salud se tendrán en cuenta las distancias máximas de las agrupaciones de población, las instalaciones y los tiempos de desplazamiento (máximo 30 minutos).
3. El Centro de Salud es la estructura física y funcional en la que se desarrollan las actividades de Atención Primaria del Equipo de Atención Primaria.`
          }
        ]
      }
    ]
  },
  'ley-41-2002': {
    id: 'ley-41-2002',
    shortTitle: 'Ley 41/2002 Autonomía del Paciente',
    fullTitle: 'Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica',
    scope: 'Estatal',
    bulletinReference: 'BOE Núm. 274',
    enactedDate: '14 de noviembre de 2002',
    description: 'Regula el derecho a la información asistencial, el consentimiento informado, el derecho a la intimidad, las instrucciones previas y la historia clínica.',
    keyExamArticles: [
      'Art. 2 (Principios básicos)',
      'Art. 4 (Derecho a la información asistencial)',
      'Art. 8 (Consentimiento informado verbal vs escrito)',
      'Art. 9 (Límites y excepciones al consentimiento)',
      'Art. 11 (Instrucciones previas)',
      'Art. 15 (Contenido de la historia clínica)',
      'Art. 17 (Conservación de la historia clínica: mínimo 5 años)'
    ],
    chapters: [
      {
        title: 'Capítulo I: Principios Generales',
        articles: [
          {
            number: 'Artículo 2',
            title: 'Principios Básicos de la Autonomía del Paciente',
            content: `1. La dignidad de la persona humana, el respeto a la autonomía de su voluntad y a su intimidad orientarán toda la actividad sanitaria.
2. Toda actuación en el ámbito de la sanidad requiere, con carácter general, el previo consentimiento de los pacientes o usuarios.
3. El paciente tiene derecho a decidir libremente, después de recibir la información adecuada, entre las opciones clínicas disponibles o negarse al tratamiento salvo supuestos de riesgo para la salud pública.`
          }
        ]
      },
      {
        title: 'Capítulo II: Derecho a la Información Asistencial',
        articles: [
          {
            number: 'Artículo 4',
            title: 'El Derecho a la Información Asistencial',
            content: `1. Los pacientes tienen derecho a conocer, con motivo de cualquier actuación en el ámbito de su salud, toda la información disponible sobre la misma.
2. La información clínica forma parte de todas las actuaciones asistenciales, será verdadera, se comunicará al paciente de forma comprensible y adecuada a sus necesidades.
3. El titular del derecho a la información es el paciente. También serán informadas las personas vinculadas a él, por razones familiares o de hecho, en la medida en que el paciente lo permita de manera expresa o tácita.`
          }
        ]
      },
      {
        title: 'Capítulo IV: El Consentimiento Informado',
        articles: [
          {
            number: 'Artículo 8',
            title: 'Consentimiento Informado Escrito y Verbal',
            content: `1. Toda actuación en el ámbito de la salud de un paciente necesita el consentimiento libre y voluntario del afectado, una vez recibida la información asistencial.
2. El consentimiento será VERBAL por regla general.
3. Sin embargo, se prestará por ESCRITO en los siguientes tres casos:
   a) Intervención quirúrgica.
   b) Procedimientos diagnósticos y terapéuticos invasores.
   c) Aplicación de procedimientos que suponen riesgos o inconvenientes de notoria y previsible repercusión negativa sobre la salud del paciente.
4. El paciente puede revocar libremente por escrito su consentimiento en cualquier momento antes del procedimiento.`,
            examTip: '¡Pregunta estrella de examen!: El consentimiento es VERBAL por regla general. Es por ESCRITO en intervenciones quirúrgicas o procedimientos invasivos de riesgo relevante.'
          },
          {
            number: 'Artículo 9',
            title: 'Límites del Consentimiento Informado y Excepciones',
            content: `1. Los facultativos podrán llevar a cabo las intervenciones clínicas indispensables a favor de la salud del paciente, sin necesidad de contar con su consentimiento, en los siguientes supuestos:
   a) Cuando existe riesgo para la salud pública a causa de razones sanitarias establecidas por la ley.
   b) Cuando existe riesgo inmediato grave para la integridad física o psíquica del enfermo y no es posible conseguir su autorización (urgencia vital).
2. Menores de edad: A partir de los 16 años cumplidos o emancipados, el menor presta el consentimiento por sí mismo (no por representación), salvo incapacidad o riesgo grave.`
          },
          {
            number: 'Artículo 11',
            title: 'Instrucciones Previas o Voluntades Anticipadas',
            content: `1. Por el documento de instrucciones previas, una persona mayor de edad, capaz y libre, manifiesta anticipadamente su voluntad sobre los cuidados y el tratamiento de su salud para que se cumpla en el momento en que no sea capaz de expresarlos personalmente.
2. No serán aplicadas las instrucciones previas contrarias al ordenamiento jurídico, a la lex artis, ni las que no se correspondan con el supuesto previsto por el interesado.`
          }
        ]
      },
      {
        title: 'Capítulo V: La Historia Clínica y Documentación',
        articles: [
          {
            number: 'Artículo 15',
            title: 'Contenido Mínimo de la Historia Clínica',
            content: `La historia clínica incorporará la hoja clínico-estadística, anamnesis y exploración física, evolución, órdenes médicas, hoja de interconsulta, informes de pruebas complementarias, consentimiento informado, informe de anestesia, informe quirúrgico, hoja de registro de enfermería y evolución de cuidados, y el informe de alta.`
          },
          {
            number: 'Artículo 17',
            title: 'Conservación de la Documentación Clínica',
            content: `1. Los centros sanitarios tienen la obligación de conservar la documentación clínica en condiciones que garanticen su autenticidad, integridad y confidencialidad.
2. El plazo mínimo obligatorio de conservación es de CINCO AÑOS contados desde la fecha del alta de cada proceso asistencial.`,
            examTip: '¡Plazo clave de examen!: Conservación mínima obligatoria de 5 AÑOS desde la fecha del alta asistencial.'
          }
        ]
      }
    ]
  },
  'ley-55-2003': {
    id: 'ley-55-2003',
    shortTitle: 'Ley 55/2003 Estatuto Marco',
    fullTitle: 'Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud',
    scope: 'Estatal',
    bulletinReference: 'BOE Núm. 301',
    enactedDate: '16 de diciembre de 2003',
    description: 'Régimen estatutario común aplicable a todo el personal de los Servicios de Salud en España. Clasificación en grupos, derechos, deberes, selección, situaciones administrativas y régimen disciplinario.',
    keyExamArticles: [
      'Art. 6 (Personal sanitario Subgrupo A2 - Enfermería)',
      'Art. 9 (Nombramientos temporales e interinos)',
      'Art. 17 (Deberes del personal)',
      'Art. 63 (Situaciones administrativas)',
      'Art. 72 (Faltas muy graves)',
      'Art. 74 (Prescripción de faltas y sanciones)'
    ],
    chapters: [
      {
        title: 'Capítulo II: Clasificación del Personal Estatutario',
        articles: [
          {
            number: 'Artículo 6',
            title: 'Personal Estatutario Sanitario Universitario',
            content: `1. El personal estatutario sanitario de formación universitaria se clasifica en:
   a) Licenciados universitarios con título de especialista en Ciencias de la Salud (Subgrupo A1).
   b) Diplomados o Graduados universitarios sanitarios, como Enfermería y Fisioterapia (Subgrupo A2).`
          },
          {
            number: 'Artículo 9',
            title: 'Personal Estatutario Temporal',
            content: `1. Por razones de necesidad, de urgencia o para el desarrollo de programas de carácter temporal, coyuntural o extraordinario, los servicios de salud podrán nombrar personal estatutario temporal:
   a) Interino: para cobertura de plaza vacante por tiempo máximo de 3 años.
   b) Sustitución: para sustituir a personal fijo o interino con derecho a reserva de plaza.
   c) Eventual: para acumulación de tareas o programas específicos.`
          }
        ]
      },
      {
        title: 'Capítulo XI: Situaciones Administrativas',
        articles: [
          {
            number: 'Artículo 62',
            title: 'Catálogo de Situaciones Administrativas',
            content: `El personal estatutario fijo puede hallarse en alguna de las siguientes situaciones:
a) Servicio activo.
b) Servicios especiales.
c) Servicios bajo otro régimen jurídico.
d) Excedencia por servicios en el sector público.
e) Excedencia voluntaria (por interés particular, agrupación familiar, cuidado de familiares).
f) Suspensión de funciones firme o provisional.`
          }
        ]
      },
      {
        title: 'Capítulo XII: Régimen Disciplinario y Prescripción',
        articles: [
          {
            number: 'Artículo 72',
            title: 'Faltas Muy Graves',
            content: `Son faltas muy graves:
1. El incumplimiento del deber de fidelidad a la Constitución o al respectivo Estatuto de Autonomía.
2. Toda actuación discriminatoria por razón de sexo, raza, religión o cualquier otra condición personal.
3. La vulneración grave del secreto profesional y de la intimidad del paciente.
4. El abandono del servicio o la negativa injustificada a participar en medidas de urgencia sanitaria o emergencias.
5. La manifiesta negligencia grave en el cumplimiento de los cuidados con daño a la integridad del usuario.`
          },
          {
            number: 'Artículo 74',
            title: 'Prescripción de Faltas y Sanciones Disciplinarias',
            content: `1. Las faltas disciplinarias prescriben en los siguientes plazos desde su comisión:
   • Faltas MUY GRAVES: Prescriben a los 4 AÑOS.
   • Faltas GRAVES: Prescriben a los 2 AÑOS.
   • Faltas LEVES: Prescriben a los 6 MESES.

2. Las sanciones impuestas prescriben en los siguientes plazos desde la firmeza de la resolución:
   • Sanciones por faltas MUY GRAVES: Prescriben a los 4 AÑOS.
   • Sanciones por faltas GRAVES: Prescriben a los 2 AÑOS.
   • Sanciones por faltas LEVES: Prescriben a 1 AÑO.`,
            examTip: '¡Pregunta obligatoria!: La escala 6 meses (leves), 2 años (graves) y 4 años (muy graves). En sanciones impuestas: leves es 1 año (no 6 meses).'
          }
        ]
      }
    ]
  },
  'estatut-cv-2006': {
    id: 'estatut-cv-2006',
    shortTitle: 'Estatuto de Autonomía de la CV (LO 1/2006)',
    fullTitle: 'Ley Orgánica 1/2006, de 10 de abril, de Reforma de la Ley Orgánica 5/1982, de Estatuto de Autonomía de la Comunitat Valenciana',
    scope: 'Comunitat Valenciana',
    bulletinReference: 'DOGV Núm. 5238 / BOE Núm. 86',
    enactedDate: '10 de abril de 2006',
    description: 'Norma institucional básica de la Comunitat Valenciana. Define las instituciones de autogobierno (Les Corts, el President y el Consell) y las competencias exclusivas en sanidad interior.',
    keyExamArticles: [
      'Art. 9 (Derechos de los ciudadanos valencianos)',
      'Art. 20 (Instituciones de la Generalitat)',
      'Art. 21-26 (Les Corts Valencianes y sede en el Palau dels Borja)',
      'Art. 54 (Competencias exclusivas en sanidad interior)'
    ],
    chapters: [
      {
        title: 'Título I: La Comunitat Valenciana y Derechos Estatutarios',
        articles: [
          {
            number: 'Artículo 9',
            title: 'Derechos de los Valencianos y Valencianas',
            content: `1. Todos los ciudadanos valencianos tienen derecho a gozar de los derechos y libertades reconocidos en la Constitución Española y en los tratados internacionales.
2. Los poderes públicos de la Generalitat garantizarán el derecho a un sistema de salud público, universal y de calidad, promoviendo la equidad territorial y el acceso gratuito a las prestaciones básicas.`
          }
        ]
      },
      {
        title: 'Título III: De las Instituciones de la Generalitat',
        articles: [
          {
            number: 'Artículo 20',
            title: 'Instituciones de Autogobierno de la Generalitat',
            content: `1. Forman parte de la Generalitat:
   a) Les Corts Valencianes o Les Corts.
   b) El President de la Generalitat.
   c) El Consell.
2. Son también instituciones de la Generalitat las instituciones de carácter consultivo y de control: la Sindicatura de Comptes, el Síndic de Greuges, el Consell Valencià de Cultura, la Acadèmia Valenciana de la Llengua, el Consell Jurídic Consultiu y el Comité Econòmic i Social.`
          },
          {
            number: 'Artículo 21',
            title: 'Les Corts Valencianes',
            content: '1. Les Corts son la institución de la Generalitat que representa al pueblo valenciano, ejercen la potestad legislativa, aprueban los presupuestos de la Generalitat y controlan la acción de gobierno del Consell.\n2. Su sede oficial radica en la ciudad de Valencia, en el histórico Palau dels Borja o de Benicarló.'
          }
        ]
      },
      {
        title: 'Título V: De las Competencias de la Generalitat',
        articles: [
          {
            number: 'Artículo 54',
            title: 'Competencias Sanitarias de la Generalitat',
            content: `1. Corresponde a la Generalitat la competencia exclusiva en materia de:
   • Organización, administración y gestión de todas las instituciones sanitarias públicas dentro del territorio de la Comunitat Valenciana.
   • La ejecución de la legislación del Estado sobre productos farmacéuticos.
   • La sanidad interior e higiene pública, sin perjuicio de las competencias reservadas al Estado en el artículo 149.1.16ª de la Constitución Española.`,
            examTip: 'La Generalitat ostenta competencia EXCLUSIVA en la organización de su servicio de salud autonómico.'
          }
        ]
      }
    ]
  },
  'ce-1978': {
    id: 'ce-1978',
    shortTitle: 'Constitución Española de 1978',
    fullTitle: 'Constitución Española aprobada por las Cortes Generales el 31 de octubre de 1978',
    scope: 'Estatal',
    bulletinReference: 'BOE Núm. 311',
    enactedDate: '29 de diciembre de 1978',
    description: 'Norma suprema del ordenamiento jurídico español. El artículo 43 consagra el derecho a la protección de la salud como principio rector de la política social y económica.',
    keyExamArticles: [
      'Art. 14 (Principio de igualdad)',
      'Art. 15 (Derecho a la vida e integridad física)',
      'Art. 43 (Derecho a la protección de la salud)',
      'Art. 53 (Garantías de las libertades y derechos)',
      'Art. 149.1.16ª (Sanidad exterior y bases de la sanidad)'
    ],
    chapters: [
      {
        title: 'Título Preliminar: Principios Generales',
        articles: [
          {
            number: 'Artículo 1',
            title: 'Estado Social y Democrático de Derecho',
            content: '1. España se constituye en un Estado social y democrático de Derecho, que propugna como valores superiores de su ordenamiento jurídico la libertad, la justicia, la igualdad y el pluralismo político.\n2. La soberanía nacional reside en el pueblo español, del que emanan los poderes del Estado.'
          }
        ]
      },
      {
        title: 'Título I: Capítulo II - Derechos y Libertades',
        articles: [
          {
            number: 'Artículo 14',
            title: 'Principio de Igualdad ante la Ley',
            content: 'Los españoles son iguales ante la ley, sin que pueda prevalecer discriminación alguna por razón de nacimiento, raza, sexo, religión, opinión o cualquier otra condición o circunstancia personal o social.'
          },
          {
            number: 'Artículo 15',
            title: 'Derecho a la Vida e Integridad Física',
            content: 'Todos tienen derecho a la vida y a la integridad física y moral, sin que, en ningún caso, puedan ser sometidos a tortura ni a penas o tratos inhumanos o degradantes. Queda abolida la pena de muerte, salvo lo que puedan disponer las leyes penales militares para tiempos de guerra.'
          }
        ]
      },
      {
        title: 'Título I: Capítulo III - Principios Rectores de la Política Social',
        articles: [
          {
            number: 'Artículo 43',
            title: 'El Derecho a la Protección de la Salud',
            content: `1. Se reconoce el derecho a la protección de la salud.
2. Compete a los poderes públicos organizar y tutelar la salud pública a través de medidas preventivas y de las prestaciones y servicios necesarios. La ley establecerá los derechos y deberes de todos al respecto.
3. Los poderes públicos fomentarán la educación sanitaria, la educación física y el deporte. Asimismo facilitarán la adecuada utilización del ocio.`,
            examTip: '¡Alerta de examen!: El Art. 43 es un Principio Rector, NO es un derecho fundamental de la Sección 1ª, por lo que NO permite interponer recurso de amparo directo ante el Tribunal Constitucional.'
          },
          {
            number: 'Artículo 53',
            title: 'Garantía de las Libertades y Derechos',
            content: '3. El reconocimiento, el respeto y la protección de los principios reconocidos en el Capítulo tercero informarán la legislación positiva, la práctica judicial y la actuación de los poderes públicos. Sólo podrán ser alegados ante la Jurisdicción ordinaria de acuerdo con lo que dispongan las leyes que los desarrollen.'
          }
        ]
      },
      {
        title: 'Título VIII: De la Organización Territorial del Estado',
        articles: [
          {
            number: 'Artículo 149.1.16ª',
            title: 'Competencias Exclusivas del Estado en Sanidad',
            content: 'El Estado tiene competencia exclusiva sobre la sanidad exterior; las bases y la coordinación general de la sanidad; y la legislación sobre productos farmacéuticos.',
            examTip: 'Bases y coordinación general corresponden al Estado; el desarrollo legislativo y la gestión asistencial a la Comunitat Valenciana.'
          }
        ]
      }
    ]
  },
  'ley-1-2003-cv': {
    id: 'ley-1-2003-cv',
    shortTitle: 'Ley 1/2003 de Derechos e Información de la CV',
    fullTitle: 'Ley 1/2003, de 28 de enero, de la Generalitat, de Derechos e Información al Paciente de la Comunitat Valenciana',
    scope: 'Comunitat Valenciana',
    bulletinReference: 'DOGV Núm. 4430',
    enactedDate: '28 de enero de 2003',
    description: 'Norma autonómica valenciana que regula los derechos a la información clínica, segunda opinión médica, libre elección de médico y centro sanitario, y registro autonómico de voluntades anticipadas.',
    keyExamArticles: [
      'Art. 6 (Información en el ámbito de la CV)',
      'Art. 12 (Segunda opinión médica autonómica)',
      'Art. 18 (Registro Centralizado de Voluntades Anticipadas de la CV)'
    ],
    chapters: [
      {
        title: 'Capítulo I: De los Derechos en Relación con la Asistencia Sanitaria',
        articles: [
          {
            number: 'Artículo 6',
            title: 'Derecho a la Información Asistencial en el Ámbito Valenciano',
            content: 'Todo paciente atendido en los centros de la red asistencial de la Comunitat Valenciana tiene derecho a conocer, de manera comprensible, continua y veraz, toda la información sobre su proceso de salud, diagnóstico, pronóstico y alternativas terapéuticas.'
          },
          {
            number: 'Artículo 12',
            title: 'Segunda Opinión Médica en el Sistema Valenciano',
            content: `1. Los pacientes del Sistema Valenciano de Salud tienen derecho a solicitar una segunda opinión médica ante diagnósticos de procesos oncológicos, enfermedades degenerativas invalidantes del sistema nervioso central o propuestas terapéuticas con riesgo vital inminente.
2. La segunda opinión será emitida por un facultativo especialista de otro centro del Sistema Valenciano de Salud designado por la Conselleria.`
          },
          {
            number: 'Artículo 18',
            title: 'Registro de Voluntades Anticipadas de la Comunitat Valenciana',
            content: `1. Se crea el Registro de Voluntades Anticipadas de la Comunitat Valenciana, adscrito a la conselleria competente en materia de sanidad.
2. Las voluntades anticipadas formalizadas ante notario, ante el personal habilitado de la administración sanitaria o ante tres testigos mayores de edad se inscribirán en dicho registro telemático para su consulta inmediata desde la historia de salud electrónica en cualquier centro sanitario.`
          }
        ]
      }
    ]
  },
  'ley-31-1995': {
    id: 'ley-31-1995',
    shortTitle: 'Ley 31/1995 Prevención Riesgos Laborales',
    fullTitle: 'Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales',
    scope: 'Estatal',
    bulletinReference: 'BOE Núm. 269',
    enactedDate: '8 de noviembre de 1995',
    description: 'Marco normativo básico de seguridad y salud de los trabajadores en España. De obligado cumplimiento para el personal estatutario sanitario en hospitales y centros de salud.',
    keyExamArticles: [
      'Art. 4 (Definiciones: riesgo, prevención, EPI)',
      'Art. 14 (Derecho a la protección eficaz)',
      'Art. 25 (Protección de trabajadores especialmente sensibles)',
      'Art. 26 (Protección de la maternidad y lactancia)',
      'Art. 29 (Obligaciones de los trabajadores)'
    ],
    chapters: [
      {
        title: 'Capítulo III: Derechos y Obligaciones',
        articles: [
          {
            number: 'Artículo 14',
            title: 'Derecho a la Protección frente a los Riesgos Laborales',
            content: '1. Los trabajadores tienen derecho a una protección eficaz en materia de seguridad y salud en el trabajo. El deber de protección constituye un deber del empresario o la Administración pública sanitaria.'
          },
          {
            number: 'Artículo 26',
            title: 'Protección de la Maternidad en el Personal Sanitario',
            content: `1. Si los resultados de la evaluación revelasen un riesgo para la seguridad y la salud o una posible repercusión sobre el embarazo o la lactancia, el empleador adoptará las medidas necesarias para evitar la exposición mediante adaptación de condiciones de trabajo o cambio de puesto exento de riesgo (evitando exposición a agentes citostáticos, radiaciones ionizantes, biológicos grupo 3 o turnicidad nocturna severa).`
          },
          {
            number: 'Artículo 29',
            title: 'Obligaciones de los Trabajadores Sanitarios',
            content: `1. Corresponde a cada trabajador velar por su propia seguridad y por la de aquellas personas a las que pueda afectar su actividad.
2. Utilizar correctamente los medios y equipos de protección individual (EPIs) facilitados por la Conselleria de Sanitat.`
          }
        ]
      }
    ]
  },
  'decreto-74-2007': {
    id: 'decreto-74-2007',
    shortTitle: 'Decreto 74/2007 Estructura Asistencial CV',
    fullTitle: 'Decreto 74/2007, de 18 de mayo, del Consell, por el que se aprueba el Reglamento sobre estructura, organización y funcionamiento de la atención sanitaria en la Comunitat Valenciana',
    scope: 'Comunitat Valenciana',
    bulletinReference: 'DOGV Núm. 5518',
    enactedDate: '18 de mayo de 2007',
    description: 'Reglamento autonómico que detalla la organización de los Departamentos de Salud en la CV, la Dirección de Enfermería departamental, las Zonas Básicas de Salud y los Puntos de Atención Continuada (PAC).',
    keyExamArticles: [
      'Art. 4 (Dirección de Enfermería de Departamento)',
      'Art. 11 (Equipos de Atención Primaria EAP)',
      'Art. 15 (Puntos de Atención Continuada PAC)'
    ],
    chapters: [
      {
        title: 'Título I: Estructura de los Departamentos de Salud de la CV',
        articles: [
          {
            number: 'Artículo 4',
            title: 'La Dirección de Enfermería del Departamento de Salud',
            content: `1. La Dirección de Enfermería es el órgano directivo unipersonal responsable de la gestión, coordinación y supervisión de los cuidados de enfermería tanto en el ámbito de Atención Primaria como en Atención Especializada hospitalaria del Departamento.
2. De la Dirección de Enfermería dependen las supervisiones generales, supervisiones de área funcional, coordinaciones de enfermería de centros de salud y los cuidados continuos.`
          },
          {
            number: 'Artículo 15',
            title: 'Los Puntos de Atención Continuada (PAC) y Urgencias Extrahospitalarias',
            content: `1. Los Puntos de Atención Continuada (PAC) garantizan la cobertura sanitaria urgente extrahospitalaria fuera del horario de consulta ordinaria de los Centros de Salud de la Comunitat Valenciana (tardes, noches, festivos y fines de semana).
2. Están dotados con equipos médicos y de enfermería de guardia coordinados con el Centro de Información y Coordinación de Urgencias (CICU).`
          }
        ]
      }
    ]
  },
  'ley-8-2008-cv': {
    id: 'ley-8-2008-cv',
    shortTitle: 'Ley 8/2008 Derechos Salud Niños y Adolescentes CV',
    fullTitle: 'Ley 8/2008, de 20 de junio, de los Derechos de Salud de Niños y Adolescentes de la Comunitat Valenciana',
    scope: 'Comunitat Valenciana',
    bulletinReference: 'DOGV Núm. 5792',
    enactedDate: '20 de junio de 2008',
    description: 'Reconoce los derechos sanitarios de los menores en la Comunitat Valenciana: hospitalización pediátrica adaptada, permanencia de los progenitores, derecho a la escolarización durante estancias prolongadas y protección del menor.',
    keyExamArticles: [
      'Art. 4 (Acompañamiento continuo por padres o tutores)',
      'Art. 10 (Espacios pediátricos diferenciados en hospitales)',
      'Art. 14 (Consentimiento del menor y madurez)'
    ],
    chapters: [
      {
        title: 'Capítulo II: Derechos del Menor Hospitalizado en la CV',
        articles: [
          {
            number: 'Artículo 4',
            title: 'Derecho al Acompañamiento Continuo',
            content: 'Todo menor hospitalizado en un centro sanitario público de la Comunitat Valenciana tiene derecho a estar acompañado permanentemente por sus progenitores o tutores durante el día y la noche, salvo justificación clínica excepcional motivada por escrito.'
          },
          {
            number: 'Artículo 10',
            title: 'Separación Arquitectónica de Adultos',
            content: 'Se garantiza que los menores de 14 años ingresados no compartan habitación con pacientes adultos y dispongan de espacios lúdicos y pedagógicos atendidos por maestros hospitalarios.'
          }
        ]
      }
    ]
  },
  'lo-3-2018': {
    id: 'lo-3-2018',
    shortTitle: 'Ley Orgánica 3/2018 de Protección de Datos (LOPDGDD)',
    fullTitle: 'Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales',
    scope: 'Estatal',
    bulletinReference: 'BOE Núm. 294',
    enactedDate: '5 de diciembre de 2018',
    description: 'Adapta el ordenamiento español al Reglamento General de Protección de Datos (RGPD UE 2016/679). Califica los datos relativos a la salud como categorías especiales de datos de máxima protección y sanciona el acceso no autorizado a historias clínicas.',
    keyExamArticles: [
      'Art. 9 (Datos relativos a la salud)',
      'Art. 5 (Deber de confidencialidad y secreto profesional)',
      'Disposición Adicional 17ª (Tratamiento de datos de salud en el Sistema Nacional de Salud)'
    ],
    chapters: [
      {
        title: 'Título II: Principios de Protección de Datos Sanitarios',
        articles: [
          {
            number: 'Artículo 5',
            title: 'Deber de Confidencialidad y Secreto del Personal Sanitario',
            content: `1. Los profesionales sanitarios y todo el personal que intervenga en cualquier fase del tratamiento de datos de salud están sujetos al deber de confidencialidad y secreto profesional.
2. Este deber de secreto subsiste indefinidamente, incluso tras haber cesado la relación laboral o estatutaria con el centro sanitario.`
          },
          {
            number: 'Disposición Adicional 17ª',
            title: 'Acceso a la Historia Clínica por Profesionales de Enfermería',
            content: `El personal de enfermería únicamente está legitimado para acceder a los datos de la historia clínica de los pacientes a los que preste atención directa y en la medida estrictamente indispensable para los cuidados asistenciales que tenga asignados. El acceso por curiosidad a historias ajenas constituye falta muy grave disciplinaria y delito contra la intimidad.`
          }
        ]
      }
    ]
  },
  'ley-5-1983-cv': {
    id: 'ley-5-1983-cv',
    shortTitle: 'Ley 5/1983 de Gobierno Valenciano (El Consell)',
    fullTitle: 'Ley 5/1983, de 30 de diciembre, del Consell de la Generalitat Valenciana',
    scope: 'Comunitat Valenciana',
    bulletinReference: 'DOGV Núm. 138',
    enactedDate: '30 de diciembre de 1983',
    description: 'Regula la organización, atribuciones y funcionamiento del President y del Consell de la Generalitat Valenciana, la estructura de las Consellerias y la potestad reglamentaria a través de Decretos y Órdenes.',
    keyExamArticles: [
      'Art. 2 (El President de la Generalitat)',
      'Art. 17 (Composición del Consell y Consellerias)',
      'Art. 28 (Potestad reglamentaria: Decretos del Consell y Órdenes)'
    ],
    chapters: [
      {
        title: 'Título II: Del President de la Generalitat',
        articles: [
          {
            number: 'Artículo 2',
            title: 'La Figura del President',
            content: 'El President de la Generalitat ostenta la más alta representación de la Comunitat Valenciana y la ordinaria del Estado en su territorio, dirige y coordina la acción del Consell y responde políticamente ante Les Corts.'
          }
        ]
      },
      {
        title: 'Título III: Del Consell y la Conselleria de Sanitat',
        articles: [
          {
            number: 'Artículo 17',
            title: 'Estructura Departamental de la Generalitat',
            content: 'La administración de la Generalitat se organiza en Consellerias al frente de las cuales hay un Conseller/a miembro del Consell con funciones de dirección y administración de su departamento ministerial (como la Conselleria de Sanitat).'
          },
          {
            number: 'Artículo 28',
            title: 'Jerarquía Normativa de los Actos del Consell',
            content: '1. Los actos y disposiciones del Consell adoptan la forma de Decretos del Consell.\n2. Las disposiciones dictadas por los consellers en sus respectivos departamentos adoptan la forma de Órdenes de la Conselleria.'
          }
        ]
      }
    ]
  }
};
