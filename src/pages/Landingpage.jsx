import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Button,
  Grid,
  Link,
  Paper,
  colors,
  Card,
  Container,
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  

} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import image from "./assets/Group 72.png";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import Landinpageimage from "./assets/landpageimage.png";
const Landingpage = () => {

    const[value, setValue] = React.useState('one');
    
  const navigate = useNavigate();

  const handleChange = (value, newValue) =>{
    setValue(newValue);
  }


  return (
    <React.Fragment>
    <AppBar sx={{ background: "white", boxShadow:"none" }}>
      <Toolbar>
          <>
            <Typography sx={{ fontSize: "2rem", paddingLeft: "10%", color:"black" }}>
              etutor
            </Typography>
          </>

          <>
            <Tabs
              value={value}
              onChange={handleChange}
              sx={{ marginLeft: "auto" }}
              indicatorColor="#d96767"
              textColor="inherit">

              <Tab style={{color:"black"}} label="Home" />
              <Tab style={{color:"black"}} label="Features" />
              <Tab style={{color:"black"}} label="Pricing" />
              <Tab style={{color:"black"}} label="About Us" />

            </Tabs>

            <Button onClick={()=>{ navigate("/loginpage") }} sx={{ marginLeft: "auto" }} variant="outlined" color="error">
              Login
            </Button>

            <Button sx={{ marginLeft: "10px", backgroundColor:"#d96767" }} variant="contained" color="error">
             Register
            </Button>
          </>
       
      </Toolbar>
    </AppBar>

    <Container>
        <Grid container>
          {/* Left side: Image */}
          <Grid item xs={12} md={6}>
            <img
              style={{ marginTop: "10rem", width: "80%" }}
              src={Landinpageimage}
            />
          </Grid>

          {/* Right side: Text */}
          <Grid item xs={12} md={6}>
            <Typography
              style={{ color: "#d96767", fontWeight: 600, marginTop: "20rem" }}
              variant="h4"
              gutterBottom
            >
              EPOWERING MINDS TRANSFORMING FUTURE
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <CardActions>
              <Button
                color="error"
                variant="outlined"
                style={{ backgroundcolor: "#d96767", fontWeight: 500 }}
              >
                REGISTER
              </Button>
            </CardActions>
            {/* Add more text or components as needed */}
          </Grid>
        </Grid>
      </Container>
  </React.Fragment>
  );
};

export default Landingpage;

