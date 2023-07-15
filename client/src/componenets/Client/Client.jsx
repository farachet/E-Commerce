import React, { useEffect, useState } from 'react'
import ClientHeader from './Header/ClientHeader.jsx'
import ClientBody from './body/ClientBody.jsx'
import axios from 'axios'

const Client = () => {
  const [posts,setPost]=useState([])
  const [refresh,setRefresh]=useState(false)
  const handleRefresh=()=>{
    setRefresh(!refresh)
  }
  useEffect(()=>{
      axios.get(`http://localhost:3001/api/posts//allUserPosts/${1}`)
      .then(res=>setPost(res.data))
      .catch(err=>console.error(err))
  },[refresh])
  const addPost=(data)=>{
    axios.post(`http://localhost:3001/api/posts/createPost/${1}`,data)
    .then((res)=>{
      console.log("sent" )
    })
    .catch(err=>console.log(err))
  }

  return (
    <div >
      <ClientHeader/>
      
      <ClientBody addPost={addPost} posts={posts} handleRefresh={handleRefresh}/>

    </div>
  )
}

export default Client
