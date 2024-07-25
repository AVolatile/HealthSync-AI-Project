// src/App.js
import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const location = useLocation(); // Use the useLocation hook

  // Determine if the current path is /login or /register
  const hideNavbar = location.pathname === '/login' || location.pathname === '/register';

  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      {/* Conditionally render the Navbar */}
      {!hideNavbar && <Navbar authenticated={authenticated} setAuthenticated={setAuthenticated} />}
      <Routes>
        <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRoute element={<Home />} authenticated={authenticated} />} />
        <Route path="/exercise/:id" element={<PrivateRoute element={<ExerciseDetail />} authenticated={authenticated} />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
