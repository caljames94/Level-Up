import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/LoginSignUp';
import Dashboard from './pages/Dashboard';
import ClassInfoPage from './pages/ClassInfoPage';
import ProfilePage from './pages/ProfilePage'; 

const App: React.FC = () => {
  // dummy user data for the ProfilePage
  const mockUser = {
    name: "John doe",
    address: "123 Sussex street, Sydney,NSW 2000",
    profileImage: "https://via.placeholder.com/150", // will be replaced with user's profile image
    schedule: [
      {
        id: 1,
        className: "Yoga Class", //dummy data
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
        id: 2,
        className: "Spin Class",
        time: "10:00 AM - 11:00 AM",
        instructor: "Emily Brown",
      },
    ],
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/class-info" element={<ClassInfoPage />} />
        {/* Add ProfilePage Route */}
        <Route path="/profile" element={<ProfilePage user={mockUser} />} />
      </Routes>
    </Router>
  );
};

export default App;
