import React, { useEffect,useState } from 'react'
import { Box,Typography} from '@mui/material'
import "./AllProduct.css"
import Cart from "./Card.jsx"
import Filter from './Filter.jsx';
import CardsFilter from './CardsFilter';
import axios from 'axios';
const AllProduct = () => {
  const[products,setProducts]=useState([])
  useEffect(()=>{
    axios.get(`http://localhost:3001/api/product/getAll`)
    .then((res)=>{
        setProducts(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
  },[])
  return (
    <Box className='allProducts-container' style={{
      margin:"200px 40px ",
      display:"flex",
      width:"100%",
    
      gap:"3%"

    }}>
      <Box sx={{
        width:"20%",
        backgroundColor:"rgba(255, 255, 255, 0.1)",
        height:"1400px",
        padding:"10px",
        

      }}>
        <Filter/>   


      </Box>
      <Box sx={{
        margin:"0px",
        padding:"0px",
        width:"69%",
        display:"flex",
        flexDirection:"column"
        


      }} >

              <Box sx={{
                 
                  height:"10%",
                  display:"flex",
                  
                  justifyContent:"space-between"

              }}>
                <Typography 
                variant='subtitle2'
                sx={{
                  color:" rgba(255, 255, 255, 0.80);",
                  fontWeight:"bold",
                  fontSize:"20px",
                  marginTop:"25px"
                }}
                >
                  23,344,420 items
                </Typography>
                <CardsFilter/>

              </Box>

            <Box sx={{
              display:"flex",
              gap:"30px",
              width:"100%",
              
              flexWrap:"wrap",
            }}>
                <Cart/>
                {
                  products.map(product=><Cart key={product.id}/>)
                }
            </Box>
      </Box>
    </Box>
  )
}

export default AllProduct
