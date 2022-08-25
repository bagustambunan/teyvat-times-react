import React from "react";
import SearchForm from "../SearchForm";
import TierSelect from "../TierSelect";
import CategorySelect from "../CategorySelect";
import SortSelect from "../SortSelect";

export default function SearchSection({ form, handleChange, handleSubmit }) {
  return (
    <section>
      <h5>Search</h5>

      <div className="d-flex mb-3">
        <TierSelect value={form.tier} handleChange={handleChange} />
        <CategorySelect value={form.category} handleChange={handleChange} />
      </div>

      <div className="mb-3">
        <SortSelect value={form.sortOrder} handleChange={handleChange} />
      </div>

      <div>
        <SearchForm value={form.s} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
      
    </section>
  );
}
