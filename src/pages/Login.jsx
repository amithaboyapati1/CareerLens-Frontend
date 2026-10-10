import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  const handleLogin = async (e) => {

    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please enter email and password.");
      return;
    }

    setError("");
    setLoading(true);


    try {

      const response = await fetch(
        "http://localhost:8080/api/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(formData)
        }
      );


      const data = await response.json();


      if (!response.ok) {

        throw new Error(
          typeof data === "string"
            ? data
            : data.message || "Invalid email or password."
        );

      }


      localStorage.setItem(
        "token",
        data.token
      );


      localStorage.setItem(
        "user",
        JSON.stringify({
          userId: data.userId,
          name: data.name,
          email: data.email,
          role: data.role
        })
      );


      navigate("/dashboard");


    } catch (err) {

      setError(
        err.message ||
        "Unable to connect to CareerLens backend."
      );

    } finally {

      setLoading(false);

    }

  };


  return (

    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">
          Career<span>Lens</span> AI
        </div>


        <h1>Welcome Back</h1>

        <p className="auth-subtitle">
          Login to continue your career journey.
        </p>


        <form onSubmit={handleLogin}>

          <label className="field-label">
            Email
          </label>

          <input
            className="text-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />


          <label className="field-label">
            Password
          </label>

          <input
            className="text-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />


          {error && (
            <div className="auth-error">
              ⚠ {error}
            </div>
          )}


          <button
            className="auth-submit"
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>

        </form>


        <p className="auth-switch">

          Don't have an account?{" "}

          <Link to="/register">
            Create Account
          </Link>

        </p>


        <Link
          to="/"
          className="back-home"
        >
          ← Back to Home
        </Link>

      </div>

    </div>

  );
}


export default Login;