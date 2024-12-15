import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/LoginSignUp';
import Dashboard from './pages/Dashboard';
import ClassInfoPage from './pages/ClassInfoPage';
import ProfilePage from './pages/ProfilePage';
import Contact from './pages/Contact';

const App: React.FC = () => {
  // Dummy user data for the ProfilePage
  const mockUser = {
    name: "John Doe",
    address: "123 Sussex Street, Sydney, NSW 2000",
    profileImage: "https://via.placeholder.com/150", // Replace with user's profile image
    schedule: [
      {
        id: 1,
        className: "Yoga Class",
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
        id: 3, // Fixed duplicate ID
        className: "Spin Class",
        time: "12:00 PM - 1:00 PM",
        instructor: "Michael Lee",
      },
    ],
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/class-info" element={<ClassInfoPage />} />
        <Route path="/profile" element={<ProfilePage user={mockUser} />} />
      </Routes>
    </Router>
  );
};

export default App;
