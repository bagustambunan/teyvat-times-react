import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';

export default function CategorySelect({
  showDefault = true,
  value,
  handleChange,
}) {
  const [categories, setCategories] = useState([]);

  const getToken = () => localStorage.getItem("token");
  const fetchCategories = () => {
    fetch("http://localhost:8080/pub/categories", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          setCategories(res.data);
        }
        if (res.statusCode !== 200) {
          toast.error(`Error: ${res.message}`);
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <select
      className="form-select"
      name="category"
      value={value}
      onChange={(e) => { handleChange(e); }}
      required
    >
      {showDefault ? <option value="0">All categories</option> : <option value="0">-- Select category --</option>}
      {categories.map((category) => (
        <option key={category.postCategoryID} value={category.postCategoryID}>
          {category.name}
        </option>
      ))}
    </select>
  );
}
