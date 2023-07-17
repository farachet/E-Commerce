import React from 'react'
import { Container,Box} from '@mui/material'
import "./ClientBody.css"

import ClientImages from './ClientImages/ClientImages.jsx';
import ClientPosts from './ClientImages/ClientPosts.jsx';
import AddPost from '../AddPost/AddPost.jsx';

const ClientBody = ({addPost,posts,handleRefresh,deletePost,currentUser,user}) => {
  return (
    <Box>
      
    <Container className="body-user-container" >
      
        <Box sx={{backgroundColor:"rgba(255, 255, 255, 0.1)",width:"384px",height:"371px"}}>
            <ClientImages posts={posts}/>
        </Box>
        <Box sx={{width:"750px",height:"532px"}}>
        <AddPost user={user} currentUser={currentUser} handleRefresh={handleRefresh} addPost={addPost} />
           <ClientPosts deletePost={deletePost}  posts={posts}/>
   
        </Box>
    </Container>
    </Box>
  )
}

export default ClientBody
