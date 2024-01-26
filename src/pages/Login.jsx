import React from "react";
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
  Toolbar,
 Tabs,
 Tab 
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import image from "./assets/Group 72.png";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const handleSubmit = () => {};

  const clickAlert = () => {
  };

  const navigate = useNavigate();

  return (
    <>

<AppBar sx={{ background: "white", boxShadow:"none" }}>
      <Toolbar>
          <>
            <Typography sx={{ fontSize: "2rem", paddingLeft: "10%", color:"black" }}>
              etutor
            </Typography>
          </>

          <>
            
            <Button  sx={{ marginLeft: "auto" }} variant="contained" color="error" style={{backgroundColor: "#d96767"}}>
              Register
            </Button>

            {/* <Button sx={{ marginLeft: "10px", backgroundColor:"#d96767" }} variant="contained" color="error">
             Register
            </Button> */}
          </>
       
      </Toolbar>
    </AppBar>

 <Container style={{justifyContent:"center"}}>
        <Grid container>
        
        <Grid item lg={6} md={6} sm={12} xs={12}>
            <img
              style={{ marginTop: "10rem", width: "80%" }}
              src={image}
            />
          </Grid>

          {/* Right side: Text */}
          <Grid item lg={6} md={6} sm={12} xs={12}>

          <Card
          style={{ width:"100%", height:"fit-content", marginTop:"12rem", justifyContent:"center"}}
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography style={{ fontWeight: "bold", fontFamily: "Plus Jakarta Sans" }} variant="h3">
              Log In
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                style={{ fontFamily: "Plus Jakarta Sans" }}
                margin="normal"
                required
                fullWidth
                id="uname"
                label="Username"
                name="username"
                autoFocus
              ></TextField>
              <TextField
                style={{ fontFamily: "Plus Jakarta Sans"}}
                margin="normal"
                required
                fullWidth
                id="pass"
                label="Password"
                name="Password"
                autoFocus
              ></TextField>
              <FormControlLabel
                style={{ fontFamily: "Plus Jakarta Sans",justifyContent:"space-between"}}
                control={<Checkbox />}
                label="Remember Me"
              />

              <Link href="#" variant="body2" style={{ textDecoration: "none", justifyContent:"space-between", color:"#d96767", fontWeight:"bolder", marginLeft:"25%"}}>
                Forgot Password?
              </Link>
              <Button
                fullWidth
                style={{
                  backgroundColor: "#d96767",
                  fontFamily: "Plus Jakarta Sans",
                }}
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}

                onClick={() => {
                  navigate("/home")
              }}
              >
                Log In
              </Button>
              <label
                className="custom-control-form"
                style={{
                  fontWeight: "600",
                  justifyContent: "center",
                  color: "black",
                  fontFamily: "Plus Jakarta Sans",
                  marginLeft:"35%"
                }}
              >
                Don't have an account?
              </label>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: "bolder",
                  color: "#d96767",
                }}
              >
                Register
              </a>
            </Box>
          </Box>
       </Card>



            {/* <Typography
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
            </CardActions> */}
         
          </Grid>
        </Grid>
      </Container>








      {/* <Grid container m={2}>
      <Grid container>
              <Grid item xs>
                <Typography variant="h3" style={{fontFamily:"Plus Jakarta Sans"}}>etutor</Typography>
              </Grid>
              <Grid item>
              <Button
            className="btn-reg"
            style={{ backgroundColor: "#d96767" , margin:"20px"}}
            variant="contained"
          >
            Register
          </Button>
              </Grid>
            </Grid>
      </Grid>

      <Grid container component="main" style={{justifyContent:"space-evenly", overflowX:"hidden"}}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <img style={{ width: "100%" }} src={image} />
        </Grid>

        <Card
          style={{ width:"500px", height:"fit-content", marginTop:"8%", justifyContent:"center"}}
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography style={{ fontWeight: "bold", fontFamily: "Plus Jakarta Sans" }} variant="h3">
              Log In
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                style={{ fontFamily: "Plus Jakarta Sans" }}
                margin="normal"
                required
                fullWidth
                id="uname"
                label="Username"
                name="username"
                autoFocus
              ></TextField>
              <TextField
                style={{ fontFamily: "Plus Jakarta Sans"}}
                margin="normal"
                required
                fullWidth
                id="pass"
                label="Password"
                name="Password"
                autoFocus
              ></TextField>
              <FormControlLabel
                style={{ fontFamily: "Plus Jakarta Sans",justifyContent:"space-between"}}
                control={<Checkbox />}
                label="Remember Me"
              />

              <Link href="#" variant="body2" style={{ textDecoration: "none", justifyContent:"space-between", color:"#d96767", fontWeight:"bolder", marginLeft:"30%"}}>
                Forgot Password?
              </Link>
              <Button
                fullWidth
                style={{
                  backgroundColor: "#d96767",
                  fontFamily: "Plus Jakarta Sans",
                }}
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}

                onClick={() => {
                  navigate("/home")
              }}
              >
                Log In
              </Button>
              <label
                className="custom-control-form"
                style={{
                  fontWeight: "600",
                  justifyContent: "center",
                  color: "black",
                  fontFamily: "Plus Jakarta Sans",
                  marginLeft:"35%"
                }}
              >
                Don't have an account?
              </label>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: "bolder",
                  color: "#d96767",
                }}
              >
                Register
              </a>
            </Box>
          </Box>
       </Card>
       
      </Grid> */}
    </>
  );
};

export default Login;

{
  /* <Grid item 
      xs={false} 
      sm={4} 
      md={7} 
      sx={{backgroundImage: ,
      backgroundRepeat:"no-repeat",
      backgroundColor:(t)=>t.palette.mode === 'light' ? t.palette.grey[50] : t.palette[900],
      backgroundSize:'cover',
      backgroundPosition:'center'
    }}/> */
}
{
  /* <div className=''>
      <img style={{height:'150vh', width:'50%', marginLeft:'5px'}} src={image}/>
   </div> */
}

{
  /* <Grid container>
                 <Grid item lg={6} md={6} sm={12} xs={12}>
                 
             </Grid>
                 </Grid> */
}
