import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
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
  {
    field: "Owner",
    headerName: "Owner",
    type: "number",
    editable: true,
    width: 160,
  },
];

export default function DataGridDemo() {
  const [rows, setRows] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const params = useParams();

  // Upload Image
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(""); // Store the image URL

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
      setImageUrl(imageUrl); // Store the image URL in state
    } catch (error) {
      console.error("Failed to upload image:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (imageUrl) {
      // If imageUrl is available, update the rows with the new image URL
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
        "http://localhost:3000/api/admin/allcategories"
      );
      setCategories(response.data);

      // Convert filtered data to rows for DataGrid
      const newRows = response.data.map((category) => ({
        id: category.id,
        Collection: { name: category.categoryname, image: category.image },
        Stock: category.Stock,
        Owner: category.Owner,
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
        "http://localhost:3000/api/admin/addcategory",
        {
          categoryname: newCategory,
          image: imageUrl, // Include the image URL in the request
        }
      );
      const newCategoryData = response.data;
      const newData = {
        id: newCategoryData.id,
        Collection: {
          name: newCategoryData.categoryname,
          image: newCategoryData.image,
        },
        Stock: newCategoryData.Stock,
        Owner: newCategoryData.Owner,
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
      await axios.delete(`http://localhost:3000/api/admin/delete/${id}`);
      const updatedRows = rows.filter((row) => row.id !== id);
      setRows(updatedRows);
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

              <Button variant="outlined" onClick={addCategory}>
                Add
              </Button>
              <div>
                <input
                  id="image"
                  type="file"
                  className="form-control form-control-lg"
                  placeholder="image"
                  required
                  minLength="3"
                  defaultValue={file}
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <br />
                <button
                  type="button"
                  onClick={() => {
                    uploadImage();
                  }}
                >
                  Upload
                </button>
              </div>
            </div>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex", // Set display to flex
            flexDirection: "row", // Set flexDirection to row
            justifyContent: "space-around", // Add space between the boxes
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
