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
} from "@mui/material";
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
      <Grid container m={2}>
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
       
      </Grid>
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
