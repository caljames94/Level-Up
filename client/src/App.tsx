import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './assets/LoginSignUp';
import Dashboard from './assets/Dashboard';
import ClassInfoPage from './pages/ClassInfoPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/class-info" element={<ClassInfoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
