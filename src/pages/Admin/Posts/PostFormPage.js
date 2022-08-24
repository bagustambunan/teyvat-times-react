import React, { useState } from 'react'
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
    tier: '',
    category: '',
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
    if (form.tier === '') {
      toast.warn('Field "tier" cannot be empty');
      return false;
    }
    if (form.category === '') {
      toast.warn('Field "category" cannot be empty');
      return false;
    }
    return true;
  }

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

  const handleSubmit = () => {
    if (isFormValid()) {
      console.log(form);
      savePost();
    }
  };

  return (
    <>
      <TitleSection title={`${mode} Post`} icon="bi-newspaper"/>
      <PostForm form={form} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </>
  )
}
