import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Box, Typography, Button, Avatar } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [role, setRole] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleChangeRole = (e) => {
    setRole(e.target.value);
  };
  console.log("eeeeerole", role);
  const handleSubmit = () => {
    console.log(email, firstName, lastName, password, birthday, role);
    axios
      .post("http://localhost:3001/api/user/signup", {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
        birthday: birthday,
        role: role,
      })
      .then((res) => {
        navigate("/signin");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log("zzz", email, firstName, lastName, password, birthday);

  return (
    <Box>
      <Box classeName="boxup">
        <Box
          style={{
            width: 70,
            height: 150,
            marginTop: -50,
          }}
        >
          <img
            className="Image8"
            style={{
              marginLeft: 306,
              marginTop: 100,
              borderRadius: 0,
              outline: "none",
              justifyContent: "center",
            }}
          />
        </Box>
        <Typography
          style={{
            color: "white",
            fontSize: 30,
            fontFamily: "SF Pro Display",
            letterSpacing: 0.30,
            wordWrap: "break-word",
            fontWeight: "800",
            marginLeft: 100,
            marginTop: 480,
          }}
        >
          Begin your meta fashion journey here
        </Typography>
      </Box>
      <Box
        classeName="Rectangle1914"
        className="Rectangle24"
        style={{
          width: 490,
          height: 600,
          left: 699,
          top: 130,
          position: "absolute",
          background: "rgba(255, 255, 255, 0.10)",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.15)",
          borderRadius: 10,
        }}
      >
        <Box>
          <Box>
            <Typography
              variant="h1"
              component="h2"
              style={{
                color: "white",
                fontSize: 30,
                fontFamily: "SF Pro Display",
                letterSpacing: 0.30,
                wordWrap: "break-word",
                fontWeight: "800",
                marginLeft: 35,
                marginTop: 20,
              }}
            >
              Sign Up
            </Typography>
          </Box>

          <Box>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="email"
              id="standard-start-adornment"
              sx={{
                m: 1,
                width: "52ch",
                "& .MuiInputBase-input": {
                  color: "white",
                },
                "& .MuiTypography-root .MuiTypography-body1 .css-1pnmrwp-MuiTypography-root":{
                  color:"white !important",
                  fontWeight:"bold",
                  padding:"10px",
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" style={{ marginLeft: 10,fontWeight:"bold",fontWeight:"bold" }}>
                    Email Address
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Box>
          <Box>
            <TextField
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              id="standard-start-adornment"
              sx={{
                m: 1,
                width: "25ch",
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" style={{ marginLeft: 10 }}>
                    Full Name
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />

            <TextField
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              id="standard-start-adornment"
              sx={{
                m: 1,
                width: "25ch",
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" style={{ marginLeft: 10 }}>
                    Last Name
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Box>

          <FormControl
            sx={{ m: 1, width: "25ch" }}
            variant="standard"
          >
            <InputLabel style={{ color: "white" }} htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="filled-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end" style={{ marginLeft: 10 }}>
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Box>
            <Typography
              variant="h5"
              style={{
                color: "white",
                fontSize: 20,
                fontFamily: "SF Pro Display",
                letterSpacing: 0.30,
                wordWrap: "break-word",
                fontWeight: "800",
                marginLeft: 35,
                marginTop: 20,
              }}
            >
              Date Of Birthday
            </Typography>

            <TextField
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              id="standard-start-adornment"
              sx={{
                m: 1,
                width: "50ch",
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" style={{ marginLeft: 10 }}>
                    YYYY-MM-DD
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Box>

          {/* Add select component */}
          <Box>
            <Typography
              variant="h5"
              style={{
                color: "white",
                fontSize: 20,
                fontFamily: "SF Pro Display",
                letterSpacing: 0.30,
                wordWrap: "break-word",
                fontWeight: "800",
                marginLeft: 35,
                marginTop: 20,
              }}
            >
              Role
            </Typography>
            <Select
              value={role}
              onChange={(e) => {
                handleChangeRole(e);
                console.log(e.target.value);
              }}
              sx={{
                m: 1,
                width: "52ch",
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
              variant="standard"
            >
              <MenuItem value="client">Client</MenuItem>
              <MenuItem value="seller">Seller</MenuItem>
            </Select>
          </Box>

          <Box
            className="Frame1"
            style={{
              width: "34%",
              height: "0.01%",
              paddingLeft: 0,
              paddingRight: 10,
              paddingTop: 7,
              paddingBottom: 7,
              background: "linear-gradient(214deg, #B75CFF 0%, #671AE4 100%)",
              borderRadius: 121,
              gap: 10,
              display: "inline-flex",
              marginLeft: 270,
              marginTop: 20,
            }}
          >
            <Button
              onClick={handleSubmit}
              style={{
                color: "white",
                fontSize: 15,
                fontFamily: "Poppins",
                fontWeight: "bold",
                wordWrap: "break-word",
                
              }}
            >
              Create Account
            </Button>
          </Box>
          <Box
            sx={{
              marginTop: "20px",
              marginLeft: "40px",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >
            Already have an account?{" "}
            <Link to="/signin">
              <Typography
                sx={{ color: "#FF5722", textDecoration: "none", fontSize: "20px" }}
              >
                Login
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
