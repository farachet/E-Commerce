import React from 'react';
import { AppBar, Toolbar, Typography , Box  } from '@mui/material';
import { TextField } from '@mui/material';
const AddProduct = () => {
    return (
<Box>
<TextField label="type product name " />
 <TextField label="type produce image"/>
 <TextField label="type the price" />
 </Box>
    );
}

export default AddProduct;
