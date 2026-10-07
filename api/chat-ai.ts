import { GoogleGenAI } from '@google/genai';

const NURSING_SYLLABUS_CONTEXT = `
Eres la Asistente de IA Especialista en Oposiciones de Enfermería de la Comunitat Valenciana (OpoSanitat CV).
Tu objetivo es responder de forma clara, concisa, rigurosa y didáctica a las preguntas frecuentes de los opositores sobre el temario oficial de enfermería (Conselleria de Sanitat GVA, CHGUV, SAMU CV y EIR).
Sé rigurosa citando la Ley 10/2014 de Salud CV, el Estatuto de Autonomía (Art. 54), el Estatuto Marco (Ley 55/2003) y las guías clínicas de referencia.
`;

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body || {};
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Mensaje requerido' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    // Offline/Knowledge-base Fallback
    const lower = message.toLowerCase();
    let answer = '';

    if (lower.includes('falta') || lower.includes('prescrip') || lower.includes('55/2003')) {
      answer = 'Según el artículo 74 de la Ley 55/2003 (Estatuto Marco), las faltas del personal estatutario prescriben:\n• Leves: 6 meses\n• Graves: 2 años\n• Muy graves: 4 años\n\nLas sanciones prescriben: Leves (1 año), Graves (2 años) y Muy graves (4 años).';
    } else if (lower.includes('antídoto') || lower.includes('antidoto') || lower.includes('heparina') || lower.includes('paracetamol')) {
      answer = 'Antídotos clave en OPE Sanitat GVA:\n• Paracetamol ➔ N-Acetilcisteína\n• Heparina no fraccionada ➔ Sulfato de protamina\n• Opiáceos ➔ Naloxona\n• Benzodiacepinas ➔ Flumazenilo\n• Sintrom ➔ Vitamina K1 o Complejo Protrombínico.';
    } else {
      answer = `Consulta procesada: "${message}". Revisa el temario oficial de la Conselleria de Sanitat en OpoSanitat CV y consulta dudas en el Foro de la plataforma.`;
    }

    return res.status(200).json({ text: answer, isComplexQuery: false });
  }

  try {
    const ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: message,
      config: {
        systemInstruction: NURSING_SYLLABUS_CONTEXT,
        temperature: 0.4,
      },
    });

    return res.status(200).json({
      text: response.text || 'Sin respuesta generada.',
      isComplexQuery: (response.text || '').length > 500
    });
  } catch (error: any) {
    return res.status(500).json({
      error: 'Error al consultar el asistente de IA',
      details: error.message
    });
  }
}
