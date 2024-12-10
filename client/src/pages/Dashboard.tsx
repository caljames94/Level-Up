import React, { useState } from "react";
import "../styles/Dashboard.css";
import logo from "/images/logo.png";
import "../styles/navbar.css";


const Dashboard: React.FC = () => {
  const [level, setLevel] = useState(0);

  const levels = ["Easy", "Medium", "Hard", "Extreme"];

  // Function to get the track background color
  const getBackgroundColor = () => {
    switch (level) {
      case 1:
        return "#FFD700"; // Yellow for Medium
      case 2:
        return "#FF8C00"; // Orange for Hard
      case 3:
        return "#FF4500"; // Red for Extreme
      default:
        return "#6EE2F5"; // Blue for Easy
    }
  };

  // Function to get the thumb background color
  const getThumbColor = () => {
    switch (level) {
      case 1:
        return "#FFD700";
      case 2:
        return "#FF8C00";
      case 3:
        return "#FF4500";
      default:
        return "#6EE2F5";
    }
  };

  const handleLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLevel(Number(event.target.value));
  };

  return (
    <div className="app-wrapper">
      <div className="app-container">
        
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" className="logo-image" />
          </div>
          <ul className="navbar-links">
            <li><a href="#home">Classes</a></li>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#classes">Logout</a></li>
          </ul>
        </nav>

        <div className="dashboard">
          <h1>Select Intensity Level</h1>
          <div className="slider-container">
            <div className="slider">
              <input
                type="range"
                min={0}
                max={3}
                step={1}
                value={level}
                onChange={handleLevelChange}
                style={{
                  background: getBackgroundColor(),
                }}
              />
              <style>
                {`
                  input[type="range"]::-webkit-slider-thumb {
                    background-color: ${getThumbColor()};
                  }
                  input[type="range"]::-moz-range-thumb {
                    background-color: ${getThumbColor()};
                  }
                `}
              </style>
              <div className="slider-labels">
                {levels.map((levelName, index) => (
                  <span
                    key={index}
                    className={`label ${level === index ? "active" : ""}`}
                  >
                    {levelName}
                  </span>
                ))}
              </div>
            </div>
            <div className="selected-level">
              <p>
                Selected Level: <strong>{levels[level]}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;