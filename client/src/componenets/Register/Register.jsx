import React,{useState} from "react";
import "./Register.css" ;
// import axios from "axios" ;
// import {useNavigate,Link} from 'react-router-dom'
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';


const Register =() =>{
    const [firstName,setFirstName]= useState ("")
    const [lastName,setLastName]= useState ("")
    const [email,setEmail]= useState ("")
    const [password,setPassword]= useState ("")
    const [birthday,setBirthday]= useState ("")
    // const [role,setRole]= useState ("")
    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
return(
<Box >
  <Box classeName='Rectangle1914'
  style={{position: "absolute",
    width: "531px",
    height: "650px",
    left: "780px",
    top: "187px",
     background: 'rgba(255, 255, 255, 0.20)',
   borderRadius: 10}}>
    <Box >
    <Box> 
      <h2> Sign up </h2> 
    </Box>
  
      <Box>
<TextField
         className="email" id="standard-start-adornment"
          sx={{ m: 1, width: '25ch' }}
         
          InputProps={{
            startAdornment: 
            <InputAdornment
             position="start" value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email adress">Email Adress
            </InputAdornment>,
          }}
          variant="standard"
        />
</Box>
<Box>
<TextField
          id="standard-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: 
            <InputAdornment
             position="start" value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} 
            placeholder="Full Name"> Full Name
            </InputAdornment>,
          }}
          variant="standard"
        />

        <TextField
          id="standard-start-adornment"
          sx={{ m: 1, width: '25ch',colors: "rgba(255,255,255,1)"}}
          InputProps={{
            startAdornment: 
            <InputAdornment
             position="start" value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
              placeholder="Last Name"> Last Name
            </InputAdornment>,
          }}
          variant="standard"
        />
        </Box>

        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end" value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            
          />
        </FormControl>
        <Box>
       
        <h2>Date Of Birthday</h2>

          <TextField
          id="standard-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: 
            <InputAdornment
             position="start" value={birthday} 
              onChange={(e) => setBirthday(e.target.value)} 
              placeholder="Birthday"> YYYY-MM-DD
            </InputAdornment>,
          }}
          variant="standard"
        />
        </Box>

        <Box>

        </Box>

</Box>
</Box>
</Box>
)
}
export default Register;