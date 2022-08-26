import React, { useEffect } from 'react';
import { ToastContainer } from "react-toastify";
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../../components/Public/Header';

export default function PublicLayout() {
  const navigate = useNavigate();
  const getToken = () => localStorage.getItem('token');
  useEffect(() => {
    if (getToken() === null) {
      navigate("/logout");
    }
  },[]);

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
