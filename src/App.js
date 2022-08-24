import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminLayout from './pages/Admin/AdminLayout';
import PostDashboard from './pages/Admin/Posts/PostDashboard';
import PostFormPage from './pages/Admin/Posts/PostFormPage';
import TierDashboard from './pages/Admin/Posts/TierDashboard';
import CategoryDashboard from './pages/Admin/Posts/CategoryDashboard';
import LandingPage from './pages/LandingPage';
import Logout from './pages/Logout';
import HomePage from './pages/Public/HomePage';
import PublicLayout from './pages/Public/PublicLayout';
import ReadingHistoryPage from './pages/Public/ReadingHistoryPage';
import CategoryFormPage from './pages/Admin/Posts/CategoryFormPage';

function App() {
  return (
    <Routes>
      <Route path="/welcome" element={<LandingPage />} />
      <Route path="/logout" element={<Logout />} />

      <Route path="/" element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<ReadingHistoryPage />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>

        <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
        <Route path="/admin/dashboard" element={<PostDashboard />} />

        <Route path="/admin/posts" element={<PostDashboard />} />
        <Route path="/admin/posts/new" element={<PostFormPage />} />
        <Route path="/admin/posts/:postID/edit" element={<PostFormPage />} />
        
        <Route path="/admin/tiers" element={<TierDashboard />} />

        <Route path="/admin/categories" element={<CategoryDashboard />} />
        <Route path="/admin/categories/new" element={<CategoryFormPage />} />
        <Route path="/admin/categories/:categoryID/edit" element={<CategoryFormPage />} />
      
      </Route>

      <Route path="*" element={<h1>404 Not Found!</h1>} />
    </Routes>
  );
}

export default App;
