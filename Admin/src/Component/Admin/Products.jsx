import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useState,useEffect } from 'react';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import './ManageSeller.css'

const Products = () => {
 

const columnsProducts = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'productname', headerName: 'productname', width: 130 },
  { field: 'price', headerName: 'price', width: 130 },
  {
    field: 'reference',
    headerName: 'reference',
    type: 'text',
    width: 130,
  },
  {
    field: 'delete',
    headerName: 'Actions',
    width: 80,
    sortable: false,
    renderCell: (params) => (
     <Button onClick={() => deleteData  (params.row.id)} variant="outlined" color="error">
          Delete
         </Button>
    ),
    }
   
];
const deleteData = async (id) => {
  try {
   const response =  await axios.delete(`http://localhost:3001/api/admin/deleteproduct/${id}`); 
   console.log(id)

     if(response.status === 200){
      window.location.reload();
     }
    console.log('load data')
  } catch (error) {
    console.error(error);
  }
}
const [productsRows,setproductsRows]=useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/admin/allProduct'); 
         console.log(response.data)
       
        const mappedproductsrows = response.data.map((row, index) => ({
          ...row,
          id: response.data[index].id,
        }));
        setproductsRows(mappedproductsrows);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [])
  return (
    <div>
    <div class="table-header">List of Products</div>
    <div class="table-container">
      <DataGrid
        rows={productsRows}
        columns={columnsProducts}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
      />
    </div>
  </div>
  
  )
}

export default Products
