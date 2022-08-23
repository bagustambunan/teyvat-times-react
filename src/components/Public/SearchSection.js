import React from "react";

export default function SearchSection() {
  return (
    <section>
      <div class="input-group mb-3">
        <input name="s" type="text" class="form-control" placeholder="Search..." />
        <button class="btn btn-outline-secondary" type="button">
          <i className="bi bi-search"></i>
        </button>
      </div>

      <div className="d-flex mb-3">
        <select
          className="form-select"
          name="tier"
        >
          <option value="0">All tiers</option>
          <option value="1">Free</option>
          <option value="2">Premium</option>
          <option value="3">VIP</option>
        </select>

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

      <select
          className="form-select"
          name="sortDate"
        >
          <option value="1">Newest</option>
          <option value="2">Oldest</option>
        </select>

    </section>
  );
}
