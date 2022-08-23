import React from 'react';
import CategorySelect from '../../../CategorySelect';
import SearchForm from '../../../SearchForm';
import SortSelect from '../../../SortSelect';
import TierSelect from '../../../TierSelect';

export default function TableController() {
  return (
    <section className="row my-3">

      <div className="col-12 col-md-6 row row-cols-1 row-cols-md-3">
        <div className="col">
          <TierSelect />
        </div>

        <div className="col">
          <CategorySelect />
        </div>

        <div className="col">
          <SortSelect />
        </div>
      </div>

      <div className="col-12 col-md-6">
        <SearchForm />
      </div>

    </section>
  );
}