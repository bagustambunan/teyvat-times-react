import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import PostDetail from '../../components/Public/Read/PostDetail';
import Post from '../../models/Post';
import { useSelector } from 'react-redux';
import { selectToken } from '../../store/tokenSlice';

export default function ReadPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState('');
  const [myActivity, setMyActivity] = useState({
    isLiked: 0,
    isShared: 0,
  });

  const token = useSelector(selectToken);

  const fetchPost = (slug) => {
    setIsLoading(true);
    fetch("http://localhost:8080/pub/posts/slug/"+slug, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`,
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
          setPost(fetchedPost);
          setIsLoading(false);
          fetchMyActivity(res.data.postID);
        }
        if (res.statusCode !== 200) {
          toast.error(`Error: ${res.message}`);
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };
  const fetchMyActivity = (postID) => {
    setIsLoading(true);
    fetch("http://localhost:8080/pub/posts/"+postID+"/activities", {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          setMyActivity({
            isLiked: res.data.isLiked,
            isShared: res.data.isShared,
          })
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
  const updateMyActivity = () => {
    const dataToPost = {
      isLiked: myActivity.isLiked,
      isShared: myActivity.isShared,
    };
    fetch("http://localhost:8080/pub/posts/"+post.postID+"/activities", {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(dataToPost),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode !== 200) {
          toast.error(`Error: ${res.message}`);
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };

  const changeLike = () => {
    setMyActivity({ ...myActivity, isLiked: myActivity.isLiked === 0 ? 1 : 0 });
  }
  const changeShare = () => {
    setMyActivity({ ...myActivity, isShared: myActivity.isShared === 0 ? 1 : 0 });
  }
  useEffect(() => {
    if (!isLoading) {
      updateMyActivity();
    }
  },[myActivity])

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
      <PostDetail post={post} myActivity={myActivity} changeLike={changeLike} changeShare={changeShare} />
    </div>
    
  );
}
