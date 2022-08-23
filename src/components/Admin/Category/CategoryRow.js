import React from 'react';

export default function CategoryRow({ category, i }) {
  return (
    <tr>
      <th scope="row">{i}</th>
      <td>{category.name}</td>
    </tr>
  );
}
