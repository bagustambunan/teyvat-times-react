import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';
import CategoryRow from "./CategoryRow";
import { selectToken } from "../../../store/tokenSlice";

export default function CategoryTable() {
  const [categories, setCategories] = useState([]);

  const token = useSelector(selectToken);
  const fetchCategories = () => {
    fetch("http://localhost:8080/pub/categories", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
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
    <table className="table table-striped w-100 my-3">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category, index) => (
          <CategoryRow key={category.postCategoryID} category={category} i={index + 1} />
        ))}
      </tbody>
    </table>
  );
}
