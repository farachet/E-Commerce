import React, { useEffect, useState } from "react";
import { Box, Button , Avatar } from "@mui/material";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import "./style.css";


const Products = ({data}) => {


 



  return (
    <Box className="parent" sx={{marginLeft:40}}>
      {data.map((el) => (
        <Box
          key={el.id}
          className="Collect"
          style={{ width: "100%", height: "100%", position: "relative" }}
        >
          <Box
            className="Card"
            style={{
              
              height: 400,
              left: 0,
              top: 0,
             
            }}
          >
            <Box
              className="Rectangle22"
              style={{
                width: 290.12,
                height: 334.58,
                left: 0,
                top: 0,
                position: "absolute",
                background: "rgba(255, 255, 255, 0.10)",
                boxShadow:
                  "0px 3.6519203186035156px 2.921536445617676px rgba(0, 0, 0, 0.25)",
                borderRadius: 7.3,
              }}
            ></Box>

            <Box
              className="SecretRare"
              style={{
                left: 8.99,
                top: 211.14,
                position: "absolute",
                color: "rgba(255, 255, 255, 0.50)",
                fontSize: 14.61,
                fontFamily: "Poppins",
                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
          
              {el.productname}
            </Box>
            <Box
              className="LoremIpsum"
              style={{
                left: 8.99,
                top: 242.79,
                position: "absolute",
                color: "white",
                fontSize: 14.61,
                fontFamily: "Poppins",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
            
                {el.productname}
            </Box>
            <Box
              className="005Eth"
              style={{
                left: 126.09,
                top: 242.79,
                position: "absolute",
                color: "white",
                fontSize: 14.61,
                fontFamily: "Poppins",
                fontWeight: "700",
                wordWrap: "break-word",
                display: "flex",
              }}
            >
                {el.price}
            </Box>
            <Avatar  className="rec"
      src='https://thebrandhopper.com/wp-content/uploads/2021/10/Product-Innovation.jpg'
      alt="image"
      sx={{width:"246px",height:"277px",borderRadius:"8px", marginTop:"10px"}}
      />
            <Box
              className="Fa0051"
              style={{
                left: 116.05,
                top: 211.14,
                position: "absolute",
                color: "rgba(255, 255, 255, 0.50)",
                fontSize: 10.96,
                fontFamily: "Poppins",
                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
               {el.reference}
            </Box>
          </Box>
          <Box
            className="heart"
            style={{
              width: 284.12,
              height: 1225.14,
              left: 20,
              top: 290,
              position: "absolute",
            }}
          >
            <FavoriteBorderRoundedIcon style={{ color: "white" }} />
          </Box>

          <Box
            className="btnBuy"
            style={{
              width: 112.54,
              height: 10.52,
              paddingLeft: 14.61,
              paddingRight: 14.61,
              paddingTop: 7.3,
              paddingBottom: 7.3,
              position: "absolute",
              left: 49.05,
              top: 289.14,
              position: "absolute",
              color: "rgba(255, 255, 255, 0.50)",
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
              background: "linear-gradient(214deg, #B75CFF 0%, #671AE4 100%)",
              borderRadius: 7.3,
              justifyContent: "center",
              alignItems: "center",
              gap: 7.3,
              display: "inline-flex",
            }}
          >
            <Button
              style={{
                color: "white",
                fontFamily: "Poppins",
                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              Buy Now
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Products;
