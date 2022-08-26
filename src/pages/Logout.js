import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export default function Logout() {
  useEffect(() => {
    removeToken();
  }, []);
  const removeToken = () => {
    localStorage.removeItem('token');
  };
  window.location.href = '/welcome';
}
