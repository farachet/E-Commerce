import React, { useContext, useEffect, useState } from 'react'
import ClientHeader from './Header/ClientHeader.jsx'
import ClientBody from './body/ClientBody.jsx'
import axios from 'axios'
import {ecommerceContext} from "../../ecommerceContext/e-commerceContext"
const Client = () => {
  const  {currentUser}=useContext(ecommerceContext)
  const [posts,setPost]=useState([])
  const [refresh,setRefresh]=useState(false)
  const [user,setUser]=useState({})
  const handleRefresh=()=>{
    setRefresh(!refresh)
  }
  useEffect(()=>{
      axios.get(`http://localhost:3001/api/posts/allUserPosts/${currentUser.id}`)
      .then(res=>setPost(res.data))
      .catch(err=>console.error(err))
      axios.get(`http://localhost:3001/api/client/getClient/${currentUser.id}`)
      .then(res=>{
        console.log("data",res.data)
        setUser(res.data[0])
      }).catch(err=>console.log(err))
  },[refresh])
  const addPost=(data)=>{
    axios.post(`http://localhost:3001/api/posts/createPost/${currentUser.id}`,data)
    .then((res)=>{
      handleRefresh()
    })
    .catch(err=>console.log(err))
  }
  const deletePost=(postId)=>{
    axios.delete(`http://localhost:3001/api/posts/deletePost/${postId}`)
    .then(res=>setRefresh(!refresh))
    .catch(err=>console.error(err))
  }

  return (
    <div >
      <ClientHeader user={user} handleRefresh={handleRefresh} currentUser={currentUser}/>
      
      <ClientBody currentUser={currentUser}  user={user} deletePost={deletePost} addPost={addPost} posts={posts} handleRefresh={handleRefresh}/>

    </div>
  )
}

export default Client
