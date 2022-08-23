import React from 'react';
import TableSearchForm from './TableSearchForm';
import TableSort from './TableSort';

export default function TableController() {
  return (
    <section className="row row-cols-1 row-cols-md-3 mb-3">

      <div className="col d-flex flex-row align-items-center">
        <span className="me-2 text-nowrap">Sort by</span>
        <TableSort />
      </div>

      <div className="col">
        <TableSearchForm />
      </div>

    </section>
  );
}