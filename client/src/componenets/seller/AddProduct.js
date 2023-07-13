import React from "react";
import { Box, Input, Button } from "@mui/material";
import "./style.css";
const AddProducts = () => {
  return (
    <Box>
      <Box className="box2">
        <Box className="Card" style={{ position: "relative" }}>
          <Box
            className="Rectangle24"
            style={{
              width: 259,
              height: 1204,
              left: 0,
              top: 0,
              position: "absolute",
              background: "rgba(255, 255, 255, 0.10)",
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.15)",
              borderRadius: 10,
            }}
          ></Box>
          <Box style={{
              
             
              fontSize: 16,
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            <Input
              className="inpuut"
              placeholder="Type product name"
              sx={{ left: 25, top: 100, color: "white" }}
            />
          </Box>

          <Box
            className="Group48095657"
            style={{
              width: 342,
              height: 24,
              left: 25,
              top: 183,
              position: "absolute",
            }}
          >
            <Input
              className="Price"
              placeholder="Type product Price"
              style={{
                left: 0,
                top: 0,
                color: "white",
                fontSize: 16,
                fontFamily: "Poppins",
                fontWeight: "500",
                wordWrap: "break-word",
               
              }}
            />
          </Box>

          
          <Box
            className="Group48095657"
            style={{
              width: 342,
              height: 24,
              left: 25,
              top: 270,
              position: "absolute",
            }}
          >
            <Input
              className="Image"
              placeholder="Type product Image"
              style={{
                color: "white",
                fontSize: 16,
                fontFamily: "Poppins",
                fontWeight: "500",
                wordWrap: "break-word",
               
              }}
            />
          </Box>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{ color: "white", top: 290, left: 70 }}
          >
            Add
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddProducts;
