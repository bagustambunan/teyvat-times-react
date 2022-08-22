import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminLayout from './pages/Admin/AdminLayout';
import PostDashboard from './pages/Admin/Posts/PostDashboard';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/admin" element={<PostDashboard />} />
      </Route>

      <Route path="*" element={<h1>404 Not Found!</h1>} />
    </Routes>
  );
}

export default App;
