import React from "react";
import SubmitIcon from "../../../SubmitIcon";

export default function PostForm() {
  return (
    <form>
      <div className="mb-3">
        <label for="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
        />
      </div>
      <div className="mb-3">
        <label for="content" className="form-label">
          Content
        </label>
        <textarea
          className="form-control"
          rows="5"
          id="content"
          name="content"
        ></textarea>
      </div>
      <div className="mb-3">
        <label for="summary" className="form-label">
          Summary
        </label>
        <textarea
          className="form-control"
          rows="5"
          id="summary"
          name="summary"
        ></textarea>
      </div>

      <div className="mb-3">
        <label for="tier" className="form-label">
          Tier
        </label>
        <select
          className="form-select"
          name="tier"
        >
          <option value="1">Free</option>
          <option value="2">Premium</option>
          <option value="3">VIP</option>
        </select>
      </div>

      <div className="mb-3">
        <label for="category" className="form-label">
          Category
        </label>
        <select
          className="form-select"
          name="category"
        >
          <option value="0">All categories</option>
          <option value="1">Politic</option>
          <option value="2">Economy</option>
          <option value="3">Sport</option>
          <option value="4">Entartainment</option>
        </select>
      </div>

      <SubmitIcon text="Save" icon="bi-save"/>
    </form>
  );
}
