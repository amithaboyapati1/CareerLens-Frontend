import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Results from "./pages/Results";

import "./App.css";

function Home() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          Career<span>Lens</span> AI
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>

          <button
            className="nav-login"
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            Login
          </button>
        </div>
      </nav>


      {/* HERO */}
      <section className="hero" id="home">

        <div className="hero-content">

          <div className="hero-badge">
            ✨ AI-POWERED CAREER ASSISTANT
          </div>

          <h1>
            Turn Your Resume Into
            <span> Your Career Roadmap</span>
          </h1>

          <p>
            CareerLens AI analyzes your resume against your target job,
            identifies skill gaps, creates a personalized learning strategy,
            and prepares you for interviews using a multi-agent AI system.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => {
                window.location.href = "/register";
              }}
            >
              🚀 Get Started
            </button>

            <a href="#how-it-works" className="secondary-btn">
              See How It Works →
            </a>

          </div>


          <div className="hero-stats">

            <div>
              <strong>6+</strong>
              <span>AI Agents</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Career Guidance</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Personalized</span>
            </div>

          </div>

        </div>


        {/* AI PREVIEW */}
        <div className="hero-visual">

          <div className="ai-card">

            <div className="ai-card-header">

              <div className="ai-icon">
                ✦
              </div>

              <div>
                <strong>CareerLens AI</strong>
                <small>Multi-Agent Analysis</small>
              </div>

              <div className="online-dot"></div>

            </div>


            <div className="analysis-preview">

              <div className="preview-title">
                <span>Career Match</span>
                <strong>86%</strong>
              </div>

              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>


              <div className="skills-preview">

                <div className="skill-row">
                  <span>✓ Python</span>
                  <small>Matched</small>
                </div>

                <div className="skill-row">
                  <span>✓ Machine Learning</span>
                  <small>Matched</small>
                </div>

                <div className="skill-row missing">
                  <span>＋ Docker</span>
                  <small>Missing</small>
                </div>

                <div className="skill-row missing">
                  <span>＋ AWS</span>
                  <small>Missing</small>
                </div>

              </div>


              <div className="ai-recommendation">

                <span>💡</span>

                <div>
                  <strong>AI Recommendation</strong>

                  <p>
                    Learn Docker and AWS to improve your job readiness.
                  </p>
                </div>

              </div>

            </div>

          </div>


          <div className="floating-card floating-one">
            🎯 Skill Gap Detected
          </div>

          <div className="floating-card floating-two">
            📚 Learning Plan Ready
          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section className="features-section" id="features">

        <div className="section-heading">

          <span>POWERFUL AI FEATURES</span>

          <h2>
            Everything You Need To
            <span> Grow Your Career</span>
          </h2>

          <p>
            CareerLens AI combines multiple specialized agents to give you
            a complete career preparation experience.
          </p>

        </div>


        <div className="features-grid">

          <div className="feature-card">
            <div className="feature-icon">📄</div>
            <h3>Resume Analysis</h3>
            <p>
              Extracts skills, education, projects, experience and
              certifications from your resume.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">💼</div>
            <h3>Job Intelligence</h3>
            <p>
              Analyzes job descriptions to identify required skills,
              responsibilities and experience.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Skill Gap Analysis</h3>
            <p>
              Compares your existing skills with job requirements and
              highlights missing skills.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">🧭</div>
            <h3>Career Strategy</h3>
            <p>
              Prioritizes the most important skills you should focus on
              for your target role.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Learning Roadmap</h3>
            <p>
              Creates a structured learning plan with practical projects
              based on your skill gaps.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">🎤</div>
            <h3>Interview Preparation</h3>
            <p>
              Generates technical, skill-gap and HR interview questions
              tailored to your target role.
            </p>
          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section className="how-section" id="how-it-works">

        <div className="section-heading">

          <span>HOW IT WORKS</span>

          <h2>
            From Resume To
            <span> Career Roadmap</span>
          </h2>

          <p>
            Our AI agents work together to transform your resume into
            an actionable career strategy.
          </p>

        </div>


        <div className="steps-container">

          <div className="step">
            <div className="step-number">01</div>
            <div className="step-icon">📄</div>
            <h3>Upload Resume</h3>
            <p>
              Upload your resume and provide your target job description.
            </p>
          </div>


          <div className="step-arrow">→</div>


          <div className="step">
            <div className="step-number">02</div>
            <div className="step-icon">🤖</div>
            <h3>AI Analysis</h3>
            <p>
              Specialized AI agents analyze your resume and target job.
            </p>
          </div>


          <div className="step-arrow">→</div>


          <div className="step">
            <div className="step-number">03</div>
            <div className="step-icon">🎯</div>
            <h3>Find Skill Gaps</h3>
            <p>
              The system compares your skills and identifies what's missing.
            </p>
          </div>


          <div className="step-arrow">→</div>


          <div className="step">
            <div className="step-number">04</div>
            <div className="step-icon">🚀</div>
            <h3>Build Your Future</h3>
            <p>
              Get your learning roadmap, projects and interview preparation.
            </p>
          </div>

        </div>


        <div className="flow-banner">

          <span>Resume</span>
          <b>→</b>
          <span>Job</span>
          <b>→</b>
          <span>Compare</span>
          <b>→</b>
          <span>Gap</span>
          <b>→</b>
          <span>Strategy</span>
          <b>→</b>
          <span>Learn</span>
          <b>→</b>
          <span>Interview</span>

        </div>

      </section>


      {/* CTA */}
      <section className="cta-section">

        <div className="cta-content">

          <div className="cta-badge">
            ✨ START YOUR JOURNEY
          </div>

          <h2>
            Your Dream Job Is
            <span> One Roadmap Away.</span>
          </h2>

          <p>
            Stop guessing what to learn next. Let CareerLens AI analyze
            your career path and give you a clear action plan.
          </p>

          <button
            className="primary-btn cta-button"
            onClick={() => {
              window.location.href = "/register";
            }}
          >
            🚀 Start With CareerLens AI
          </button>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-logo">
          Career<span>Lens</span> AI
        </div>

        <p>
          AI-powered career intelligence for the next generation.
        </p>
        <div className="footer-bottom">
          © 2026 CareerLens AI. All rights reserved.
        </div>

      </footer>

    </div>
  );
}


/* ROUTER */

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/results" element={<Results />} />

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;