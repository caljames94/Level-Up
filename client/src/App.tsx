import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginSignUp from './pages/LoginSignUp'; // Updated name for clarity
import Dashboard from './pages/Dashboard';
import ClassInfoPage from './pages/ClassInfoPage';
import ProfilePage from './pages/ProfilePage';
import Contact from './pages/Contact';


const App: React.FC = () => {
  // Dummy user data for the ProfilePage
  // const mockUser = {
  //   name: "John Doe",
  //   address: "123 Sussex Street, Sydney, NSW 2000",
  //   profileImage: "https://via.placeholder.com/150", // Replace with user's profile image
  //   schedule: [
  //     {
  //       booking_id: 1,
  //       className: "Yoga Class",
  //       start_time: "8:00 AM",
  //       end_time:"9:00 AM",
  //       instructor: "John Smith",
  //     },
  //     {
  //       booking_id: 2,
  //       className: "Pilates",
  //       start_time: "10:00 AM",
  //       end_time:"11:00 AM",
  //       instructor: "Emily Brown",
  //     },
  //     {
  //       booking_id: 3,
  //       className: "Spin Class",
  //       start_time: "11:00 AM",
  //       end_time:"12:00 AM",
  //       instructor: "Emily Brown",
  //     },
  //   ],
  // };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginSignUp />} /> {/* Updated LoginSignUp */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/class-info/:classId" element={<ClassInfoPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
