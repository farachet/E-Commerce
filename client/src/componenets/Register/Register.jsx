import React,{useState} from "react";
import "./Register.css" ;
import axios from axios ;
import {useNavigate,Link} from 'react-router-dom'
import {Avatar} from "@mui/material"



const Register =() =>{
    const [firstName,setFirstName]= useState ("")
    const [lastName,setLastName]= useState ("")
    const [email,setEmail]= useState ("")
    const [password,setPassword]= useState ("")
    const [birthday,setBirthday]= useState ("")
    const [role,setRole]= useState ("")
    const Navigate=useNavigate()


    const handleSubmit=async (e)=>{
        e.preventDefault ()
        axios.post("http://localhost:3000/api/user/register",{
            firstName,lastName,email,password,birthday,role
        }).then(()=>{
            Navigate("/login")
        })
        .catch((err)=>{
          console.log(err)
        })
    }
return (
<Box className="register" 
style={{width: '100%', height: '100%', background: 'linear-gradient(123deg, #984D38 0%, #181E41 63%)'}}>


  <Box className="avatar">
<Avatar className="av"/>

<h2> Begin your meta fashion </h2>
</Box> 

<Box className="Rectangle..."
    style={{width: '100%', height: '100%', background: 'rgba(255, 255, 255, 0.20)', borderRadius: 10}}>
        <h2> Sign up</h2>
        <Span> 
          Already a Member ? <Link to="/login"> Sign up </Link>
        </Span>
<Box className="flex flex-col" onSubmit={handleSubmit} >
            <Input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e)=>setFirstName(e.target.value)}
              placeholder="Fullname"
            />
             <Input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e)=>setLastName(e.target.value)}
              placeholder="Lasttname"
            />
            <Input
              type="text"
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="enter email"
            />
            <Input
              type="password"
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="password"
            />
            <Input
              type="birthday"
              name="birthday"
              value={birthday}
              onChange={(e)=>setBirthday(e.target.value)}
              placeholder="Date Of Birthday"
            />
            <Input
              type="role"
              name="role"
              value={role}
              onCPange={(e)=>setRole(e.target.value)}
              placeholder="Role"
            />
            </Box>
            </Box>
            </Box>
)
}

export default Register;
