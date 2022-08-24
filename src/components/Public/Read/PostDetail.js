import React from 'react';
import TierBox from '../../TierBox';
import CategoryBox from '../../CategoryBox';
import Like from './Like';
import Share from './Share';

export default function PostDetail({ post, myActivity, changeLike, changeShare }) {
  const parseDate = (date) => {
    const d = new Date(date);
    return `${d.toDateString()} ${d.toLocaleTimeString()}`;
  }
  return (
    <section>
      <div className="mb-3">
        <TierBox tier={post.postTier} />
        <CategoryBox category={post.postCategory} />
      </div>
      
      <div>
        <h2>{post.title}</h2>
        <p className="text-muted small">Written by {post.createdBy.name} at {parseDate(post.createdAt)}</p>
      </div>
      
      <div className="read-img">
        <img src="../default.png" className="img-fluid" alt="..." />
      </div>

      <div>
        <p>{post.content}</p>
      </div>

      <div className="d-flex gap-3">
        <Like isLiked={myActivity.isLiked} changeLike={changeLike} />
        <Share isShared={myActivity.isShared} changeShare={changeShare} />
      </div>

    </section>
  );
}
