import React, { useEffect, useState } from "react";
import AddProducts from "./AddProduct";
import { Box, Button , Avatar } from "@mui/material";
import Products from "./Product.js";
import UpdateProducts from "./UpdateProducts";
import Profil from "./Profil";
import axios from "axios";

const Seller = () => {
    const [data, setData] = useState([]);
    const [refrech, setRefrech] = useState(false);
    const [show , setShow] = useState("AddProducts")
    const [Edit , setEdit] = useState({})


 

//     useEffect(() => {
//         fetch()
//       }, [refrech])


      const handleEdit = (obj) => {
         setEdit(obj)
      }
    const fetch = () => {
        axios
          .get(`http://localhost:3000/api/product/getAll/1`)
          .then((res) => {
            console.log(res.data)
            setData(res.data)
          })
          .catch((err) => {
            console.log(err)
          })
      }

      const AddNewProduct = (productname , price , reference , image , status , approved) => {
        const newProduct = {
          productname: productname,
          price: price,
          reference: reference,
          image: image,
          status: status,
          approved : approved
        
//         };
        
        axios.post("http://localhost:3000/api/product/AddProduct" , newProduct)
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
    axios.delete(`http://localhost:3000/api/product/deleteByid/${id}`)
     .then(() => {
      setRefrech(!refrech)
     })
     .catch((err) => {
      console.log(err)
     })

      }
      const UpdateProduct = (id , productname , price , reference ) => {
       axios.put(`http://localhost:3000/api/product/edit/${id}` , {

       productname: productname,
       price: price,
       reference: reference,
      //  image: image,
      //  status: status,

//        })
//        .then(() => {
//         setRefrech(!refrech)
//        })

//       }
      
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

      <Products data={data}  deleteOneproduct={deleteOneproduct}  setShow={setShow}  handleEdit={handleEdit}/>
    </Box>
    </Box>
  );
};

// export default Seller;
