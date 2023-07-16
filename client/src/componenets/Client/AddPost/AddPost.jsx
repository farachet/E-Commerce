import axios from 'axios'
import React, { useState } from 'react'
import "./AddPost.css"
import { Avatar } from '@mui/material'

const AddPost = ({addPost,handleRefresh}) => {
    const [post,setPost]=useState("")
    const  [imageUrl,setImageUrl]=useState("")
    const[file,setFile]=useState("")
   
    const uploadImage=async()=>{
      const form=new FormData()
      form.append("file",file)
      form.append("upload_preset","travelMind")
      await axios.post("https://api.cloudinary.com/v1_1/do25iiz1j/upload",form)
      .then(res=>setImageUrl(res.data.secure_url))
      .catch(err=>console.log(err))
    }
  return (
  
        <div className='post-input'>
                         <Avatar
                src='https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg'
                sx={{width:"43px",height:"43px"}}
                />
                <input className='about-trip'  placeholder=" write about your trip here ..." value={post} onChange={(e)=>setPost(e.target.value)} />
                <input className='image-input' type='file' onChange={(e)=>setFile(e.target.files[0])} />
                <button className='addPost' onClick={()=>{
                  uploadImage()
                }} >upload Image</button>
            {imageUrl&&  <button className='addPost' onClick={()=>{
                    
                    addPost({"content":post,"image":imageUrl})
                    setPost("")
                    handleRefresh()
                }}>Add Post</button>}
        </div>


  )
}

export default AddPost