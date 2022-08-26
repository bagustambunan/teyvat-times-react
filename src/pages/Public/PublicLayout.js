import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from "react-toastify";
import { Outlet } from 'react-router-dom';
import Header from '../../components/Public/Header';
import { selectToken } from '../../store/tokenSlice';
import { selectUser } from '../../store/userSlice';
import Auth from '../../models/Auth';
import AuthHelper from '../../helpers/AuthHelper';

export default function PublicLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const setLoadingFalse = () => {
    setIsLoading(false);
  }
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const auth = new Auth(token, user);
  AuthHelper(auth, "public", setLoadingFalse);
  if (isLoading) return "Loading redux...";

  return (
    <div className="layout-main">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <div className="container pt-5 pb-5">
        <Outlet />
      </div>
    </div>
  )
}
