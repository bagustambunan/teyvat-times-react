/* eslint-disable */
import React, { useState } from 'react';
import axios from 'axios';
import LoginForm from '../components/LandingPage/LoginForm';

export default function LandingPage() {
  const [form, setForm] = useState({
    email: 'jean@mail.com',
    password: 'jean123',
  });
  const handleChange = (e) => {
    const { name } = e.currentTarget;
    const { value } = e.currentTarget;
    setForm({ ...form, [name]: value });
  };
  const submitForm = () => {
    if (isFormValid()) {
      getToken();
    }
  };
  const isFormValid = () => {
    if (form.email === '') {
      return false;
    }
    if (form.password === '') {
      return false;
    }
    return true;
  };

  const getToken = () => {
    axios.post(
      'http://localhost:8080/sign-in',
      {
        email: form.email,
        password: form.password,
      },
      {
        'Access-Control-Allow-Origin': '*',
      }
    )
      .then((res) => {
        if(res.data.statusCode === 200) {
          setToken(res.data.data.idToken);
        } else {
          console.log(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setToken = (token) => {
    localStorage.setItem('token',token);
    console.log('Login success');
  };

  return (
    <main className="">
      <LoginForm
        form={form}
        handleChange={handleChange}
        submitForm={submitForm}
      />
    </main>
  );
}
