import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import Menu from './Menu'

export default function AdminLayout() {

  const getToken = () => localStorage.getItem('token');
  useEffect(() => {
    if (getToken() !== null) {
      const decoded = jwt_decode(getToken());
      if (decoded.user.roleID !== 1) {
        window.location.href = "/";
      }
    }
    else {
      window.location.href = "/logout";
    }
  },[]);

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
