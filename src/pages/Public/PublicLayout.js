import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './Menu'

export default function PublicLayout() {
  return (
    <div className="layout-main">
      <Menu />
      <div className="container pt-5 pb-5">
        <Outlet />
      </div>
    </div>
  )
}
