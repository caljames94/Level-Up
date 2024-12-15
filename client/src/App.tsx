import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginSignUp from './pages/LoginSignUp'; // Updated name for clarity
import Dashboard from './pages/Dashboard';
import ClassInfoPage from './pages/ClassInfoPage';
import ProfilePage from './pages/ProfilePage';

const App: React.FC = () => {
  // Dummy user data for the ProfilePage
  const mockUser = {
    name: "John Doe",
    address: "123 Sussex Street, Sydney, NSW 2000",
    profileImage: "https://via.placeholder.com/150", // Replace with user's profile image
    schedule: [
      {
        id: 1,
        className: "Yoga Class", // Dummy data
        time: "8:00 AM - 9:00 AM",
        instructor: "John Smith",
      },
      {
        id: 2,
        className: "Pilates",
        time: "10:00 AM - 11:00 AM",
        instructor: "Emily Brown",
      },
      {
        id: 3,
        className: "Spin Class",
        time: "11:00 AM - 12:00 PM",
        instructor: "Emily Brown",
      },
    ],
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginSignUp />} /> {/* Updated LoginSignUp */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/class-info" element={<ClassInfoPage />} />
        <Route path="/profile" element={<ProfilePage user={mockUser} />} />
      </Routes>
    </Router>
  );
};

export default App;
