import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const knowledge = `
Name: Vinayak Sanjay Dhulubulu

Education:
B.Tech Computer Science (AIML), RIT Sangli

Skills:
Java, DSA, Web Development, WordPress

Projects:
Rein – Cross Platform Remote Input System

Role:
Co-Lead Software Team at GDG on Campus RIT
`;

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "phi3",
        prompt: `
You are Vinayak's professional AI assistant.

Rules:
- Answer clearly
- Use only given data
- If unknown say "Not mentioned"

Data:
${knowledge}

Question: ${message}
        `,
        stream: false,
      }),
    });

    const data = await response.json();

    res.json({ reply: data.response });
  } catch (err) {
    console.error("Ollama Error:", err);
    res.status(500).json({ error: "Ollama not responding" });
  }
});

app.listen(5000, () => console.log("Server running on 5000"));