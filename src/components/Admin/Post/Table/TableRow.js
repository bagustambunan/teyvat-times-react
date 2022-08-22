import React from 'react';

export default function TableRow() {
  return (
    <tr>
      <th scope="row">1</th>
      <td>Title 1</td>
      <td>Tier 1</td>
      <td>Category 1</td>
      <td>
        <a href="#" className="btn btn-sm">
          <i className="text-primary bi bi-eye-fill"></i>
        </a>
        <a href="#" className="btn btn-sm">
          <i className="text-warning bi bi-pencil-fill"></i>
        </a>
        <a href="#" className="btn btn-sm">
          <i className="text-danger bi bi-trash-fill"></i>
        </a>
      </td>
    </tr>
  );
}
