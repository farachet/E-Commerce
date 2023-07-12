import React from 'react'
import { Container,Box} from '@mui/material'
import "./ClientBody.css"

import ClientImages from './ClientImages/ClientImages.jsx';
import ClientPosts from './ClientImages/ClientPosts.jsx';

const ClientBody = () => {
  return (
    <Container className="body-user-container" >
        <Box sx={{backgroundColor:"rgba(255, 255, 255, 0.1)",width:"384px",height:"371px"}}>
            <ClientImages/>
        </Box>
        <Box sx={{width:"750px",height:"532px"}}>
           <ClientPosts/>
   
        </Box>
    </Container>
  )
}

export default ClientBody
