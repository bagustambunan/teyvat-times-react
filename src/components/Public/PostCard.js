import React from "react";
import { NavLink } from "react-router-dom";
import CategoryBox from "../CategoryBox";
import TierBox from "../TierBox";

export default function PostCard({ post }) {
  return (
    <div className="col-12 col-md-6">
      <div className="card mb-3">

        <NavLink to={`/read/${post.slug}`}>
          <img src={post.imgThumbnail.url} className="card-img-top post-card-img" alt="..." />
        </NavLink>

        <div className="card-body">
          <NavLink to={`/read/${post.slug}`}>
            <h5 className="card-title">{post.title}</h5>
          </NavLink>

          <p className="fst-italic text-muted small">{post.getCreatedAt()}</p>
          <p className="card-text">{post.summary}</p>
          <div>
            <TierBox tier={post.postTier} />
            <CategoryBox category={post.postCategory} />
          </div>
          
        </div>
      </div>
    </div>
  );
}
