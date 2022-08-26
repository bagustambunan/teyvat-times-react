import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SubmitButton from '../Form/SubmitButton';

export default function RegisterForm({ checkToken }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    referrerCode: "",
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
  const sendForm = () => {
    const dataToPost = {
      name: form.name,
      email: form.email,
      username: form.username,
      password: form.password,
      phone: form.phone,
      street: form.street,
      city: form.city,
      state: form.state,
      country: form.country,
      postalCode: form.postalCode,
      referrerCode: form.referrerCode,
    };

    fetch("http://localhost:8080/sign-up", {
      method: "POST",
      body: JSON.stringify(dataToPost),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 201) {
          toast.success('Sign up success. You can login to your account');
          navigate("/welcome");
        }
        if (res.statusCode !== 201) {
          toast.error(res.message);
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      sendForm();
    }
  };

  return (
    <div className="card p-4 col-12 col-md-6 shadow">
      <h4 className="mb-5 text-center">Create New Account</h4>
      <form onSubmit={handleSubmit} className="row">

        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Your name"
                name="name"
                value={form.name}
                onChange={(e) => { handleChange(e); }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="name@mail.com"
                name="email"
                value={form.email}
                onChange={(e) => { handleChange(e); }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={form.username}
                onChange={(e) => { handleChange(e); }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={form.password}
                onChange={(e) => { handleChange(e); }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Phone number"
                name="phone"
                value={form.phone}
                onChange={(e) => { handleChange(e); }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="referrerCode" className="form-label">
                Referral Code
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Referral Code"
                name="referrerCode"
                value={form.referrerCode}
                onChange={(e) => { handleChange(e); }}
              />
            </div>
          </div>

          <div className="col">
            <div className="mb-3">
              <label htmlFor="street" className="form-label">
                Street Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Street Name"
                name="street"
                value={form.street}
                onChange={(e) => { handleChange(e); }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="City"
                name="city"
                value={form.city}
                onChange={(e) => { handleChange(e); }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="state" className="form-label">
                State
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="State"
                name="state"
                value={form.state}
                onChange={(e) => { handleChange(e); }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Country"
                name="country"
                value={form.country}
                onChange={(e) => { handleChange(e); }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="postalCode" className="form-label">
                Postal Code
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Postal Code"
                name="postalCode"
                value={form.postalCode}
                onChange={(e) => { handleChange(e); }}
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <SubmitButton text="Sign Up" />
        </div>

        <div className="mb-3 text-center">
          <NavLink className="link" to="/welcome">Login to your account</NavLink>
        </div>

      </form>
    </div>
  );
}
