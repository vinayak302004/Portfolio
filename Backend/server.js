import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const knowledge = `
Name: Vinayak Sanjay Dhulubulu

Education:
B.Tech Computer Science (AIML), RIT Sangli

Skills:
Java
DSA
React
Node.js
Web Development
WordPress

Projects:
Proxy Resistant Real-Time QR Based Smart Attendance System

Rein – Cross Platform Remote Input System

Role:
Co-Lead Software Team at GDG on Campus RIT
`;

app.get("/", (req, res) => {
  res.send("Portfolio chatbot backend is running.");
});

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const prompt = `
You are Vinayak's professional AI assistant.

Rules:
- Answer professionally.
- Use only the information below.
- If something isn't mentioned, reply "That information isn't available in my knowledge base."

Knowledge:
${knowledge}

Question:
${message}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({
      reply: response.text,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: "Something went wrong",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});