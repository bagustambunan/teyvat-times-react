import React, { useState } from "react";
import LoginForm from "../components/LandingPage/LoginForm";

export default function LandingPage() {
  // const [isLoading, setIsLoading] = useState(true);
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
        if (!res.error){
          console.log(res.data.token);
          setToken(res.data.token);
        }
      })
      .catch((err) => {
        console.log(err);
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
  if (getToken() !== null) {
    return "ANDA SUDAH LOGIN";
  }

  return (
    <LoginForm
      form={form}
      handleChange={handleChange}
      submitForm={submitForm}
    />
  );
}
