import React from 'react';
import { NavLink } from 'react-router-dom';

export default function PostRow({ post, i }) {
  return (
    <tr>
      <th scope="row">{i}</th>
      <td>{post.title}</td>
      <td>{post.postTier.name}</td>
      <td>{post.postCategory.name}</td>
      <td>
        <NavLink to={`/posts/${post.slug}`} className="btn btn-sm">
          <i className="text-primary bi bi-eye-fill"></i>
        </NavLink>
        <NavLink to={`/admin/posts/${post.postID}/edit`} className="btn btn-sm">
          <i className="text-warning bi bi-pencil-fill"></i>
        </NavLink>
        <NavLink to="/admin/posts/${post.postID}/delete" className="btn btn-sm">
          <i className="text-danger bi bi-trash-fill"></i>
        </NavLink>
      </td>
    </tr>
  );
}
