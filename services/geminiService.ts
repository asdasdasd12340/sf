import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PROJECTS, BIO_SHORT } from '../constants';

// Initialize the client with the API key from environment variables
// We use a safe check to avoid crashing during development if key is missing, 
// though in prod it should be enforced.
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are the digital assistant for a creative director's portfolio website.
Here is the context about the creator:
Bio: ${BIO_SHORT}
Projects: ${PROJECTS.map(p => `${p.title} (${p.descriptor})`).join(', ')}.

Your tone should be: Minimal, professional, concise, and slightly mysterious/cinematic.
Answer questions about the work, availability, or creative philosophy.
Keep answers short (under 50 words).
If asked for contact info, direct them to the email listed on the site.
`;

export const sendMessageToGemini = async (message: string, history: {role: 'user' | 'model', text: string}[]): Promise<string> => {
  if (!apiKey) {
    return "I'm currently offline (API Key missing). Please email for inquiries.";
  }

  try {
    // Convert internal history format to Gemini API format if needed, 
    // but for single turn or simple chat, we can just use generateContent with system instruction context implied 
    // or use the Chat API. Here we use a fresh chat context for simplicity in this stateless service example,
    // or construct a prompt with history.
    
    // Constructing a prompt chain for simple stateless interaction
    const conversationHistory = history.map(h => `${h.role === 'user' ? 'Visitor' : 'Assistant'}: ${h.text}`).join('\n');
    const prompt = `${SYSTEM_INSTRUCTION}\n\nCurrent conversation:\n${conversationHistory}\nVisitor: ${message}\nAssistant:`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Processing...";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection interrupted. Please try again.";
  }
};
