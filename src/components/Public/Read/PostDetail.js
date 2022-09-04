import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import TierBox from '../../TierBox';
import CategoryBox from '../../CategoryBox';
import Like from './Like';
import Share from './Share';
import { selectToken } from '../../../store/tokenSlice';
import { apiUrl } from '../../../helpers/values';

export default function PostDetail({ post, setPost }) {
  const token = useSelector(selectToken);
  const [isLoading, setIsLoading] = useState(true);
  const [myActivity, setMyActivity] = useState({
    isLiked: 0,
    isShared: 0,
  });

  const fetchMyActivity = (postID) => {
    setIsLoading(true);
    fetch(`${apiUrl}/pub/posts/${postID}/activities`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          setMyActivity({
            isLiked: res.data.isLiked,
            isShared: res.data.isShared,
          });
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
    fetch(`${apiUrl}/pub/posts/${post.postID}/activities`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
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
    const updatedPost = post;
    updatedPost.totalLike += myActivity.isLiked === 0 ? 1 : -1;
    setPost(updatedPost);
  };

  const changeShare = () => {
    setMyActivity({ ...myActivity, isShared: myActivity.isShared === 0 ? 1 : 1 });
    const updatedPost = post;
    updatedPost.totalShare += myActivity.isShared === 0 ? 1 : 0;
    setPost(updatedPost);
  };

  useEffect(() => {
    if (!isLoading) {
      updateMyActivity();
    }
  }, [myActivity]);

  useEffect(() => {
    fetchMyActivity(post.postID);
  }, []);

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <section>
      <div className="mb-3">
        <TierBox tier={post.postTier} />
        <CategoryBox category={post.postCategory} />
      </div>

      <div>
        <h2>{post.title}</h2>
        <p className="fst-italic text-muted small">
          Written by
          {' '}
          {post.createdBy.name}
          {' '}
          at
          {' '}
          {post.getCreatedAt()}
        </p>
      </div>

      <div className="read-img mt-1 mb-3">
        <img src={post.imgContent.url} className="img-fluid" alt="..." />
      </div>

      <div className="my-2">
        <p>{post.content}</p>
      </div>

      <div className="d-flex gap-3">
        <Like
          isLiked={myActivity.isLiked}
          changeLike={changeLike}
          totalLike={post.totalLike}
        />
        <Share
          isShared={myActivity.isShared}
          changeShare={changeShare}
          totalShare={post.totalShare}
        />
      </div>
    </section>
  );
}
