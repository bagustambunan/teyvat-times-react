import React from 'react';

export default function TableSearchForm() {

  return (
    <input
      data-testid="form-search"
      type="text"
      className="form-control"
      placeholder="Search"
      name="search"
    />
  );
}
