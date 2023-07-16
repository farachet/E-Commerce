import React, { useEffect, useState } from "react";
import AddProducts from "./AddProduct";
import { Box, Button , Avatar, appBarClasses } from "@mui/material";
import Products from "./Product.js";
import UpdateProducts from "./UpdateProducts";
import Profil from "./Profil";
import axios from "axios";
import Navbar from "../navbar/navbar"

const Seller = ({dataa}) => {
    const [data, setData] = useState([]);
    const [refrech, setRefrech] = useState(false);
    const [show , setShow] = useState("AddProducts")
    const [Edit , setEdit] = useState({})


 

  


      const handleEdit = (obj) => {
         setEdit(obj)
      }


      const AddNewProduct = (productname , price , reference , image , status , approved , sellerId) => {
        const newProduct = {
          productname: productname,
          price: price,
          reference: reference,
          image: image,
          status: status,
          approved : approved ,
          sellerId : sellerId
        
        };
        
        axios.post("http://localhost:8080/api/product/AddProduct" , newProduct)
        .then((res) => {
          console.log(res.data)
          setData([res.data])
          setRefrech(!refrech)
        })
        .catch((err) => {
          console.log(err)
        })

      }
      const deleteOneproduct = (id) => {
    axios.delete(`http://localhost:8080/api/product/deleteByid/${id}`)
     .then(() => {
      setRefrech(!refrech)
     })
     .catch((err) => {
      console.log(err)
     })

      }
      const UpdateProduct = (id , productname , price , reference ) => {
       axios.put(`http://localhost:8080/api/product/edit/${id}` , {

       productname: productname,
       price: price,
       reference: reference,
      //  image: image,
      //  status: status,

       })
       .then(() => {
        setRefrech(!refrech)
       })

      }



  
      
  return (

   <Box>
   <Profil/>
  
     <Box sx={{ display: "flex"}}>

     <Box  >

     <AddProducts AddNewProduct={AddNewProduct}  />
     </Box>

     <Box style={{display : show && "none"}} >
      <UpdateProducts setShow={setShow} UpdateProduct={UpdateProduct}  Edit={Edit} />
      </Box>

      <Products dataa={dataa}  deleteOneproduct={deleteOneproduct}  setShow={setShow}  handleEdit={handleEdit}/>
    </Box>
    </Box>
  );
};

export default Seller;
