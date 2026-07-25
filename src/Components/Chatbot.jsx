import { useState, useEffect, useRef } from "react";
import "../Chatbot.css";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isListening, setIsListening] = useState(false);

  const bottomRef = useRef();

  // 🔽 Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 🔊 Speak function
  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
  };

  // 📩 Send message (normal)
  const sendMessage = async () => {
    if (!input) return;

    const updated = [...messages, { role: "user", text: input }];
    setMessages(updated);

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      // 🔊 Speak reply
      speak(data.reply);

      setMessages([
        ...updated,
        { role: "bot", text: data.reply },
      ]);
    } catch {
      setMessages([
        ...updated,
        { role: "bot", text: "Server error 😅" },
      ]);
    }

    setInput("");
  };

  // 🎤 Voice Input
  const handleVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";

    recognition.start();
    setIsListening(true);

    recognition.onresult = (event) => {
      const voiceText = event.results[0][0].transcript;
      setInput(voiceText);
      sendMessageVoice(voiceText);
      setIsListening(false);
    };

    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
  };

  // 🎤 Send voice message
  const sendMessageVoice = async (text) => {
    const updated = [...messages, { role: "user", text }];
    setMessages(updated);

    try {
      const res = await fetch("https://portfolio-vinayak20.vercel.app/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();

      // 🔊 Speak reply
      speak(data.reply);

      setMessages([
        ...updated,
        { role: "bot", text: data.reply },
      ]);
    } catch {
      setMessages([
        ...updated,
        { role: "bot", text: "Server error 😅" },
      ]);
    }
  };

  return (
    <>
      {/* 💬 Floating Button */}
      <button className="chat-toggle" onClick={() => setOpen(!open)}>
        💬
      </button>

      {open && (
        <div className="chatbox">
          
          {/* Header */}
          <div className="chat-header">
            🤖 Ask Me
          </div>

          {/* Messages */}
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.role}`}>
                {msg.text}
              </div>
            ))}
            <div ref={bottomRef}></div>
          </div>

          {/* Input */}
          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about me..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            {/* Send Button */}
            <button onClick={sendMessage}>➤</button>

            {/* Mic Button */}
            <button onClick={handleVoiceInput}>
              {isListening ? "🎙" : "🎤"}
            </button>
          </div>

        </div>
      )}
    </>
  );
}

export default Chatbot;