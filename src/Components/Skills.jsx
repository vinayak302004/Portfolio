function Skills() {
  const skills = [
    {
      category: "PROGRAMMING",
      icon: "💻",
      technologies: ["Java", "Python"],
      description: "Core programming and application development",
    },
    {
      category: "DATA STRUCTURES & ALGORITHMS",
      icon: "🧠",
      technologies: ["DSA", "Problem Solving", "100+ LeetCode"],
      description: "Algorithmic thinking and coding practice",
    },
    {
      category: "WEB DEVELOPMENT",
      icon: "🌐",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "TypeScript",
      ],
      description: "Frontend and backend web application development",
    },
    {
      category: "DATABASE",
      icon: "🗄️",
      technologies: ["MySQL", "MongoDB"],
      description: "Database management and data storage",
    },
    {
      category: "AI / MACHINE LEARNING",
      icon: "🤖",
      technologies: [
        "Machine Learning",
        "Deep Learning",
        "NLP",
      ],
      description: "Intelligent systems and AI-based applications",
    },
    {
      category: "DEVELOPER TOOLS",
      icon: "🛠️",
      technologies: ["Docker", "Jenkins", "WordPress"],
      description: "Development tools and deployment workflows",
    },
    {
      category: "OTHER TECHNOLOGIES",
      icon: "⚙️",
      technologies: ["Electron", "System Design"],
      description: "Desktop applications and software architecture fundamentals",
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-heading">
        <span className="section-label">
          TECHNICAL EXPERTISE
        </span>

        <h1>Skills & Technologies</h1>

        <p>
          Technologies and tools I use to build applications,
          solve problems, and explore artificial intelligence.
        </p>
      </div>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-card-top">
              <div className="skill-icon">
                {skill.icon}
              </div>

              <span className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h2>{skill.category}</h2>

            <p className="skill-description">
              {skill.description}
            </p>

            <div className="skill-tags">
              {skill.technologies.map((technology, techIndex) => (
                <span key={techIndex}>
                  {technology}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;