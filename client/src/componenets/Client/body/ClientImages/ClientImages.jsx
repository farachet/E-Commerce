import React, { useState } from 'react'
import { Container,Box, Typography,Paper, Avatar } from '@mui/material'


const ClientImages = () => {
    const [images,setImages]=useState([
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrkeGpYaoToz6PE19K29ADZRRwKubDnoDGA&usqp=CAU",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/James_Spader_by_Gage_Skidmore.jpg/800px-James_Spader_by_Gage_Skidmore.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCtL_flzEr6EwRHkQNoOa1VxqIlgeiukj8_Q&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT42oljYRw1lUVGM1hysesDjMv85VoOfFScbaL1MKwtYVBNEpqZeMbBPCzMcKMJFMGlPjw&usqp=CAU"

    ])
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
      {images.map(image=>

         <Avatar
         src={image}
         alt="img"
         sx={{width:"105px",height:"91px",borderRadius:"5px"}}

         />
      )}
      </Box>
    </Container>
  )
}

export default ClientImages
