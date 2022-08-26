import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import CategoryForm from '../../../components/Admin/Category/CategoryForm';
import TitleSection from '../../../components/Admin/TitleSection';
import { selectToken } from '../../../store/tokenSlice';

export default function CategoryFormPage() {
  const navigate = useNavigate();
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

  const token = useSelector(selectToken);

  // BEST EXAMPLE UNTUK FETCH AND HANDLE
  const fetchCategory = (categoryID) => {
    fetch(`http://localhost:8080/categories/${categoryID}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          setForm({
            postCategoryID: res.data.postCategoryID,
            name: res.data.name,
            color: res.data.color,
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

  const saveCategory = () => {
    const dataToPost = {
      name: form.name,
      color: form.color,
    };

    fetch('http://localhost:8080/categories/', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataToPost),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 201) {
          toast.success('Category created successfully');
          navigate('/admin/categories');
        }
        if (res.statusCode !== 201) {
          toast.error(`Error: ${res.message}`);
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

    fetch(`http://localhost:8080/categories/${form.postCategoryID}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataToPost),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          toast.success('Category edited successfully');
          navigate('/admin/categories');
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
      setMode('Edit');
    }
  }, []);

  return (
    <>
      <TitleSection title={`${mode} Category`} icon="bi-newspaper" />
      <CategoryForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} />
    </>
  );
}
