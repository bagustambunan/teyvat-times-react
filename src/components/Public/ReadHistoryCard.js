import React from "react";
import { NavLink } from "react-router-dom";
import Post from "../../models/Post";
import CategoryBox from "../CategoryBox";
import TierBox from "../TierBox";

export default function ReadHistoryCard({ activity }) {
  const post = new Post(
    activity.post.postID,
    activity.post.postTier,
    activity.post.postCategory,
    activity.post.title,
    activity.post.content,
    activity.post.slug,
    activity.post.summary,
    activity.post.imgThumbnail,
    activity.post.imgContent,
    activity.post.createdBy,
    activity.post.updatedBy,
    activity.post.createdAt,
    activity.post.updatedAt,
    activity.post.totalLike,
    activity.post.totalShare
  );
  return (
    <div className="col-12 col-md-6">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <NavLink to={`/read/${post.slug}`}>
              <img
                src={post.imgThumbnail.url}
                className="img-fluid rounded-start post-card-horizontal-img"
                alt="..."
              />
            </NavLink>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="mb-3">
                <TierBox tier={post.postTier} />
                <CategoryBox category={post.postCategory} />
              </div>
              <NavLink to={`/read/${post.slug}`} className="link">
                <h5 className="card-title">{post.title}</h5>
              </NavLink>
              <p className="card-text">
                <small className="text-muted">
                  First read at {activity.getFirstReadDate()}
                </small>
                <br />
                <small className="text-muted">
                  Last read at {activity.getLastReadDate()}
                </small>
              </p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
