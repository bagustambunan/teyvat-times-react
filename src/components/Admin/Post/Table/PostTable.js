import React, { useEffect, useState } from "react";
import Pagination from "../../../Pagination";
import TableController from "./TableController";
import TableRow from "./TableRow";

export default function PostTable() {
  const [posts, setPosts] = useState([]);

  const getToken = () => localStorage.getItem('token');
  const fetchPosts = () => {
    fetch('http://localhost:8080/posts', {
      method: "GET",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Authorization, X-My-Custom-Header',
        'Authorization': `Bearer ${getToken()}`,
      },
    })
      .then((res) => (res.json()))
      .then((res) => {
        if (!res.error) {
          console.log(res.data.posts);
          setPosts(res.data.posts);
        }
        // if (res.error) toast.error(`Error: ${res.error}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchPosts();
  },[])

  return (
    <>
      <TableController />
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
            <TableRow key={post.postID} post={post} i={index+1} />
          ))}
        </tbody>
      </table>
      <Pagination />
    </>
  );
}
