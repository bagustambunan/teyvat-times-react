import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Carousel from '../../components/Public/Carousel';
import PostsSection from '../../components/Public/PostsSection';
import SearchSection from '../../components/Public/SearchSection';
import TrendingSection from '../../components/Public/TrendingSection';
import Post from '../../models/Post';
import { selectToken } from '../../store/tokenSlice';

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({
    s: '',
    category: '0',
    tier: '0',
    sortBy: 'date',
    sortOrder: 'desc',
    limit: 10,
    page: 1,
  });
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPage: 5,
  });

  const changePage = (page) => {
    setPagination({ ...pagination, currentPage: page });
    setForm({ ...form, page });
  };

  const token = useSelector(selectToken);
  const fetchPosts = () => {
    fetch(
      `http://localhost:8080/pub/posts?s=${form.s}&category=${form.category}&tier=${form.tier}&sortBy=${form.sortBy}&sortOrder=${form.sortOrder}&limit=${form.limit}&page=${form.page}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          const fetchedPosts = res.data.posts.map((item) => {
            const post = new Post(
              item.postID,
              item.postTier,
              item.postCategory,
              item.title,
              item.content,
              item.slug,
              item.summary,
              item.imgThumbnail,
              item.imgContent,
              item.createdBy,
              item.updatedBy,
              item.createdAt,
              item.updatedAt,
              item.totalLike,
              item.totalShare,
            );
            return post;
          });
          setPosts(fetchedPosts);
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
  }, [form.page]);
  const handleChange = (e) => {
    const { name } = e.currentTarget;
    const { value } = e.currentTarget;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = () => {
    fetchPosts();
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="row">
      <main className="col-12 col-md-9">
        {/* <Carousel /> */}
        <PostsSection
          posts={posts}
          pagination={pagination}
          changePage={changePage}
        />
      </main>

      <aside className="col-12 col-md-3 bg-white p-3 rounded border">
        <SearchSection
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <TrendingSection />
      </aside>
    </div>
  );
}
