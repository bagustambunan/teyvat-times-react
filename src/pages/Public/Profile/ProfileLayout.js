import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../../components/Public/Profile/Sidebar';

export default function ProfileLayout() {
  return (
    <div className="border rounded shadow bg-light p-3 profile-layout">
      <div className="row">
        <div className="col-12 col-md-3">
          <Sidebar />
        </div>
        <div className="profile-main col-12 col-md-9 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
