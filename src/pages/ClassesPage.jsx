import React, { useState } from "react";
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  Item,
  Grid,
  FormControlLabel,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import {
  Toolbar,
  Typography,
  Box,
  List,
  Divider,
  Badge,
  CardActionArea,
  CardMedia,
  Paper,
  Autocomplete,
  TextField
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import NotificationIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import MuiDrawer from "@mui/material/Drawer";
import { ChevronLeft, ExpandMore } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { mainListItem } from "./itemlist";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import PaymentsIcon from "@mui/icons-material/Payments";
import ClassIcon from "@mui/icons-material/Class";
import { useNavigate } from "react-router-dom";
import img1 from "./assets/flask (3).png";
import img2 from "./assets/physics.png";
import img3 from "./assets/mathematics (2).png";
import img4 from "./assets/Group 38.png";
import Addimg from "./assets/add.png";
import pic1 from "./assets/1.png";
import pic2 from "./assets/2.png";
import pic3 from "./assets/3.png";
import pic4 from "./assets/4.png";
import pic5 from "./assets/5.png";
import pic6 from "./assets/6.png";
import pic7 from "./assets/7.png";
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const Card = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  const navigate = useNavigate();
  const mainListItem = (
    <React.Fragment>
      <List>
        <ListItem  onClick={() => {
            navigate("/home");
          }}>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem >
          <ListItemButton>
            <ListItemIcon>
              <ClassIcon />
            </ListItemIcon>
            <ListItemText primary="Classes" />
          </ListItemButton>
        </ListItem>

        <ListItem
          onClick={() => {
            navigate("/teachers");
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <LocalLibraryRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Teachers" />
          </ListItemButton>
        </ListItem>

        <ListItem
          onClick={() => {
            navigate("/payments");
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <PaymentsIcon />
            </ListItemIcon>
            <ListItemText primary="Payments" />
          </ListItemButton>
        </ListItem>

        <ListItem
          onClick={() => {
            navigate("/settings");
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <SettingsRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
      </List>
    </React.Fragment>
  );

  const drawer = (
    <div>
      <Drawer variant="permanent">
        <Toolbar />
        <Divider>
          <List>{mainListItem}</List>
        </Divider>
      </Drawer>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

    const options = ['Grade9', 'Grade10', 'Grade11',  
    'Grade 12'] 



  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        style={{ backgroundColor: "#F5F5F5" }}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color=""
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            style={{
              fontSize: "36px",
              fontFamily: "Plus Jakarta Sans",
              color: "black",
              fontWeight:600
            }}
            noWrap
            component="div"
          >
            Classes
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        
        }}
      >
        <Toolbar />
        <Box sx={{ mt: 2,  justifyContent:"center",  backgroundColor: "white", borderRadius: "20px" }}>
        <Typography
                sx={{
                  ml: 5,
                  fontWeight: 600,
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: 24,
                }}
              >
               MyClasses
              </Typography>
        <Grid>
              <Grid
                container
                gap={4}
                style={{border: "10px", padding:"20px" }}
              >
                <Grid item flexDirection="row">
                <Card
                    sx={{ maxWidth: 350, maxHeight: 700 }}
                    style={{
                      backgroundColor: "#F9E788",
                      marginTop: "10px",
                      borderRadius: "20px",
                    }}
                  >
                    <CardContent style={{ marginLeft: "0px" }}>
                      <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                          <Typography
                            style={{ fontWeight: 700, fontSize: "24px" ,fontFamily:"Plus Jakarta Sans" }}
                          >
                            Chemistry
                          </Typography>
                          <Typography  style={{ fontWeight: 500, fontSize: "16px" ,fontFamily:"Plus Jakarta Sans" }} variant="h7">
                        Grade 12
                      </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions>
                      <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                          <Stack direction="row" spacing={2}>
                            <Avatar
                              alt="Travis Howard"
                              sx={{ width: 50, height: 50 }}
                              variant="dot"
                              src={pic1}
                            />
                            <Typography
                              style={{ fontSize: "12px", fontWeight: "bolder" }}
                            >
                              Jagath Chandana
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                <Card
                    sx={{ maxWidth: 350, maxHeight: 700 }}
                    style={{
                      backgroundColor: "#B4DEF0",
                      marginTop: "10px",
                      borderRadius: "20px",
                    }}
                  >
                    <CardContent style={{ marginLeft: "0px" }}>
                      <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                          <Typography
                          style={{ fontWeight: 700, fontSize: "24px" ,fontFamily:"Plus Jakarta Sans" }}
                          >
                            Physics
                          </Typography>
                          <Typography style={{ fontWeight: 500, fontSize: "16px" ,fontFamily:"Plus Jakarta Sans" }} gutterBottom variant="h7" component="div">
                        Grade 12
                      </Typography>
                        </Grid>
                      </Grid>

                     
                    </CardContent>
                    <CardActions>
                      <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                          <Stack direction="row" spacing={2}>
                            <Avatar
                              alt="Travis Howard"
                              sx={{ width: 50, height: 50 }}
                              variant="dot"
                              src={pic2}
                            />
                            <Typography
                              style={{ fontSize: "12px", fontWeight: "bolder" }}
                            >
                              Binura Binduhewa
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                <Card
                    sx={{ maxWidth: 350, maxHeight: 700 }}
                    style={{
                      backgroundColor: "#F6A695",
                      marginTop: "10px",
                      borderRadius: "20px",
                    }}
                  >
                    <CardContent style={{ marginLeft: "0px" }}>
                      <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                          <Typography
                          style={{ fontWeight: 700, fontSize: "24px" ,fontFamily:"Plus Jakarta Sans" }}
                          >
                            Combined
                          </Typography>
                          <Typography style={{ fontWeight: 500, fontSize: "16px" ,fontFamily:"Plus Jakarta Sans" }} variant="h7" component="div">
                        Grade 12
                      </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions>
                      <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                          <Stack direction="row" spacing={2}>
                            <Avatar
                              alt="Travis Howard"
                              sx={{ width: 50, height: 50 }}
                              variant="dot"
                              src={pic1}
                            />
                            <Typography
                              style={{ fontSize: "12px", fontWeight: "bolder" }}
                            >
                              Tharindu Silva
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>

                </Grid>

                <Grid item flexDirection="row">

                <Card  onClick={() => {
                  navigate("/AddClass");
                }}
                    sx={{ maxWidth: 350, maxHeight: 600 }}
                    style={{
                      marginTop: "10px",
                      borderRadius: "20px",
                      height:"12rem"
                    }}
                    
                  >
                    <CardContent style={{ marginLeft: "0px" }}>
                      <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                          <img src={Addimg}/>
                        </Grid>
                      </Grid>

                     
                    </CardContent>
                 
                  </Card>

             

                </Grid>

               
              </Grid>
            </Grid>
        </Box>
       
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
