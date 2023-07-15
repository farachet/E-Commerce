import { Avatar, Box, Container, Typography } from '@mui/material'
import React from 'react'

const ClientPosts = ({posts}) => {
  console.log(posts)
  return (
    posts.map(ele=>(
      <Container sx={{
        marginBottom:"20px"
      }}>
      
            <Container className='user-post-info'>
                <Avatar
                src='https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg'
                sx={{width:"43px",height:"43px"}}
                />
                <Box>
                  <Typography variant='h2' sx={{color:"white",fontSize:20,fontWeight:600,display:'flex',gap:"10px",alignItems:'center'}}>
                        {ele.client.firstName+" "+ele.client.lastName} <Typography variant='subtitle2'> 4mn</Typography>
                  </Typography>
                  <Typography variant='subtitle2' sx={{color:"rgba(255, 255, 255, 0.5)"}} >
                    @{ele.client.firstName}
                  </Typography>
                </Box>
           </Container>
           <Container>
           <Box>
                  <Typography variant="body1" sx={{color:"white",fontSize:16,fontWeight:500,color:"rgba(255, 255, 255, 1)",marginTop:"10px",marginBottom:"10px"}}>
               {ele.content}

                  </Typography>

                    <Avatar
                    src={ele.image}
                    sx={{width:"100%",height:"426px",borderRadius:"0px"}}
                    />
                </Box>
           </Container>
          
        
    </Container>
    ))

  )
}

export default ClientPosts
