import { GoogleGenerativeAI } from "@google/generative-ai";

if (!process.env.GEMINI_API_KEY) {
  console.warn("[Gemini] GEMINI_API_KEY not set — AI features will use fallback mode.");
}

const genAI = process.env.GEMINI_API_KEY
  ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
  : null;

export async function generateGeminiResponse(prompt: string, systemContext: string): Promise<string> {
  if (!genAI) {
    return `[AI UNAVAILABLE] Configure GEMINI_API_KEY to enable live AI analysis. System context: ${systemContext}`;
  }

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: systemContext,
  });

  const result = await model.generateContent(prompt);
  return result.response.text();
}
