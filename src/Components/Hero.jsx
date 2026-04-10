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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="about">

      <div className="hero-left">

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

        <button onClick={() => {
          document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
        }}>
          View Projects
        </button>

      </div>

      <div className="hero-right">
        <img src="/Assets/Photo_2.1.jpg" alt="Profile" />
      </div>

    </section>
  );
}

export default Hero;