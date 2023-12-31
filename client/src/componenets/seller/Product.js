import React, { useEffect, useState } from "react";
import { Box, Button,  Avatar , IconButton , Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete'
import "./style.css";


const Products = ({data , deleteOneproduct , setShow , handleEdit}) => {
  console.log("dhia",data)
  return (
    <Box className="parent" sx={{
      display :"flex",
      flexWrap:"wrap  ",
      gap:"121px"
    }} >
      {data.map((el ) => (
    <Box key={el.id}  sx={{ backgroundColor:"rgba(255, 255, 255, 0.1)",
    width:"284px",
    height:"434px",
    padding:"10px",display:'flex',
    flexDirection:"column",
    alignItems:"center",
    gap:"16px" }}>

    <Avatar 
      src={el.image}
      alt="image"
      sx={{width:"246px",height:"277px",borderRadius:"8px", marginTop:"10px"}}
      />
      <Box sx={{
        display:'flex',
        justifyContent:"space-between",
        color:"rgba(255, 255, 255, 0.6)",
        width:"246px",
        
      }}>
         <Typography
          variant='subtitle2'
          sx={{
            fontSize:"18px"
          }}>
            Secret Rare
          </Typography> 
          <Typography>
            {el.reference}
          </Typography>
      </Box>
      <Box sx={{
        display:"flex",
        gap:"10px",
        width:"246px",
        color:"white"
        
      }}>
        <Typography 
        variant='h4' 
        sx={{
          fontSize:"18px",
          fontWeight:"bold"
        }}>
          {el.productname}
        </Typography>
        <Typography >
            {el.price}
        </Typography>
        <Typography>

        </Typography>
      

          <IconButton aria-label="edit" >
        <EditIcon  onClick={() => {
          
          setShow("")
          handleEdit(el)
          }
          
          } />
      </IconButton>
      <IconButton aria-label="delete" >
        <DeleteIcon  onClick={() => {deleteOneproduct(el.id)}}/>
      </IconButton>
        </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Products;
