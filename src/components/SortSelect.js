import React from "react";

export default function SortSelect({ value, handleChange }) {
  return (
    <select
      className="form-select"
      name="sortOrder"
      value={value}
      onChange={(e) => { handleChange(e); }}
    >
      <option value="desc">Newest</option>
      <option value="asc">Oldest</option>
    </select>
  );
}
