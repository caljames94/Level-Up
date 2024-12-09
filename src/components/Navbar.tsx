import React from 'react';
import "../styles/navbar.css";
import logo from "../assets/images/logo.png";

const Navbar: React.FC = () => {
  return (
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
  );
}

export default Navbar;