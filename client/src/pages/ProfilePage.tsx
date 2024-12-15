import React from "react";
import "../styles/ProfilePage.css";
import "../styles/navbar.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom"; // Import Link for navigation

type ClassSchedule = {
  id: number;
  className: string;
  time: string;
  instructor: string;
};

type UserProfile = {
  name: string;
  address: string;
  profileImage?: string;
  schedule: ClassSchedule[];
};

const ProfilePage: React.FC<{ user: UserProfile }> = ({ user }) => {
  return (
    <div className="profile-wrapper">
      <div className="profile-container">
            {/* Navbar */}
            <nav className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" className="logo-image" />
          </div>
          <ul className="navbar-links">
            <li><Link to="/dashboard">Classes</Link></li> {/* Link to Dashboard */}
            <li><Link to="/profile">Profile</Link></li> {/* Link to ProfilePage */}
            <li><Link to="/contact">Contact</Link></li> {/* Link to Contact page */}
            <li><a href="#">Logout</a></li>
          </ul>
        </nav>
        <div className="profile-header">
          <img
            src={user.profileImage || "https://via.placeholder.com/150"}
            alt="User profile"
            className="profile-image"
          />
          <div className="profile-info">
            <h1 className="profile-name">{user.name}</h1>
            <p className="profile-address">{user.address}</p>
          </div>
        </div>
        <div className="class-schedule">
          <h2>Class Schedule</h2>
          {user.schedule.length > 0 ? (
            <ul className="class-list">
              {user.schedule.map((classInfo) => (
                <li key={classInfo.id} className="class-item">
                  <h3>{classInfo.className}</h3>
                  <p>
                    <strong>Time:</strong> {classInfo.time}
                  </p>
                  <p>
                    <strong>Instructor:</strong> {classInfo.instructor}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No classes scheduled yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
