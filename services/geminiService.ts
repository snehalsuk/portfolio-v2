import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

export const getGeminiResponse = async (prompt: string) => {
  const systemInstruction = `
    You are the AI career assistant for Snehal Sukhadeve, a Senior Software Developer with 2+ years of experience.
    Snehal's Skills: React.js, React Native, Frappe, AWS, N8N, AI Agents (Gemini, ChatGPT), Python.
    Snehal's Background: Senior Software Developer specializing in Enterprise Systems and AI Integration.
    Your Tone: Professional, slightly witty, confident, and elite.
    Your Goal: Answer questions about Snehal's professional journey, skills, and projects based on the portfolio data. 
    If you don't know an answer, direct them to his LinkedIn or contact form.
  `;

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-flash-lite-latest",
      systemInstruction: systemInstruction,
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return (
      response.text() ||
      "I'm having trouble retrieving that information right now. Snehal is likely optimizing my backend!"
    );
  } catch (error: any) {
    console.error("Gemini Error:", error);

    if (error?.status === 429) {
      return "I'm currently overloaded with requests (Quota Exceeded). Please try again in a minute!";
    }

    if (error?.status === 503) {
      return "My AI service is temporarily unavailable. Please try again shortly.";
    }

    return "Error connecting to the AI brain. Please try again later.";
  }
};
