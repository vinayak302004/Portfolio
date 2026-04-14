import { useEffect, useState } from "react";

function Hero() {
  const name = "Vinayak Sanjay Dhulubulu";

  const roles = [
    "Web Developer",
    "Software Engineer",
    "Problem Solver",
    "ML Enthusiast"
  ];

  const [index, setIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const text = `I am Vinayak, currently a Third Year student at Rajarambapu Institute of Technology Sangli (RIT), 
  pursuing a B Tech degree in Computer Science with a Minor in Robotics and Automation.
  
  I am interested in programming, web development, and exploring new technologies.
  
  I am Co-Lead of the Software Team at GDG on Campus RIT.
  
  My skills include DSA in Java, Web Development, WordPress, Problem Solving, and Communication Skills.`;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // 🔊 TEXT TO SPEECH
  const handleSpeak = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const speech = new SpeechSynthesisUtterance(text);
      speech.rate = 1;
      speech.pitch = 1;
      speech.volume = 1;

      speech.onend = () => setIsSpeaking(false);

      window.speechSynthesis.speak(speech);
      setIsSpeaking(true);
    }
  };

  // 🎤 SPEECH TO TEXT (VOICE COMMANDS)
  const handleVoiceCommand = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser");
      return;
    }

    // Stop if already listening
    if (isListening) {
      setIsListening(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    setIsListening(true);

    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript.toLowerCase();
      console.log("User said:", command);

      if (command.includes("project")) {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      } else if (command.includes("experience")) {
        document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
      } else if (command.includes("acheivements")) {
        document.getElementById("achievements")?.scrollIntoView({ behavior: "smooth" });
      } else if (command.includes("contact")) {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      } else if (command.includes("skills")) {
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
      } else if (command.includes("education")) {
        document.getElementById("education")?.scrollIntoView({ behavior: "smooth" });
      } else {
        alert("Command not recognized 😅");
      }

      setIsListening(false);
    };

    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
  };

  return (
    <section className="about" id="about">

      <div className="about-left">

        <h1>
          {name.split("").map((letter, i) => (
            <span
              key={i}
              className="letter"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </h1>

        <h2>
          I am a <span>{roles[index]}</span>
        </h2>

        <p>
          I am currently a Third Year student at Rajarambapu Institute of Technology, Sangli (RIT), 
          pursuing a B.Tech degree in Computer Science (AIML) with a Minor in Robotics & Automation.
          
          I am interested in programming (C, C++, Java), web development, and exploring new technologies. 

          I am Co-Lead of the Software Team at GDG (GDSC) on Campus RIT. 
          My skills include DSA in Java, Web Development, WordPress, Problem Solving, and Communication Skills.
        </p>

        <div className="about-buttons">

          {/* 📂 Projects Button */}
          <button
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Projects
          </button>

          {/* 🔊 Text-to-Speech */}
          <button className="mic-btn" onClick={handleSpeak}>
            {isSpeaking ? "⏹" : "🔊"}
          </button>

          {/* 🎤 Voice Command */}
          <button className="mic-btn" onClick={handleVoiceCommand}>
            {isListening ? "🎙" : "🎤"}
          </button>

        </div>

      </div>

      <div className="about-right">
        <img src="/Assets/Photo_2.1.jpg" alt="Profile" />
      </div>

    </section>
  );
}

export default Hero;