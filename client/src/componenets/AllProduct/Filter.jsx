import React,{useState} from 'react'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { Container,Box,Typography, FormControl, InputLabel, Select, MenuItem} from '@mui/material'
const Filter = ({handleFilterCategory,handleFilterPrice}) => {
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
    handleFilterPrice(event.target.value)
    
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    handleFilterCategory(event.target.value)
  };
console.log("pri",selectedPrice)
console.log("cat",selectedCategory)

  return (
    <div>
       <Box 
            sx={{
              display:"flex",
              color:"white",
              gap:"10px",
              padding:"20px"
          }}
            >
                      <DragIndicatorIcon/>
                      <Typography 
                      variant='h4'
                      >
                      Filters
                      </Typography>
            </Box>
          
            <FormControl 
            
            fullWidth 
            variant="standard"
            
            sx={{
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
                        Price
                      </InputLabel>
            <Select
            
            onChange={(e)=>handlePriceChange(e)}

              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{
                color: 'white',
                boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }
  
              }}
              value={selectedPrice}
            >
                <MenuItem value={100000}>All Items</MenuItem>
                <MenuItem value={10}>Less than $10</MenuItem>
                <MenuItem value={20}>Less than $20</MenuItem>
                <MenuItem value={30}>less than $30</MenuItem>
                <MenuItem value={100}>less than $100</MenuItem>
           </Select>
    </FormControl>
            <FormControl 
            className='select-form'
            fullWidth 
            variant="standard"
            
            sx={{
                borderBottom:"0.5px solid rgba(255, 255, 255, 0.5)",
                boxSizing:"border-box",
                marginTop:"20px"
              
                
            }}>
                      <InputLabel
                        id="demo-simple-select-label"
                        sx={{ color: '#FFF !important',
                        padding:"0px 59px",fontWeight:"bold",fontSize:"20px" }}
                      >
                        Categories
                      </InputLabel>
            <Select
              onChange={(e)=>handleCategoryChange(e)}
              value={selectedCategory}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{
                color: 'white',boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }
  
              }}
            >
                <MenuItem value={"Category 1"}>Category 1</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
           </Select>
    </FormControl>
    </div>
  )
}

export default Filter
