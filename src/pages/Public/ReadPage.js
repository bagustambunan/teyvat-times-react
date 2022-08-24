import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import PostDetail from '../../components/Public/Read/PostDetail';

export default function ReadPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState('');

  const getToken = () => localStorage.getItem("token");
  const fetchPost = (slug) => {
    fetch("http://localhost:8080/pub/posts/"+slug, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${getToken()}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          console.log(res.data);
          setPost(res.data);
          setIsLoading(false)
        }
        if (res.statusCode !== 200) {
          toast.error(`Error: ${res.message}`);
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };

  const params = useParams();
  useEffect(() => {
    if (params.slug !== undefined) {
      fetchPost(params.slug);
    }
  },[]);

  if (isLoading) {
    return "Loading..."
  }

  return (
    <div className="container bg-white py-5 border rounded">
      <PostDetail post={post}/>
    </div>
    
  );
}
