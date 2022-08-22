import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './Menu'

export default function AdminLayout() {

  useEffect(() => {
    if (getToken() === null) {
      window.location.href = "/logout";
    }
  },[]);

  const getToken = () => {
    return localStorage.getItem('token');
  };

  return (
    <div className="vh-100 d-flex">
      <aside>
        <div className="admin-menu-side"></div>
        <Menu />
      </aside>
      <main className="px-5 w-100">
        <Outlet />
      </main>
    </div>
  )
}
