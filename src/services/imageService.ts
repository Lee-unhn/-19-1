import { GoogleGenAI } from "@google/genai";

export async function generateHeroImage(apiKey: string) {
  const ai = new GoogleGenAI({ apiKey });
  const response = await ai.models.generateContent({
    model: 'gemini-3.1-flash-image-preview',
    contents: {
      parts: [
        {
          text: "A high-tech, cinematic digital art piece in the style of Michelangelo's 'The Creation of Adam'. On one side, a realistic human hand reaches out. On the other side, a sophisticated, white and blue glowing robotic hand reaches back. Their index fingers are just millimeters away from touching. The background is a dark, deep blue with subtle digital grid lines and floating data particles, symbolizing technology transformation and AI connection. 4K resolution, professional lighting.",
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "1:1",
        imageSize: "1K"
      },
    },
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
}
