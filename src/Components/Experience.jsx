function Experience() {
  const experiences = [
    {
      company: "Google Developer Group (GDG) On Campus RIT",
      category: "LEADERSHIP",
      icon: "🚀",
      roles: [
        {
          title: "Lead of Software Team",
          period: "Oct 2025 – Sept 2026",
          highlights: [
            "Led project development and mentored members in Data Structures & Algorithms, OOP, and System Design.",
            "Conducted technical sessions on Java, C++, Git, and Electron.",
            "Guided project architecture, code quality, and software development best practices.",
          ],
        },
        {
          title: "Co-Lead of Software Team",
          period: "Jan 2025 – Oct 2025",
          highlights: [
            "Mentored students in Git, GitHub, and DSA fundamentals.",
            "Assisted in project coordination and code reviews.",
            "Improved team collaboration and development workflows.",
          ],
        },
        {
          title: "Member of Software Team",
          period: "Jun 2024 – Jan 2025",
          highlights: [
            "Built strong foundations in Data Structures and Algorithms.",
            "Collaborated on software development projects and technical events.",
          ],
        },
      ],
    },
    {
      company:
        "Australian Open Source Software Innovation & Education (AOSSIE)",
      category: "OPEN SOURCE CONTRIBUTION",
      icon: "🌐",
      project: "Rein – Cross-Platform Remote Input System",
      highlights: [
        "Developed features and resolved UI issues in a TypeScript and Electron desktop application.",
        "Implemented an Electron packaging workflow for cross-platform desktop builds.",
        "Improved dependency management and project configuration.",
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
        "Implemented responsive UI improvements across authentication, profile, and debate interfaces.",
        "Added multiline message input and improved theme support.",
        "Built reusable UI components following design system conventions.",
        "Successfully merged 4+ pull requests.",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
  ];

  return (
    <section id="work" className="experience-section">
      <div className="section-heading">
        <span className="section-label">
          CAREER & CONTRIBUTIONS
        </span>

        <h1>Work Experience</h1>

        <p>
          My leadership journey, open-source contributions, and
          hands-on experience building software with collaborative teams.
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

            {/* GDG Leadership Timeline */}
            {experience.roles && (
              <div className="experience-timeline">
                {experience.roles.map((role, roleIndex) => (
                  <div className="experience-timeline-item" key={roleIndex}>
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
                        {role.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex}>
                            <span>✓</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Open Source Projects */}
            {experience.project && (
              <>
                <div className="experience-project">
                  <span className="experience-project-label">
                    PROJECT
                  </span>

                  <h3>{experience.project}</h3>
                </div>

                <div className="experience-highlights">
                  <h3>Key Contributions</h3>

                  <ul className="experience-list">
                    {experience.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex}>
                        <span>✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="experience-tech">
                  <span className="experience-tech-label">
                    TECH STACK
                  </span>

                  <div className="experience-tech-tags">
                    {experience.technologies.map((technology, techIndex) => (
                      <span key={techIndex}>
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;