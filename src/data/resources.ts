import { DownloadableResource } from '../types';

export const DOWNLOADABLE_RESOURCES: DownloadableResource[] = [
  {
    id: 'res-leg-valenciana',
    title: 'Guía Rápida de Legislación Sanitaria Comunitat Valenciana',
    category: 'Legislación',
    format: 'PDF',
    pages: 14,
    description: 'Esquema comparativo de la Ley 10/2014 de Salud CV, competencias del Estatut, estructura departamental de la Conselleria y plazos del Estatuto Marco.',
    downloadCount: 1420,
    contentHtmlOrMarkdown: `
# GUÍA RÁPIDA DE LEGISLACIÓN SANITARIA - COMUNITAT VALENCIANA
**OPE Conselleria de Sanitat Universal i Salut Pública**

## 1. Estatuto de Autonomía de la Comunitat Valenciana (LO 1/2006)
- **Artículo 54**: Competencia **exclusiva** en organización, administración y gestión de todas las instituciones sanitarias públicas en el territorio autonómico.
- **Instituciones de la Generalitat**: Les Corts Valencianes, el President de la Generalitat y el Consell.
- **Les Corts Valencianes**: Órgano legislativo, sede en el Palau dels Borja (Valencia).

## 2. Ley 10/2014, de 29 de diciembre, de Salud de la CV
- **Demarcación básica**: El Departamento de Salud, que integra primaria y especializada bajo una gerencia única.
- **Tarjeta Sanitaria SIP**: Registro único poblacional de la CV.
- **Consentimiento informado**: Verbal por regla general; escrito en cirugía y procedimientos invasivos relevantes.

## 3. Estatuto Marco (Ley 55/2003)
- **Prescripción de faltas disciplinarias**:
  - Leves: 6 meses
  - Graves: 2 años
  - Muy graves: 4 años
- **Prescripción de sanciones**:
  - Leves: 1 año
  - Graves: 2 años
  - Muy graves: 4 años
    `
  },
  {
    id: 'res-farmaco-dosis',
    title: 'Tabla Maestra de Fármacos de Urgencias y Cálculo de Diluciones',
    category: 'Tablas Clínicas',
    format: 'Imprimible',
    pages: 8,
    description: 'Fórmulas de infusión, dosis de adrenalina, amiodarona, heparinas, antídotos y reglas de goteo microgotas/macrogotas.',
    downloadCount: 2890,
    contentHtmlOrMarkdown: `
# TABLA MAESTRA DE FARMACOLOGÍA DE URGENCIAS Y DILUCIONES
**Enfermería Urgencias y Cuidados Críticos**

## 1. Fórmulas de Fluidoterapia
- **Macrogotero estándar**: 1 ml = 20 gotas
  \`Gotas/min = (Volumen ml * 20) / (Tiempo horas * 60)\`
- **Microgotero**: 1 ml = 60 microgotas
  \`Microgotas/min = ml / hora\`

## 2. Antídotos Inmediatos
| Fármaco o Tóxico | Antídoto de Elección | Dosis inicial |
|---|---|---|
| Paracetamol | N-Acetilcisteína | Protocolo IV 150 mg/kg en 1h, luego 50 mg/kg en 4h |
| Benzodiacepinas | Flumazenilo (Anexate) | 0.2 mg IV en 15 segundos |
| Opiáceos (Morfina, Fentanilo) | Naloxona | 0.4 mg IV en bolos repetibles cada 2-3 min |
| Heparina no fraccionada | Sulfato de Protamina | 1 mg por cada 100 UI de heparina administrada |
| Sintrom (Acenocumarol) | Vitamina K1 / CCP | 5-10 mg fitomenadiona o Complejo Protrombínico |
| Digoxina | Anticuerpos Fab específicos | Según niveles plasmáticos |
    `
  },
  {
    id: 'res-escalas-valoracion',
    title: 'Compendio de Escalas Clínicas Oficiales (Braden, Glasgow, Barthel, Norton)',
    category: 'Tablas Clínicas',
    format: 'PDF',
    pages: 12,
    description: 'Todas las escalas que entran en la oposición con sus puntos de corte, subescalas y mnemotecnias de puntuación.',
    downloadCount: 3150,
    contentHtmlOrMarkdown: `
# COMPENDIO DE ESCALAS OFICIALES EN OPOSICIONES DE ENFERMERÍA

## 1. Escala de Glasgow (Coma y Consciencia)
- **Puntuación**: De 3 a 15 puntos. Menor o igual a 8 = coma grave.
- **Ocular (1-4)**: Espontánea (4), a la voz (3), al dolor (2), ninguna (1).
- **Verbal (1-5)**: Orientado (5), confuso (4), inapropiado (3), incomprensible (2), ninguna (1).
- **Motora (1-6)**: Obedece (6), localiza (5), retirada (4), decorticación (3), descerebración (2), ninguna (1).

## 2. Escala de Braden (Riesgo de Úlceras por Presión)
- **Puntuación**: De 6 a 23 puntos. A MENOR puntuación, MAYOR riesgo.
- Alto riesgo: ≤ 12 puntos | Riesgo moderado: 13-14 puntos | Bajo riesgo: 15-18 puntos.

## 3. Escala de Barthel (Independencia Funcional para AVDB)
- **Puntuación**: De 0 a 100 puntos (en intervalos de 5). A MAYOR puntuación, MAYOR independencia.
- 100: Independiente (95 si usa silla de ruedas).
- 60-95: Dependencia leve | 40-55: Dependencia moderada | 20-35: Dependencia grave | < 20: Dependencia total.
    `
  },
  {
    id: 'res-guia-impugnaciones',
    title: 'Plantilla y Guía de Impugnaciones de Preguntas OPE GVA',
    category: 'Plantillas',
    format: 'Imprimible',
    pages: 4,
    description: 'Modelo oficial de alegaciones ante el tribunal calificador de la Conselleria de Sanitat con fundamentos de derecho.',
    downloadCount: 975,
    contentHtmlOrMarkdown: `
# MODELO DE ESCRITO DE IMPUGNACIÓN / ALEGACIONES ANTE EL TRIBUNAL CALIFICADOR
**Proceso Selectivo de Enfermeras/os Estatutarios - Conselleria de Sanitat**

**AL TRIBUNAL CALIFICADOR DE LAS PRUEBAS SELECTIVAS DE ENFERMERÍA**
D./Dña. [Nombre y Apellidos], aspirante en el proceso selectivo convocado por Resolución de la Conselleria de Sanitat...
EXPONE: Que publicada la plantilla de respuestas provisionales del ejercicio realizado el día [Fecha], formula formal impugnación contra la Pregunta nº [X] del examen por concurrir causa de anulación por doble respuesta correcta / falta de rigor técnico según bibliografía oficial...
    `
  },
  {
    id: 'res-constantes-lab',
    title: 'Tabla Maestra de Constantes Vitales y Valores Críticos de Laboratorio',
    category: 'Tablas Clínicas',
    format: 'PDF',
    pages: 6,
    description: 'Valores normales y de alerta inmediata en adultos y pediatría: gasometría arterial, iones (Na, K, Ca), coagulación (INR, TTPA) y biomarcadores cardíacos.',
    downloadCount: 4210,
    contentHtmlOrMarkdown: `
# TABLA MAESTRA DE CONSTANTES VITALES Y VALORES CRÍTICOS DE LABORATORIO
**Servicio de Urgencias y Cuidados Críticos**

## 1. Gasometría Arterial Normal
- **pH**: 7.35 - 7.45 (Acidemia < 7.35 | Alcalemia > 7.45)
- **pCO2**: 35 - 45 mmHg (Componente respiratorio)
- **pO2**: 80 - 100 mmHg
- **HCO3 (Bicarbonato)**: 22 - 26 mEq/L (Componente metabólico)
- **Exceso de bases (EB)**: -2 a +2 mEq/L
- **SatO2**: 95 - 99%

## 2. Iones en Sangre (Valores Críticos)
- **Potasio (K+)**: 3.5 - 5.0 mEq/L
  * Hipopotasemia severa (< 3.0): Onda T aplanada, onda U prominente, riesgo de torsades de pointes.
  * Hiperpotasemia severa (> 6.0): Onda T picuda, ensanchamiento QRS, paro en asistolia.
- **Sodio (Na+)**: 135 - 145 mEq/L
- **Calcio iónico**: 1.15 - 1.33 mmol/L (Signo de Chvostek y Trousseau en hipocalcemia).

## 3. Coagulación y Heparinas
- **INR**: Normal 0.8 - 1.2 | Anticoagulación oral óptima: 2.0 - 3.0 (en válvulas mecánicas 2.5 - 3.5).
- **TTPA (Cefalina)**: Control de heparina no fraccionada sódica (rango terapéutico: 1.5 - 2.5 veces el control).
- **Plaquetas**: 150.000 - 400.000 / mm3.
    `
  },
  {
    id: 'res-calendario-vacunal-cv',
    title: 'Calendario Oficial de Vacunaciones de la Comunitat Valenciana para Toda la Vida',
    category: 'Resúmenes',
    format: 'PDF',
    pages: 10,
    description: 'Esquema cronológico completo de inmunizaciones infantiles y del adulto en la CV con indicaciones de Nirsevimab (VRS), VPH a los 12 años y Herpes Zóster.',
    downloadCount: 3820,
    contentHtmlOrMarkdown: `
# CALENDARIO DE VACUNACIONES E INMUNIZACIONES SISTEMÁTICAS - COMUNITAT VALENCIANA

## 1. Inmunización frente a VRS (Lactantes)
- **Nirsevimab**: Dosis única al nacimiento (de octubre a marzo) o en menores de 6 meses.
- Peso < 5 kg: 50 mg IM | Peso ≥ 5 kg: 100 mg IM en vasto externo.

## 2. Pauta Infantil Sistemática
- **2 meses**: Hexavalente (DTPa-VPI-Hib-HB) + Neumococo 13V/15V/20V + Rotavirus.
- **4 meses**: Hexavalente + Neumococo + Rotavirus + Meningococo B.
- **11 meses**: Hexavalente + Neumococo.
- **12 meses**: Triple Vírica (Sarampión-Rubeola-Parotiditis) + Meningococo B + Meningococo ACWY.
- **15 meses**: Varicela (1ª dosis).
- **3-4 años**: Triple Vírica (2ª dosis) + Varicela (2ª dosis).
- **6 años**: DTPa (baja carga) + VPI (Polio).
- **12 años**: VPH (Virus Papiloma Humano, 2 dosis para chicos y chicas) + MenACWY.

## 3. Vacunación en Adultos y Mayores
- **Gripe y COVID-19**: Campaña otoñal anual en > 60 años, sanitarios y embarazadas.
- **Herpes Zóster (Shingrix)**: 2 dosis a los 65 y 80 años o en condiciones de riesgo.
- **Neumococo 20V**: Dosis única a los 65 años sin necesidad de pauta combinada.
    `
  },
  {
    id: 'res-valenciano-sanitari',
    title: 'Vocabulari Sanitari i Assistencial en Valencià per a la OPE',
    category: 'Resúmenes',
    format: 'Imprimible',
    pages: 8,
    description: 'Guía léxica de terminología médica y de enfermería en valenciano para acreditar conocimientos lingüísticos y preparar preguntas asistenciales de la Generalitat.',
    downloadCount: 2940,
    contentHtmlOrMarkdown: `
# GUIA DE VOCABULARI SANITARI EN VALENCIÀ - OPE SANITAT GVA

## 1. Anatomia i Òrgans
- **Cap**: Cabeza | **Coll**: Cuello | **Pit**: Pecho | **Ventre / Budells**: Vientre / Intestinos.
- **Fetge**: Hígado | **Ronyó**: Riñón | **Bony**: Bulto / Hematoma | **Os**: Hueso.
- **Artell**: Nudillo | **Taló**: Talón | **Turmell**: Tobillo | **Canell**: Muñeca.

## 2. Símptomes i Signes Clínics
- **Mareig**: Mareo | **Febre / Calfreds**: Fiebre / Escalofríos | **Nausees**: Náuseas.
- **Tos ferina**: Tosferina | **Espeternec**: Estornudo | **Esgarrifança**: Escalofrío intenso.
- **Buidar / Vomitar**: Vomitar | **Afonament**: Desfallecimiento o colapso.

## 3. Material i Cures d'Infermeria
- **Apòsit**: Apósito | **Fèrula**: Férula | **Xeringa**: Jeringa | **Agulla**: Aguja.
- **Gasa estèril**: Gasa estéril | **Torniquet**: Torniquete | **Esparatrap**: Esparadrapo.
- **Sonda vesical**: Sonda vesical | **Llit**: Cama de hospital.
    `
  },
  {
    id: 'res-algoritmos-sva-erc',
    title: 'Guía de Algoritmos de Soporte Vital Avanzado (SVA ERC) y Manejo de la PCR',
    category: 'Tablas Clínicas',
    format: 'PDF',
    pages: 10,
    description: 'Flujogramas oficiales del Consejo Español de Resucitación Cardiopulmonar (CERCP/ERC). Ritmos desfibrilables vs no desfibrilables, pauta de fármacos y regla de las 4H y 4T.',
    downloadCount: 3650,
    contentHtmlOrMarkdown: `
# GUÍA DE ALGORITMOS DE SOPORTE VITAL AVANZADO (SVA ERC)
**Resucitación Cardiopulmonar Hospitalaria y Extrahospitalaria (SAMU CV)**

## 1. Ritmos Desfibrilables: FV y TV sin Pulso
1. Identificación del ritmo en monitor.
2. **Descarga eléctrica inmediata**: 150-200 J bifásico (o 360 J monofásico).
3. Reiniciar RCP 30:2 inmediatamente durante 2 minutos sin comprobar pulso.
4. Tras el **3º choque**:
   - **Adrenalina 1 mg IV/IO**.
   - **Amiodarona 300 mg IV/IO** (o Lidocaína 100 mg si no hay amiodarona).
5. Tras el **5º choque**:
   - Adrenalina 1 mg (cada 3-5 minutos).
   - Amiodarona 150 mg adicional.

## 2. Ritmos No Desfibrilables: Asistolia y Actividad Eléctrica Sin Pulso (AESP)
1. RCP 30:2 de alta calidad ininterrumpida.
2. **Adrenalina 1 mg IV/IO lo antes posible**, repitiendo cada 3-5 minutos.
3. Buscar y tratar activamente las causas potencialmente reversibles (4H y 4T).

## 3. Regla Nemotécnica de Causas Reversibles: Las 4H y 4T
- **Hipoxia**: Ventilar con oxígeno al 100%.
- **Hipovolemia**: Infundir cristaloides o hemoderivados.
- **Hipo/Hiperpotasemia y otras causas metabólicas**: Corregir glucosa, calcio, bicarbonato.
- **Hipotermia**: Calentamiento activo y pasivo.
- **Neumotórax a Tensión**: Descompresión con aguja o catéter torácico en 2º EIC línea medioclavicular o 5º EIC línea axilar anterior.
- **Taponamiento cardíaco**: Pericardiocentesis evacuadora.
- **Tóxicos**: Administrar antídotos específicos (Naloxona, Flumazenilo, etc.).
- **Trombosis (Coronaria o Pulmonar)**: Fibrinólisis o angioplastia de rescate.
    `
  },
  {
    id: 'res-procedimientos-sondajes',
    title: 'Manual de Procedimientos y Protocolos de Sondajes de Enfermería',
    category: 'Procedimientos',
    format: 'PDF',
    pages: 16,
    description: 'Protocolos de la Conselleria de Sanitat para Sondaje Vesical (Foley, Silastic, Tiemann), Sondaje Nasogástrico y Canalización de Accesos Vasculares (Catéter Corto y Línea Media).',
    downloadCount: 3410,
    contentHtmlOrMarkdown: `
# MANUAL DE PROTOCOLOS DE SONDAJES Y PROCEDIMIENTOS ASISTENCIALES
**Comissió de Cures d'Infermeria - Conselleria de Sanitat GVA**

## 1. Sondaje Vesical
- **Tipos de sondas**:
  - **Látex / Foley estándar**: Sondajes de corta estancia (< 15-20 días).
  - **Silicona 100%**: Sondajes de larga estancia (hasta 3 meses) o alergia al látex.
  - **Tiemann / Acodada**: Indicada en varones con hipertrofia prostática benigna o estenosis.
- **Calibres habituales**:
  - Mujeres: 14 - 16 Ch.
  - Varones: 16 - 18 Ch.
  - Hematuria con lavador vesical continuo: 20 - 24 Ch de 3 vías.
- **Cuidados**: Llenar el globo del balón con agua bidestilada estéril (NUNCA suero salino fisiológico para evitar cristalización). Sistema colector cerrado con válvula antirreflujo.

## 2. Sondaje Nasogástrico (SNG)
- **Medición**: Distancia desde la punta de la nariz hasta el lóbulo de la oreja y de ahí al apéndice xifoides (fórmula NEM: Nariz-Oreja-Apéndice).
- **Comprobación de posición**:
  - Método de referencia de elección (Gold Standard): **Radiografía simple**.
  - Si no se dispone: Aspirar contenido y comprobar pH con tira reactiva (< 5.5).
  - ¡Precaución!: La auscultación del borborigmo mediante insuflación de aire con jeringa no es 100% concluyente por falsos positivos en vía respiratoria.

## 3. Accesos Vasculares Periféricos
- **Código de colores de catéteres intravenosos**:
  - 14G (Naranja): 240-300 ml/min (Grandes politraumatismos y quirófano).
  - 16G (Gris): 180-200 ml/min (Reposición rápida de volumen y sangre).
  - 18G (Verde): 90-105 ml/min (Cirugía habitual, fluidoterapia intensiva).
  - 20G (Rosa): 60-65 ml/min (Pacientes adultos habituales en hospitalización).
  - 22G (Azul): 35 ml/min (Venas frágiles, oncología, ancianos).
  - 24G (Amarillo): 20 ml/min (Pediatría y neonatos).
    `
  },
  {
    id: 'res-triaje-urgencias',
    title: 'Guía de Triaje Hospitalario Estructurado y Catástrofes (MTS, START y SHORT)',
    category: 'Procedimientos',
    format: 'Imprimible',
    pages: 12,
    description: 'Sistema Manchester de Triaje (5 niveles y discriminadores clave) y métodos de triaje extrahospitalario para múltiples víctimas utilizados por el SAMU de la CV.',
    downloadCount: 2780,
    contentHtmlOrMarkdown: `
# GUÍA DE TRIAJE HOSPITALARIO Y EXTRAHOSPITALARIO EN URGENCIAS
**Modelo Manchester (MTS) y Triaje de Catástrofes (SAMU GVA)**

## 1. Sistema Manchester de Triaje (MTS)
| Nivel | Color | Denominación | Tiempo máximo de atención facultativa |
|---|---|---|---|
| **Nivel I** | **Rojo** | Reanimación / Emergencia vital | **Inmediato (0 minutos)** |
| **Nivel II** | **Naranja** | Muy urgente | **Hasta 10 minutos** |
| **Nivel III** | **Amarillo** | Urgente | **Hasta 60 minutos** |
| **Nivel IV** | **Verde** | Normal / Menos urgente | **Hasta 120 minutos** |
| **Nivel V** | **Azul** | No urgente | **Hasta 240 minutos** |

## 2. Métodos de Triaje en Catástrofes con Múltiples Víctimas (IMV)
- **Método START (Simple Triage and Rapid Treatment)**:
  1. ¿Puede caminar?: SÍ -> **Verde** (Leve).
  2. ¿Respira?:
     - NO: Abrir vía aérea -> Si sigue sin respirar = **Negro** (Fallecido). Si empieza a respirar = **Rojo** (Inmediato).
     - SÍ: Si FR > 30 rpm = **Rojo**. Si FR < 30 rpm, pasar a perfusión.
  3. Perfusión: Relleno capilar > 2 segundos o pulso radial ausente = **Rojo**. Si < 2 seg, pasar a nivel de consciencia.
  4. Nivel de consciencia: No obedece órdenes sencillas = **Rojo**. Obedece órdenes = **Amarillo** (Diferido).

- **Método SHORT**:
  - **S** (Sale caminando) -> Verde.
  - **H** (Habla sin dificultad) -> Amarillo.
  - **O** (Obedece órdenes sencillas) -> Amarillo.
  - **R** (Respira) y **T** (Taponar hemorragias severas) -> Rojo.
    `
  },
  {
    id: 'res-seguridad-paciente-sinea',
    title: 'Compendio de Seguridad del Paciente, Notificación de Incidentes e Infección Zero',
    category: 'Protocolos',
    format: 'PDF',
    pages: 14,
    description: 'Protocolos de Seguridad de la Conselleria de Sanitat: Alianza Mundial por la Seguridad, Registro SINEA, Proyectos Bacteriemia Zero, Flebitis Zero y Neumonía Zero.',
    downloadCount: 3120,
    contentHtmlOrMarkdown: `
# GUÍA DE SEGURIDAD DEL PACIENTE Y CULTURA DE SEGURIDAD
**Estrategia de Seguridad del Paciente del Sistema Sanitario Público Valenciano**

## 1. Los 5 Momentos del Lavado de Manos (OMS)
1. **Antes** de tocar al paciente.
2. **Antes** de realizar una tarea limpia o aséptica.
3. **Después** del riesgo de exposición a líquidos corporales.
4. **Después** de tocar al paciente.
5. **Después** del contacto con el entorno del paciente.
*Nota de examen*: La fricción con solución hidroalcohólica es el método de primera elección (20-30 seg) salvo manos visiblemente sucias o sospecha de esporas (Clostridioides difficile), donde es obligatorio agua y jabón antiséptico.

## 2. Proyectos "Zero" en Unidades de Cuidados Críticos y Hospitalización
- **Bacteriemia Zero**:
  - Higiene de manos estricta.
  - Desinfección de la piel con **Clorhexidina al 2% en base alcohólica** antes de la punción.
  - Máxima barrera estéril durante la inserción del CVC (gorro, mascarilla, bata estéril, guantes estériles y paño quirúrgico grande).
  - Elección de la vena **subclavia** como primera opción (menor tasa de colonización que femoral o yugular).
  - Retirada diaria de catéteres innecesarios.
- **Flebitis Zero**:
  - Elección del calibre mínimo necesario para la terapia prescrita.
  - Fijación con apósito transparente estéril para vigilar signos inflamatorios locales.
  - Escala de valoración de flebitis visual (VIP score).

## 3. Notificación de Incidentes sin Daño y Eventos Adversos (SINEA)
- El sistema de notificación es **voluntario, anónimo, no punitivo y confidencial**.
- Su objetivo principal es el aprendizaje del sistema para implantar barreras preventivas, nunca buscar culpables personales.
    `
  },
  {
    id: 'res-bioetica-voluntades',
    title: 'Manual de Bioética Clínica, Deontología y Voluntades Anticipadas en la CV',
    category: 'Legislación',
    format: 'Imprimible',
    pages: 10,
    description: 'Principios de Beauchamp y Childress, secreto profesional, comités de ética asistencial (CEAS) y procedimiento de inscripción en el Registro Autonómico de Voluntades Anticipadas.',
    downloadCount: 2280,
    contentHtmlOrMarkdown: `
# MANUAL DE BIOÉTICA CLÍNICA Y VOLUNTADES ANTICIPADAS
**Ética del Cuidado en el Ejercicio de la Enfermería en la Comunitat Valenciana**

## 1. Los Cuatro Principios de la Bioética Principalista (Beauchamp y Childress)
1. **Principio de Autonomía**: Obligación de respetar las decisiones y valores del paciente competente sobre su propio cuerpo y tratamientos. Se instrumentaliza a través del **Consentimiento Informado**.
2. **Principio de No Maleficencia**: "Primum non nocere" (ante todo no hacer daño). Deber de no infligir daño intencionado. Es de nivel ético universal (primer nivel junto a justicia).
3. **Principio de Beneficencia**: Deber de actuar en beneficio del paciente promoviendo su bienestar y aliviando el sufrimiento.
4. **Principio de Justicia**: Distribución equitativa y solidaria de los recursos sanitarios, cargas y beneficios sin discriminación alguna.

## 2. Jerarquía de los Principios (Diego Gracia)
- **Ética de Mínimos (Nivel 1)**: No Maleficencia y Justicia (tutela del derecho penal y de los poderes públicos).
- **Ética de Máximos (Nivel 2)**: Autonomía y Beneficencia (pertenecientes al ámbito personal y moral de cada individuo).

## 3. Registro de Voluntades Anticipadas de la Comunitat Valenciana
- Regulado por la Ley 1/2003 de la Generalitat y normativa de desarrollo.
- **Formas de otorgamiento en la CV**:
  - Ante Notario.
  - Ante el personal funcionario o estatutario habilitado por la Conselleria de Sanitat (en Servicios de Atención e Información al Paciente - SAIP).
  - Ante 3 testigos mayores de edad con plena capacidad de obrar (al menos 2 de ellos no pueden tener parentesco hasta segundo grado por consanguinidad o afinidad ni vínculo patrimonial con el otorgante).
- Se conecta con el Registro Nacional de Instrucciones Previas para su consulta telemática inmediata.
    `
  }
];
