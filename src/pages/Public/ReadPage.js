import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PostDetail from '../../components/Public/Read/PostDetail';
import { selectToken } from '../../store/tokenSlice';
import { apiUrl } from '../../helpers/values';
import Unlock from '../../components/Public/Read/Unlock';
import Post from '../../models/Post';

export default function ReadPage() {
  const token = useSelector(selectToken);
  const [isLoading, setIsLoading] = useState(true);
  const [mode, setMode] = useState('overview');
  const [overview, setOverview] = useState('');
  const [read, setRead] = useState('');

  const fetchOverview = (slug) => {
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
          setOverview(res.data);
          setIsLoading(false);
        }
        if (res.statusCode !== 200) {
          toast.error(`Error: ${res.message}`);
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };

  const fetchRead = (slug) => {
    fetch(`${apiUrl}/pub/posts/read/${slug}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          const fetchedPost = new Post(
            res.data.postID,
            res.data.postTier,
            res.data.postCategory,
            res.data.title,
            res.data.content,
            res.data.slug,
            res.data.summary,
            res.data.imgThumbnail,
            res.data.imgContent,
            res.data.createdBy,
            res.data.updatedBy,
            res.data.createdAt,
            res.data.updatedAt,
            res.data.totalLike,
            res.data.totalShare,
          );
          setRead(fetchedPost);
          setMode('read');
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
      fetchOverview(params.slug);
    }
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (overview.postTier.postTierID === 1) {
        fetchRead(params.slug);
      }
    }
  }, [isLoading]);

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <div className="container bg-white p-4 border rounded shadow">
      {mode === 'overview' ? (
        <Unlock post={overview} fetchRead={fetchRead} />
      ) : (
        <PostDetail post={read} setPost={setRead} />
      )}
    </div>
  );
}
