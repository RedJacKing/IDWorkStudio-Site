import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

async function generateImage() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image-preview',
      contents: {
        parts: [
          {
            text: 'Japandi style interior renovation, modern kitchen, clean lines, wood and white, minimalist, high quality, photorealistic, interior design, Singapore HDB style',
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "4:3",
          imageSize: "1K"
        },
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const base64Data = part.inlineData.data;
        const buffer = Buffer.from(base64Data, 'base64');
        const filePath = path.join(process.cwd(), 'public', 'assets', 'japandi-kitchen.jpg');
        fs.writeFileSync(filePath, buffer);
        console.log(`Image saved to ${filePath}`);
        return;
      }
    }
    console.error("No image data found in response");
  } catch (error) {
    console.error("Error generating image:", error);
  }
}

generateImage();
