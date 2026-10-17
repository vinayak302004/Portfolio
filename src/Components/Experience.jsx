function Experience() {
  const experiences = [
    {
      company: "Siemens Digital Industries Software",
      category: "SOFTWARE INDUSTRY READINESS PROGRAM",
      icon: "🌐",
      period: "Sep 2026 – Nov 2026",
      highlights: [
        "Selected for a 2-month virtual Software Industry Readiness Program focused on practical skills and industry-relevant technologies.",
        "Learning data analytics concepts, including data preparation, cleaning, exploration, and interpretation.",
        "Exploring machine learning fundamentals, including data-driven modeling, pattern recognition, and predictive analytics.",
        "Participating in hands-on learning activities using RapidMiner for data analytics and machine learning workflows.",
        "Exploring Mendix for low-code application development and digital solution building.",
        "Developing an understanding of data visualization, analytical workflows, and data-driven decision-making.",
      ],
      technologies: ["RapidMiner", "Mendix"],
    },
    {
      company: "Google Developer Group (GDG) On Campus RIT",
      category: "LEADERSHIP",
      icon: "🚀",
      roles: [
        {
          title: "Lead of Software Team",
          period: "Jan 2026 – Sep 2026",
          highlights: [
            "Led software-team activities and mentored members in DSA, OOP, Git/GitHub, and software development.",
            "Conducted technical sessions on Java and Electron and supported collaborative project development.",
          ],
        },
        {
          title: "Co-Lead of Software Team",
          period: "Jan 2025 – Jan 2026",
          highlights: [
            "Guided members in DSA and system-design fundamentals through problem-solving and project-based learning.",
            "Conducted technical sessions and supported team collaboration and project development.",
          ],
        },
        {
          title: "Member of Software Team",
          period: "Jun 2024 – Jan 2025",
          highlights: [
            "Participated in technical sessions and learned DSA, OOP, and software development fundamentals.",
          ],
        },
      ],
    },
    {
      company:
        "Australian Open Source Software Innovation & Education (AOSSIE)",
      category: "OPEN SOURCE CONTRIBUTION",
      icon: "💻",
      project: "Rein – Cross-Platform Remote Input System",
      highlights: [
        "Developed features and fixed UI issues in a TypeScript and Electron application.",
        "Improved project configuration and dependency management.",
        "Implemented cross-platform Electron packaging and CI/CD workflows.",
        "Successfully merged 4+ pull requests into the main repository.",
      ],
      technologies: [
        "TypeScript",
        "React",
        "Electron",
        "Node.js",
        "WebRTC",
      ],
    },
    {
      company:
        "Australian Open Source Software Innovation & Education (AOSSIE)",
      category: "OPEN SOURCE CONTRIBUTION",
      icon: "💻",
      project: "DebateAI",
      highlights: [
        "Improved responsive UI across authentication, profile, and debate-room interfaces using React and Tailwind CSS.",
        "Built reusable UI components following consistent design conventions.",
        "Enhanced multiline messaging and theme support.",
        "Successfully merged 4+ pull requests into the repository.",
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS"],
    },
  ];

  return (
    <section id="work" className="experience-section">
      <div className="section-heading">
        <span className="section-label">
          INDUSTRY, LEADERSHIP & OPEN SOURCE EXPERIENCE
        </span>

        <h1>Work Experience</h1>

        <p>
          My industry readiness journey, leadership experience, and
          open-source contributions through collaborative software
          development.
        </p>
      </div>

      <div className="experience-container">
        {experiences.map((experience, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-card-top">
              <div className="experience-icon">
                {experience.icon}
              </div>

              <span className="experience-category">
                {experience.category}
              </span>
            </div>

            <h2>{experience.company}</h2>

            {/* Program Duration */}
            {experience.period && (
              <div className="experience-role-heading">
                <span className="experience-period">
                  {experience.period}
                </span>
              </div>
            )}

            {/* GDG Leadership Timeline */}
            {experience.roles && (
              <div className="experience-timeline">
                {experience.roles.map((role, roleIndex) => (
                  <div
                    className="experience-timeline-item"
                    key={roleIndex}
                  >
                    <div className="timeline-marker">
                      <span />
                    </div>

                    <div className="experience-role-content">
                      <div className="experience-role-heading">
                        <h3>{role.title}</h3>

                        <span className="experience-period">
                          {role.period}
                        </span>
                      </div>

                      <ul className="experience-list">
                        {role.highlights.map(
                          (highlight, highlightIndex) => (
                            <li key={highlightIndex}>
                              <span>✓</span>
                              {highlight}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Siemens Program and Open Source Projects */}
            {experience.highlights && (
              <>
                {experience.project && (
                  <div className="experience-project">
                    <span className="experience-project-label">
                      PROJECT
                    </span>

                    <h3>{experience.project}</h3>
                  </div>
                )}

                <div className="experience-highlights">
                  {experience.project && <h3>Key Contributions</h3>}

                  <ul className="experience-list">
                    {experience.highlights.map(
                      (highlight, highlightIndex) => (
                        <li key={highlightIndex}>
                          <span>✓</span>
                          {highlight}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {experience.technologies && (
                  <div className="experience-tech">
                    <span className="experience-tech-label">
                      {experience.project
                        ? "TECH STACK"
                        : "PROGRAM TECHNOLOGIES"}
                    </span>

                    <div className="experience-tech-tags">
                      {experience.technologies.map(
                        (technology, techIndex) => (
                          <span key={techIndex}>
                            {technology}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;