import React from 'react';
import Pagination from '../Pagination';
import PostCard from './PostCard';

export default function PostsSection({ posts, pagination, changePage }) {
  return (
    <section className="container bg-white rounded p-4 shadow border">
      <div className="row">
        {posts.map((post) => (
          <PostCard key={post.postID} post={post} />
        ))}
      </div>

      <Pagination pagination={pagination} changePage={changePage} />
    </section>
  );
}
