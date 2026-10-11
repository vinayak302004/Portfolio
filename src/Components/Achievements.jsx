function Achievements() {
  const achievements = [
    {
      category: "RESEARCH PUBLICATION",
      title: "Proxy-Resistant Real-Time QR-Based Smart Attendance System",
      description:
        "Published research on a smart attendance system designed to reduce proxy attendance through QR verification and face recognition.",
      organization:
        "International Journal of Scientific Research and Engineering Development (IJSRED)",
      badge: "Research Paper",
      icon: "📑",
      highlights: [
        "Real-time QR-based attendance verification",
        "Face recognition and identity verification",
        "AI-powered attendance management",
      ],
      link: "https://www.ijsred.com/volume9/issue5/IJSRED-V9I5P58.pdf",
    },
    {
      category: "RESEARCH PUBLICATION",
      title: "Handwritten Character Recognition Using Deep Learning",
      description:
        "Published a research paper on handwritten character recognition using deep learning techniques.",
      organization:
        "International Journal of Scientific Research and Engineering Development (IJSRED)",
      badge: "Research Paper",
      icon: "📄",
      highlights: [
        "Deep learning-based character recognition",
        "Artificial intelligence research",
        "Published research paper",
      ],
      link: "https://www.ijsred.com/volume9/issue2/IJSRED-V9I2P311.pdf",
    },
    {
      category: "COMPETITIVE ACHIEVEMENT",
      title: "Google Big Code Challenge",
      description:
        "Selected among the top 15,000 participants in the Google Big Code Challenge.",
      organization: "Google",
      badge: "Top 15,000",
      icon: "🏆",
      highlights: [
        "Competitive programming",
        "Problem-solving skills",
        "Recognition in a coding challenge",
      ],
    },
    {
      category: "PROFESSIONAL CERTIFICATION",
      title: "Data Structures and Algorithms Using Java",
      description:
        "Completed the Data Structures and Algorithms course offered by NPTEL through IIT Kharagpur.",
      organization: "NPTEL · IIT Kharagpur",
      badge: "Certification",
      icon: "🎓",
      highlights: [
        "Data structures and algorithms",
        "Java programming",
        "Algorithmic problem-solving",
      ],
    },
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="section-heading">
        <span className="section-label">
          MILESTONES & RECOGNITION
        </span>

        <h1>Research and Achievements</h1>

        <p>
          Research publications, competitive achievements, and
          certifications that reflect my technical skills and
          continuous learning.
        </p>
      </div>

      <div className="achievements-container">
        {achievements.map((achievement, index) => (
          <div className="achievement-card" key={index}>
            <div className="achievement-top">
              <div className="achievement-icon">
                {achievement.icon}
              </div>

              <span className="achievement-status">
                {achievement.badge}
              </span>
            </div>

            <div className="achievement-category">
              {achievement.category}
            </div>

            <h2>{achievement.title}</h2>

            <p className="achievement-description">
              {achievement.description}
            </p>

            <div className="achievement-organization">
              <span className="organization-label">
                ORGANIZATION
              </span>

              <p>{achievement.organization}</p>
            </div>

            <div className="achievement-highlights">
              <h3>Key Highlights</h3>

              <ul>
                {achievement.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex}>
                    <span>✓</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {achievement.link && (
              <div className="achievement-buttons">
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="achievement-btn"
                >
                  View Research Paper
                  <span>↗</span>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;