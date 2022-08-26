import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Outlet, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Sidebar from "../../components/Admin/Sidebar";

export default function AdminLayout() {
  const navigate = useNavigate();
  const getToken = () => localStorage.getItem("token");
  useEffect(() => {
    if (getToken() !== null) {
      const decodedToken = jwt_decode(getToken());
      if (decodedToken.user.roleID !== 1) {
        navigate("/");
      }
      checkValidToken(decodedToken);
    } else {
      navigate("/logout");
    }
  }, []);

  const checkValidToken = (decodedToken) => {
    // console.log(decodedToken);
  };

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
