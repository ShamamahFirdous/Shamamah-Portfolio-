import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PROFILE, EXPERIENCE, EDUCATION, PROJECTS, SKILLS } from "../constants";

// Construct the context string from constants
const RESUME_CONTEXT = `
You are an AI assistant representing Shamamah Firdous. Your goal is to answer questions from recruiters or visitors based strictly on Shamamah's resume.

Resume Data:
Name: ${PROFILE.name}
Role: ${PROFILE.role}
Summary: ${PROFILE.summary}
Contact: ${PROFILE.email}, ${PROFILE.phone}, ${PROFILE.location}

Experience:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.date}): ${e.points.join(' ')}`).join('\n')}

Education:
${EDUCATION.map(e => `- ${e.degree} from ${e.institution}, ${e.location} (${e.date}). GPA: ${e.gpa}. Coursework: ${e.coursework}`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title} (${p.category}): ${p.description} Tech: ${p.tech.join(', ')}`).join('\n')}

Skills:
${SKILLS.map(s => `${s.category}: ${s.skills.join(', ')}`).join('\n')}

Instructions:
1. Be professional, polite, and concise.
2. If asked about a skill not listed, say Shamamah is open to learning it but it's not currently on the resume.
3. Highlight specific metrics (like "15% accuracy improvement") when relevant.
4. Keep answers under 100 words unless asked for detail.
`;

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    // apiKey is expected to be in process.env.API_KEY
    if (!process.env.API_KEY) {
      console.warn("API_KEY is missing from environment variables.");
      return null;
    }
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  const client = getClient();
  if (!client) {
    return "I'm sorry, I cannot connect to the AI service at the moment (API Key missing). Please contact Shamamah directly via email.";
  }

  try {
    const response: GenerateContentResponse = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
      config: {
        systemInstruction: RESUME_CONTEXT,
      },
    });

    return response.text || "I didn't get a response from the model.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error processing your request.";
  }
};
