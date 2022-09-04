/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

export default function Pagination({ pagination, changePage }) {
  const pages = [];
  for (let i = 1; i <= pagination.totalPage; i += 1) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      {pages.map((item) => (
        <span
          key={item}
          onClick={() => changePage(item)}
          className={`${item === pagination.currentPage ? 'active' : ''}`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
