import React from "react";
import CategoryBox from "../CategoryBox";
import TierBox from "../TierBox";
import { ParseDate } from "../../helpers/Parser";

export default function PostHorizontalCard({ post }) {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={post.imgThumbnail.url}
            className="img-fluid rounded-start post-card-horizontal-img"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="mb-3">
              <TierBox tier={post.postTier} />
              <CategoryBox category={post.postCategory} />
            </div>
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.summary}</p>
            <p className="card-text">
              <small className="text-muted">
                Written by {post.createdBy.name} at {ParseDate(post.createdAt)}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
