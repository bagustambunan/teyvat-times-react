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
import ReadPage from './pages/Public/ReadPage';
import ProfileLayout from './pages/Public/Profile/ProfileLayout';
import AccountDashboard from './pages/Public/Profile/AccountDashboard';
import ReferralDashboard from './pages/Public/Profile/ReferralDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';

function App() {
  return (
    <Routes>
      <Route path="/welcome" element={<LandingPage mode="login" />} />
      <Route path="/signup" element={<LandingPage mode="register" />} />
      <Route path="/logout" element={<Logout />} />

      <Route path="/" element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/read/:slug" element={<ReadPage />} />
        <Route path="/history" element={<ReadingHistoryPage />} />

        <Route path="/profile" element={<ProfileLayout />}>
          <Route path="/profile" element={<Navigate to="/profile/account" />} />
          <Route path="/profile/account" element={<AccountDashboard />} />
          <Route path="/profile/mysubscription" element={<AccountDashboard />} />
          <Route path="/profile/myvoucher" element={<AccountDashboard />} />
          <Route path="/profile/myreferral" element={<ReferralDashboard />} />
          <Route path="/profile/mygift" element={<AccountDashboard />} />
        </Route>
      </Route>

      <Route path="/admin" element={<AdminLayout />}>

        <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

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
