import express from 'express';
import type { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize Gemini SDK with User-Agent header as required by guidelines
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || '',
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// Nursing Syllabus Context for Gemini Tutor Grounding
const NURSING_SYLLABUS_CONTEXT = `
Eres la Asistente de IA Especialista en Oposiciones de Enfermería de la Comunitat Valenciana (OpoSanitat CV).
Tu objetivo es responder de forma clara, concisa, rigurosa y didáctica a las preguntas frecuentes de los opositores sobre el temario oficial de enfermería (Conselleria de Sanitat GVA, CHGUV, SAMU CV y EIR).

Bases del temario y normativa oficial valenciana que debes dominar:
1. CONSTITUCIÓN Y ESTATUT D'AUTONOMIA:
   - Art. 43 Constitución Española (Derecho a la protección de la salud, principio rector, no cabe recurso de amparo directo).
   - Art. 54 Estatuto de Autonomía CV (Ley Orgánica 1/2006): Competencia exclusiva de la Generalitat en organización, administración y gestión de las instituciones sanitarias públicas en su territorio.

2. LEY 10/2014 DE SALUD DE LA COMUNITAT VALENCIANA:
   - Demarcación básica: El Departamento de Salud (integra AP y especializada bajo dirección única).
   - Tarjeta sanitaria SIP (Sistema de Información Poblacional de la CV).
   - Historia clínica electrónica: Abucasis en Atención Primaria y Orion Clinic en hospitales.
   - Consentimiento informado: Verbal por regla general, por escrito en cirugía y procedimientos invasivos relevantes.

3. ESTATUTO MARCO (LEY 55/2003):
   - Prescripción de faltas disciplinarias del personal estatutario:
     * Faltas leves: 6 meses
     * Faltas graves: 2 años
     * Faltas muy graves: 4 años
   - Prescripción de sanciones: Leves (1 año), Graves (2 años), Muy graves (4 años).

4. PROCESO DE ATENCIÓN DE ENFERMERÍA (PAE) Y TAXONOMÍAS:
   - 5 fases: Valoración, Diagnóstico, Planificación, Ejecución, Evaluación.
   - Diagnóstico NANDA: Real (PES: Problema + Etiología r/c + Signos m/p), Riesgo (Problema + Factores de riesgo r/c; ¡SIN m/p!), Promoción de la salud (Disposición para...).
   - Modelos: Virginia Henderson (14 necesidades, suplencia), Marjory Gordon (11 patrones funcionales).

5. FARMACOLOGÍA, CÁLCULO DE DOSIS Y SOPORTE VITAL:
   - Antídotos indispensables:
     * Paracetamol -> N-Acetilcisteína
     * Opiáceos -> Naloxona
     * Benzodiacepinas -> Flumazenilo
     * Heparina sódica -> Sulfato de protamina (1 mg neutraliza ~100 UI)
     * Sintrom/Acenocumarol -> Vitamina K1 o Complejo protrombínico
   - Fórmulas de fluidoterapia: Macrogotas/min = (ml * 20) / (horas * 60). Microgotas/min = ml/hora.
   - Medicamento de Alto Riesgo: KCl (cloruro potásico) JAMÁS se administra en bolo IV directo.
   - Soporte Vital Avanzado (ERC): En FV/TVSP tras el 3er choque se administra Adrenalina 1 mg IV y Amiodarona 300 mg IV (segunda dosis de amiodarona 150 mg tras 5º choque). En asistolia/AESP, adrenalina inmediata.

6. CUIDADOS DE HERIDAS Y ESCALAS:
   - Escala de Braden (UPP): 6 subescalas, de 6 a 23 puntos. A menor puntuación, mayor riesgo (≤12 alto riesgo).
   - Estadios UPP: Grado I (eritema no blanqueable), Grado II (pérdida parcial dermis/flictena), Grado III (pérdida total grosor con grasa subcutánea visible sin llegar a fascia/músculo), Grado IV (músculo, tendón o hueso expuesto).
   - Escala Glasgow (GCS): Ocular (4), Verbal (5), Motora (6). Total de 3 a 15. Decorticación = flexión anormal (3 ptos); Descerebración = extensión anormal (2 ptos).
   - Regla de los 9 de Wallace: Cabeza 9%, brazos 9% c/u, tronco anterior 18%, posterior 18%, piernas 18% c/u, periné 1%.

7. VACUNAS EN LA COMUNITAT VALENCIANA:
   - Vacunas vivas atenuadas contraindicadas en embarazo: Triple vírica (SRP), Varicela, Fiebre amarilla, Rotavirus.
   - Cadena de frío: Entre +2 ºC y +8 ºC (óptimo +4 ºC a +5 ºC). NUNCA congelar vacunas adyuvadas.

Directriz de respuesta:
- Sé preciso, cita los artículos normativos y las guías clínicas cuando proceda.
- Destaca los "Trucos de examen" o "Trampas de tribunal" más habituales.
- Si la duda es compleja, opinable o requiere interacción humana o debate con otros compañeros, sugiere amablemente abrir un hilo en el foro con un mensaje cordial.
`;

// AI Assistant endpoint
app.post('/api/chat-ai', async (req: Request, res: Response) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Mensaje requerido' });
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // Graceful offline/mock response grounded in the local syllabus
      const lower = message.toLowerCase();
      let answer = '';

      if (lower.includes('falta') || lower.includes('prescrip') || lower.includes('55/2003')) {
        answer = 'Según el artículo 74 de la Ley 55/2003 (Estatuto Marco), las faltas del personal estatutario prescriben en los siguientes plazos:\n\n• Faltas leves: 6 meses\n• Faltas graves: 2 años\n• Faltas muy graves: 4 años\n\nLas sanciones impuestas prescriben: leves (1 año), graves (2 años) y muy graves (4 años).\n\n💡 *Truco de examen*: ¡Cuidado con no confundir con la Ley de Función Pública General! En el Estatuto Marco de los Servicios de Salud las faltas graves son 2 años (no 3).';
      } else if (lower.includes('antídoto') || lower.includes('antidoto') || lower.includes('heparina') || lower.includes('paracetamol')) {
        answer = 'Aquí tienes los antídotos clave más preguntados en las convocatorias de la Conselleria de Sanitat:\n\n• Paracetamol ➔ N-Acetilcisteína (IV precoz)\n• Heparina no fraccionada ➔ Sulfato de protamina (1 mg neutraliza ~100 UI)\n• Opiáceos (morfina, fentanilo) ➔ Naloxona (0,4 mg IV)\n• Benzodiacepinas ➔ Flumazenilo (Anexate, 0,2 mg IV)\n• Sintrom (Acenocumarol) ➔ Vitamina K1 / Complejo protrombínico\n\n💡 *Tip de tribunal*: Recuerda la regla nemotécnica PAN-BEN-HE-DI.';
      } else if (lower.includes('glasgow') || lower.includes('coma')) {
        answer = 'La Escala de Coma de Glasgow (GCS) evalúa 3 parámetros con la regla del 4-5-6 (máximo 15, mínimo 3):\n\n• Ocular (1 a 4 puntos): Espontánea (4), al habla (3), al dolor (2), ninguna (1).\n• Verbal (1 a 5 puntos): Orientado (5), confuso (4), inapropiado (3), incomprensible (2), ninguna (1).\n• Motora (1 a 6 puntos): Obedece (6), localiza (5), retirada (4), flexión anormal/decorticación (3), extensión/descerebración (2), ninguna (1).\n\n💡 Menos o igual a 8 puntos indica TCE grave y criterio de aislamiento de vía aérea.';
      } else if (lower.includes('upp') || lower.includes('úlcera') || lower.includes('braden')) {
        answer = 'En la valoración de Úlceras por Presión (UPP) según la GNEAUPP y la Conselleria de Sanitat:\n\n• Grado I: Eritema no blanqueable en piel intacta.\n• Grado II: Pérdida parcial del grosor cutáneo (ampolla o flictena).\n• Grado III: Pérdida total del grosor cutáneo con afectación del tejido subcutáneo graso, pero SIN exponer fascia, músculo ni hueso.\n• Grado IV: Exposición directa de músculo, tendón o hueso.\n\nEscala de Braden: Va de 6 a 23 puntos. ¡A menor puntuación, mayor riesgo! (≤12 indica alto riesgo).';
      } else if (lower.includes('10/2014') || lower.includes('departamento') || lower.includes('salud cv')) {
        answer = 'En la Ley 10/2014, de 29 de diciembre, de Salud de la Comunitat Valenciana:\n\n• La demarcación territorial y funcional básica del Sistema Valenciano de Salud es el Departamento de Salud, que integra primaria y especializada bajo dirección única.\n• El SIP (Sistema de Información Poblacional) es el registro único de aseguramiento y tarjeta sanitaria autonómica.\n• La Historia Clínica Electrónica se gestiona mediante Abucasis (AP) y Orion Clinic (hospitales).';
      } else {
        answer = `Sobre tu consulta ("${message}"):\n\nEn las oposiciones de enfermería de la Comunitat Valenciana este aspecto se evalúa habitualmente dentro del bloque específico de cuidados o de legislación sanitaria autonómica. Te recomendamos contrastar la información con los temas 1 a 8 del temario de la app y la normativa oficial de la Conselleria de Sanitat.\n\n💬 Si tienes dudas sobre un caso particular o una pregunta oficial controvertida, te recomendamos publicarla en el Foro de Dudas para debatirlo con compañeros y tutores.`;
      }

      res.json({
        text: answer,
        isComplexQuery: lower.length > 60 || lower.includes('impugna') || lower.includes('duda') || lower.includes('criterio')
      });
      return;
    }

    // Call Gemini API via @google/genai
    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: message,
      config: {
        systemInstruction: NURSING_SYLLABUS_CONTEXT,
        temperature: 0.4,
      },
    });

    const replyText = response.text || 'No se pudo generar respuesta.';
    const isComplex = replyText.length > 500 || message.toLowerCase().includes('impugnar') || message.toLowerCase().includes('caso');

    res.json({
      text: replyText,
      isComplexQuery: isComplex
    });
  } catch (err: any) {
    console.error('Error in /api/chat-ai:', err);
    res.status(500).json({ 
      error: 'Error al procesar la consulta con el asistente de IA.',
      details: err.message 
    });
  }
});

// Setup Vite middlewares for SSR/dev
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`OpoSanitat CV server running on http://localhost:${PORT}`);
  });
}

startServer();
