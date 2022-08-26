import React from 'react';

export default function Pagination({ pagination, changePage }) {
  const pages = [];
  let showPages = [];
  for (let i = 1; i <= pagination.totalPage; i++) {
    pages.push(i);
  }
  if (pagination.totalPage > 3) {
    showPages = pages.slice(pagination.currentPage - 1, 3);
  }
  return (
    <div className="">
      <ul className="pagination">
        {/* <li><a href="#">&lt;&lt;</a></li>
      <li><a href="#">&lt;</a></li>
      <li><a href="#">5</a></li>
      <li><a href="#">6</a></li>
      <li><a href="#">7</a></li>
      <li><a href="#">&gt;</a></li>
      <li><a href="#">&gt;&gt;</a></li> */}
        {pages.map((item) => (
          <li key={item} onClick={() => changePage(item)}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
