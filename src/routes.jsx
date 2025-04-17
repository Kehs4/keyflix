import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import SignUp from './pages/signup';
import Dashboard from './pages/dashboard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} /> 
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;