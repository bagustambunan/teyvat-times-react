import React from 'react';
import SubmitButton from '../Form/SubmitButton';

export default function LoginForm({
  form,
  handleChange,
  submitForm,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow">
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
        <SubmitButton text="Login" />
      </div>
    </form>
  );
}
