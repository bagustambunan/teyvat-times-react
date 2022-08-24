import React, { useEffect, useState } from 'react';
import Carousel from '../../components/Public/Carousel';
import PostsSection from '../../components/Public/PostsSection';
import SearchSection from '../../components/Public/SearchSection';
import TrendingSection from '../../components/Public/TrendingSection';

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({
    s: '',
    category: '0',
    tier: '0',
    sortBy: 'date',
    sortOrder: 'desc',
    limit: 2,
    page: 1,
  });
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPage: 5,
  });
  const changePage = (page) => {
    setPagination({ ...pagination, currentPage: page });
    setForm({ ...form, page: page });
  };
  useEffect(() => {
    fetchPosts();
  },[form.page]);
  const handleChange = (e) => {
    const { name } = e.currentTarget;
    const { value } = e.currentTarget;
    setForm({ ...form, [name]: value });
  };

  const getToken = () => localStorage.getItem('token');
  const fetchPosts = () => {
    fetch(`http://localhost:8080/posts?s=${form.s}&category=${form.category}&tier=${form.tier}&sortBy=${form.sortBy}&sortOrder=${form.sortOrder}&limit=${form.limit}&page=${form.page}`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${getToken()}`,
      },
    })
      .then((res) => (res.json()))
      .then((res) => {
        if (res.statusCode === 200) {
          setPosts(res.data.posts);
          setPagination({ ...pagination, totalPage: res.data.totalPage });
        }
        if (res.statusCode !== 200) {
          toast.error(`Error: ${res.message}`);
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };
  useEffect(() => {
    fetchPosts();
  },[]);

  return (
    <div className="row">

      <main className="col-12 col-md-9">
        <Carousel />
        <PostsSection posts={posts} pagination={pagination} changePage={changePage} />
      </main>

      <aside className="col-12 col-md-3 bg-white p-3 rounded border">
        <SearchSection form={form} handleChange={handleChange} />
        <TrendingSection />
      </aside>
      
    </div>
  )
}
