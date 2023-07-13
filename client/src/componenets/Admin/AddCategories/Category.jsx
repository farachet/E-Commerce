import React, { useEffect, useState } from "react";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {
    getCategory(1);
  }, []);

  // get one category
  const getCategory = (id) => {
    axios
      .get(`/api/categories/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //  add category
  const addCategory = () => {
    axios
      .post("/api/categories", { categoryname: newCategory })
      .then((response) => {
        console.log(response.data);
        setNewCategory("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // update category
  const updateCategory = (id, updatedCategory) => {
    axios
      .put(`/api/categories/${id}`, { categoryname: updatedCategory })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // delete category
  const deleteCategory = (id) => {
    axios
      .delete(`/api/categories/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Categories</h1>

      {/* Display all categories */}
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.categoryname}</li>
        ))}
      </ul>

      {/* Get a single category */}
      <button onClick={() => getCategory(1)}>Get Category</button>

      {/* Add a new category */}
      <input
        type="text"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      />
      <button onClick={addCategory}>Add Category</button>

      {/* Update a category */}
      <button onClick={() => updateCategory(1, "Updated Category")}>
        Update Category
      </button>

      {/* Delete a category */}
      <button onClick={() => deleteCategory(1)}>Delete Category</button>
    </div>
  );
};

export default Categories;
