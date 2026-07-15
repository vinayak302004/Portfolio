function Projects() {
  return (
    <section id="projects">
      <h1>Projects</h1>

      <div className="projects-container">

        <div className="card">
          <h2>Smart Attendance System</h2>
          <p>QR + AI + Face Recognition (Ongoing)</p>
          <a href="https://github.com/vinayak302004/Proxy_Resistant_Attendance_System" target="_blank">GitHub Link</a>
        </div>

        <div className="card">
          <h2>Crop Recommendation</h2>
          <p>Machine Learning + Flask</p>
        </div>

        <div className="card">
          <h2>Travel Website</h2>
          <p>WordPress</p>
          <a href="https://cmtravelworld.netlify.app" target="_blank">Visit Website</a>
        </div>

        <div className="card">
          <h2>Mom’s Kitchen</h2>
          <p>React + NodeJS</p>
        </div>

      </div>
    </section>
  );
}

export default Projects;