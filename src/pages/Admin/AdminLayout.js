import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { selectToken } from "../../store/tokenSlice";
import { selectUser } from "../../store/userSlice";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Admin/Sidebar";
import Auth from "../../models/Auth";
import AuthHelper from "../../helpers/AuthHelper";

export default function AdminLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const setLoadingFalse = () => {
    setIsLoading(false);
  }
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const auth = new Auth(token, user);
  AuthHelper(auth, "internal", setLoadingFalse);
  if (isLoading) return "Loading redux...";

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
      <div className="vh-100 d-flex">
        <aside>
          <div className="admin-menu-side"></div>
          <Sidebar />
        </aside>
        <main className="px-5 w-100">
          <Outlet />
        </main>
      </div>
    </>
  );
}
