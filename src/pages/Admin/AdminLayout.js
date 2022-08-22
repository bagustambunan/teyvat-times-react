import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './Menu'

export default function AdminLayout() {
  return (
    <div className="vh-100 d-flex">
      <sidebar>
        <div className="admin-menu-side"></div>
        <Menu />
      </sidebar>
      <main className="px-5 w-100">
        <Outlet />
      </main>
    </div>
  )
}
