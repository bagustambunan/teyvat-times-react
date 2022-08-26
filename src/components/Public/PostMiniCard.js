import React from 'react';

export default function PostMiniCard() {
  return (
    <div className="border-bottom py-3">
      <div className="d-flex post-mini-card">
        <img className="" src="default-thumbnail.jpg" alt="..." />
        <div className="ms-2">
          <p className="fw-bold">Title</p>
        </div>
      </div>
    </div>
  );
}
