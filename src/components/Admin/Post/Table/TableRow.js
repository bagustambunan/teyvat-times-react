import React from 'react';

export default function TableRow({ post, i }) {
  return (
    <tr>
      <th scope="row">{i}</th>
      <td>{post.title}</td>
      <td>{post.postTier.name}</td>
      <td>{post.postCategory.name}</td>
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
