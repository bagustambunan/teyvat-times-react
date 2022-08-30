import React from 'react';
import TierBox from '../../TierBox';
import CategoryBox from '../../CategoryBox';
import Like from './Like';
import Share from './Share';

export default function PostDetail({
  post,
  myActivity,
  changeLike,
  changeShare,
}) {
  return (
    <section>
      <div className="mb-3">
        <TierBox tier={post.postTier} />
        <CategoryBox category={post.postCategory} />
      </div>

      <div>
        <h2>{post.title}</h2>
        <p className="fst-italic text-muted small">
          Written by
          {' '}
          {post.createdBy.name}
          {' '}
          at
          {' '}
          {post.getCreatedAt()}
        </p>
      </div>

      <div className="read-img">
        <img src={post.imgContent.url} className="img-fluid" alt="..." />
      </div>

      <div>
        <p>{post.content}</p>
      </div>

      <div className="d-flex gap-3">
        <Like
          isLiked={myActivity.isLiked}
          changeLike={changeLike}
          totalLike={post.totalLike}
        />
        <Share
          isShared={myActivity.isShared}
          changeShare={changeShare}
          totalShare={post.totalShare}
        />
      </div>
    </section>
  );
}
