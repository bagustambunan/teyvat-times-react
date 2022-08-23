import React from "react";
import SearchForm from "../SearchForm";
import TierSelect from "../TierSelect";
import CategorySelect from "../CategorySelect";
import SortSelect from "../SortSelect";

export default function SearchSection() {
  return (
    <section>
      <h5>Search</h5>
      
      <SearchForm />

      <div className="d-flex mb-3">
        <TierSelect />
        <CategorySelect />
      </div>

      <SortSelect />

    </section>
  );
}
