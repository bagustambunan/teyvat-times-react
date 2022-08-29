import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from '../../store/tokenSlice';
import Unlock from '../../components/Public/Read/Unlock';

export default function UnlockPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState('');
  const token = useSelector(selectToken);
  const fetchPost = (slug) => {
    setIsLoading(true);
    fetch(`http://localhost:8080/pub/posts/overview/${slug}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          setPost(res.data);
          setIsLoading(false);
        }
        if (res.statusCode !== 200) {
          navigate(`/unlock/${slug}`);
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
  }, []);

  if (isLoading) {
    return 'Loading...';
  }
  return (
    <div className="container bg-white py-5 border rounded">
      <Unlock post={post} />
    </div>
  )
}
