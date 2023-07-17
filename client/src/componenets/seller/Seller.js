import React, { useContext, useState,useEffect } from "react";
import AddProducts from "./AddProduct";
import { Box } from "@mui/material";
import Products from "./Product.js";
import UpdateProducts from "./UpdateProducts";
import Profil from "./Profil";
import axios from "axios";

import {ecommerceContext} from "../../ecommerceContext/e-commerceContext"
const Seller = () => {
  
    const {currentUser}=useContext(ecommerceContext)
    const [refrech, setRefrech] = useState(false);
    const [show , setShow] = useState("AddProducts")
    const [Edit , setEdit] = useState({})
    const [data,setData]=useState([])
console.log("aaaaaaaaa",currentUser.id)
  
useEffect(()=>{
  fetch()
},[refrech])
const fetch = () => {

const sellerId = currentUser.id
console.log("haw lenééééééé a",sellerId)
  axios
    .get(`http://localhost:3001/api/product/getAll/${sellerId}`)
    .then((res) => {
      console.log(res.data)
      setData(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}

console.log("datata",data)
      const handleEdit = (obj) => {
         setEdit(obj)
      }
      

      const AddNewProduct = (productname , price , reference , image , Category ) => {
        console.log("categorirrrrrr",Category)
        const newProduct = {
          productname: productname,
          price: price,
          reference: reference,
          image: image,
          
          category : Category ,
          sellerId : currentUser.id,
        
        
        };
       
        
        axios.post("http://localhost:3001/api/product/AddProduct" , newProduct)
        .then((res) => {
          console.log(res.data)
          setRefrech(!refrech)
        })
        .catch((err) => {
          console.log(err)
        })
     

      }
      const deleteOneproduct = (id) => {
    axios.delete(`http://localhost:3001/api/product/deleteByid/${id}`)
     .then(() => {
      setRefrech(!refrech)
     })
     .catch((err) => {
      console.log(err)
     })

      }
      const UpdateProduct = (id , productname , price , reference ) => {
       axios.put(`http://localhost:3001/api/product/edit/${id}` , {

       productname: productname,
       price: price,
       reference: reference,
      }).then(res=>setRefrech(!refrech))
      .catch(err=>console.log(err))
      //  image: image,
      //  status: status,

//        })
//        .then(() => {
//         setRefrech(!refrech)
//        })

      }


      console.log("dataaa",data)
  
      
  return (

   <Box>
   <Profil/>
  
     <Box sx={{ display: "flex"}}>

     <Box  >

     <AddProducts currentUser={currentUser} AddNewProduct={AddNewProduct}  />
     </Box>

     <Box style={{display : show && "none"}} >
      <UpdateProducts setShow={setShow} UpdateProduct={UpdateProduct}  Edit={Edit} />
      </Box>

      <Products data={data}  deleteOneproduct={deleteOneproduct}  setShow={setShow}  handleEdit={handleEdit}/>
    </Box>
    </Box>
  );
};

export default Seller
