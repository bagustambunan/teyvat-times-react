import React from 'react';

export default function Pagination({ pagination, changePage }) {
  const pages = [];
  for (let i = 1; i <= pagination.totalPage; i += 1) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      {pages.map((item) => (
        <button
          type="button"
          key={item}
          onClick={() => changePage(item)}
          className={`${item === pagination.currentPage ? 'active' : ''}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
