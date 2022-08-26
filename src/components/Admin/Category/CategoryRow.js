import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CategoryRow({ category, i }) {
  return (
    <tr>
      <th scope="row">{i}</th>
      <td>
        <span style={{ backgroundColor: category.color }} className="p-2 text-white rounded">{category.name}</span>
      </td>
      <td>
        <NavLink to={`/admin/categories/${category.postCategoryID}/edit`} className="btn btn-sm">
          <i className="text-warning bi bi-pencil-fill" />
        </NavLink>
      </td>
    </tr>
  );
}
