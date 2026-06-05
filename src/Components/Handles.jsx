function Education() {
  return (
    <section id="handles">
      <h1 className="handles-title">Coding Profiles</h1>

      <div className="handles-container">

        {/* LeetCode */}
        <div className="handle-card">
          <h2>LeetCode</h2>

          <img
            className="stats-img"
            src="https://leetcard.jacoblin.cool/Vinayak_Dhulubulu?theme=dark&font=Karma&ext=heatmap"
            alt="LeetCode Stats"
          />

          <a
            href="https://leetcode.com/u/Vinayak_Dhulubulu/"
            target="_blank"
            rel="noreferrer"
            className="profile-btn"
          >
            View Leetcode
          </a>
        </div>

        {/* GitHub */}
        <div className="handle-card">
          <h2>GitHub</h2>

          <div className="github-top">

            <img
              className="github-stats"
              src="https://github-readme-stats.vercel.app/api?username=vinayak302004&show_icons=true&theme=tokyonight&hide_border=true"
              alt="GitHub Stats"
            />

            <img
              className="github-stats"
              src="https://streak-stats.demolab.com?user=vinayak302004&theme=tokyonight&hide_border=true"
              alt="GitHub Streak"
            />

          </div>

          <div className="calendar-box">
            <img
              className="calendar-img"
              src="https://ghchart.rshah.org/40c463/vinayak302004"
              alt="GitHub Contribution Calendar"
            />
          </div>

          <img
            className="graph-img"
            src="https://github-readme-activity-graph.vercel.app/graph?username=vinayak302004&theme=react-dark&hide_border=true"
            alt="GitHub Activity Graph"
          />

          <a
            href="https://github.com/vinayak302004"
            target="_blank"
            rel="noreferrer"
            className="profile-btn"
          >
            View GitHub
          </a>
        </div>

      </div>
    </section>
  );
}

export default Education;