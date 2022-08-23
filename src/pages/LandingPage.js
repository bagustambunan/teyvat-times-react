import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import jwt_decode from "jwt-decode";
import LoginForm from "../components/LandingPage/LoginForm";

import 'react-toastify/dist/ReactToastify.css';

export default function LandingPage() {
  const [form, setForm] = useState({
    email: "jean@mail.com",
    password: "jean123",
  });
  const handleChange = (e) => {
    const { name } = e.currentTarget;
    const { value } = e.currentTarget;
    setForm({ ...form, [name]: value });
  };
  const isFormValid = () => {
    if (form.email === "") {
      return false;
    }
    if (form.password === "") {
      return false;
    }
    return true;
  };

  const fetchToken = () => {
    const dataToPost = {
      email: form.email,
      password: form.password,
    };

    fetch("http://localhost:8080/sign-in", {
      method: "POST",
      body: JSON.stringify(dataToPost),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          console.log(res.data.token);
          setToken(res.data.token);
          checkToken();
        }
        if (res.statusCode !== 200) {
          if (res.code === "UNAUTHORIZED_ERROR") toast.warn("Wrong email or password");
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };

  const submitForm = () => {
    if (isFormValid()) {
      fetchToken();
    }
  };

  const getToken = () => localStorage.getItem("token");
  const setToken = (token) => {
    localStorage.setItem('token',token);
    console.log('Login success');
  };
  const checkToken = () => {
    if (getToken() !== null) {
      const decoded = jwt_decode(getToken());
      console.log(decoded.user.roleID);
      if (decoded.user.roleID === 1) {
        window.location.href = "/admin";
      }
      if (decoded.user.roleID !== 1) {
        window.location.href = "/";
      }
    }
  }
  useEffect(() => {
    checkToken();
  },[]);

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
      <LoginForm
      form={form}
      handleChange={handleChange}
      submitForm={submitForm}
    />
    </>
  );
}
