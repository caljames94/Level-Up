import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../styles/styles.css";
import "../styles/classInfoPage.css";
import "../styles/navbar.css";
import logo from "../assets/images/logo.png";

interface ClassInfo {
  class_name: string;
  instructor: string;
  description: string;
  start_time: string;
}

const ClassInfoPage: React.FC = () => {
  const [classInfo, setClassInfo] = useState<ClassInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { classId } = useParams<{ classId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClassInfo = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/classes/summary/${classId}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setClassInfo(data);
      } catch (error) {
        console.error("Error fetching class info", error);
        setError("Failed to load class information. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchClassInfo();
  }, [classId]);

  const handleJoinClass = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await fetch("http://localhost:3001/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          user_id: 1, // Replace with actual user ID from auth system
          class_id: Number(classId),
        }),
      });
      if (!response.ok) {
        throw new Error(`Failed to book class`);
      }

      navigate("/profile");
    } catch (error) {
      console.error("Error booking class", error);
      setError("Failed to book class. Please try again later.");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!classInfo) {
    return <div>No class information available.</div>;
  }

  return (
    <div className="class-info-wrapper">
      <div className="class-info-container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" className="logo-image" />
          </div>
          <ul className="navbar-links">
            <li><Link to="/dashboard">Classes</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Logout</Link></li>
          </ul>
        </nav>

        <h1>Class Information</h1>

        <div className="class-info-columns">
          <div className="class-info-column">
            <h2>{classInfo.class_name}</h2>
            <h3>Description:</h3>
            <p>{classInfo.description}</p>
            <h3>Instructor:</h3>
            <p>{classInfo.instructor}</p>
            <h3>Time:</h3>
            <p>{classInfo.start_time}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="class-info-buttons">
          <button className="join-class-button" onClick={handleJoinClass}>Join Class</button>
          <Link to="/dashboard">
            <button className="different-class-button">Pick A Different Class</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassInfoPage;