import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./CssAdmin.css";
import Typography from "@mui/material/Typography";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "Collection",
    headerName: "Collection",
    width: 150,
    renderCell: (params) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        {
          <img
            src={params.value.image}
            alt="Collection"
            style={{ width: 30, height: 30, marginRight: 10 }}
          />
        }
        {params.value.name}
      </div>
    ),
  },
  {
    field: "Stock",
    headerName: "Stock",
    type: "number",
    width: 150,
    editable: true,
  },
];

export default function DataGridDemo() {
  const [rows, setRows] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const [stock, setStock] = useState(0);
  // Upload Image
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const uploadImage = async () => {
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", "commerce");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dnzfcueon/upload",
        form
      );
      const imageUrl = response.data.secure_url;
      setImageUrl(imageUrl);
    } catch (error) {
      console.error("Failed to upload image:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
    getProducts();
  }, []);

  useEffect(() => {
    if (imageUrl) {
      const updatedRows = rows.map((row) => ({
        ...row,
        Collection: { ...row.Collection, image: imageUrl },
      }));
      setRows(updatedRows);
    }
  }, [imageUrl]);

  // Fetch Categories
  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/admin/allcategories"
      );
      const categoriesData = response.data;

      setCategories(categoriesData);

      const newRows = categoriesData.map((category) => ({
        id: category.id,
        Collection: { name: category.categoryname, image: category.image },
        Stock: category.Stock,
      }));
      setRows(newRows);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  // Add Categories
  const addCategory = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/admin/addcategory",
        {
          categoryname: newCategory,
          image: imageUrl,
        }
      );
      const newCategoryData = response.data;
      const newData = {
        id: newCategoryData.id,
        Collection: {
          name: newCategoryData.categoryname,
          image: newCategoryData.image,
        },
        Stock: stock,
      };
      setRows((prevRows) => [...prevRows, newData]);
      setNewCategory("");
    } catch (error) {
      console.error("Failed to add category:", error);
    }
  };

  // Delete categories
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/admin/delete/${id}`);
      const updatedRows = rows.filter((row) => row.id !== id);
      setRows(updatedRows);
    } catch (error) {
      console.error("Failed to delete category:", error);
    }
  };

  // get Products stock
  const getProducts = async (id) => {
    try {
      const categoryId = id;
      const response = await axios.get(
        `http://localhost:3001/api/admin/allPro/${categoryId}`
      );
      console.log("hello", response.data.length);
      setStock(response.data.length);
    } catch (error) {
      console.error("Failed to delete category:", error);
    }
  };

  return (
    <div>
      <Box sx={{ height: 400, width: "50%", marginTop: 5, marginLeft: 40 }}>
        <DataGrid
          className="custom-datagrid"
          rows={rows}
          columns={[
            ...columns,
            {
              field: "delete",
              headerName: "Delete",
              width: 100,
              renderCell: (params) => (
                <Button
                  variant="outlined"
                  color="secondary"
                  size="small"
                  onClick={() => handleDelete(params.row.id)}
                >
                  Delete
                </Button>
              ),
            },
          ]}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>

      <footer>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <h2>Add New Category</h2>
              <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
              <div>
                <input
                  type="file"
                  defaultValue={file}
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <br />
                <Button
                  variant="outlined"
                  onClick={() => {
                    uploadImage();
                    addCategory();
                  }}
                >
                  Add
                </Button>
              </div>
            </div>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              width: 300,
              height: 300,
              backgroundColor: "rgba(0, 0, 0, 0)",
              "&:hover": {
                backgroundColor: "primary.main",
              },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <img src="path_to_your_logo_image" alt="Logo" />
            <Typography variant="h6" color="text.primary">
              Your Text Here
            </Typography>
          </Box>
          <Box
            sx={{
              width: 300,
              height: 300,
              backgroundColor: "rgba(0, 0, 0, 0)",
              "&:hover": {
                backgroundColor: "primary.main",
              },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" className="about">
              About
            </Typography>
            <Typography variant="h6" className="about">
              Product <br />
              Resource <br />
              Term & condition <br />
              FAQ
            </Typography>
          </Box>
          <Box
            sx={{
              width: 300,
              height: 300,
              backgroundColor: "rgba(0, 0, 0, 0)",
              "&:hover": {
                backgroundColor: "primary.main",
              },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" className="about">
              Company
            </Typography>
            <Typography variant="h6" className="about">
              Our Team <br /> Partner With Us <br />
              Privacy & Policy <br />
              Features
            </Typography>
          </Box>
          <Box
            sx={{
              width: 300,
              height: 300,
              backgroundColor: "rgba(0, 0, 0, 0)",
              "&:hover": {
                backgroundColor: "primary.main",
              },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" className="about">
              Contact
            </Typography>
            <Typography variant="h6" className="about">
              Tel : 90 117 343 <br /> Email: Farachet@gmail.com
            </Typography>
          </Box>
        </Box>
      </footer>
    </div>
  );
}
