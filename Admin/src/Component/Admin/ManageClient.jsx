

import  React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState,useEffect } from 'react';
import axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import "./ManageSeller.css"
  

 


const ManageClient = () => {
  const columnsClient = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 150},
    { field: 'lastName', headerName: 'Last name', width: 150 },
    {
      field: 'email',
      headerName: 'email',
      width: 250,
    },
    {
      field: 'delete',
      headerName: 'actions',
      width: 75,
      sortable: false,
      renderCell: (params) => (
        <Button onClick={() => deleteData  (params.row.id)} variant="outlined" color="error">
        Delete
       </Button>
      ),
    },
   
  ];
  const [rows, setclientRows] = useState([]);
  
  const deleteData = async (id) => {
    try {
     const response =  await axios.delete(`http://localhost:3001/api/admin/deleteClient/${id}`); 
     console.log(id)
  
       if(response.status === 200){
        window.location.reload();
       }
      console.log('load data')
    } catch (error) {
      console.error(error);
    }
  }
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/admin/AllClients'); 
         console.log(response.data)
       
        const mappedclientRows = response.data.map((row, index) => ({
          ...row,
          id: response.data[index].id,
        }));
        setclientRows(mappedclientRows);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [])
 
  
  
  
   
  return (
    <div>
    <div class="table-header">List of Clients</div>
    <div class="table-container">
      <DataGrid
        rows={rows}
        columns={columnsClient}
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

export default ManageClient
