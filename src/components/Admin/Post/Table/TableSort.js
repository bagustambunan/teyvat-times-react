import React from 'react';

export default function TableSort() {
  return (
    <>
      <select
        data-testid="form-sort-by"
        className="form-select me-2"
        name="sortBy"
        defaultValue={0}
      >
        <option value="date">
          Date
        </option>
        <option value="amount">
          Amount
        </option>
      </select>
      <select
        data-testid="form-sort-order"
        className="form-select"
        name="sortOrder"
        defaultValue={0}
      >
        <option value="desc">
          Descending
        </option>
        <option value="asc">
          Ascending
        </option>
      </select>
    </>
  );
}
