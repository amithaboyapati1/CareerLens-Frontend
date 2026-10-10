import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );


  const [jobText, setJobText] = useState("");

  const [targetRole, setTargetRole] =
    useState("AI/ML Engineer");

  const [resumeText, setResumeText] =
    useState("");

  const [fileName, setFileName] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");


  /* LOGOUT */

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    localStorage.removeItem("careerAnalysis");

    navigate("/login");

  };


  /* FILE */

  const handleFileChange = async (event) => {

    const file = event.target.files[0];

    if (!file) return;

    setFileName(file.name);

    setError("");


    if (file.type === "text/plain") {

      const text = await file.text();

      setResumeText(text);

    } else {

      setResumeText(
        "Resume file selected. Please paste the resume text below for this demo."
      );

    }

  };


  /* AI ANALYSIS */

  const handleAnalyze = async () => {

    if (!resumeText.trim()) {

      setError(
        "Please upload your resume or paste your resume text."
      );

      return;

    }


    if (!jobText.trim()) {

      setError(
        "Please enter the job description."
      );

      return;

    }


    setError("");

    setLoading(true);


    try {

      const response = await fetch(
        "http://127.0.0.1:8000/api/career/analyze",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({

            resume_text: resumeText,

            job_text: jobText,

            target_role: targetRole

          })

        }
      );


      if (!response.ok) {

        throw new Error(
          "Career analysis failed."
        );

      }


      const data =
        await response.json();


      localStorage.setItem(
        "careerAnalysis",
        JSON.stringify(data)
      );


      navigate("/results");


    } catch (err) {

      setError(
        "Unable to connect to CareerLens AI. Make sure the Python AI server is running on port 8000."
      );

    } finally {

      setLoading(false);

    }

  };


  return (

    <div className="dashboard">


      {/* SIDEBAR */}

      <aside className="sidebar">

        <div className="dashboard-logo">
          Career<span>Lens</span> AI
        </div>


        <nav className="sidebar-nav">

          <button className="active">
            🏠 Dashboard
          </button>

          <button>
            📄 My Resumes
          </button>

          <button>
            🎯 Career Analysis
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


      {/* MAIN */}

      <main className="dashboard-main">


        {/* HEADER */}

        <header className="dashboard-header">

          <div>

            <h1>
              Welcome back
              {user.name
                ? `, ${user.name}`
                : ""}!
              👋
            </h1>

            <p>
              Let's build your career roadmap.
            </p>

          </div>


          <div className="user-profile">

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


        {/* ANALYSIS */}

        <section className="analysis-container">


          <div className="analysis-title">

            <span className="analysis-badge">
              AI CAREER ANALYSIS
            </span>

            <h2>
              Discover Your Career Gap
            </h2>

            <p>
              Upload your resume and compare it
              with your target job description.
            </p>

          </div>


          <div className="analysis-grid">


            {/* RESUME */}

            <div className="input-card">

              <div className="input-card-title">

                <span className="input-icon">
                  📄
                </span>

                <div>

                  <h3>
                    Your Resume
                  </h3>

                  <p>
                    Upload PDF, DOCX or TXT
                  </p>

                </div>

              </div>


              <label className="upload-box">

                <input
                  type="file"
                  accept=".pdf,.docx,.txt"
                  onChange={handleFileChange}
                />

                <div className="upload-icon">
                  ⬆
                </div>

                <strong>
                  {fileName
                    ? fileName
                    : "Choose your resume"}
                </strong>

                <span>
                  Click to browse files
                </span>

              </label>

            </div>


            {/* JOB */}

            <div className="input-card">

              <div className="input-card-title">

                <span className="input-icon">
                  💼
                </span>

                <div>

                  <h3>
                    Target Job
                  </h3>

                  <p>
                    Tell us what role you want
                  </p>

                </div>

              </div>


              <label className="field-label">
                Target Role
              </label>

              <input
                className="text-input"
                type="text"
                value={targetRole}
                onChange={(e) =>
                  setTargetRole(e.target.value)
                }
                placeholder="Example: AI/ML Engineer"
              />


              <label className="field-label">
                Job Description
              </label>

              <textarea
                className="job-textarea"
                value={jobText}
                onChange={(e) =>
                  setJobText(e.target.value)
                }
                placeholder="Paste the job description here..."
              />

            </div>

          </div>


          {/* RESUME TEXT */}

          <div className="resume-text-box">

            <label className="field-label">
              Resume Text
            </label>

            <textarea
              value={resumeText}
              onChange={(e) =>
                setResumeText(e.target.value)
              }
              placeholder="For testing, you can paste your resume text here..."
            />

          </div>


          {/* ERROR */}

          {error && (

            <div className="dashboard-error">
              ⚠ {error}
            </div>

          )}


          {/* BUTTON */}

          <div className="analyze-action">

            <button
              className="analyze-btn"
              onClick={handleAnalyze}
              disabled={loading}
            >

              {loading
                ? "🤖 AI Agents Analyzing..."
                : "🚀 Analyze My Career"}

            </button>

            <p>
              Your resume will be analyzed
              by our multi-agent AI system.
            </p>

          </div>


          {/* AGENT FLOW */}

          <div className="agent-flow">

            <div className="flow-title">

              <span>⚡</span>

              Multi-Agent Analysis Pipeline

            </div>


            <div className="flow-items">

              <span>
                📄 Resume Agent
              </span>

              <b>→</b>

              <span>
                💼 Job Agent
              </span>

              <b>→</b>

              <span>
                🎯 Skill Gap
              </span>

              <b>→</b>

              <span>
                🧭 Strategy
              </span>

              <b>→</b>

              <span>
                📚 Learning
              </span>

              <b>→</b>

              <span>
                🎤 Interview
              </span>

            </div>

          </div>

        </section>

      </main>

    </div>

  );

}


export default Dashboard;