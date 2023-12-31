import React, { useEffect, useState } from 'react'
import { Container,Box, Typography, Avatar, Button } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
const Card = ({product,addToCart,addToCollection}) => {
if(!product){
  return null
}

  return (
    <Box sx={{ backgroundColor:"rgba(255, 255, 255, 0.1)",
    width:"284px",
    height:"434px",
    padding:"10px",display:'flex',
    flexDirection:"column",
    alignItems:"center",
    gap:"16px"
    }}>
      <Avatar 
      src={product.image}
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
         {product.category.categoryname}
          </Typography> 
          <Typography>
            {product.reference}
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
         {product.productname}
        </Typography>
        <Typography >
             ${product.price}
        </Typography>
        <Typography>

        </Typography>
      </Box>
      <Box sx={{
        width:"246px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
        
      }}>
            <FavoriteIcon onClick={
              ()=>addToCollection({content:product.productname,image:product.image})
            } sx={{color:"red",fontSize:"30px" ,cursor:"pointer"}}/>
            <Button 
            onClick={()=>addToCart(product.id)}
            variant="contained"
            sx={{
              width:"84%",
              color:"white",
              background: 'linear-gradient(214deg, #B75CFF 0%, #671AE4 100%)',
              justifyContent:"center",
              fontWeight:"bold",
              borderRadius:"5px"



            }}
            >Buy Now </Button>
      </Box>
    </Box>
  )
}

export default Card
