import React, { useEffect, useState } from 'react';
import { Avatar, Box, Drawer, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import "./ShopCart.css"
import axios from "axios"
const ShopCart = ({totalCost,cartItems,handleDeleteFromCart,openCart,closeCart,isOpen}) => {
  console.log("cartItems",cartItems)
  // const [isOpen, setIsOpen] = useState(false);
  if(!cartItems){
    return null
  }
  //  const openCart = () => {
  //   setIsOpen(true);
  // };

  // const closeCart = () => {
  //   setIsOpen(false);
  // };

  const formatCurrency = (value) => {
    // Add your currency formatting logic here
    return `$${value}`;
  };

  return (
    <>
  <ShoppingCartRoundedIcon onClick={openCart} sx={{
    position: "absolute",
    right: "14%",
    top: "22px",
    color: "white",
    cursor: "pointer"
  }}/>
  <Drawer anchor="right" open={isOpen} onClose={closeCart}
          sx={{
            "& .MuiPaper-root.MuiDrawer-paper.MuiDrawer-paperAnchorRight": {
              width: "23%",
              marginTop: "1%",
              padding: "2%",
              borderRadius: "5px"
            }
          }}
  >
    <div>
      <IconButton onClick={closeCart}>
       
      </IconButton>
    </div>
    <div>
      <Typography variant="h6">Cart</Typography>
    </div>
    <div>
      <List>
        {cartItems.map((item) => {
          return (
            <ListItem key={item.id}>
              <Box sx={{
                backgroundColor: "#f4eded",
                width: "130%",
                height: "120px",
                padding: "10px"
              }}>
                <Box sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                  width: "100%",
                  justifyContent: "space-between"
                }}>
                  <Avatar
                    src={item.image}
                    sx={{
                      width: "50%",
                      height: "110px",
                      borderRadius: "0px",
                      marginTop: "10px"
                    }}
                  />
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column"
                  }}>
                    <Typography variant='subtitle2' sx={{
                      fontSize: "20px",
                      fontWeight: "bold"
                    }}>{item.productname}</Typography>
                    <Typography variant='subtitle2'
                                sx={{
                                  color: "gray"
                                }}
                    >{item.reference}</Typography>
                  </Box>
                  <Typography variant='subtitle2' sx={{
                    fontSize: "20px",
                    fontWeight: "bold"
                  }}>${item.price}</Typography>
                  <IconButton
                    onClick={() => {handleDeleteFromCart(item.id)}} // Replace 'handleDelete' with your actual delete function
                    sx={{
                      color: 'red',
                      fontSize:"30px"
                    }}
                  >
                   <DeleteOutlineIcon/>
                  </IconButton>
                </Box>
              </Box>
            </ListItem>
          );
        })}
      </List>
    </div>
    <div>
      <Typography variant="subtitle1" align="right" fontWeight="bold" fontSize={20}>
        Total {formatCurrency(totalCost)}
      </Typography>
    </div>
  </Drawer>
</>

  );
};

export default ShopCart;
