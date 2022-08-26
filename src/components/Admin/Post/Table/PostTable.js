import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import Pagination from "../../../Pagination";
import TableController from "./TableController";
import PostRow from "./PostRow";
import Post from "../../../../models/Post";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../../../store/tokenSlice";

export default function PostTable() {
  const navigate = useNavigate();
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
  }

  useEffect(() => {
    fetchPosts();
  },[form.page]);

  const handleChange = (e) => {
    const { name } = e.currentTarget;
    const { value } = e.currentTarget;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = () => {
    fetchPosts();
  };

  const token = useSelector(selectToken);
  const fetchPosts = () => {
    fetch(`http://localhost:8080/posts?s=${form.s}&category=${form.category}&tier=${form.tier}&sortBy=${form.sortBy}&sortOrder=${form.sortOrder}&limit=${form.limit}&page=${form.page}`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((res) => (res.json()))
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

  const deletePost = (postID) => {
    fetch("http://localhost:8080/posts/"+postID, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          toast.success('Post deleted successfully');
          navigate("/admin/posts");
        }
        if (res.statusCode !== 200) {
          toast.error(`Error: ${res.message}`);
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };
  const handleDelete = (post) => {
    if (confirm(`Delete this post?\n\n${post.title}`) === true) {
      deletePost(post.postID);
    }
  }

  useEffect(() => {
    fetchPosts();
  },[])

  return (
    <>
      <TableController form={form} handleChange={handleChange} handleSubmit={handleSubmit} />
      <table className="table table-striped w-100">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Tier</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <PostRow key={post.postID} post={post} i={index+1} handleDelete={handleDelete} />
          ))}
        </tbody>
      </table>
      <Pagination pagination={pagination} changePage={changePage}/>
    </>
  );
}
