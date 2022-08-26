import React from 'react';

export default function CategoryBox({ category }) {
  return (
    <button
      type="button"
      style={{ backgroundColor: category.color }}
      className="small text-white p-2 rounded text-decoration-none me-3"
    >
      {category.name}
    </button>
  );
}
