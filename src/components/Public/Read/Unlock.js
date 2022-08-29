import React from "react";
import PostHorizontalCard from "../PostHorizontalCard";

export default function Unlock({ post }) {
  return (
    <div>
      <h3 className="mb-3"><i className="bi bi-lock me-3"></i>This post is locked</h3>
      <div className="col-12 col-md-6">
        <PostHorizontalCard post={post} />
      </div>
    </div>
  );
}
