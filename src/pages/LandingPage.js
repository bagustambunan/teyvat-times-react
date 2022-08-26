import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import jwt_decode from 'jwt-decode';
import LoginForm from '../components/LandingPage/LoginForm';

import 'react-toastify/dist/ReactToastify.css';
import RegisterForm from '../components/LandingPage/RegisterForm';
import { useNavigate } from 'react-router-dom';

export default function LandingPage({ mode }) {
  const navigate = useNavigate();
  const getToken = () => localStorage.getItem('token');
  const checkToken = () => {
    if (getToken() !== null) {
      const decoded = jwt_decode(getToken());
      if (decoded.user.roleID === 1) {
        navigate('/admin');
      }
      if (decoded.user.roleID !== 1) {
        navigate('/');
      }
    }
  };
  useEffect(() => {
    checkToken();
  }, []);

  return (
    <>
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

      <div className="layout-main d-flex justify-content-center align-items-center">

        {mode === 'login' ? (
          <LoginForm checkToken={checkToken} />
        ) : ('')}

        {mode === 'register' ? (
          <RegisterForm checkToken={checkToken} />
        ) : ('')}

      </div>

    </>
  );
}
