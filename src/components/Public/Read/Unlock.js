import React from 'react';
import Mora from '../../Mora';
import PostHorizontalCard from '../PostHorizontalCard';

export default function Unlock({ post, fetchRead }) {
  return (
    <div>
      <h3 className="mb-3">
        <i className="bi bi-lock me-3" />
        This post is locked
      </h3>
      <div className="col-12 col-md-6">
        <PostHorizontalCard post={post} />
      </div>

      <div className="d-flex align-items-center justify-content-between border rounded bg-light p-3">
        <div className="d-flex flex-column">
          <strong>Mora</strong>
          <Mora amount={post.postTier.moraRequired} />
        </div>
        <button
          onClick={() => fetchRead(post.slug)}
          type="button"
          className="btn btn-primary"
        >
          <i className="bi bi-unlock me-3" />
          Unlock
        </button>
      </div>

    </div>
  );
}
