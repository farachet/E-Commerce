import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "Collection",
    headerName: "Collection",
    width: 150,
    renderCell: (params) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={params.value.image}
          alt="Collection"
          style={{ width: 30, height: 30, marginRight: 10 }}
        />
        {params.value.name}
      </div>
    ),
  },
  {
    field: "volume",
    headerName: "Volume",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "SaleDay",
    headerName: "SaleDay",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "floor price",
    headerName: "Floor price",
    type: "number",
    editable: true,
    width: 160,
  },
  {
    field: "Owner",
    headerName: "Owner",
    type: "number",
    editable: true,
    width: 160,
  },
  {
    field: "Item",
    headerName: "Item",
    type: "number",
    editable: true,
    width: 160,
  },
];

export default function DataGridDemo() {
  const [rows, setRows] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/admin/all");
      setCategories(response.data);
      // Convert categories to rows for DataGrid
      const convertedRows = response.data.map((category) => ({
        id: category.id,
        Collection: { name: category.categoryname },
        volume: category.volume,
        SaleDay: category.SaleDay,
        "floor price": category.floor_price,
        Owner: category.Owner,
        Item: category.Item,
      }));
      setRows(convertedRows);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
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
      const newData = {
        id: newCategoryData.id,
        Collection: { name: newCategoryData.categoryname },
        volume: newCategoryData.volume,
        SaleDay: newCategoryData.SaleDay,
        "floor price": newCategoryData.floor_price,
        Owner: newCategoryData.Owner,
        Item: newCategoryData.Item,
      };
      setRows((prevRows) => [...prevRows, newData]);
      setNewCategory("");
    } catch (error) {
      console.error("Failed to add category:", error);
    }
  };

  return (
    <div>
      <Box sx={{ height: 400, width: "100%", marginTop: 5 }}>
        <DataGrid
          className="custom-datagrid"
          rows={rows}
          columns={columns}
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
          <div>
            <h2>Add New Category</h2>
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <button onClick={addCategory}>Add</button>
          </div>
        </Box>
      </footer>
    </div>
  );
}
