function Education() {
  const education = [
    {
      institution: "Rajarambapu Institute of Technology",
      degree: "B.Tech in Computer Science & Engineering",
      specialization: "Artificial Intelligence & Machine Learning (AIML)",
      additional: "Minor in Robotics & Automation",
      period: "2023 – 2027",
      score: "8.67 CGPA",
      status: "UNDERGRADUATE",
      icon: "🎓"
    },
    {
      institution: "Willingdon College, Sangli",
      degree: "Higher Secondary Certificate (HSC)",
      specialization: "Higher Secondary Education",
      additional: "",
      period: "2021 – 2023",
      score: "71%",
      status: "HSC",
      icon: "📘"
    },
    {
      institution: "Ideal English School, Miraj",
      degree: "Secondary School Certificate (SSC)",
      specialization: "Secondary Education",
      additional: "",
      period: "2007 – 2020",
      score: "71%",
      status: "SSC",
      icon: "🏫"
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="section-heading">
        <span className="section-label">
          ACADEMIC BACKGROUND
        </span>

        <h1>Education</h1>

        <p>
          My academic journey, technical specialization, and
          educational qualifications.
        </p>
      </div>

      <div className="education-container">
        {education.map((item, index) => (
          <div className="education-card" key={index}>
            <div className="education-card-top">
              <div className="education-icon">
                {item.icon}
              </div>

              <span className="education-status">
                {item.status}
              </span>
            </div>

            <div className="education-period">
              <span>◷</span> {item.period}
            </div>

            <h2>{item.institution}</h2>

            <h3>{item.degree}</h3>

            <p className="education-specialization">
              {item.specialization}
            </p>

            {item.additional && (
              <p className="education-minor">
                {item.additional}
              </p>
            )}

            <div className="education-score">
              <span className="education-score-label">
                ACADEMIC PERFORMANCE
              </span>

              <strong>{item.score}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;