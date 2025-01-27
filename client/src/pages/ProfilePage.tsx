import React, { useEffect, useState } from "react";
import "../styles/ProfilePage.css";
import "../styles/navbar.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom"; // Import Link for navigation

type ClassSchedule = {
  booking_id: number;
  className: string;
  start_time: string;
  end_time: string;
  instructor: string;
};


type UserProfile = {
  name: string;
  address: string;
  profileImage?: string;
};

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [booking, setBooking] = useState<ClassSchedule[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No authentication token found");
        }

        const userResponse = await fetch(
          "http://localhost:3001/api/users/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!userResponse.ok) {
          throw new Error("Failed to fetch user profile");
        }

        const userData = await userResponse.json();
        setUser(userData);

        const bookingResponse = await fetch(
          "http://localhost:3001/api/bookings",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!bookingResponse.ok) {
          throw new Error("Failed to fetch user bookings");
        }

        const bookingsData = await bookingResponse.json();
        setBooking(bookingsData);
      } catch (error) {
        console.error("Error fetching user data", error);
        setError("Failed to load user information");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !user) {
    return <div>Failed to load user information</div>;
  }

  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" className="logo-image" />
          </div>
          <ul className="navbar-links">
            <li>
              <Link to="/dashboard">Classes</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Logout</Link>
            </li>
          </ul>
          `
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
          <div className="class-schedule">
            <h2>Class Schedule</h2>
            {booking.length > 0 ? (
              <ul className="class-list">
                {booking.map((bookingItem: ClassSchedule) => (
                  <li key={bookingItem.booking_id} className="class-item">
                    <h3>{bookingItem.className}</h3>
                    <p>
                      <strong>Time:</strong>{" "}
                      {new Date(bookingItem.start_time).toLocaleString()} -{" "}
                      {new Date(bookingItem.end_time).toLocaleString()}
                    </p>
                    <p>
                      <strong>Instructor:</strong> {bookingItem.instructor}
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
      ;
    </div>
  );
};

export default ProfilePage;
