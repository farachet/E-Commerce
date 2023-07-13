import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  ListSubheader,
} from "@mui/material";
import { css } from "../Admin/CssAdmin.css";

function AppAdmin() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterBy, setFilterBy] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  // Fetch Categories
  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/admin/all");
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch Products
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/admin/allProduct"
      );
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Filter Products by Category
  const filterProductsByCategory = (categoryId) => {
    if (categoryId === "all") {
      setFilteredProducts(products);
      setSelectedCategory("all");
    } else {
      const filtered = products.filter(
        (product) => product.categoryId === categoryId
      );
      setFilteredProducts(filtered);
      setSelectedCategory(categoryId);
    }
  };

  // Filter Products by Days
  const filterProductsByDays = (days) => {
    if (days === "week") {
      setFilterBy("week");
    } else if (days === "month") {
      setFilterBy("month");
    } else {
      setFilterBy("");
      setFilteredProducts(products);
    }
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 150, marginTop: 10, marginLeft: 100 }}>
        <InputLabel htmlFor="grouped-native-select">Filter By Days</InputLabel>
        <Select
          native
          value={filterBy}
          onChange={(e) => filterProductsByDays(e.target.value)}
          id="grouped-native-select"
          label="Grouping"
        >
          <option aria-label="None" value="" />
          <option value="week">Week</option>
          <option value="month">Month</option>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 170, marginTop: 10, marginRight: 20 }}>
        <InputLabel htmlFor="grouped-select">All Categories</InputLabel>
        <Select
          value={selectedCategory}
          onChange={(e) => filterProductsByCategory(e.target.value)}
          defaultValue=""
          id="grouped-select"
          label="Grouping"
        >
          <MenuItem value="all">All</MenuItem>
          {categories &&
            categories.map((category) => (
              <React.Fragment key={category.id}>
                <ListSubheader>{category.categoryname}</ListSubheader>
                {category.products &&
                  category.products.map((product) => (
                    <MenuItem key={product.id} value={product.id}>
                      {product.name}
                    </MenuItem>
                  ))}
              </React.Fragment>
            ))}
        </Select>
      </FormControl>

      {/* <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: 10 }}
        onClick={() => {
          filterProductsByDays("");
          filterProductsByCategory("all");
        }}
      >
        Reset
      </Button> */}
    </div>
  );
}

export default AppAdmin;
