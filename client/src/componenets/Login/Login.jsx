import React, { useState } from 'react';
import "./Login.css"
import { Box, Button , appBarClasses , Avatar , Input } from "@mui/material";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Login = () => {

    const [show , setShow] = useState(false)
    return (
        <Box >
        <Box style={{width : 100 , height : 150 , marginTop : -50}}> 
             <img className="Image8" style={{marginLeft : 306 , marginTop : 100  , borderRadius:0 , outline: 'none' , justifyContent : "center" }}/>
             </Box>
             <Box
           
            style={{
              width: 490,
              height: 600,
              left: 699,
              top: 130,
              position: "absolute",
              background: "rgba(255, 255, 255, 0.10)",
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.15)",
              borderRadius: 10,
            }}
          >

<Typography variant="h1" component="h2" style={{   color : "white" , fontSize: 30 , fontFamily: 'SF Pro Display' , letterSpacing: 0.30 , wordWrap: 'break-word' , fontWeight: '800' , marginLeft : 35 , marginTop : 20}}>
     Login
    </Typography>
    <Box>
    <Typography variant="h1" component="h5" style={{   color : "white" , fontSize: 15 , fontFamily: 'SF Pro Display' , letterSpacing: 0.30 , wordWrap: 'break-word'  , marginLeft : 35 , marginTop: 50}}>
     New user ?
    </Typography>
    <Typography variant="h1" component="h5" style={{ fontSize: 15 , fontFamily: 'SF Pro Display' , letterSpacing: 0.30 , wordWrap: 'break-word'  , marginLeft : 110 , marginTop: -20,  color: '#6C5DD3',
     fontSize: 18,
     fontFamily: 'SF Pro Display',
     fontWeight: '500',
     letterSpacing: 0.36}}>
     Create an account
    </Typography>-
    </Box>


    <Box>
<Typography style={{color: 'white', fontSize: 18, fontFamily: 'SF Pro Display', fontWeight: '400', letterSpacing: 0.36, wordWrap: 'break-word' , marginTop: 55 , marginLeft:30}}>Email Address</Typography>
    <Input   className="Line381" style={{width: 409, fontFamily: 'SF Pro Display', height: 0, left: 30, top: 210, position: 'absolute', border: '0.25px rgba(255, 255, 255, 0.50) solid'  , color : "white"}}
            />
   {!show && (
        <Box className="Frame1" style={{ width: 70, height: 10, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, background: 'linear-gradient(214deg, #B75CFF 0%, #671AE4 100%)', borderRadius: 121, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' , marginLeft: 330 , marginTop : 20}}>
          <Button style={{color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}> Continue</Button>
        </Box>
      )}

      {show && (
        <Box>
          <Typography style={{color: 'white', fontSize: 18, fontFamily: 'SF Pro Display', fontWeight: '400', letterSpacing: 0.36, wordWrap: 'break-word' , marginTop: 55 , marginLeft:30}}>Password</Typography>
          <Input className="Line381" style={{width: 409, fontFamily: 'SF Pro Display', height: 0, left: 30, top: 290, position: 'absolute', border: '0.25px rgba(255, 255, 255, 0.50) solid'  , color : "white"}} />
          <Box className="Frame1" style={{ width: 70, height: 10, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, background: 'linear-gradient(214deg, #B75CFF 0%, #671AE4 100%)', borderRadius: 121, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' , marginLeft: 330 , marginTop : 20}}>
            <Box className="Continue" style={{color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Log In</Box>
          </Box>
        </Box>
      )}


            </Box>
           
            <Box  style={{width: '100%', height: '100%', position: 'relative' }}>
            
          <Box  style={{width: 309, height: 52, left: 60, top: 30, position: 'absolute', borderRadius: 171, border: '0.25px white solid'}} />
         <Box  style={{width: 222, height: 30, left: 119, top: 21.50, position: 'absolute'}}>
          <Box  style={{width: 30, height: 30, left: -25, top: 18, position: 'absolute'}}>
        <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"></Avatar>
          </Box>
        <Box  style={{left: 24, top: 30, position: 'absolute', color: 'white', fontSize: 18, fontFamily: 'SF Pro Display', fontWeight: '500', letterSpacing: 0.36, wordWrap: 'break-word'}}>Continue With Google</Box>
        </Box>
            </Box>
            <Box  style={{width: '100%', height: '100%', position: 'relative' , marginTop : -430}}> 
            <Box  style={{width: 309, height: 52, left: 60, top: 30, position: 'absolute', borderRadius: 171, border: '0.25px white solid' , background: '#1877F2'}}/>
            <Box  style={{width: 222, height: 30, left: 119, top: 21.50, position: 'absolute'}}>
            <Box  style={{width: 30, height: 30, left: -25, top: 18, position: 'absolute'}}>
            <Avatar src="https://clipart-library.com/images_k/facebook-icon-transparent-background/facebook-icon-transparent-background-8.jpg"></Avatar>
            </Box>
            <Box style={{left: 24, top: 30, position: 'absolute', color: 'white', fontSize: 18, fontFamily: 'SF Pro Display', fontWeight: '500', letterSpacing: 0.36, wordWrap: 'break-word'}}>Continue With facebook</Box>
            </Box>
            </Box>
          </Box>
        </Box>

    );
}

export default Login;