import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedCaption, ViralTone } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateViralCaptions = async (
  topic: string,
  tone: ViralTone
): Promise<GeneratedCaption[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate 3 distinct, viral-worthy social media captions about "${topic}".
      The tone should be: ${tone}.
      For each caption, provide a list of 3-5 relevant, high-traffic hashtags.
      Focus on engagement, hook the reader instantly.
      Return strictly clean JSON.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              caption: {
                type: Type.STRING,
                description: "The main text of the social media caption."
              },
              hashtags: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "A list of viral hashtags including the #"
              }
            }
          }
        }
      }
    });

    const text = response.text;
    if (!text) return [];
    
    return JSON.parse(text) as GeneratedCaption[];
  } catch (error) {
    console.error("Failed to generate captions:", error);
    // Return fallback data if API fails (graceful degradation)
    return [
      {
        caption: `Thinking about ${topic}? We're way ahead of you. 🚀`,
        hashtags: ["#NewGen", "#Trends", "#Future"]
      }
    ];
  }
};
