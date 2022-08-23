import React from 'react';
import Carousel from '../../components/Public/Carousel';
import PostsSection from '../../components/Public/PostsSection';

export default function HomePage() {
  return (
    <div className="row">

      <main className="col-12 col-md-8">
        <Carousel />
        <PostsSection />
      </main>

      <aside className="col-12 col-md-2">

      </aside>
      
    </div>
  )
}
