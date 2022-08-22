import React, { useEffect } from 'react';

export default function Logout() {
  useEffect(() => {
    removeToken();
  },[]);
  const removeToken = () => {
    localStorage.removeItem('token');
  };
  return (
    <div>Logout success</div>
  );
}
