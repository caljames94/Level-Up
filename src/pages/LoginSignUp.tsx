import React, { useState } from "react";
import "../styles/LoginSignUp.css";
import "../styles/navbar.css";


const LoginSignUp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  return (
    <div className="app-wrapper">
      <div className="app-container">
        {/* App Header */}
        <div className="app-header">
          {/* Logo Image */}
          <img src="/images/logo.png" alt="Logo" className="app-logo" />
        </div>

        {/* Tabs */}
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

        {/* Form Body */}
        <div className="auth-body">
          {activeTab === "login" ? (
            <form className="auth-form">
              <h2 className="auth-title">👋Welcome to LevelUP!</h2>
              <div className="auth-input-group">
                <label className="auth-label">Username</label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="auth-input"
                />
              </div>
              <div className="auth-input-group">
                <label className="auth-label">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="auth-input"
                />
              </div>
              <p className="auth-link">Forgot password</p>
              <button className="auth-button">Login</button>
            </form>
          ) : (
            <form className="auth-form">
              <h2 className="auth-title">Create your account</h2>
              <div className="auth-input-group">
                <label className="auth-label">Username</label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="auth-input"
                />
              </div>
              <div className="auth-input-group">
                <label className="auth-label">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="auth-input"
                />
              </div>
              <div className="auth-input-group">
                <label className="auth-label">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="auth-input"
                />
              </div>
              <button className="auth-button">Sign Up</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
