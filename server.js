import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3e3;
app.use(express.json());
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build"
    }
  }
});
const NURSING_SYLLABUS_CONTEXT = `
Eres la Asistente de IA Especialista en Oposiciones de Enfermer\xEDa de la Comunitat Valenciana (OpoSanitat CV).
Tu objetivo es responder de forma clara, concisa, rigurosa y did\xE1ctica a las preguntas frecuentes de los opositores sobre el temario oficial de enfermer\xEDa (Conselleria de Sanitat GVA, CHGUV, SAMU CV y EIR).

Bases del temario y normativa oficial valenciana que debes dominar:
1. CONSTITUCI\xD3N Y ESTATUT D'AUTONOMIA:
   - Art. 43 Constituci\xF3n Espa\xF1ola (Derecho a la protecci\xF3n de la salud, principio rector, no cabe recurso de amparo directo).
   - Art. 54 Estatuto de Autonom\xEDa CV (Ley Org\xE1nica 1/2006): Competencia exclusiva de la Generalitat en organizaci\xF3n, administraci\xF3n y gesti\xF3n de las instituciones sanitarias p\xFAblicas en su territorio.

2. LEY 10/2014 DE SALUD DE LA COMUNITAT VALENCIANA:
   - Demarcaci\xF3n b\xE1sica: El Departamento de Salud (integra AP y especializada bajo direcci\xF3n \xFAnica).
   - Tarjeta sanitaria SIP (Sistema de Informaci\xF3n Poblacional de la CV).
   - Historia cl\xEDnica electr\xF3nica: Abucasis en Atenci\xF3n Primaria y Orion Clinic en hospitales.
   - Consentimiento informado: Verbal por regla general, por escrito en cirug\xEDa y procedimientos invasivos relevantes.

3. ESTATUTO MARCO (LEY 55/2003):
   - Prescripci\xF3n de faltas disciplinarias del personal estatutario:
     * Faltas leves: 6 meses
     * Faltas graves: 2 a\xF1os
     * Faltas muy graves: 4 a\xF1os
   - Prescripci\xF3n de sanciones: Leves (1 a\xF1o), Graves (2 a\xF1os), Muy graves (4 a\xF1os).

4. PROCESO DE ATENCI\xD3N DE ENFERMER\xCDA (PAE) Y TAXONOM\xCDAS:
   - 5 fases: Valoraci\xF3n, Diagn\xF3stico, Planificaci\xF3n, Ejecuci\xF3n, Evaluaci\xF3n.
   - Diagn\xF3stico NANDA: Real (PES: Problema + Etiolog\xEDa r/c + Signos m/p), Riesgo (Problema + Factores de riesgo r/c; \xA1SIN m/p!), Promoci\xF3n de la salud (Disposici\xF3n para...).
   - Modelos: Virginia Henderson (14 necesidades, suplencia), Marjory Gordon (11 patrones funcionales).

5. FARMACOLOG\xCDA, C\xC1LCULO DE DOSIS Y SOPORTE VITAL:
   - Ant\xEDdotos indispensables:
     * Paracetamol -> N-Acetilciste\xEDna
     * Opi\xE1ceos -> Naloxona
     * Benzodiacepinas -> Flumazenilo
     * Heparina s\xF3dica -> Sulfato de protamina (1 mg neutraliza ~100 UI)
     * Sintrom/Acenocumarol -> Vitamina K1 o Complejo protromb\xEDnico
   - F\xF3rmulas de fluidoterapia: Macrogotas/min = (ml * 20) / (horas * 60). Microgotas/min = ml/hora.
   - Medicamento de Alto Riesgo: KCl (cloruro pot\xE1sico) JAM\xC1S se administra en bolo IV directo.
   - Soporte Vital Avanzado (ERC): En FV/TVSP tras el 3er choque se administra Adrenalina 1 mg IV y Amiodarona 300 mg IV (segunda dosis de amiodarona 150 mg tras 5\xBA choque). En asistolia/AESP, adrenalina inmediata.

6. CUIDADOS DE HERIDAS Y ESCALAS:
   - Escala de Braden (UPP): 6 subescalas, de 6 a 23 puntos. A menor puntuaci\xF3n, mayor riesgo (\u226412 alto riesgo).
   - Estadios UPP: Grado I (eritema no blanqueable), Grado II (p\xE9rdida parcial dermis/flictena), Grado III (p\xE9rdida total grosor con grasa subcut\xE1nea visible sin llegar a fascia/m\xFAsculo), Grado IV (m\xFAsculo, tend\xF3n o hueso expuesto).
   - Escala Glasgow (GCS): Ocular (4), Verbal (5), Motora (6). Total de 3 a 15. Decorticaci\xF3n = flexi\xF3n anormal (3 ptos); Descerebraci\xF3n = extensi\xF3n anormal (2 ptos).
   - Regla de los 9 de Wallace: Cabeza 9%, brazos 9% c/u, tronco anterior 18%, posterior 18%, piernas 18% c/u, perin\xE9 1%.

7. VACUNAS EN LA COMUNITAT VALENCIANA:
   - Vacunas vivas atenuadas contraindicadas en embarazo: Triple v\xEDrica (SRP), Varicela, Fiebre amarilla, Rotavirus.
   - Cadena de fr\xEDo: Entre +2 \xBAC y +8 \xBAC (\xF3ptimo +4 \xBAC a +5 \xBAC). NUNCA congelar vacunas adyuvadas.

Directriz de respuesta:
- S\xE9 preciso, cita los art\xEDculos normativos y las gu\xEDas cl\xEDnicas cuando proceda.
- Destaca los "Trucos de examen" o "Trampas de tribunal" m\xE1s habituales.
- Si la duda es compleja, opinable o requiere interacci\xF3n humana o debate con otros compa\xF1eros, sugiere amablemente abrir un hilo en el foro con un mensaje cordial.
`;
app.post("/api/chat-ai", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== "string") {
      res.status(400).json({ error: "Mensaje requerido" });
      return;
    }
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      const lower = message.toLowerCase();
      let answer = "";
      if (lower.includes("falta") || lower.includes("prescrip") || lower.includes("55/2003")) {
        answer = "Seg\xFAn el art\xEDculo 74 de la Ley 55/2003 (Estatuto Marco), las faltas del personal estatutario prescriben en los siguientes plazos:\n\n\u2022 Faltas leves: 6 meses\n\u2022 Faltas graves: 2 a\xF1os\n\u2022 Faltas muy graves: 4 a\xF1os\n\nLas sanciones impuestas prescriben: leves (1 a\xF1o), graves (2 a\xF1os) y muy graves (4 a\xF1os).\n\n\u{1F4A1} *Truco de examen*: \xA1Cuidado con no confundir con la Ley de Funci\xF3n P\xFAblica General! En el Estatuto Marco de los Servicios de Salud las faltas graves son 2 a\xF1os (no 3).";
      } else if (lower.includes("ant\xEDdoto") || lower.includes("antidoto") || lower.includes("heparina") || lower.includes("paracetamol")) {
        answer = "Aqu\xED tienes los ant\xEDdotos clave m\xE1s preguntados en las convocatorias de la Conselleria de Sanitat:\n\n\u2022 Paracetamol \u2794 N-Acetilciste\xEDna (IV precoz)\n\u2022 Heparina no fraccionada \u2794 Sulfato de protamina (1 mg neutraliza ~100 UI)\n\u2022 Opi\xE1ceos (morfina, fentanilo) \u2794 Naloxona (0,4 mg IV)\n\u2022 Benzodiacepinas \u2794 Flumazenilo (Anexate, 0,2 mg IV)\n\u2022 Sintrom (Acenocumarol) \u2794 Vitamina K1 / Complejo protromb\xEDnico\n\n\u{1F4A1} *Tip de tribunal*: Recuerda la regla nemot\xE9cnica PAN-BEN-HE-DI.";
      } else if (lower.includes("glasgow") || lower.includes("coma")) {
        answer = "La Escala de Coma de Glasgow (GCS) eval\xFAa 3 par\xE1metros con la regla del 4-5-6 (m\xE1ximo 15, m\xEDnimo 3):\n\n\u2022 Ocular (1 a 4 puntos): Espont\xE1nea (4), al habla (3), al dolor (2), ninguna (1).\n\u2022 Verbal (1 a 5 puntos): Orientado (5), confuso (4), inapropiado (3), incomprensible (2), ninguna (1).\n\u2022 Motora (1 a 6 puntos): Obedece (6), localiza (5), retirada (4), flexi\xF3n anormal/decorticaci\xF3n (3), extensi\xF3n/descerebraci\xF3n (2), ninguna (1).\n\n\u{1F4A1} Menos o igual a 8 puntos indica TCE grave y criterio de aislamiento de v\xEDa a\xE9rea.";
      } else if (lower.includes("upp") || lower.includes("\xFAlcera") || lower.includes("braden")) {
        answer = "En la valoraci\xF3n de \xDAlceras por Presi\xF3n (UPP) seg\xFAn la GNEAUPP y la Conselleria de Sanitat:\n\n\u2022 Grado I: Eritema no blanqueable en piel intacta.\n\u2022 Grado II: P\xE9rdida parcial del grosor cut\xE1neo (ampolla o flictena).\n\u2022 Grado III: P\xE9rdida total del grosor cut\xE1neo con afectaci\xF3n del tejido subcut\xE1neo graso, pero SIN exponer fascia, m\xFAsculo ni hueso.\n\u2022 Grado IV: Exposici\xF3n directa de m\xFAsculo, tend\xF3n o hueso.\n\nEscala de Braden: Va de 6 a 23 puntos. \xA1A menor puntuaci\xF3n, mayor riesgo! (\u226412 indica alto riesgo).";
      } else if (lower.includes("10/2014") || lower.includes("departamento") || lower.includes("salud cv")) {
        answer = "En la Ley 10/2014, de 29 de diciembre, de Salud de la Comunitat Valenciana:\n\n\u2022 La demarcaci\xF3n territorial y funcional b\xE1sica del Sistema Valenciano de Salud es el Departamento de Salud, que integra primaria y especializada bajo direcci\xF3n \xFAnica.\n\u2022 El SIP (Sistema de Informaci\xF3n Poblacional) es el registro \xFAnico de aseguramiento y tarjeta sanitaria auton\xF3mica.\n\u2022 La Historia Cl\xEDnica Electr\xF3nica se gestiona mediante Abucasis (AP) y Orion Clinic (hospitales).";
      } else {
        answer = `Sobre tu consulta ("${message}"):

En las oposiciones de enfermer\xEDa de la Comunitat Valenciana este aspecto se eval\xFAa habitualmente dentro del bloque espec\xEDfico de cuidados o de legislaci\xF3n sanitaria auton\xF3mica. Te recomendamos contrastar la informaci\xF3n con los temas 1 a 8 del temario de la app y la normativa oficial de la Conselleria de Sanitat.

\u{1F4AC} Si tienes dudas sobre un caso particular o una pregunta oficial controvertida, te recomendamos publicarla en el Foro de Dudas para debatirlo con compa\xF1eros y tutores.`;
      }
      res.json({
        text: answer,
        isComplexQuery: lower.length > 60 || lower.includes("impugna") || lower.includes("duda") || lower.includes("criterio")
      });
      return;
    }
    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: message,
      config: {
        systemInstruction: NURSING_SYLLABUS_CONTEXT,
        temperature: 0.4
      }
    });
    const replyText = response.text || "No se pudo generar respuesta.";
    const isComplex = replyText.length > 500 || message.toLowerCase().includes("impugnar") || message.toLowerCase().includes("caso");
    res.json({
      text: replyText,
      isComplexQuery: isComplex
    });
  } catch (err) {
    console.error("Error in /api/chat-ai:", err);
    res.status(500).json({
      error: "Error al procesar la consulta con el asistente de IA.",
      details: err.message
    });
  }
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.resolve(distPath, "index.html"));
    });
  }
  app.listen(PORT, () => {
    console.log(`OpoSanitat CV server running on http://localhost:${PORT}`);
  });
}
startServer();
