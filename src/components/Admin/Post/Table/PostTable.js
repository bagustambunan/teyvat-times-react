import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import Pagination from "../../../Pagination";
import TableController from "./TableController";
import PostRow from "./PostRow";

export default function PostTable() {
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

  const deletePost = (postID) => {
    fetch("http://localhost:8080/posts/"+postID, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${getToken()}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          alert('Post deleted successfully');
          // window.location.href = "/admin";
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
