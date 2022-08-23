import React from 'react';
import Carousel from '../../components/Public/Carousel';
import PostsSection from '../../components/Public/PostsSection';
import SearchSection from '../../components/Public/SearchSection';
import TrendingSection from '../../components/Public/TrendingSection';

export default function HomePage() {
  return (
    <div className="row">

      <main className="col-12 col-md-9">
        <Carousel />
        <PostsSection />
      </main>

      <aside className="col-12 col-md-3 bg-white p-3 rounded border">
        <SearchSection />
        <TrendingSection />
      </aside>
      
    </div>
  )
}
