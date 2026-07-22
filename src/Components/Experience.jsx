function Experience() {
  return (
    <section id="work">
      <h1>Work Experience</h1>

      {/* GDG */}
      <div className="card">
        <h2>Google Developer Group (GDG) On Campus RIT</h2>

        <div className="experience-role">
          <h3>Lead of Software Team</h3>
          <span>Oct 2025 - Present</span>
        </div>

        <ul>
          <li>
            Leading project development and mentoring members in Data
            Structures & Algorithms, OOP and System Design.
          </li>
          <li>
            Conducting technical sessions on Java, C++, Git and Electron.
          </li>
          <li>
            Guiding project architecture, code quality and development
            best practices.
          </li>
        </ul>

        <hr />

        <div className="experience-role">
          <h3>Co-Lead of Software Team</h3>
          <span>Jan 2025 - Oct 2025</span>
        </div>

        <ul>
          <li>Mentored students in Git, GitHub and DSA fundamentals.</li>
          <li>Assisted in project coordination and code reviews.</li>
          <li>Improved collaboration and team development workflow.</li>
        </ul>

        <hr />

        <div className="experience-role">
          <h3>Member of Software Team</h3>
          <span>Jun 2024 - Jan 2025</span>
        </div>

        <ul>
          <li>
            Built strong foundations in Data Structures and Algorithms.
          </li>
          <li>
            Collaborated on software development projects and technical
            events.
          </li>
        </ul>
      </div>

      {/* AOSSIE - Rein */}
      <div className="card">
        <h2>
          Australian Open Source Software Innovation & Education (AOSSIE)
        </h2>

        <p>
          <strong>Open Source Contributor</strong>
        </p>

        <h3>Project: Rein – Cross Platform Remote Input System</h3>

        <ul>
          <li>
            Developed features and resolved UI issues in a TypeScript +
            Electron desktop application.
          </li>

          <li>
            Implemented Electron packaging workflow for cross-platform
            desktop builds.
          </li>

          <li>
            Improved dependency management and project configuration.
          </li>

          <li>
            Successfully merged <strong>4+ Pull Requests</strong> into the
            main repository.
          </li>
        </ul>

        <p>
          <strong>Tech Stack:</strong> TypeScript, React, Electron,
          Node.js, WebRTC
        </p>
      </div>

      {/* AOSSIE - DebateAI */}
      <div className="card">
        <h2>
          Australian Open Source Software Innovation & Education (AOSSIE)
        </h2>

        <p>
          <strong>Open Source Contributor</strong>
        </p>

        <h3>Project: DebateAI</h3>

        <ul>
          <li>
            Implemented responsive UI improvements across authentication,
            profile and debate interfaces.
          </li>

          <li>
            Added multiline message input and improved theme support.
          </li>

          <li>
            Built reusable design-system compliant UI components.
          </li>

          <li>
            Successfully merged <strong>4+ Pull Requests</strong>.
          </li>
        </ul>

        <p>
          <strong>Tech Stack:</strong> React, TypeScript, Tailwind CSS
        </p>
      </div>
    </section>
  );
}

export default Experience;