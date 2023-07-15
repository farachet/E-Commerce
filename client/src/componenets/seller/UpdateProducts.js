import React , {useState} from "react";
import { Box, Input, Button } from "@mui/material";
import "./style.css";


const UpdateProducts = ({setShow , UpdateProduct , Edit}) => {

        const [name, setName] = useState(Edit.productname);
        const [price ,setPrice ]= useState(Edit.productname);
        const [reference, setReference] = useState(Edit.reference);
        const [ image ,setImage ]= useState("");
        const [status ,setStatus ]= useState("");
        const [approved ,setApproved ]= useState("");
      console.log(Edit)
        
      
      
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
                <Input
                 value={price}  onChange={(event) => setPrice(event.target.value)} 
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
                  top: 250,
                  position: "absolute",
                }}
              >
                <Input
               value={reference}
      onChange={(event) => setReference(event.target.value)}
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
    
            {/* <Box
                className="Group48095657"
                style={{
                  width: 342,
                  height: 24,
                  left: 70,
                  top: 400,
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
                  top: 450,
                  position: "absolute",
                }}
              >
                <Input
                value={status}  onChange={(event) => setStatus(event.target.value)} 
                  className="Image"
                  placeholder="Type product status"
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
                  top: 520,
                  position: "absolute",
                }}
              >
                <Input
                value={approved}  onChange={(event) => setApproved(event.target.value) } 
                
                  placeholder="Type product approved"
                  style={{
                    color: "red",
                    fontSize: 16,
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    wordWrap: "break-word",
                   
                  }}
                />
              </Box> */}
           
    
            <Box>
              <Button
              onClick={() => {
                
                setShow("AddProducts")
                UpdateProduct(Edit.id , name , price , reference)
               
                
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
}

export default UpdateProducts;
