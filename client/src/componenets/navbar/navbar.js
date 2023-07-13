import React from "react";
import "./style.css";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import { NotificationsActive, Chat } from "@mui/icons-material";
import { FormControl, MenuItem, Select } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <Box>
          <Typography className="logo">Logo</Typography>
          <Typography className="Home">Home</Typography>
          <Typography className="explore">
            Explore
            <FormControl>
              {/* <Select  className='down' style={{color : "white"}}  >
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </Select>  */}
            </FormControl>
          </Typography>
          <Typography className="personal-collection">
            Personal Collection
          </Typography>
          <Box className="search-container">
            <SearchIcon className="search-icon" />
            <input
              className="search-items"
              type="text"
              placeholder="Search Items, Fashion, Collection, and Users"
            />
          </Box>
          <Typography variant="body1" className="drops">
            Drops
          </Typography>
          <Typography variant="body1" className="more">
            More
          </Typography>
          <Box className="vector-6"></Box>
        </Box>

        <Box>
          <IconButton style={{ color: "white" }}>
            <NotificationsActive className="icondel" />
          </IconButton>

          <IconButton style={{ color: "white" }}>
            <Chat className="iconMes" />
          </IconButton>
        </Box>

        <Box>
          <Avatar className="Avatar" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
