import React from "react";
import CategorySelect from "../../CategorySelect";
import SubmitIcon from "../../SubmitIcon";
import TierSelect from "../../TierSelect";

export default function PostForm({ form, handleChange, handleSubmit }) {
  const submitForm = (e) => {
    e.preventDefault();
    handleSubmit();
  };
  return (
    <form onSubmit={submitForm}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={form.title}
          onChange={(e) => { handleChange(e); }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Content
        </label>
        <textarea
          className="form-control"
          rows="5"
          id="content"
          name="content"
          value={form.content}
          onChange={(e) => { handleChange(e); }}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="summary" className="form-label">
          Summary
        </label>
        <textarea
          className="form-control"
          rows="5"
          id="summary"
          name="summary"
          value={form.summary}
          onChange={(e) => { handleChange(e); }}
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="tier" className="form-label">
          Tier
        </label>
        <TierSelect showDefault={false} value={form.tier} handleChange={handleChange} />
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <CategorySelect showDefault={false} value={form.category} handleChange={handleChange} />
      </div>

      <SubmitIcon text="Save" icon="bi-save"/>
    </form>
  );
}
