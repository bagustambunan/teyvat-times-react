import React from 'react';
import Button from '../Button';

export default function LoginForm() {
  return (
    <div className="card p-4 shadow">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          placeholder="name@mail.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
        />
      </div>
      <div className="mb-3">
        <Button text="Login" />
      </div>
    </div>
  );
}
