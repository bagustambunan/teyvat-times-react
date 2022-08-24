import React from 'react';

export default function Pagination({ pagination, changePage }) {

  const pages = []
  for (let i=1; i<=pagination.totalPage; i++) {
    pages.push(i)
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
        {
          pages.map((item) =>
          <li className="active">
            <a
              href="#"
              onClick={() => changePage(item)}
            >
              {item}
            </a>
          </li>)
        }
      </ul>
    </div>
  );
}
