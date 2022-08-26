import React from 'react';
import { NavLink } from 'react-router-dom';

export default function PostRow({ post, i, handleDelete }) {
  return (
    <tr>
      <th scope="row">{i}</th>
      <td>{post.title}</td>
      <td>{post.postTier.name}</td>
      <td>{post.postCategory.name}</td>
      <td>
        <a href={`/read/${post.slug}`} target="_blank" className="btn btn-sm" rel="noreferrer">
          <i className="text-primary bi bi-eye-fill" />
        </a>
        <NavLink to={`/admin/posts/${post.postID}/edit`} className="btn btn-sm">
          <i className="text-warning bi bi-pencil-fill" />
        </NavLink>
        <button onClick={() => handleDelete(post)} type="button" className="btn btn-sm">
          <i className="text-danger bi bi-trash-fill" />
        </button>
      </td>
    </tr>
  );
}
