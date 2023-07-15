import React from 'react'
import { Box, Typography,Button } from '@mui/material';


import './AboutUs.css'
const AboutUs = () => {
  return (
    <div>
      <Box className="box1">
        <Typography className="about">About Us</Typography>
        <Typography className="who">Who we are</Typography>
        <Typography className="b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate tortor ipsum neque nulla. Et turpis scelerisque vulputate elementum, egestas neque scelerisque turpis. Adipiscing lacus vel lobortis sit tincidunt enim, libero. In dignissim tortor sit sit convallis morbi.
        </Typography>
        <Button className="button1" variant="contained" href="#contained-buttons">
          more +
        </Button>
      </Box>

      <div className="containerboximg">
        <Box className="box2">
          <Typography className="about">Since 2014</Typography>
          <Typography className="who">What We Do</Typography>
          <Typography className="b">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate tortor ipsum neque nulla. Et turpis scelerisque vulputate elementum, egestas neque scelerisque turpis. Adipiscing lacus vel lobortis sit tincidunt enim, libero. In dignissim tortor sit sit convallis morbi.
          </Typography>
          <Button className="button1" variant="contained" href="#contained-buttons">
            more +
          </Button>
        </Box>

        <img className="img1" style={{ width: '18%', height: '250px', boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.35)', borderRadius: 10 }} src="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg" alt="Description" />
      </div>

      <div className="containerboximg">
        <img className="img2" style={{ width: '18%', height: '250px', boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.35)', borderRadius: 10 }} src="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg" alt="Description" />
        <Box className="box3">
          <Typography className="about">Since 2014</Typography>
          <Typography className="who">When We Started</Typography>
          <Typography className="b">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate tortor ipsum neque nulla. Et turpis scelerisque vulputate elementum, egestas neque scelerisque turpis. Adipiscing lacus vel lobortis sit tincidunt enim, libero. In dignissim tortor sit sit convallis morbi.
          </Typography>
          <Button className="button1" variant="contained" href="#contained-buttons">
            more +
          </Button>
        </Box>
      </div>

      <Box className="box4">
        <Typography className="who">Our Makers</Typography>
        <Typography className="b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate tortor ipsum neque nulla. Et turpis scelerisque vulputate elementum, egestas neque scelerisque turpis. Adipiscing lacus vel lobortis sit tincidunt enim, libero. In dignissim tortor sit sit convallis morbi.
        </Typography>
      </Box>

<Box className="gridContainer" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', marginLeft: '13%', gap: '2px' }}>
<Box className="gridItem" sx={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
    <img className="Rectangle2" style={{ width: 250, height: 292, borderRadius: 5 }} src="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg" alt="Description" />
    <Typography className="name" style={{textAlign: 'center', color: 'white', fontSize: 22, fontFamily: 'SF Pro Display', fontWeight: '600', letterSpacing: 0.44, wordWrap: 'break-word' }}>Person 2</Typography>
    <Typography className="position" style={{  textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'SF Pro Display', fontWeight: '500', letterSpacing: 0.32, wordWrap: 'break-word' }}>Position 2</Typography>
  </Box>
  <Box className="gridItem">
    <img className="Rectangle2" style={{ width: 250, height: 292, borderRadius: 5 }} src="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg" alt="Description" />
    <Typography className="name" style={{ textAlign: 'center', color: 'white', fontSize: 22, fontFamily: 'SF Pro Display', fontWeight: '600', letterSpacing: 0.44, wordWrap: 'break-word' }}>Person 2</Typography>
    <Typography className="position" style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'SF Pro Display', fontWeight: '500', letterSpacing: 0.32, wordWrap: 'break-word' }}>Position 2</Typography>
  </Box>
  <Box className="gridItem">
    <img className="Rectangle2" style={{ width: 250, height: 292, borderRadius: 5 }} src="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg" alt="Description" />
    <Typography className="name" style={{ textAlign: 'center', color: 'white', fontSize: 22, fontFamily: 'SF Pro Display', fontWeight: '600', letterSpacing: 0.44, wordWrap: 'break-word' }}>Person 2</Typography>
    <Typography className="position" style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'SF Pro Display', fontWeight: '500', letterSpacing: 0.32, wordWrap: 'break-word' }}>Position 2</Typography>
  </Box>
  <Box className="gridItem">
    <img className="Rectangle2" style={{ width: 250, height: 292, borderRadius: 5 }} src="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg" alt="Description" />
    <Typography className="name" style={{ textAlign: 'center', color: 'white', fontSize: 22, fontFamily: 'SF Pro Display', fontWeight: '600', letterSpacing: 0.44, wordWrap: 'break-word' }}>Person 2</Typography>
    <Typography className="position" style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'SF Pro Display', fontWeight: '500', letterSpacing: 0.32, wordWrap: 'break-word' }}>Position 2</Typography>
  </Box>
  <Box className="gridItem">
    <img className="Rectangle2" style={{ width: 250, height: 292, borderRadius: 5 }} src="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg" alt="Description" />
    <Typography className="name" style={{ textAlign: 'center', color: 'white', fontSize: 22, fontFamily: 'SF Pro Display', fontWeight: '600', letterSpacing: 0.44, wordWrap: 'break-word' }}>Person 2</Typography>
    <Typography className="position" style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'SF Pro Display', fontWeight: '500', letterSpacing: 0.32, wordWrap: 'break-word' }}>Position 2</Typography>
  </Box>
  <Box className="gridItem">
    <img className="Rectangle2" style={{ width: 250, height: 292, borderRadius: 5 }} src="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg" alt="Description" />
    <Typography className="name" style={{ textAlign: 'center', color: 'white', fontSize: 22, fontFamily: 'SF Pro Display', fontWeight: '600', letterSpacing: 0.44, wordWrap: 'break-word' }}>Person 2</Typography>
    <Typography className="position" style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'SF Pro Display', fontWeight: '500', letterSpacing: 0.32, wordWrap: 'break-word' }}>Position 2</Typography>
  </Box>


</Box>


  






    </div>
  )
}

export default AboutUs
