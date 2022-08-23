import React from 'react';
import PostMiniCard from './PostMiniCard';

export default function TrendingSection() {
  return (
    <section className="my-5">
      <h5>Trending</h5>
      <PostMiniCard />
      <PostMiniCard />
      <PostMiniCard />
      <PostMiniCard />
      <PostMiniCard />
    </section>
  );
}
