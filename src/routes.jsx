import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import SignUp from './pages/signup';
import Dashboard from './pages/dashboard';
import Terms from './pages/terms';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} /> 
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
};

export default AppRoutes;