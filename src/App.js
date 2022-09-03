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
import MyAccountDashboard from './pages/Public/Profile/MyAccountDashboard';
import MyReferralDashboard from './pages/Public/Profile/MyReferralDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';
import SubscriptionPage from './pages/Public/Subscription/SubscriptionPage';
import PurchasePage from './pages/Public/Subscription/PurchasePage';
import MyTransactionDashboard from './pages/Public/Profile/MyTransactionDashboard';
import SubscriptionDashboard from './pages/Admin/Subscriptions/SubscriptionDashboard';
import TransactionDashboard from './pages/Admin/Subscriptions/TransactionDashboard';
import VoucherDashboard from './pages/Admin/Subscriptions/VoucherDashboard';
import GiftDashboard from './pages/Admin/Gifts/GiftDashboard';
import TransactionDetailPage from './pages/Admin/Subscriptions/TransactionDetailPage';
import PaymentPage from './pages/PaymentPage';
import MyTransactionDetailPage from './pages/Public/Profile/MyTransactionDetailPage';
import MySubscriptionDashboard from './pages/Public/Profile/MySubscriptionDashboard';
import MyVoucherDashboard from './pages/Public/Profile/MyVoucherDashboard';
import MyGiftDashboard from './pages/Public/Profile/MyGiftDashboard';
import GiftClaimDashboard from './pages/Admin/Gifts/GiftClaimDashboard';
import GiftClaimDetailPage from './pages/Admin/Gifts/GiftClaimDetailPage';

function App() {
  return (
    <Routes>
      <Route path="/welcome" element={<LandingPage mode="login" />} />
      <Route path="/signup" element={<LandingPage mode="register" />} />
      <Route path="/logout" element={<Logout />} />

      <Route path="/payment/:transactionID" element={<PaymentPage />} />

      <Route path="/" element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/read/:slug" element={<ReadPage />} />
        <Route path="/history" element={<ReadingHistoryPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/purchase/:subscriptionID" element={<PurchasePage />} />

        <Route path="/profile" element={<ProfileLayout />}>
          <Route path="/profile" element={<Navigate to="/profile/account" />} />
          <Route path="/profile/account" element={<MyAccountDashboard />} />
          <Route path="/profile/mytransaction" element={<MyTransactionDashboard />} />
          <Route path="/profile/mytransaction/:transactionID" element={<MyTransactionDetailPage />} />
          <Route path="/profile/mysubscription" element={<MySubscriptionDashboard />} />
          <Route path="/profile/myvoucher" element={<MyVoucherDashboard />} />
          <Route path="/profile/myreferral" element={<MyReferralDashboard />} />
          <Route path="/profile/mygift" element={<MyGiftDashboard />} />
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

        <Route path="/admin/subscriptions" element={<SubscriptionDashboard />} />
        <Route path="/admin/transactions" element={<TransactionDashboard />} />
        <Route path="/admin/transactions/:transactionID" element={<TransactionDetailPage />} />
        <Route path="/admin/vouchers" element={<VoucherDashboard />} />

        <Route path="/admin/gifts" element={<GiftDashboard />} />
        <Route path="/admin/gift-claims" element={<GiftClaimDashboard />} />
        <Route path="/admin/gift-claims/:giftClaimID" element={<GiftClaimDetailPage />} />
      </Route>

      <Route path="*" element={<h1>404 Not Found!</h1>} />
    </Routes>
  );
}

export default App;
