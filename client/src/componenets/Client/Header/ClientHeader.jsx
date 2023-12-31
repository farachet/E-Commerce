import React,{useEffect, useState} from 'react'
import "./ClientHeader.css"
import { Container,Box, Typography, TextField } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import axios from 'axios';
import LoadingComponent from './updateProfile/Loading.jsx';
const ClientHeader = ({currentUser,user,handleRefresh}) => {
  const [open, setOpen] = useState(false);
  const [prictureOpen,setPictureOpen]=useState(false)
  const [isLoading,setIsLoading]=useState(false)
  const [refresh,setRefresh]=useState(false)
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    birthday: '',
  })

  const  [imageUrl,setImageUrl]=useState("")
  const[file,setFile]=useState("")
  const handleOpenn = () => {
    setPictureOpen(true);
  };

  const handleClosee = () => {
    setPictureOpen(false);
  };
  const uploadImage=async()=>{
    setIsLoading(true)
    const form=new FormData()
    form.append("file",file)
    form.append("upload_preset","travelMind")
    await axios.post("https://api.cloudinary.com/v1_1/do25iiz1j/upload",form)
    .then(res=>{
      setImageUrl(res.data.secure_url)
      setIsLoading(false)
    })
    .catch(err=>console.log(err))
  }
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // const  birthday = profileData.birthday.split('/').sort((a, b) => b - a).reduce((acc,current) => {
  
  //   acc+current
  // },"");

  const handleSave = (data) => {
    let inputBirthDay = profileData.birthday;
    let birthDayArray = inputBirthDay.split('/').sort((a, b) => b - a).reduce((acc, current) => {
      return acc + "," + current;
    }, "");
    let birthday = "";
    for (let i = 0; i < birthDayArray.split(",").length; i++) {
      birthday += birthDayArray.split(",")[i]+"-";
    }
    axios.put(`http://localhost:3001/api/client/edit/${user.id}`,{firstName:profileData.firstName
    ,lastName:profileData.lastName,
    email:profileData.email,
    birthday:birthday.slice(1,birthday.length-1)})
    .then(result=>{
      handleClosee()
      handleRefresh()
    }).catch(err=>console.error(err))

    handleClose();
   
  }
  const handleSavee=()=>{
    axios.put(`http://localhost:3001/api/client/edit/${user.id}`,{image:imageUrl})
    .then(res=>handleRefresh())
    .catch(err=>console.error(err))
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <Container className="Header-container" >
      <Box>
          <Avatar
                alt="RemySharp"
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"
                sx={{ 
                  width: "100%"
                  ,height: "100%"
                  ,borderRadius:"5px",
                  opacity:0.6,
                    height:375
                }}
            />
            <Box className="icon-container">
            <ModeEditOutlineIcon style={{ color: 'white' }}  />
            </Box>
            <Box  sx={{width:120
            ,height:120,
            flexShrink:0,
            display:"flex", 
            justifyContent:'center',
            flexDirection:"column"
            ,alignItems:"center",
          }} 
            className="avatar-container">
              <Avatar
              alt='profile'
              src={user.image}
              sx={{width: "100%", height: "100%"}}
              />
              <Box sx={{width:"31px",
              height:"31px",
              backgroundColor:"#6C5DD3",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              position:"absolute",
              bottom:"2px",
              right:"-7px",
              borderRadius:"50%",
              padding:"5px"}}>

              <PhotoCameraIcon 
              onClick={handleOpenn}
               sx={{color:"white"}}/>
              <Box className="profile-info">
              <Typography variant='h6' sx={{color:"white",width:"max-content",marginRight:"20px"}}>
                    {user.firstName+" "+user.lastName}
                    {/* Farhan Khan */}
              </Typography>
              <Typography sx={{width:"max-content",color: 'rgba(255,255,255,0.40)',fontSize: 18}}>
                  @{user.firstName}
              </Typography>
              </Box>
              </Box>

        {/* <UserImage/> */}
        
            </Box>
              <Button
              onClick={handleOpen}
              className='edit-btn'
              sx={{
                position:"absolute",
                right:"20px",
                bottom:"27%",
                backgroundColor:"#6C5DD3",
                color:"white",
                padding:"10px",
                borderRadius:"15px",

                

              }}> <ModeEditOutlineIcon /> Edit Profile </Button>  
              
              <div>
                  
                  <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
                    <DialogTitle>Update Profile</DialogTitle>
                    <DialogContent>
                    <form>
                          <TextField
                            name="firstName"
                            label="First Name"
                            fullWidth
                            value={profileData.firstName}
                            onChange={handleChange}
                            margin="normal"
                          />
                          <TextField
                            name="lastName"
                            label="Last Name"
                            fullWidth
                            value={profileData.lastName}
                            onChange={handleChange}
                            margin="normal"
                          />
                          <TextField
                            name="email"
                            label="Email"
                            fullWidth
                            value={profileData.email}
                            onChange={handleChange}
                            margin="normal"
                          />
                          <TextField
                            name="birthday"
                            label="Birthday"
                            fullWidth
                            value={profileData.birthday}
                            onChange={handleChange}
                            margin="normal"
                          />

                        </form>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} sx={{
                        backgroundColor:"rgb(108, 93, 211)",
                        color:"white"
                      }}>Cancel</Button>
            <Button onClick={handleSave} color="primary" sx={{
                        color:"rgb(108, 93, 211)",
                        fontSize:"20px",
                        fontWeight:"bold"
                      }}>Save</Button>
                    </DialogActions>
                  </Dialog>
                </div>
                <div>
                  
                  <Dialog open={prictureOpen} onClose={handleClosee} maxWidth="xs" fullWidth>
                    <DialogTitle>update Picture</DialogTitle>
                    <DialogContent>
                    <form>
   
                          <input className='image-input' type='file' onChange={(e)=>setFile(e.target.files[0])} />
                          {isLoading? <LoadingComponent />:<button type='button' className='addPost' onClick={()=>{
                  uploadImage()

                }} >upload Image</button>}
                        </form>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClosee} sx={{
                        backgroundColor:"rgb(108, 93, 211)",
                        color:"white"
                      }}>Cancel</Button>
                    {
                      imageUrl.length?         <Button onClick={()=>{
                        handleSavee()
                        handleClosee()

                      }} color="primary" sx={{
                        color:"rgb(108, 93, 211)",
                        fontSize:"20px",
                        fontWeight:"bold"
                      }}>Save</Button>:""
                    }
                    </DialogActions>
                  </Dialog>
                </div>
              </Box>
              <Box>
                <Typography 
                variant='body1'
                sx={{color: 'rgba(255,255,255,0.80)',textAlign:"center"}}

                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Tortor, consectetur purus amet, accumsan nulla. Ut urna placerat morbi cursus pulvinar nunc adipiscing. 
                Tortor, consectetur purus amet, accumsan nulla. Ut urna placerat morbi cursus pulvinar nunc adipiscing.</Typography>
              </Box>
    </Container>
  )
}

export default ClientHeader
