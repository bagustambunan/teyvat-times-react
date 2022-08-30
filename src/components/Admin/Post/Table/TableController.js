import React from 'react';
import CategorySelect from '../../../CategorySelect';
import SearchForm from '../../../SearchForm';
import SortSelect from '../../../SortSelect';
import TierSelect from '../../../TierSelect';

export default function TableController({ form, handleChange, handleSubmit }) {
  return (
    <section className="row my-3">
      <div className="col-12 col-md-6 row row-cols-1 row-cols-md-3">
        <div className="col">
          <TierSelect value={form.tier} handleChange={handleChange} />
        </div>

        <div className="col">
          <CategorySelect value={form.category} handleChange={handleChange} />
        </div>

        <div className="col">
          <SortSelect value={form.sortOrder} handleChange={handleChange} />
        </div>
      </div>

      <div className="col-12 col-md-6">
        <SearchForm
          value={form.s}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </section>
  );
}
