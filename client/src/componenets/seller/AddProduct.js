import React , {useContext, useState} from "react";
import { Box, Input, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import "./style.css";
import {ecommerceContext} from "../../ecommerceContext/e-commerceContext"
const AddProducts = ({AddNewProduct }) => {
const {currentUser}=useContext(ecommerceContext)
  const [name, setName] = useState("");
  const [price ,setPrice ]= useState("");
  const [reference, setReference] = useState("");
  const [ image ,setImage ]= useState("");

  const [approved ,setApproved ]= useState("");
  const [selectedCategory, setSelectedCategory] = useState(0);
console.log("ahmed",selectedCategory)
  console.log("addproduct",currentUser)

  const handleAdd=()=>{
    AddNewProduct(name , price , reference , image , selectedCategory  )
  }
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    
  };
  

  return (
    <Box>
      <Box className="box2">
        <Box className="Card" style={{ position: "relative" }}>
          <Box
            className="Rectangle24"
            style={{
              width: 364,
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
              <FormControl 
            
            fullWidth 
            variant="standard"
            
            sx={{
              width:364,
                borderBottom:"0.5px solid rgba(255, 255, 255, 0.5)",
                boxSizing:"border-box", marginTop:"20px"
            }}>
                      <InputLabel
                        id="demo-simple-select-label"
                        sx={{ color: '#FFF !important',
                        padding:"0px 59px",
                        fontW200eight:"bold"
                        ,fontSize:"20px" }}
                      >
                        Category
                      </InputLabel>
            <Select
            
            onChange={(e)=>handleCategoryChange(e)}

              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{
                color: 'white',
                boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }
  
              }}
              value={selectedCategory}
            >
                <MenuItem value={1}>All Items</MenuItem>
                <MenuItem value={2}>Less than $10</MenuItem>
                <MenuItem value={3}>Less than $20</MenuItem>
                <MenuItem value={4}>less than $30</MenuItem>
            
           </Select>
    </FormControl>
            <Input
            value={name}  onChange={(event) => setName(event.target.value)} 
              className="inpuut"
              placeholder="Type product name"
              sx={{ left: 25, top: 130, color: "white" }}
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

          </Box>

          
          <Box
            className="Group48095657"
            style={{
              width: 342,
              color: "white",
              height: 24,
              left: 25,
              top: 250,
              position: "absolute",
            }}
          >
            <Input
            value={reference}
            onChange={(event) => setReference(event.target.value)}
              className="Image"
              placeholder="Type product reference"
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

        <Box
            className="Group48095657"
            style={{
              width: 342,
              height: 24,
              left: 70,
              top: 1030,
              position: "absolute",
            }}
          >
            <Input
            value={image}  onChange={(event) => setImage(event.target.value)} 
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
          <Box
            className="Group48095657"
            style={{
              width: 342,
              height: 24,
              left: 70,
              top: 1090,
              position: "absolute",
            }}
          >
            
          </Box>
          <Box
            className="Group48095657"
            style={{
              width: 342,
              height: 24,
              left: 70,
              top: 1160,
              position: "absolute",
            }}
          >
            <Input
            value={price}  onChange={(event) => setPrice(event.target.value) } 
              className="Image"
              placeholder="Type product price"
              style={{
                color: "white",
                fontSize: 16,
                fontFamily: "Poppins",
                fontWeight: "500",
                wordWrap: "break-word",
               
              }}
            />
          </Box>
       

        <Box>
          <Button
          onClick={() => {
            console.log(selectedCategory)
            handleAdd()
          }}
            variant="contained"
            sx={{ color: "white", top: 500, left: 70 }}
          >
            Add
          </Button>
        </Box>
      </Box>





 
    </Box>
  );
};

export default AddProducts;
