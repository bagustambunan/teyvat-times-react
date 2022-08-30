import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../../components/Public/Profile/Sidebar';

export default function ProfileLayout() {
  return (
    <div className="card border rounded shadow bg-light p-3">
      <div className="row">
        <div className="col-12 col-md-3">
          <Sidebar />
        </div>
        <div className="col-12 col-md-9 border-start border-2 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
