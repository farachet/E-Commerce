import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const CardsFilter = () => {
  return (
        <Box sx={{
            display:"flex",
            width:"49%"
         }}>
            <FormControl    
                    className='select-form'
                    fullWidth 
                    variant="standard"
                    sx={{

                        boxSizing:"border-box",
                        marginTop:"20px"
                    
                        
                    }}>
                            <InputLabel
                                id="demo-simple-select-label"
                                sx={{ color: '#FFF !important',
                                padding:"0px 59px",fontWeight:"bold",fontSize:"20px" }}
                            >
                                            All Items
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
            <FormControl    
                    className='select-form'
                    fullWidth 
                    variant="standard"
                    sx={{
                        
                        boxSizing:"border-box",
                        marginTop:"20px"
                    
                        
                    }}>
                            <InputLabel
                                id="demo-simple-select-label"
                                sx={{ color: '#FFF !important',
                                padding:"0px 59px",fontWeight:"bold",fontSize:"20px" }}
                            >
                                            Sort By
                                        </InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"

                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
            </FormControl>
        </Box>
    
  )
}

export default CardsFilter
