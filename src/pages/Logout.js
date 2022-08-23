import React, { useEffect } from 'react';

export default function Logout() {
  useEffect(() => {
    removeToken();
  },[]);
  const removeToken = () => {
    localStorage.removeItem('token');
    window.location.href = "/";
  };
  return (
    <div>Logout success</div>
  );
}
