import React from 'react'
import "./ClientHeader.css"
import { Container,Box, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
const ClientHeader = () => {
  return (
    <Container className="Header-container" >
      <Box>
          <Avatar
                alt="RemySharp"
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"
                sx={{ 
                  width: "100%"
                  ,height: "100%"
                  ,borderRadius:"5px",
                  opacity:0.6,
                    height:375
                }}
            />
            <Box className="icon-container">
            <ModeEditOutlineIcon style={{ color: 'white' }}  />
            </Box>
            <Box  sx={{width:120
            ,height:120,
            flexShrink:0,
            display:"flex", 
            justifyContent:'center',
            flexDirection:"column"
            ,alignItems:"center",
          }} 
            className="avatar-container">
              <Avatar
              alt='profile'
              src='https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg'
              sx={{width: "100%", height: "100%"}}
              />
              <Box sx={{width:"31px",
              height:"31px",
              backgroundColor:"#6C5DD3",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              position:"absolute",
              bottom:"2px",
              right:"-7px",
              borderRadius:"50%",
              padding:"5px"}}>

              <PhotoCameraIcon sx={{color:"white"}}/>
              <Box className="profile-info">
              <Typography variant='h4' sx={{color:"white",width:"max-content"}}>
                    Farhan Khan 
              </Typography>
              <Typography sx={{width:"max-content",color: 'rgba(255,255,255,0.40)',fontSize: 18}}>
                    Farhan Khan 
              </Typography>
              </Box>
              </Box>

        {/* <UserImage/> */}
        
            </Box>
              <Button
              className='edit-btn'
              sx={{
                position:"absolute",
                right:"20px",
                bottom:"27%",
                backgroundColor:"#6C5DD3",
                color:"white",
                padding:"10px",
                borderRadius:"15px",

                

              }}> <ModeEditOutlineIcon/> Edit Profile </Button>  
              </Box>
              <Box>
                <Typography 
                variant='body1'
                sx={{color: 'rgba(255,255,255,0.80)',textAlign:"center"}}

                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Tortor, consectetur purus amet, accumsan nulla. Ut urna placerat morbi cursus pulvinar nunc adipiscing. 
                Tortor, consectetur purus amet, accumsan nulla. Ut urna placerat morbi cursus pulvinar nunc adipiscing.</Typography>
              </Box>
    </Container>
  )
}

export default ClientHeader
