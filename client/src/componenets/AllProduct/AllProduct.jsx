import React, { useEffect,useState } from 'react'
import { Box,Typography} from '@mui/material'
import "./AllProduct.css"
import Cart from "./Card.jsx"
import Filter from './Filter.jsx';
import CardsFilter from './CardsFilter';
import axios from 'axios';
import ShopCart from "./ShopCart/ShopCart.jsx"
const AllProduct = () => {
  const [cartItems,setCartItems]=useState([])
  const [totalCost,setTotalCost]=useState(0)
  const [refresh,setRefresh]=useState(false)
  const[products,setProducts]=useState([])
  const [isOpen, setIsOpen] = useState(false);
  console.log(products)
  const handleCheckout=(clientId)=>{
    axios.put(`http://localhost:3001/api/product/updateStatus/${clientId}`)
    .then(res=>{
      setRefresh(!refresh)
      axios.delete(`http://localhost:3001/api/cards/deleteAll/${1}`)
    .then(()=>{
      setRefresh(!refresh)
    })
    .catch((err)=>console.error(err))

    })
    .catch(err=>console.error(err))
  }
  const handleFilterPrice=(price)=>{
    axios.get(`http://localhost:3001/api/product/getAllProducts`)
    .then((res)=>{
      
      const updatedProducts=res.data.filter(ele=>ele.price<=price&&ele.status==="active")
      console.log("filltred") 
      setProducts(updatedProducts) 
  
    })
    .catch((err)=>{
        console.log(err)
    })
  }
  const handleFilterCategory=(query)=>{
    axios.get(`http://localhost:3001/api/product/getAllProducts`)
    .then((res)=>{
      console.log("query",query)
      const updatedProducts=res.data.filter(ele=>ele.category.categoryname===query)
      console.log("filltred") 
      setProducts(updatedProducts) 
      
    })
    .catch((err)=>{
        console.log(err)
    })
  
  }
  useEffect(()=>{
    axios.get(`http://localhost:3001/api/product/getAllProducts`)
    .then((res)=>{
      
        setProducts(res.data.filter(ele=>ele.status==="active"))
    })
    .catch((err)=>{
        console.log(err)
    })
    axios.get(`http://localhost:3001/api/cards/getAll/${1}`)
    .then((res)=>{
        setCartItems(res.data)
        const totalCost = res.data.reduce((acc, product) => acc + product.price, 0);
        setTotalCost(totalCost)

    })
    .catch((err)=>{
        console.log(err)
    })
  },[refresh])
  const addToCart=(productId)=>{
    axios.post(`http://localhost:3001/api/cards/add/${1}`,{productId})
    .then(res=>{
      setRefresh(!refresh)
      openCart()
      setTimeout(()=>{
        closeCart()
      },1000)
    })
    .catch(err=>console.error(err))
  }
  const handleDeleteFromCart=(productId)=>{
    axios.delete(`http://localhost:3001/api/cards/delete/${productId}`)
    .then(()=>{
      setRefresh(!refresh)
    })
    .catch((err)=>console.error(err))
  }
  
  if(!cartItems){
    return null
  }
   const openCart = () => {
    setIsOpen(true);
  };

  const closeCart = () => {
    setIsOpen(false);
  };
  const addToCollection=(data)=>{
    console.log("hey",data)
    axios.post(`http://localhost:3001/api/posts/createPost/${1}`,data)
    .then((res)=>{
      console.log("sent" )
    })
    .catch(err=>console.log(err))
  }
  return (
    <Box className='allProducts-container' style={{
      margin:"200px 40px ",
      display:"flex",
      width:"100%",
    
      gap:"3%"

    }}>
      <ShopCart handleCheckout={handleCheckout} totalCost={totalCost} handleDeleteFromCart={handleDeleteFromCart} cartItems={cartItems} openCart={openCart} closeCart={closeCart} isOpen={isOpen}/>
      <Box sx={{
        width:"20%",
        backgroundColor:"rgba(255, 255, 255, 0.1)",
        height:"1400px",
        padding:"10px",
        

      }}>
        <Filter handleFilterPrice={handleFilterPrice} handleFilterCategory={handleFilterCategory}/>   


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
                  {products.length} items
                </Typography>
                <CardsFilter/>

              </Box>

            <Box sx={{
              display:"flex",
              gap:"30px",
              width:"100%",
              
              flexWrap:"wrap",
            }}>
                
                {products &&products.length!==0?
                  products.map(product=><Cart addToCart={addToCart} addToCollection={addToCollection} product={product} key={product.id}/>):""
                }
            </Box>
      </Box>
    </Box>
  )
}

export default AllProduct
