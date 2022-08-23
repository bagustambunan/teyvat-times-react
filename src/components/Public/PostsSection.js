import React from 'react';
import Pagination from './Pagination';
import PostCard from './PostCard';

export default function PostsSection() {
  return (
    <section className="container bg-white border rounded py-3">

      <div className="row">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>

      <Pagination />

    </section>
  );
}
