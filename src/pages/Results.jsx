import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Results() {
  const navigate = useNavigate();

  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("careerAnalysis");

    if (saved) {
      try {
        setAnalysis(JSON.parse(saved));
      } catch (error) {
        console.error("Invalid analysis data", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!analysis) {
    return (
      <div className="results-empty">
        <h2>No Career Analysis Found</h2>
        <p>Please run a career analysis first.</p>

        <button
          className="analyze-btn"
          onClick={() => navigate("/dashboard")}
        >
          ← Back to Dashboard
        </button>
      </div>
    );
  }

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  const skillGap =
    analysis.skill_gap_analysis || {};

  const strategy =
    analysis.career_strategy || {};

  const learning =
    analysis.learning_plan || {};

  const interview =
    analysis.interview_preparation || {};

  const resume =
    analysis.resume_analysis || {};

  const job =
    analysis.job_analysis || {};

  const matchPercentage =
    skillGap.match_percentage || 0;

  return (
    <div className="results-page">

      {/* SIDEBAR */}

      <aside className="sidebar">

        <div className="dashboard-logo">
          Career<span>Lens</span> AI
        </div>

        <nav className="sidebar-nav">

          <button
            onClick={() => navigate("/dashboard")}
          >
            🏠 Dashboard
          </button>

          <button className="active">
            🎯 Career Analysis
          </button>

          <button>
            📄 My Resumes
          </button>

          <button>
            🎤 Interview Prep
          </button>

          <button>
            ⚙ Settings
          </button>

        </nav>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          ↪ Logout
        </button>

      </aside>


      {/* MAIN CONTENT */}

      <main className="results-main">

        {/* HEADER */}

        <header className="results-header">

          <div>

            <span className="analysis-badge">
              AI CAREER ANALYSIS
            </span>

            <h1>
              Your Career Analysis
            </h1>

            <p>
              Here's what our multi-agent AI discovered
              about your career readiness.
            </p>

          </div>

          <div className="results-user">

            <div className="avatar">
              {(user.name || "U")
                .charAt(0)
                .toUpperCase()}
            </div>

            <div>
              <strong>
                {user.name || "User"}
              </strong>

              <small>
                {user.email || ""}
              </small>
            </div>

          </div>

        </header>


        {/* MATCH CARD */}

        <section className="match-section">

          <div className="match-card">

            <div className="match-left">

              <span className="result-label">
                CAREER MATCH
              </span>

              <h2>
                {analysis.career_strategy?.target_role ||
                  "AI/ML Engineer"}
              </h2>

              <p>
                Based on your resume and the
                target job description.
              </p>

            </div>


            <div className="match-circle">

              <div>
                <strong>
                  {matchPercentage}%
                </strong>

                <span>
                  Match
                </span>
              </div>

            </div>

          </div>


          {/* STATS */}

          <div className="result-stats">

            <div className="result-stat">

              <span className="stat-icon matched">
                ✓
              </span>

              <div>
                <strong>
                  {skillGap.matched_skill_count || 0}
                </strong>

                <span>
                  Matched Skills
                </span>
              </div>

            </div>


            <div className="result-stat">

              <span className="stat-icon missing">
                !
              </span>

              <div>
                <strong>
                  {skillGap.missing_skill_count || 0}
                </strong>

                <span>
                  Missing Skills
                </span>
              </div>

            </div>


            <div className="result-stat">

              <span className="stat-icon total">
                ◎
              </span>

              <div>
                <strong>
                  {skillGap.total_required_skills || 0}
                </strong>

                <span>
                  Required Skills
                </span>
              </div>

            </div>


            <div className="result-stat">

              <span className="stat-icon questions">
                ?
              </span>

              <div>
                <strong>
                  {interview.total_questions || 0}
                </strong>

                <span>
                  Interview Questions
                </span>
              </div>

            </div>

          </div>

        </section>


        {/* SKILLS */}

        <section className="result-grid">

          {/* MATCHED */}

          <div className="result-card">

            <div className="result-card-header">

              <div className="result-card-icon success">
                ✓
              </div>

              <div>
                <h3>
                  Matched Skills
                </h3>

                <p>
                  Skills already present in your resume
                </p>
              </div>

            </div>


            <div className="skill-tags">

              {skillGap.matched_skills?.length > 0 ? (

                skillGap.matched_skills.map(
                  (skill, index) => (
                    <span
                      className="skill-tag matched-tag"
                      key={index}
                    >
                      ✓ {skill}
                    </span>
                  )
                )

              ) : (

                <p className="no-data">
                  No matched skills detected.
                </p>

              )}

            </div>

          </div>


          {/* MISSING */}

          <div className="result-card">

            <div className="result-card-header">

              <div className="result-card-icon warning">
                !
              </div>

              <div>
                <h3>
                  Skill Gaps
                </h3>

                <p>
                  Skills required by the target job
                </p>
              </div>

            </div>


            <div className="skill-tags">

              {skillGap.missing_skills?.length > 0 ? (

                skillGap.missing_skills.map(
                  (skill, index) => (
                    <span
                      className="skill-tag missing-tag"
                      key={index}
                    >
                      + {skill}
                    </span>
                  )
                )

              ) : (

                <p className="no-data">
                  No missing skills detected.
                </p>

              )}

            </div>

          </div>

        </section>


        {/* CAREER STRATEGY */}

        <section className="result-card strategy-card">

          <div className="result-card-header">

            <div className="result-card-icon strategy">
              🧭
            </div>

            <div>

              <h3>
                Career Strategy
              </h3>

              <p>
                Prioritized actions generated by the
                Career Strategy Agent
              </p>

            </div>

          </div>


          <div className="priority-section">

            <h4>
              Priority Skills
            </h4>

            <div className="priority-list">

              {strategy.priority_skills?.map(
                (skill, index) => (

                  <div
                    className="priority-item"
                    key={index}
                  >

                    <span className="priority-number">
                      {index + 1}
                    </span>

                    <strong>
                      {skill}
                    </strong>

                  </div>

                )
              )}

            </div>

          </div>


          <div className="recommendations">

            <h4>
              AI Recommendations
            </h4>

            {strategy.recommendations?.map(
              (recommendation, index) => (

                <div
                  className="recommendation-item"
                  key={index}
                >
                  <span>💡</span>

                  <p>
                    {recommendation}
                  </p>
                </div>

              )
            )}

          </div>


          {strategy.next_action && (

            <div className="next-action">

              <strong>
                🚀 Next Action
              </strong>

              <p>
                {strategy.next_action}
              </p>

            </div>

          )}

        </section>


        {/* LEARNING ROADMAP */}

        <section className="result-card">

          <div className="result-card-header">

            <div className="result-card-icon learning">
              📚
            </div>

            <div>

              <h3>
                Personalized Learning Roadmap
              </h3>

              <p>
                Generated by the Learning Plan Agent
              </p>

            </div>

            <span className="duration-badge">
              {learning.duration || "Learning Plan"}
            </span>

          </div>


          <div className="learning-timeline">

            {learning.weekly_plan?.map(
              (item, index) => (

                <div
                  className="learning-item"
                  key={index}
                >

                  <div className="week-number">
                    W{item.week}
                  </div>

                  <div className="learning-content">

                    <h4>
                      {item.skill}
                    </h4>

                    <p>
                      {item.action}
                    </p>

                  </div>

                </div>

              )
            )}

          </div>

        </section>


        {/* PROJECTS */}

        <section className="result-card">

          <div className="result-card-header">

            <div className="result-card-icon project">
              🚀
            </div>

            <div>

              <h3>
                Recommended Projects
              </h3>

              <p>
                Practical projects to strengthen your profile
              </p>

            </div>

          </div>


          <div className="project-grid">

            {learning.recommended_projects?.map(
              (project, index) => (

                <div
                  className="project-card"
                  key={index}
                >

                  <div className="project-number">
                    {index + 1}
                  </div>

                  <h4>
                    {project}
                  </h4>

                  <p>
                    Build this project to gain practical
                    experience related to your skill gaps.
                  </p>

                </div>

              )
            )}

          </div>

        </section>


        {/* INTERVIEW */}

        <section className="result-card interview-card">

          <div className="result-card-header">

            <div className="result-card-icon interview">
              🎤
            </div>

            <div>

              <h3>
                Interview Preparation
              </h3>

              <p>
                Questions generated by the Interview
                Preparation Agent
              </p>

            </div>

            <span className="question-count">
              {interview.total_questions || 0} Questions
            </span>

          </div>


          <div className="questions-list">

            {interview.questions?.map(
              (item, index) => (

                <div
                  className="question-item"
                  key={index}
                >

                  <div className="question-top">

                    <span className="question-number">
                      Q{index + 1}
                    </span>

                    <span className="question-type">
                      {item.type}
                    </span>

                    {item.skill && (
                      <span className="question-skill">
                        {item.skill}
                      </span>
                    )}

                  </div>

                  <p>
                    {item.question}
                  </p>

                </div>

              )
            )}

          </div>

        </section>


        {/* RESUME SUMMARY */}

        <section className="result-grid">

          <div className="result-card">

            <div className="result-card-header">

              <div className="result-card-icon resume">
                📄
              </div>

              <div>
                <h3>
                  Resume Summary
                </h3>

                <p>
                  Resume Analysis Agent
                </p>
              </div>

            </div>

            <div className="summary-row">
              <span>Detected Skills</span>
              <strong>
                {resume.skill_count || 0}
              </strong>
            </div>

            <div className="summary-row">
              <span>Education Signals</span>
              <strong>
                {resume.education?.length || 0}
              </strong>
            </div>

            <div className="summary-row">
              <span>Projects</span>
              <strong>
                {resume.projects?.length || 0}
              </strong>
            </div>

            <div className="summary-row">
              <span>Experience Signals</span>
              <strong>
                {resume.experience?.length || 0}
              </strong>
            </div>

          </div>


          <div className="result-card">

            <div className="result-card-header">

              <div className="result-card-icon job">
                💼
              </div>

              <div>
                <h3>
                  Job Intelligence
                </h3>

                <p>
                  Job Intelligence Agent
                </p>
              </div>

            </div>

            <div className="summary-row">
              <span>Required Skills</span>
              <strong>
                {job.skill_count || 0}
              </strong>
            </div>

            <div className="summary-row">
              <span>Responsibilities</span>
              <strong>
                {job.responsibilities?.length || 0}
              </strong>
            </div>

            <div className="summary-row">
              <span>Experience Signals</span>
              <strong>
                {job.experience?.length || 0}
              </strong>
            </div>

          </div>

        </section>


        {/* BOTTOM ACTION */}

        <div className="results-actions">

          <button
            className="secondary-result-btn"
            onClick={() => navigate("/dashboard")}
          >
            ← New Analysis
          </button>

          <button
            className="analyze-btn"
            onClick={() => {
              window.print();
            }}
          >
            🖨 Print Results
          </button>

        </div>


        {/* FOOTER */}

        <footer className="results-footer">
          CareerLens AI • Built by IDEALENS • AI Agents Hackathon
        </footer>

      </main>

    </div>
  );
}

export default Results;