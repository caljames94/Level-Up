import React, { useState } from "react";
<<<<<<< HEAD
import "../styles/LoginSignUp.css";
import "../styles/navbar.css";
=======
import { useNavigate } from "react-router-dom";
import { login, signup } from "../api/auth";
import "../styles/LoginSignUp.css"; // Ensure this is the correct path to your CSS
>>>>>>> 4fcbd82b045169b547651923cb96125324b0e337

const LoginSignUp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate("/dashboard"); // Redirect to Dashboard page after login
    } catch (error: any) {
      setErrorMessage(error.message || "Login failed. Please try again.");
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup({ first_name: firstName, last_name: lastName, email, password });
      navigate("/dashboard"); // Redirect to Dashboard page after signup
    } catch (error: any) {
      setErrorMessage(error.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="app-wrapper">
      <div className="app-container">
        <div className="auth-header">
          <div
            className={`auth-tab ${activeTab === "login" ? "active" : ""}`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </div>
          <div
            className={`auth-tab ${activeTab === "signup" ? "active" : ""}`}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </div>
        </div>

        <div className="auth-body">
          {errorMessage && <p className="auth-error">{errorMessage}</p>}
          {activeTab === "login" ? (
            <form className="auth-form" onSubmit={handleLogin}>
              <h2 className="auth-title">Welcome Back!</h2>
              <div className="auth-input-group">
                <label className="auth-label">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="auth-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="auth-input-group">
                <label className="auth-label">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="auth-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
<<<<<<< HEAD
              <button className="auth-button">Login</button>
            </form>
          ) : (
            <form className="auth-form">
              <h2 className="auth-title">Create your account</h2>
              <div className="auth-row">
                <div className="auth-input-group">
                  <label className="auth-label">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="auth-input"
                  />
                </div>
                <div className="auth-input-group">
                  <label className="auth-label">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="auth-input"
                  />
                </div>
=======
              <button className="auth-button" type="submit">
                Login
              </button>
            </form>
          ) : (
            <form className="auth-form" onSubmit={handleSignup}>
              <h2 className="auth-title">Create Your Account</h2>
              <div className="auth-input-group">
                <label className="auth-label">First Name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="auth-input"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="auth-input-group">
                <label className="auth-label">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="auth-input"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
>>>>>>> 4fcbd82b045169b547651923cb96125324b0e337
              </div>
              <div className="auth-input-group">
                <label className="auth-label">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="auth-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="auth-input-group">
                <label className="auth-label">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="auth-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
<<<<<<< HEAD
              <div className="auth-input-group">
                <label className="auth-label">Profile Picture URL</label>
                <input
                  type="url"
                  placeholder="Enter your profile picture URL"
                  className="auth-input"
                />
              </div>
              <button className="auth-button">Sign Up</button>
=======
              <button className="auth-button" type="submit">
                Sign Up
              </button>
>>>>>>> 4fcbd82b045169b547651923cb96125324b0e337
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
