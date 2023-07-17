import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Button } from "@mui/material";
import "./ManageSeller.css";

const RequestProd = () => {
  const [rows, setRows] = useState([]);
  const [isEditOpen, setEditOpen] = useState(false);
  const [selectedProduct, setselectedProduct] = useState();
  const [refrech, setrefrech] = useState(false);

  const handleUpdate = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/admin/updateProds/${id}`
      );
      if (response.status === 200) {
        setrefrech(!refrech);
      }
    } catch (error) {
      console.log(error);
    }
  };

 
 
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
            field: 'approved',
            headerName: 'approved',
            width: 130,
          },  
          {
            field: 'edit',
            headerName: 'Actions',
            width: 75,
            sortable: false,
            renderCell: (params) => (
             
              
              <Button  onClick={()=>handleUpdate(params.row.id)} variant="contained" color="success">
            Accept
          </Button>
            ),
            },
        {
          field: 'delete',
          headerName: '',
          width: 75,
          sortable: false,
          renderCell: (params) => (
           
          <Button onClick={() => deleteData  (params.row.id)} variant="outlined" color="error">
          Delete
         </Button>
          ),
          }
         
      ];
      useEffect (()=>{
  const fetchProds = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/admin/allprods");
console.log (response.data)
      const convertedRows = response.data.map((ele) => ({
        id: ele.id,
        productname: ele.productname,
        price: ele.price,
        reference: ele.reference,
        
        approved: ele.approved,
      }));
      console.log("converted",convertedRows)
      setRows(convertedRows);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };
  fetchProds();
  }, [refrech])
  const deleteData = async (id) => {
    try {
     const response =  await axios.delete(`http://localhost:3001/api/admin/deleteproduct/${id}`); 
     console.log(id)
  
       if(response.status === 200){
        window.location.reload();
      }
      console.log("load data");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div >
    <div class="table-header">List of Requests</div>
    <div class="table-container">
      <DataGrid
        rows={rows}
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

export default RequestProd
