import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<h1>404 Not Found!</h1>} />
    </Routes>
  );
}

export default App;
