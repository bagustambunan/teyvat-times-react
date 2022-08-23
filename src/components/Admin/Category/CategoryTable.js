import React, { useEffect, useState } from "react";
import CategoryRow from "./CategoryRow";

export default function CategoryTable() {
  const [categories, setCategories] = useState([]);

  const getToken = () => localStorage.getItem("token");
  const fetchPosts = () => {
    fetch("http://localhost:8080/pub/categories", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.error) {
          setCategories(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchPosts();
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
