import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { selectToken } from "../../store/tokenSlice";
import { selectUser } from "../../store/userSlice";
import { ToastContainer } from "react-toastify";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Admin/Sidebar";
import Auth from "../../models/Auth";
import AuthHelper from "../../helpers/AuthHelper";

export default function AdminLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const setLoadingFalse = () => {
    setIsLoading(false);
  }
  const navigate = useNavigate();
  // const getToken = () => localStorage.getItem("token");
  // useEffect(() => {
  //   if (getToken() !== null) {
  //     const decodedToken = jwt_decode(getToken());
  //     if (decodedToken.user.roleID !== 1) {
  //       navigate("/");
  //     }
  //     checkValidToken(decodedToken);
  //   } else {
  //     navigate("/logout");
  //   }
  // }, []);

  // const checkValidToken = (decodedToken) => {
    // console.log(decodedToken);
  // };

  ////////////////

  const auth = new Auth(useSelector(selectToken), useSelector(selectUser));
  const authHelper = AuthHelper(auth, 1, setLoadingFalse);
  
  useEffect(() => {
    console.log("is loading");
    console.log(isLoading);
  },[isLoading])

  if (isLoading) return "Loading..."

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
