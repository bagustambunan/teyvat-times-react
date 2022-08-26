import React, { useState } from 'react';
import Pagination from '../Pagination';
import PostCard from './PostCard';

export default function PostsSection({ posts, pagination, changePage }) {
  return (
    <section className="container bg-white border rounded py-3">

      <div className="row">
        { posts.map((post) => <PostCard key={post.postID} post={post} />) }
      </div>

      <Pagination pagination={pagination} changePage={changePage} />

    </section>
  );
}
