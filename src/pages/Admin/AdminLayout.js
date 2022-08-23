import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Menu from "./Menu";

export default function AdminLayout() {
  const getToken = () => localStorage.getItem("token");
  useEffect(() => {
    if (getToken() !== null) {
      const decodedToken = jwt_decode(getToken());
      if (decodedToken.user.roleID !== 1) {
        window.location.href = "/";
      }
      checkValidToken(decodedToken);
    } else {
      window.location.href = "/logout";
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
          <Menu />
        </aside>
        <main className="px-5 w-100">
          <Outlet />
        </main>
      </div>
    </>
  );
}
