import React, { useState } from "react";
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  Item,
  Grid,
  FormControlLabel,
  Tabs,
  Tab,
} from "@mui/material";

import { Container } from "@mui/icons-material";
import { Toolbar, Typography, Box, List, Divider, Badge } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import NotificationIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import MuiDrawer from "@mui/material/Drawer";
import { ChevronLeft } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
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
import img1 from "./assets/Group 16.png";
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
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem
          onClick={() => {
            navigate("/Myclasses");
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <ClassIcon />
            </ListItemIcon>
            <ListItemText style={{fontFamily:"Poppins, sans-serif", fontWeight:"600"}} primary="Classes" />
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
            navigate("/Settings");
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

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        style={{ backgroundColor: "#F5F5F5", boxShadow: "none" }}
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
          <>
            <Typography
              sx={{
                fontSize: "48px",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "800",
                color: "black",
              }}
            >
              Overview
            </Typography>
          </>

          <>
            {/* <Tabs
              sx={{ marginLeft: "auto" }}
              indicatorColor="secondary"
              textColor="inherit">

              <Tab style={{color:"black"}} label="Home" />
              <Tab style={{color:"black"}} label="Features" />
              <Tab style={{color:"black"}} label="Pricing" />
              <Tab style={{color:"black"}} label="About Us" />

            </Tabs> */}

            {/* <Badge  badgeContent={17} color="error">
            <NotificationsIcon style={{color:"black", backgroundColor:"white", height:"30px", borderRadius:"20px"}} />
          </Badge> */}

            <Typography
              sx={{ marginLeft: "auto" }}
              variant="outlined"
              style={{ color: "black" }}
            >
              <div>
                <p
                  style={{
                    margin: 0,
                    fontWeight: "600",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "16px",
                  }}
                >
                  Good Evening !
                </p>
                <p
                  style={{
                    margin: 0,
                    fontWeight: "400",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "16px",
                  }}
                >
                  Naveen Pathiraja
                </p>
              </div>
            </Typography>

            <Avatar
              src={pic2}
              sx={{ marginLeft: "10px", backgroundColor: "#d96767" }}
              variant="contained"
            />
          </>
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
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <Toolbar />

        <Grid container sx={{ mt: 5 }}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Typography
              style={{
                fontSize: "24px",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
              }}
            >
              OnGoing Classes
            </Typography>

            <Card
              variant="outlined"
              style={{ width: "483px", height: "270px", borderRadius: "20px" }}
            >
              <CardContent>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <Typography
                      style={{
                        fontWeight: "700",
                        fontSize: "32px",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Chemistry
                    </Typography>
                    <Typography
                      variant="h5"
                      style={{
                        fontSize: "16px",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "700",
                      }}
                    >
                      Grade 13
                    </Typography>
                  </div>
                  <div>
                    {/* <Grid item flexDirection="row">
                      <CardActions>
                        <Button
                          variant="outlined"
                          color="error"
                          sx={{
                            borderRadius: "36px",
                            mb: 1.5,
                          }}
                        >
                          Theory
                        </Button>
                      </CardActions>
                    </Grid> */}
                  </div>
                  <div>
                    <p
                      style={{
                        margin: 0,
                        fontWeight: "500",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "16px",
                      }}
                    >
                      Started at:
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontWeight: "400",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "40px",
                      }}
                    >
                      15:30PM
                    </p>
                  </div>
                </div>
              </CardContent>
              <Button
                variant="outlined"
                color="error"
                sx={{
                  borderRadius: "36px",
                  marginLeft:"2%"
                }}
              >
                Theory
              </Button>
              <CardContent>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="flex-end"
                  style={{ marginTop: "2%" }}
                >
                  <Grid item>
                    <Typography
                      style={{
                        marginRight: "auto",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "700",
                        marginTop: "10px",
                      }}
                    >
                      By Shiran
                    </Typography>
                  </Grid>
                  <Grid item>
                    <CardActions style={{ justifyContent: "end" }}>
                      <Button
                        style={{
                          backgroundColor: "#E16969",
                          borderRadius: "12px",
                          height: "61px",
                          width: "182px",
                          label: "Join Now",
                          fontWeight: "700",
                          fontFamily: "Poppins, sans-serif",
                        }}
                        variant="contained"
                        endIcon={<TrendingFlatIcon />}
                      >
                        <Typography
                          style={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: "700",
                            fontSize: "16px",
                          }}
                        >
                          Join Now
                        </Typography>
                      </Button>
                    </CardActions>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Grid>
              <Grid item style={{ marginTop: "2rem" }}>
                <Typography
                  style={{
                    fontSize: "24px",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "600",
                  }}
                >
                  UpComing Classes
                </Typography>

                <Card
                  variant="outlined"
                  style={{
                    width: "483px",
                    height: "132px",
                    marginBottom: "8px",
                    borderRadius: "20px",
                  }}
                >
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <Typography
                          style={{
                            fontWeight: "700",
                            fontSize: "24px",
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          Physics
                        </Typography>

                        <Typography
                          variant="h5"
                          style={{
                            fontSize: "16px",
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: "700",
                          }}
                        >
                          Grade 13
                        </Typography>
                      </div>
                      <div>
                        <Typography
                          style={{ fontSize: "16px", fontWeight: "700" }}
                          gutterBottom
                        >
                          23 FEB
                        </Typography>
                      </div>
                    </div>
                  </CardContent>

                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <Typography
                        style={{
                          marginRight: "auto",
                          marginLeft: "16px",
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "700",
                        }}
                      >
                        Binura Binduhewa
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        style={{
                          marginRight: "15px",
                          fontSize: "16px",
                          fontWeight: "700",
                        }}
                      >
                        04:00:00PM - 06:00:00 PM
                      </Typography>
                    </div>
                  </div>
                </Card>

                <Card
                  variant="outlined"
                  style={{
                    width: "483px",
                    height: "132px",
                    marginBottom: "8px",
                    borderRadius: "20px",
                  }}
                >
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <Typography
                          style={{
                            fontWeight: "700",
                            fontSize: "24px",
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          Chemistry
                        </Typography>

                        <Typography
                          variant="h5"
                          style={{
                            fontSize: "16px",
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: "700",
                          }}
                        >
                          Grade 13
                        </Typography>
                      </div>
                      <div>
                        <Typography
                          style={{ fontSize: "16px", fontWeight: "700" }}
                          gutterBottom
                        >
                          23 FEB
                        </Typography>
                      </div>
                    </div>
                  </CardContent>

                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <Typography
                        style={{
                          marginRight: "auto",
                          marginLeft: "16px",
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "700",
                        }}
                      >
                        Binura Binduhewa
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        style={{
                          marginRight: "15px",
                          fontSize: "16px",
                          fontWeight: "700",
                        }}
                      >
                        04:00:00PM - 06:00:00 PM
                      </Typography>
                    </div>
                  </div>
                </Card>

                <Card
                  variant="outlined"
                  style={{
                    width: "483px",
                    height: "132px",
                    marginBottom: "8px",
                    borderRadius: "20px",
                  }}
                >
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <Typography
                          style={{
                            fontWeight: "700",
                            fontSize: "24px",
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          Biology
                        </Typography>

                        <Typography
                          variant="h5"
                          style={{
                            fontSize: "16px",
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: "700",
                          }}
                        >
                          Grade 13
                        </Typography>
                      </div>
                      <div>
                        <Typography
                          style={{ fontSize: "16px", fontWeight: "700" }}
                          gutterBottom
                        >
                          23 FEB
                        </Typography>
                      </div>
                    </div>
                  </CardContent>

                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <Typography
                        style={{
                          marginRight: "auto",
                          marginLeft: "16px",
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "700",
                        }}
                      >
                        Binura Binduhewa
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        style={{
                          marginRight: "15px",
                          fontSize: "16px",
                          fontWeight: "700",
                        }}
                      >
                        04:00:00PM - 06:00:00 PM
                      </Typography>
                    </div>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Typography
              sx={{
                ml: 0,
                fontWeight: 600,
                fontFamily: "Poppins, sans-serif",
                fontSize: 24,
              }}
            >
              Find an Instructor
            </Typography>
            <Grid>
              <Grid
                container
                gap={1}
                style={{ border: "10px", padding: "20px" }}
              >
                <Grid item flexDirection="row">
                  <Stack spacing={2} alignItems="center">
                    <Avatar
                      alt="User Avatar"
                      src={pic1}
                      sx={{ width: 100, height: 100 }}
                    />
                    <div>
                      <p
                        style={{
                          margin: 0,
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "700",
                        }}
                      >
                        Jagath
                      </p>
                      <p
                        style={{
                          margin: 0,
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "700",
                        }}
                      >
                        Chandana
                      </p>
                    </div>
                  </Stack>
                </Grid>

                <Grid item flexDirection="row">
                  <Stack spacing={2} alignItems="center">
                    <Avatar
                      alt="User Avatar"
                      src={pic2}
                      sx={{ width: 100, height: 100 }}
                    />
                    <div>
                      <p
                        style={{
                          margin: 0,
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "700",
                        }}
                      >
                        Binura
                      </p>
                      <p
                        style={{
                          margin: 0,
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "700",
                        }}
                      >
                        Binduhewa
                      </p>
                    </div>
                  </Stack>
                </Grid>

                <Grid item flexDirection="row">
                  <Stack spacing={2} alignItems="center">
                    <Avatar
                      alt="User Avatar"
                      src={pic3}
                      sx={{ width: 100, height: 100 }}
                    />
                    <div>
                      <p
                        style={{
                          margin: 0,
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "700",
                        }}
                      >
                        Tharindu
                      </p>
                      <p
                        style={{
                          margin: 0,
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "700",
                        }}
                      >
                        Silva
                      </p>
                    </div>
                  </Stack>
                </Grid>

                <Grid item flexDirection="row">
                  <Stack spacing={2} alignItems="center">
                    <Avatar
                      alt="User Avatar"
                      src={pic7}
                      sx={{ width: 100, height: 100 }}
                    />
                    <div>
                      <p
                        style={{
                          margin: 0,
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "700",
                        }}
                      >
                        Ravindu
                      </p>
                      <p
                        style={{
                          margin: 0,
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "700",
                        }}
                      >
                        Senarath
                      </p>
                    </div>
                  </Stack>
                </Grid>

                <Grid item flexDirection="row">
                  <Stack spacing={2} alignItems="center">
                    <Avatar
                      alt="User Avatar"
                      src={pic4}
                      sx={{ width: 100, height: 100 }}
                    />
                    <div>
                      <p
                        style={{
                          margin: 0,
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "700",
                        }}
                      >
                        Tharindu
                      </p>
                      <p
                        style={{
                          margin: 0,
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "700",
                        }}
                      >
                        Silva
                      </p>
                    </div>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
            <Grid>
              <Grid item style={{ marginTop: "6rem" }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 24,
                  }}
                >
                  Find a Class
                </Typography>
                <Stack direction="row" gap={2}>
                  <Card
                    style={{
                      backgroundColor: "#E16969",
                      marginTop: "10px",
                      borderRadius: "20px",
                      height: "201px",
                      width: "210px",
                    }}
                  >
                    <CardContent style={{ marginLeft: "0px" }}>
                      <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                          <Typography
                            style={{
                              fontWeight: "700",
                              fontSize: "24px",
                              color: "white",
                            }}
                          >
                            Chemistry
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          lg={6}
                          md={6}
                          sm={12}
                          xs={12}
                          style={{ textAlign: "end" }}
                        ></Grid>
                      </Grid>

                      <Typography
                        style={{
                          fontWeight: "500",
                          color: "white",
                          fontSize: "16px",
                          fontFamily: "Poppins, sans-serif",
                        }}
                        component="div"
                      >
                        Grade 12
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 5 }}>
                          <Stack direction="row" spacing={2}>
                            <Avatar
                              alt="Travis Howard"
                              sx={{ width: "50px", height: "50px" }}
                              src={pic1}
                            />
                            <Typography
                              style={{
                                fontWeight: "700",
                                fontSize: "16px",
                                color: "white",
                              }}
                            >
                              Jagath Chandana
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>

                  <Card
                    style={{
                      backgroundColor: "#E16969",
                      marginTop: "10px",
                      borderRadius: "20px",
                      height: "201px",
                      width: "210px",
                    }}
                  >
                    <CardContent style={{ marginLeft: "0px" }}>
                      <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                          <Typography
                            style={{
                              fontWeight: "700",
                              fontSize: "24px",
                              color: "white",
                            }}
                          >
                            Physics
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          lg={6}
                          md={6}
                          sm={12}
                          xs={12}
                          style={{ textAlign: "end" }}
                        ></Grid>
                      </Grid>

                      <Typography
                        style={{
                          fontWeight: "500",
                          color: "white",
                          fontSize: "16px",
                          fontFamily: "Poppins, sans-serif",
                        }}
                        component="div"
                      >
                        Grade 12
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 5 }}>
                          <Stack direction="row" spacing={2}>
                            <Avatar
                              alt="Travis Howard"
                              sx={{ width: "50px", height: "50px" }}
                              src={pic1}
                            />
                            <Typography
                              style={{
                                fontWeight: "700",
                                fontSize: "16px",
                                color: "white",
                              }}
                            >
                              Binura Binduhewa
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>

                  <Card
                    style={{
                      backgroundColor: "#E16969",
                      marginTop: "10px",
                      borderRadius: "20px",
                      height: "201px",
                      width: "210px",
                    }}
                  >
                    <CardContent style={{ marginLeft: "0px" }}>
                      <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                          <Typography
                            style={{
                              fontWeight: "700",
                              fontSize: "24px",
                              color: "white",
                            }}
                          >
                            Combined
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          lg={6}
                          md={6}
                          sm={12}
                          xs={12}
                          style={{ textAlign: "end" }}
                        ></Grid>
                      </Grid>

                      <Typography
                        style={{
                          fontWeight: "500",
                          color: "white",
                          fontSize: "16px",
                          fontFamily: "Poppins, sans-serif",
                        }}
                        component="div"
                      >
                        Grade 12
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 5 }}>
                          <Stack direction="row" spacing={2}>
                            <Avatar
                              alt="Travis Howard"
                              sx={{ width: "50px", height: "50px" }}
                              src={pic1}
                            />
                            <Typography
                              style={{
                                fontWeight: "700",
                                fontSize: "16px",
                                color: "white",
                              }}
                            >
                              Tharindu Silva
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>

                  {/* <Card
                    
                    style={{
                      backgroundColor: "#E16969",
                      marginTop: "10px",
                      borderRadius: "20px",
                      height:"201px",
                      weight:"210px"
                    }}
                  >
                    <CardContent style={{ marginLeft: "0px" }}>
                      <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                          <Typography
                            style={{ fontWeight: "700", fontSize: "24px", color:"white" }}
                          >
                            Physics
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          lg={6}
                          md={6}
                          sm={12}
                          xs={12}
                          style={{ textAlign: "end" }}
                        ></Grid>
                      </Grid>

                      <Typography style={{fontWeight:"500", color:"white", fontSize:"16px"}}  component="div">
                        Grade 12
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                          <Stack direction="row" spacing={2}>
                            <Avatar
                              alt="Travis Howard"
                              sx={{ width: "50px", height: "50px" }}
                              src={pic1}
                            />
                            <Typography
                               style={{ fontWeight: "700", fontSize: "16px", color:"white" }}
                            >
                              Binura Binduhewa
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>

                  <Card
                   
                    style={{
                      backgroundColor: "#E16969",
                      marginTop: "10px",
                      borderRadius: "20px",
                      height:"201px",
                      weight:"210px"
                    }}
                  >
                    <CardContent style={{ marginLeft: "0px" }}>
                      <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                          <Typography
                            style={{ fontWeight: "700", fontSize: "24px", color:"white" }}
                          >
                           Combined
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          lg={6}
                          md={6}
                          sm={12}
                          xs={12}
                          style={{ textAlign: "end" }}
                        ></Grid>
                      </Grid>

                      <Typography style={{fontWeight:"500", color:"white", fontSize:"16px"}}  component="div">
                        Grade 12
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                          <Stack direction="row" spacing={2}>
                            <Avatar
                              alt="Travis Howard"
                              sx={{ width: "50px", height: "50px" }}
                              src={pic1}
                            />
                            <Typography
                               style={{ fontWeight: "700", fontSize: "16px", color:"white" }}
                            >
                              Tharindu Silva
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card> */}
                  {/* 
                  <Card
                    sx={{
                      maxWidth: 350,
                      maxHeight: 700,
                    }}
                    style={{
                      backgroundColor: "#E16969",
                      marginTop: "10px",
                      borderRadius: "20px",
                    }}
                  >
                    <CardContent style={{ marginLeft: "0px" }}>
                      <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                          <Typography
                            style={{ fontWeight: "700", fontSize: "24px", color:"white" }}
                          >
                            Chemistry
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          lg={6}
                          md={6}
                          sm={12}
                          xs={12}
                          style={{ textAlign: "end" }}
                        ></Grid>
                      </Grid>

                      <Typography style={{fontWeight:"500", color:"white", fontSize:"16px"}}  component="div">
                        Grade 12
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                          <Stack direction="row" spacing={2}>
                            <Avatar
                              alt="Travis Howard"
                              sx={{ width: "50px", height: "50px" }}
                              src={pic1}
                            />
                            <Typography
                               style={{ fontWeight: "700", fontSize: "16px", color:"white" }}
                            >
                              Jagath Chandana
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>
{/* 
                  <Card
                    sx={{ maxWidth: "210px", maxHeight: "201px" }}
                    style={{
                      backgroundColor: "#E16969",
                      marginTop: "10px",
                      borderRadius: "20px",
                    }}
                  >
                    <CardContent style={{ marginLeft: "0px" }}>
                      <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                          <Typography
                            style={{ fontWeight: "bolder", fontSize: "16px" }}
                          >
                            Physics
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          lg={6}
                          md={6}
                          sm={12}
                          xs={12}
                          style={{ textAlign: "end" }}
                        ></Grid>
                      </Grid>

                      <Typography gutterBottom variant="h7" component="div">
                        Grade 12
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                          <Stack direction="row" spacing={2}>
                            <Avatar
                              alt="Travis Howard"
                              sx={{ width: 50, height: 50 }}
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

                  <Card
                    sx={{ maxWidth: 350, maxHeight: 700 }}
                    style={{
                      backgroundColor: "#E16969",
                      marginTop: "10px",
                      borderRadius: "20px",
                    }}
                  >
                    <CardContent style={{ marginLeft: "0px" }}>
                      <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                          <Typography
                            style={{ fontWeight: "bolder", fontSize: "16px" }}
                          >
                            Combined
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          lg={6}
                          md={6}
                          sm={12}
                          xs={12}
                          style={{ textAlign: "end" }}
                        ></Grid>
                      </Grid>

                      <Typography gutterBottom variant="h7" component="div">
                        Grade 12
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                          <Stack direction="row" spacing={2}>
                            <Avatar
                              alt="Travis Howard"
                              sx={{ width: 50, height: 50 }}
                              src={pic4}
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
                  </Card> */}
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
