import React from 'react';
import logo from "../assets/images/logo.png";
import "../styles/contact.css";
import { Link } from "react-router-dom"; // Import Link for navigation

const Contact: React.FC = () => {
  return (
    <div className="app-wrapper">
      <div className="app-container">
        
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <ul className="navbar-links">
            <li><Link to="/dashboard">Classes</Link></li> {/* Link to Dashboard */}
            <li><a href="/profile">Profile</a></li>
            <li><Link to="#contact">Contact</Link></li> 
            <li><a href="/login">Logout</a></li>
          </ul>
        </nav>

        <div className="contact-logo">
          <img src={logo} alt="Contact Illustration" className="logo" />
        </div>

        {/* Contact Information */}
        <div className="contact-details">
          <p className="contact-title">Our Address</p>
          <p>54709 Military Road<br />Suite 350, Potts Point, Sydney</p>

          <p className="contact-title">Mobile</p>
          <p>Tel: (415) 777-777</p>

          <p className="contact-title">Email</p>
          <p>Level-Up@outlook.com.au</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
