import React , {useEffect , useState}from "react";
import "./style.css";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import { NotificationsActive, Chat } from "@mui/icons-material";
import { FormControl } from "@mui/material";
import axios from "axios"



function Navbar({search}) {


  const [input , setInput] = useState("")

  







  
import {Link} from "react-router-dom"


  return (
    <AppBar position="static" className="header" style={{  display: "flex" , justifycontent : 'spaceBetween' }}>
      <Toolbar sx={
        {
          display:"flex",
          justifyContent:"space-between"
        }
      } >
      <Box style={{ display: "inline-block" }}>
  <Typography className="logo" style={{ display: "inline-block" }}>
    Logo
  </Typography>

  <Box className="search-container" style={{ display: "inline-block" }}>
    <SearchIcon className="search-icon" />
    <input 
    value={input}
    onChange={(e) => {
      setInput(e.target.value)
      search(input)
      
      }}
    

      className="search-items"
      type="text"
      placeholder="Search Items, Fashion, Collection, and Users"
    />
  </Box>



 
 <Typography className="Home" style={{ display: "inline-block" }}>
    Home
  </Typography>
  <Link to='/home'>
 <Typography className="Home" style={{ display: "inline-block" }}>
    All Products

  </Typography></Link> 
  <Typography className="explore" style={{ display: "inline-block" }}>
    Explore
    <FormControl>
      {/* <Select  className='down' style={{color : "white"}}  >
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </Select>  */}
    </FormControl>
  </Typography>
 <Link to="/PersonalCollection">
 <Typography
    className="personal-collection"
    style={{ display: "inline-block" }}
  >
    Personal Collection
  </Typography>
 </Link> 
 <Link to="/PersonalCollection">
 <Typography
    className="personal-collection"
    style={{ display: "inline-block" }}
  >
    About Us
  </Typography>
 </Link> 

  <Typography variant="body1" className="drops" style={{ display: "inline-block" }}>
    Drops
  </Typography>
  <Typography variant="body1" className="more" style={{ display: "inline-block" }}>
    More
  </Typography>
</Box>


        <Box>
        <IconButton style={{ color: "white" , display: "inline-block"}}>
            <NotificationsActive className="icondel" />
          </IconButton>

          <IconButton style={{ color: "white" , display: "inline-block"}}>
            <Chat className="iconMes" />
          </IconButton>
          <Link to="/profile">
              <Avatar className="Avatar" src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" 
              sx={{display: "inline-block"}}/>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
