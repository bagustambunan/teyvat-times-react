import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from '../../store/tokenSlice';
import Unlock from '../../components/Public/Read/Unlock';
import Mora from '../../components/Mora';
import { apiUrl } from '../../helpers/values';

export default function UnlockPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState('');
  const token = useSelector(selectToken);
  const fetchPost = (slug) => {
    setIsLoading(true);
    fetch(`${apiUrl}/pub/posts/overview/${slug}`, {
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

  const saveUnlock = (postID) => {
    fetch(`${apiUrl}/pub/posts/${postID}/unlocks/`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          toast.success('Post unlocked successfully');
          navigate(`/read/${params.slug}`);
        }
        if (res.statusCode !== 200) {
          toast.error(`${res.message}`);
          navigate(`/subscription`);
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };

  if (isLoading) {
    return 'Loading...';
  }
  return (
    <div className="container bg-white py-5 border rounded">
      <Unlock post={post} />
      <div className="d-flex align-items-center justify-content-between border rounded bg-light p-3">
        <div className="d-flex flex-column">
          <strong>Mora</strong>
          <Mora amount={post.postTier.moraRequired} />
        </div>
        <button onClick={() => saveUnlock(post.postID)} type="button" className="btn btn-primary">
          <i class="bi bi-unlock me-3"></i>
          Unlock
        </button>
      </div>
    </div>
  )
}
