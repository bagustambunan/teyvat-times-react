import React from "react";
import SubmitIcon from "../../../SubmitIcon";

export default function PostForm() {
  return (
    <form>
      <div class="mb-3">
        <label for="title" class="form-label">
          Title
        </label>
        <input
          type="text"
          class="form-control"
          id="title"
          name="title"
        />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">
          Content
        </label>
        <textarea
          class="form-control"
          rows="5"
          id="content"
          name="content"
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="summary" class="form-label">
          Summary
        </label>
        <textarea
          class="form-control"
          rows="5"
          id="summary"
          name="summary"
        ></textarea>
      </div>

      <div class="mb-3">
        <label for="tier" class="form-label">
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

      <div class="mb-3">
        <label for="category" class="form-label">
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
