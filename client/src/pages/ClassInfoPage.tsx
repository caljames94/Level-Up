import React from "react";
import "../styles/styles.css";
import "../styles/classInfoPage.css";
import "../styles/navbar.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom"; // Import Link for navigation

const ClassInfoPage: React.FC = () => {
  return (
    <div className="class-info-wrapper">
      <div className="class-info-container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" className="logo-image" />
          </div>
          <ul className="navbar-links">
            <li><a href="/dashboard">Classes</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/login">Logout</a></li>
          </ul>
        </nav>

        <h1>Class Information</h1>

        <div className="class-info-columns">
          <div className="class-info-column">
            <h2>'Class Name'</h2>
            <h3>Description:</h3>
            <p>Dynamic text will go here</p>
            <h3>Instructor:</h3>
            <p>Dynamic text will go here</p>
            <h3>Time:</h3>
            <p>Dynamic text will go here</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="class-info-buttons">
          <button className="join-class-button">Join Class</button>
          <Link to="/dashboard">
            <button className="different-class-button">Pick A Different Class</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassInfoPage;
