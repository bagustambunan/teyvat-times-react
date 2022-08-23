import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import CategoryForm from '../../../components/Admin/Category/CategoryForm'
import TitleSection from '../../../components/Admin/TitleSection'

export default function CategoryFormPage() {
  const [mode, setMode] = useState('New');
  const [form, setForm] = useState({
    postCategoryID: '',
    name: '',
    color: '',
  });

  const handleChange = (e) => {
    const { name } = e.currentTarget;
    const { value } = e.currentTarget;
    setForm({ ...form, [name]: value });
  };

  const getToken = () => localStorage.getItem('token');

  // BEST EXAMPLE UNTUK FETCH AND HANDLE
  const fetchCategory = (categoryID) => {
    fetch("http://localhost:8080/categories/"+categoryID, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${getToken()}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          console.log(res.data);
          setForm({
            postCategoryID: res.data.postCategoryID,
            name: res.data.name,
            color: res.data.color,
          });
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };

  const saveCategory = () => {
    const dataToPost = {
      name: form.name,
      color: form.color,
    };

    fetch("http://localhost:8080/categories/", {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${getToken()}`,
      },
      body: JSON.stringify(dataToPost),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 201) {
          alert('Category added successfully');
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };

  const updateCategory = () => {
    const dataToPost = {
      name: form.name,
      color: form.color,
    };

    fetch("http://localhost:8080/categories/"+form.postCategoryID, {
      method: "PATCH",
      headers: {
        'Authorization': `Bearer ${getToken()}`,
      },
      body: JSON.stringify(dataToPost),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 201) {
          alert('Category edited successfully');
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };

  const handleSubmit = () => {
    console.log(form);
    if (mode === 'New') {
      saveCategory();
    }
    if (mode === 'Edit') {
      updateCategory();
    }
  };

  const params = useParams();
  useEffect(() => {
    if (params.categoryID !== undefined) {
      fetchCategory(params.categoryID);
      setMode('Edit')
    }
  },[]);


  return (
    <>
      <TitleSection title={`${mode} Category`} icon="bi-newspaper"/>
      <CategoryForm form={form} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </>
  )
}
