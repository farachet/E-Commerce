import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useState,useEffect } from 'react';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import './ManageSeller.css'


const ManageSellers = () => {
  const columnsSeller = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'email',
      headerName: 'email',
      width: 250,
    },
    {
    field: 'delete',
    headerName: 'Actions',
    width: 58,
    sortable: false,
    renderCell: (params) => (
     <div onClick={() => deleteData  (params.row.id)}> <DeleteIcon /></div>
    ),
    }
];

const deleteData = async (id) => {
  try {
   const response =  await axios.delete(`http://localhost:3000/api/admin/deleteSeller/${id}`); 
   console.log(id)

     if(response.status === 200){
      window.location.reload();
     }
    console.log('load data')
  } catch (error) {
    console.error(error);
  }
}
    const [sellerRows,setsellerRows]=useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3000/api/admin/AllSellers'); 
             console.log(response.data)
             const mappedSellerRows = response.data.map((row, index) => ({
                ...row,
                id: response.data[index].id,
              }));
              setsellerRows(mappedSellerRows);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
      }, [])
 
  return (
    <div>
  <div class="table-header">List of Sellers</div>
  <div class="table-container">
    <DataGrid
      rows={sellerRows}
      columns={columnsSeller}
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

export default ManageSellers
