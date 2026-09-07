function Projects() {
  const projects = [
    {
      title: "Proxy-Resistant Smart Attendance System",
      status: "Ongoing",
      category: "AI + Full Stack",
      description:
        "A real-time smart attendance system designed to reduce proxy attendance using dynamic QR verification, face recognition and AI-based liveness detection.",
      tech: [
        "React",
        "TypeScript",
        "Python",
        "Flask",
        "OpenCV",
        "Face Recognition",
        "MySQL",
      ],
      features: [
        "Dynamic QR-based attendance verification",
        "Real-time face recognition",
        "Liveness detection to prevent photo/video spoofing",
        "Student and teacher attendance management",
      ],
      github: "https://github.com/vinayak302004/Proxy_Resistant_Attendance_System",
    },

    {
      title: "Razorpay GrowthAI",
      status: "Completed",
      category: "AI + FinTech",
      description:
        "An AI-powered revenue-growth and agentic commerce platform that helps merchants identify revenue opportunities, generate campaigns, recommend products, and convert recommendations into Razorpay payments.",
      tech: [
        "React",
        "Vite",
        "JavaScript (ES6+)",
        "Node.js",
        "Express.js", 
        "AI/LLM", 
        "Prisma", 
        "SQLite", 
        "Razorpay APIs",
      ],
      features: [
        "AI revenue-growth agent",
        "Upsell & cross-sell recommendations",
        "Merchant analytics dashboard",
        "AI campaign generation with merchant approval",
        "Razorpay Test Mode checkout + payment verification",
      ],
      github: "https://github.com/vinayak302004/Razorpay_GrowthAI",
    },

    {
      title: "Roxiler Store Rating Platform",
      status: "Completed",
      category: "FULL STACK DEVELOPMENT",
      description:
        "A full-stack store rating platform with role-based dashboards for administrators, store owners, and users, featuring secure authentication and rating management.",
      tech: [
        "React",
        "Node.js",
        "Express.js", 
        "JWT", 
        "MySQL", 
        "bcrypt",
      ],
      features: [
        "Role-based authentication & authorization",
        "Admin, Store Owner & User dashboards",
        "Store search and rating management",
        "JWT authentication & password hashing",
        "MySQL database with REST APIs",
      ],
      github: "https://github.com/vinayak302004/roxiler-rating-platform",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-heading">
        <h1>Projects</h1>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            {/* Top Section */}
            <div className="project-top">
              <div>
                <div className="project-category">
                  {project.category}
                </div>

                <h2>{project.title}</h2>
              </div>

              <span className={`project-status ${project.status === "Ongoing" ? "ongoing" : ""}`}>
                {project.status}
              </span>
            </div>

            {/* Description */}
            <p className="project-description">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="project-tech">
              {project.tech.map((technology, techIndex) => (
                <span key={techIndex}>{technology}</span>
              ))}
            </div>

            {/* Features */}
            <div className="project-features">
              <h3>Key Highlights</h3>

              <ul>
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <span>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            {(project.github || project.live) && (
              <div className="project-buttons">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn primary"
                  >
                    GitHub
                    <span>↗</span>
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn secondary"
                  >
                    Live Website
                    <span>↗</span>
                  </a>
                )}

              </div>
            )}

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;