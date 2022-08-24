import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import PostForm from '../../../components/Admin/Post/PostForm'
import TitleSection from '../../../components/Admin/TitleSection'

export default function PostFormPage() {
  const [mode, setMode] = useState('New');
  const [form, setForm] = useState({
    postID: '',
    title: '',
    content: '',
    summary: '',
    tier: '0',
    category: '0',
  });

  const getToken = () => localStorage.getItem("token");
  const handleChange = (e) => {
    const { name } = e.currentTarget;
    const { value } = e.currentTarget;
    setForm({ ...form, [name]: value });
  };

  const isFormValid = () => {
    if (form.title === '') {
      toast.warn('Field "title" cannot be empty');
      return false;
    }
    if (form.content === '') {
      toast.warn('Field "content" cannot be empty');
      return false;
    }
    if (form.summary === '') {
      toast.warn('Field "summary" cannot be empty');
      return false;
    }
    if (form.tier === '0') {
      toast.warn('Field "tier" cannot be empty');
      return false;
    }
    if (form.category === '0') {
      toast.warn('Field "category" cannot be empty');
      return false;
    }
    return true;
  }

  const fetchPost = (postID) => {
    fetch("http://localhost:8080/posts/"+postID, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${getToken()}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          setForm({
            postID: res.data.postID,
            title: res.data.title,
            content: res.data.content,
            summary: res.data.summary,
            tier: res.data.postTier.postTierID,
            category: res.data.postCategory.postCategoryID,
          });
        }
        if (res.statusCode !== 200) {
          toast.error(`Error: ${res.message}`);
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };

  const savePost = () => {
    const dataToPost = {
      postTierID: parseInt(form.tier, 10),
      postCategoryID: parseInt(form.category, 10),
      title: form.title,
      content: form.content,
      summary: form.summary,
    };

    fetch("http://localhost:8080/posts/", {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${getToken()}`,
      },
      body: JSON.stringify(dataToPost),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 201) {
          alert('Post added successfully');
          window.location.href = "/admin/posts";
        }
        if (res.statusCode !== 201) {
          toast.error(`Error: ${res.message}`);
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };

  const updatePost = () => {
    const dataToPost = {
      postTierID: parseInt(form.tier, 10),
      postCategoryID: parseInt(form.category, 10),
      title: form.title,
      content: form.content,
      summary: form.summary,
    };

    fetch("http://localhost:8080/posts/"+form.postID, {
      method: "PUT",
      headers: {
        'Authorization': `Bearer ${getToken()}`,
      },
      body: JSON.stringify(dataToPost),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          alert('Post edited successfully');
          window.location.href = "/admin/posts";
        }
        if (res.statusCode !== 200) {
          toast.error(`Error: ${res.message}`);
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      if (mode === 'New') {
        savePost();
      }
      if (mode === 'Edit') {
        updatePost();
      }
    }
  };

  const params = useParams();
  useEffect(() => {
    if (params.postID !== undefined) {
      fetchPost(params.postID);
      setMode('Edit')
    }
  },[]);

  return (
    <>
      <TitleSection title={`${mode} Post`} icon="bi-newspaper"/>
      <PostForm form={form} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </>
  )
}
