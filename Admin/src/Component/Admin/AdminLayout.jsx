import React, { useEffect, useState } from "react";

function AppAdmin() {
  //  const [categories, setCategories] = useState([]);
  // const [products, setProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState("");
  // const [selectedCategory, setSelectedCategory] = useState("");

  // useEffect(() => {
  //   fetchCategories();
  //   fetchProducts();
  // }, []);

  // // Fetch Categories
  // const fetchCategories = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8080/api/admin/all");
  //     const data = await response.json();
  //     setCategories(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // // Fetch Products
  // const fetchProducts = async () => {
  //   try {
  //     const response = await fetch(
  //       "http://localhost:8080/api/admin/allProduct"
  //     );
  //     const data = await response.json();
  //     setProducts(data);
  //     setFilteredProducts(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // // Filter Products by Category
  // const filterProductsByCategory = (categoryId) => {
  //   if (categoryId === "all") {
  //     setFilteredProducts(products);
  //     setSelectedCategory("all");
  //   } else {
  //     const filtered = products.filter(
  //       (product) => product.categoryId === categoryId
  //     );
  //     setFilteredProducts(filtered);
  //     setSelectedCategory(categoryId);
  //   }
  // };

  // // Filter Products by Days
  // const filterProductsByDays = (days) => {
  //   if (days === "week") {
  //     setFilterBy("week");
  //   } else if (days === "month") {
  //     setFilterBy("month");
  //   } else {
  //     setFilterBy("");
  //     setFilteredProducts(products);
  //   }
  // };

  return (
    <div>
      <button>Client</button>
      <button>Seller</button>

      <h3>Filter By Days:</h3>
      <select
        value={filter}
        // onChange={(e) => filterProductsByDays(e.target.value)}
      >
        <option value="">All</option>
        <option value="week">Week</option>
        <option value="month">Month</option>
      </select>

      {/* <h3>All Categories:</h3>
      {categories.length > 0 ? (
        <select
          value={selectedCategory}
          onChange={(e) => filterProductsByCategory(e.target.value)}
        >
          <option value="all">All</option>
          {categories.map((category) => (
            <optgroup key={category.id} label={category.categoryname}>
              {category.products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      ) : (
        <p>Loading categories...</p>
      )} */}
    </div>
  );
}

export default AppAdmin;
