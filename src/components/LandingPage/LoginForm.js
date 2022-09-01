import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { apiUrl } from "../../helpers/values";
import { setToken } from "../../store/tokenSlice";
import SubmitButton from "../Form/SubmitButton";

export default function LoginForm({ checkToken }) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
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

    fetch(`${apiUrl}/sign-in`, {
      method: "POST",
      body: JSON.stringify(dataToPost),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          dispatch(setToken(res.data.token));
          checkToken();
        }
        if (res.statusCode !== 200) {
          toast.warn("Wrong email or password");
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      fetchToken();
    }
  };

  return (
    <div className="row justify-content-evenly">
      <div className="col-12 col-md-5">
        <img src="./venti-full.webp" className="img-fluid" />
      </div>
      <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
        <div className="card p-4 shadow w-100">
          <h4 className="mb-5 text-center">Login To Your Account</h4>
          <form onSubmit={handleSubmit}>
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
                onChange={(e) => {
                  handleChange(e);
                }}
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
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="mb-3">
              <SubmitButton text="Login" />
            </div>
            <div className="mb-3 text-center">
              <NavLink className="link" to="/signup">
                Create new account
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
