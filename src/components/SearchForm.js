import React from 'react';

export default function SearchForm({ value, handleChange, handleSubmit }) {
  const submitForm = (e) => {
    e.preventDefault();
    handleSubmit(e);
  };
  return (
    <form onSubmit={submitForm}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          name="s"
          value={value}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button type="submit" className="btn btn-outline-secondary">
          <i className="bi bi-search" />
        </button>
      </div>
    </form>
  );
}
