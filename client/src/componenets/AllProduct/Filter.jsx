import React from 'react'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { Container,Box,Typography, FormControl, InputLabel, Select, MenuItem} from '@mui/material'
const Filter = () => {
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
                boxSizing:"border-box",
                marginTop:"20px"
            }}>
                    <InputLabel
                      id="demo-simple-select-label"
                      sx={{ color: '#FFF !important',
                      padding:"0px 59px"
                      ,fontWeight:"bold",
                      fontSize:"20px" 
                    }}
                    >
                      Status
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      sx={{
                        color: 'white',
                        // padding:"30px",
                      }}
                    >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
            </FormControl>
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
                        fontWeight:"bold"
                        ,fontSize:"20px" }}
                      >
                        Price
                      </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{
                color: 'white',
                boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }
  
              }}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
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
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{
                color: 'white',boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }
  
              }}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
           </Select>
    </FormControl>
    </div>
  )
}

export default Filter
