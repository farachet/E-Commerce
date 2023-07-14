import React, { useState, useEffect } from "react";
import axios from "axios";

const CategoryComponent = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [editCategory, setEditCategory] = useState("");

  useEffect(() => {
    // Fetch all categories
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/admin/all");
      setCategories(response.data);
      console.log(response);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  const getOneCategory = async (Id) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/admin/One/${Id}`
      );
      setSelectedCategory(response.data);
    } catch (error) {
      console.error("Failed to fetch category:", error);
    }
  };

  const addCategory = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/admin/addcategory",
        {
          categoryname: newCategory,
        }
      );
      const newCategoryData = response.data;
      setCategories([...categories, newCategoryData]);
      setNewCategory("");
    } catch (error) {
      console.error("Failed to add category:", error);
    }
  };

  const updateCategory = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/admin/update/${selectedCategory.id}`,
        { categoryname: editCategory }
      );
      setSelectedCategory({ ...selectedCategory, categoryname: editCategory });
      setEditCategory("");
    } catch (error) {
      console.error("Failed to update category:", error);
    }
  };

  const deleteCategory = async (categoryId) => {
    try {
      await axios.delete(
        `http://localhost:8080/api/admin/delete/${categoryId}`
      );
      setCategories(
        categories.filter((category) => category.id !== categoryId)
      );
      setSelectedCategory(null);
    } catch (error) {
      console.error("Failed to delete category:", error);
    }
  };

  return (
    <div>
      <div>
        {selectedCategory ? (
          <div>
            <h3>{selectedCategory.categoryname}</h3>
            <button onClick={() => deleteCategory(selectedCategory.id)}>
              Delete
            </button>
            <br />
            <input
              type="text"
              value={editCategory}
              onChange={(e) => setEditCategory(e.target.value)}
            />
            <button onClick={updateCategory}>Update</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CategoryComponent;
