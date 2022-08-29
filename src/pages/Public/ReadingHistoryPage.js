import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import PostsSection from '../../components/Public/PostsSection';
import Post from '../../models/Post';
import { selectToken } from '../../store/tokenSlice';

export default function ReadingHistoryPage() {
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
      `http://localhost:8080/pub/reading-history?limit=${form.limit}&page=${form.page}`,
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
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <main className="col-12">
      {/* <Carousel /> */}
      <PostsSection
        posts={posts}
        pagination={pagination}
        changePage={changePage}
      />
    </main>
  );
}
