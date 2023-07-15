import React, { useState } from 'react'
import { Container,Box, Typography,Paper, Avatar } from '@mui/material'


const ClientImages = ({posts}) => {

  return (
    <Container >
      <Box sx={{display:"flex",padding:"20px",justifyContent:"space-between"}}>
        <Typography variant='h2'sx={{fontSize:20,color:"white"}} >
          Photos
        </Typography>
        <Typography variant='h2' sx={{fontSize:20,color:"#6C5DD3"}}>
          See All Photos
        </Typography>
      </Box>
      <Box sx={{display:"flex",flexWrap:"wrap",gap:"10px"}}>
      {posts.map(ele=>

         <Avatar
         src={ele.image}
         alt="img"
         sx={{width:"105px",height:"91px",borderRadius:"5px"}}

         />
      )}
      </Box>
    </Container>
  )
}

export default ClientImages
