import { MnemonicCard } from '../types';

export const MNEMONICS_DATA: MnemonicCard[] = [
  {
    id: 'mnem-apgar',
    acronym: 'A-P-G-A-R',
    title: 'Test de APGAR Neonatal (Minuto 1 y 5)',
    category: 'Escalas',
    explanation: 'Valoración rápida del estado vital del recién nacido tras el parto. Puntuación de 0 a 10 (≥7 normal, 4-6 depresión moderada, 0-3 depresión severa).',
    breakdown: [
      { letter: 'A', meaning: 'Apariencia (Color de piel)', detail: '0: Azul/pálido | 1: Acrocianosis (cuerpo rosado, extremidades azules) | 2: Completamente rosado' },
      { letter: 'P', meaning: 'Pulso (Frecuencia cardíaca)', detail: '0: Ausente | 1: < 100 lpm | 2: > 100 lpm' },
      { letter: 'G', meaning: 'Gesto (Irritabilidad refleja)', detail: '0: Sin respuesta | 1: Mueca | 2: Llanto vigoroso, tos o estornudo' },
      { letter: 'A', meaning: 'Actividad (Tono muscular)', detail: '0: Flácido | 1: Cierta flexión de extremidades | 2: Movimientos activos, buena flexión' },
      { letter: 'R', meaning: 'Respiración (Esfuerzo respiratorio)', detail: '0: Ausente | 1: Lenta e irregular | 2: Llanto fuerte y regular' }
    ],
    clinicalTip: '¡Recuerda que el parámetro que más puntos resta habitualmente en el primer minuto es el color (acrocianosis = 1 pto)!',
    examFrequency: 'Muy Alta'
  },
  {
    id: 'mnem-glasgow',
    acronym: 'O-V-M (4-5-6)',
    title: 'Escala de Coma de Glasgow (GCS)',
    category: 'Escalas',
    explanation: 'Regla del 4-5-6 para recordar los valores máximos de cada subescala neurológica: Ocular (4), Verbal (5), Motora (6). Total 3 a 15.',
    breakdown: [
      { letter: 'O (4)', meaning: 'Ocular (Máx 4)', detail: '4: Espontánea | 3: A la voz | 2: Al dolor | 1: Ninguna' },
      { letter: 'V (5)', meaning: 'Verbal (Máx 5)', detail: '5: Orientado | 4: Confuso | 3: Palabras inapropiadas | 2: Sonidos incomprensibles | 1: Ninguna' },
      { letter: 'M (6)', meaning: 'Motora (Máx 6)', detail: '6: Obedece órdenes | 5: Localiza dolor | 4: Retirada al dolor | 3: Flexión anormal (decorticación) | 2: Extensión (descerebración) | 1: Ninguna' }
    ],
    clinicalTip: '¡Decorticación (flexión hacia el core) = 3 puntos. Descerebración (extensión) = 2 puntos. Menor de 8 = Intubación!',
    examFrequency: 'Muy Alta'
  },
  {
    id: 'mnem-sample',
    acronym: 'S-A-M-P-L-E',
    title: 'Anamnesis Rápida en Urgencias y Emergencias',
    category: 'Urgencias',
    explanation: 'Secuencia nemotécnica recomendada en el Soporte Vital Avanzado para la anamnesis focalizada de cualquier paciente crítico o traumático.',
    breakdown: [
      { letter: 'S', meaning: 'Signos y Síntomas', detail: '¿Qué siente el paciente y qué observamos objetivamente?' },
      { letter: 'A', meaning: 'Alergias', detail: 'Alergias medicamentosas (AINEs, penicilina, látex, etc.)' },
      { letter: 'M', meaning: 'Medicamentos habituales', detail: 'Tratamiento crónico, dosis reciente y adherencia' },
      { letter: 'P', meaning: 'Pasado médico (Antecedentes)', detail: 'Patologías previas relevantes (DM, HTA, cardiopatías)' },
      { letter: 'L', meaning: 'Last meal (Última ingesta)', detail: 'Hora del último alimento (clave por si requiere cirugía/anestesia)' },
      { letter: 'E', meaning: 'Eventos desencadenantes', detail: 'Mecanismo lesional o cronología exacta del suceso' }
    ],
    clinicalTip: 'Imprescindible en el triaje de urgencias extrahospitalarias (SAMU) y en la recepción de trauma grave.',
    examFrequency: 'Alta'
  },
  {
    id: 'mnem-wallace',
    acronym: 'Regla del 9',
    title: 'Regla de los Nueve de Wallace (Quemaduras)',
    category: 'Cuidados',
    explanation: 'Cálculo de la Superficie Corporal Quemada (SCQ) en adultos para dosificación de la fórmula de Parkland.',
    breakdown: [
      { letter: '9%', meaning: 'Cabeza y cuello completos', detail: 'Cara anterior 4.5% + posterior 4.5%' },
      { letter: '9% x 2', meaning: 'Cada extremidad superior (18% ambas)', detail: 'Brazo derecho 9% + Brazo izquierdo 9%' },
      { letter: '18% x 2', meaning: 'Tronco anterior y posterior (36%)', detail: 'Tórax y abdomen 18% | Espalda y glúteos 18%' },
      { letter: '18% x 2', meaning: 'Cada extremidad inferior (36% ambas)', detail: 'Pierna derecha 18% + Pierna izquierda 18%' },
      { letter: '1%', meaning: 'Periné y genitales', detail: '1% exacto' }
    ],
    clinicalTip: '¡Fórmula de Parkland!: 4 ml x kg de peso x % SCQ en 24h (la mitad en las primeras 8 horas desde la quemadura).',
    examFrequency: 'Muy Alta'
  },
  {
    id: 'mnem-antidotos',
    acronym: 'PAN-BEN-HE-DI',
    title: 'Tríada de Antídotos Inmediatos de OPE Sanitat GVA',
    category: 'Farmacología',
    explanation: 'Asociaciones mnemotécnicas directas que caen año tras año en las oposiciones de enfermería de la Comunidad Valenciana.',
    breakdown: [
      { letter: 'PA-NA', meaning: 'PARACETAMOL -> N-Acetilcisteína', detail: 'Eficaz en primeras 8 horas, administración IV según protocolo' },
      { letter: 'BEN-FLU', meaning: 'BENZODIACEPINAS -> Flumazenilo (Anexate)', detail: 'Precaución con convulsiones en adictos crónicos' },
      { letter: 'OP-NAL', meaning: 'OPIÁCEOS -> Naloxona', detail: 'Bolos de 0.4 mg IV hasta revertir depresión respiratoria' },
      { letter: 'HE-PRO', meaning: 'HEPARINA SÓDICA -> Sulfato de Protamina', detail: '1 mg neutraliza 100 UI de heparina' }
    ],
    clinicalTip: '¡Preguntado en OPE 2018, 2021 y 2023 de Sanitat GVA de forma consecutiva!',
    examFrequency: 'Muy Alta'
  },
  {
    id: 'mnem-cushing',
    acronym: 'H-B-B',
    title: 'Tríada de Cushing (Hipertensión Intracraneal Grave)',
    category: 'Urgencias',
    explanation: 'Signo tardío de riesgo inminente de enclavamiento encefálico que requiere intervención neuroquirúrgica inmediata.',
    breakdown: [
      { letter: 'H', meaning: 'Hipertensión arterial con presión de pulso diferencial aumentada', detail: 'Presión sistólica muy elevada con diastólica normal/baja' },
      { letter: 'B', meaning: 'Bradicardia refleja', detail: 'Estimulación del nervio vago por compresión bulbar' },
      { letter: 'B', meaning: 'Bradipnea o patrón respiratorio irregular (Cheyne-Stokes)', detail: 'Afectación del centro respiratorio del tronco encefálico' }
    ],
    clinicalTip: '¡Opuesto al shock hipovolémico!: El shock cursa con Hipotensión + Taquicardia; Cushing cursa con Hipertensión + Bradicardia.',
    examFrequency: 'Alta'
  }
];
