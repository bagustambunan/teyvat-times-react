import React from 'react'
import SubmitIcon from "../../SubmitIcon";

export default function CategoryForm({ form, handleChange, handleSubmit }) {
  const submitForm = (e) => {
    e.preventDefault();
    handleSubmit();
  };
  return (
    <form onSubmit={submitForm}>
      <div className="mb-3">
        <label for="name" className="form-label">
          Category Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={form.name}
          onChange={(e) => { handleChange(e); }}
        />
      </div>

      <div className="mb-3">
        <label for="color" className="form-label">
          Color
        </label>
        <input
          type="text"
          className="form-control"
          id="color"
          name="color"
          value={form.color}
          onChange={(e) => { handleChange(e); }}
        />
      </div>
      <SubmitIcon text="Save" icon="bi-save"/>
    </form>
  )
}
