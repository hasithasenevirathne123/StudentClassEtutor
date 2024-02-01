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
  CardHeader,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Container, ExpandMore } from "@mui/icons-material";
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
import Alert from "@mui/material/Alert";
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
        <ListItem
          onClick={() => {
            navigate("/home");
          }}
        >
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
                fontSize: "2rem",
                fontFamily: "Plus Jakarta Sans",
                fontWeight: "800",
                color: "black",
              }}
            >
              View Class
            </Typography>
          </>

          <>
            <Typography
              sx={{ marginLeft: "auto" }}
              variant="outlined"
              style={{ color: "black" }}
            >
              Naveen Pathiraja
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
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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

        <Grid container>
          <Grid
            item
            flexDirection="row"
            lg={6}
            md={6}
            sm={12}
            xs={12}
            style={{ minWidth: "-webkit-fill-available" }}
          >
            <Card
              variant="outlined"
              style={{ width: "1192px", height: "180px", borderRadius: "20px" }}
            >
             
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  style={{marginLeft:"0px", marginTop:"0px"}}
                >
                  <Grid item xs={2}>
                    <Typography
                      sx={{
                        ml: 0,
                        fontWeight: 600,
                        fontFamily:"Poppins, sans-serif",
                        fontSize: "40px",
                      }}
                    >
                      Chemistry
                    </Typography>
                    
                  </Grid>

                  <Grid item xs={2}>
                      <Button
                        variant="outlined"
                        color="error"
                        style={{
                          borderRadius: "36px",
                          justifyContent: "start",
                        }}
                      >
                        Theory
                      </Button>
                  </Grid>

                  <Grid item xs={2}>
                    <div>
                    <p style={{ margin: 0, fontWeight:400, fontSize:"14px",fontFamily:"Poppins, sans-serif" }}>Date</p>
                    <p style={{ margin: 0, fontWeight:700, fontSize:"20px",fontFamily:"Poppins, sans-serif" }}>Every Friday</p>
                  </div>
                  </Grid>

                  <Grid item xs={4}>
                  <div>
                    <p style={{ margin: 0, fontWeight:400, fontSize:"14px" }}>Time</p>
                    <p style={{ margin: 0, fontWeight:700, fontSize:"20px" }}>4.30PM - 6.30PM </p>
                  </div>
                  </Grid>

                  <Grid item xs={3}>
                  <Typography
                      sx={{
                        ml: 0,
                        fontWeight: 700,
                        fontFamily:"Poppins, sans-serif",
                        fontSize: "24px",
                      }}
                    >
                      Grade 12
                    </Typography>
                  </Grid>
                </Grid>

                <Grid flexDirection="row">
                <div>
                  <Avatar
                              alt="Travis Howard"
                              style={{ width: 50, height:50, marginLeft:"2rem" }}
                              variant="dot"
                              src={pic1}
                            />
                  </div>
                  {/* <Typography
                      sx={{
                        ml: 0,
                        fontWeight: 400,
                        fontFamily: "Plus Jakarta Sans",
                        fontSize: 20,
                      }}
                    >
                      Jagath Chandana
                    </Typography> */}
                </Grid>
{/* 
                  <Grid item xs={2}>
                  <div>
                  <Avatar
                              alt="Travis Howard"
                              style={{ width: 50, height:50, marginLeft:"5px" }}
                              variant="dot"
                              src={pic1}
                            />
                  </div>
                  </Grid> */}

                  {/* <Grid item xs={2}>
                  <Typography
                      sx={{
                        ml: 0,
                        fontWeight: 600,
                        fontFamily: "Plus Jakarta Sans",
                        fontSize: 24,
                      }}
                    >
                      Jagath Chandana
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                  <Typography
                      sx={{
                        ml: 0,
                        fontWeight: 600,
                        fontFamily: "Plus Jakarta Sans",
                        fontSize: 24,
                      }}
                    >
                      Jagath Chandana
                    </Typography>
                  </Grid> */}
           
            </Card>
          </Grid>
        </Grid>

        <Grid container sx={{ mt:2}}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Typography
              sx={{
                ml: 0,
                fontWeight: 600,
                fontFamily: "Poppins, sans-serif",
                fontSize: "24px",
              }}
            >
              Course Content
            </Typography>

            <Card
              variant="outlined"
              style={{ width: "550px", height:"398px", borderRadius: "20px" }}
              sx={{ backgroundColor: "white" }}
            >
              <CardContent>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <Grid item flexDirection="row">
                      <Typography  style={{ fontWeight:700, fontFamily:"Poppins, sans-serif", fontSize:"20px" }}>
                        Chemistry
                      </Typography>
                      <CardContent style={{ fontSize: "16px",fontFamily:"Poppins, sans-serif",fontWeight:400 }}>
                        Polymers: Organic polymers (polyphenols, polyvinyls),
                        Classification and basis of classification, Polymer
                        structure; Polymerization mechanisms, Thermal behavior,
                        Types of interactions in polymers. Chemical industry:
                        paints, emulsions, colloids, synthetic materials, soap
                        and detergents, ceramics and cement, Standards and
                        Quality assurance; Electrochemistry applications: Cells
                        and corrosion, plating, sensors, fuel cells; Petroleum
                        products: Formation, processing, use and environmental
                        damage; Pesticides: Classification, mode of action of
                        organochlorines, organophosphates, carbonates and
                        pyrethroids, Toxicity, Environmental fate, pesticide
                        formulations.
                      </CardContent>
                      {/* <Typography style={{ fontWeight: 700, fontFamily:"Poppins, sans-serif",fontSize:"16px" }}>
                        Chemistry
                      </Typography>
                      <CardContent style={{ fontSize: "16px",fontFamily:"Poppins, sans-serif",fontWeight:400  }}>
                        Polymers: Organic polymers (polyphenols, polyvinyls),
                        Classification and basis of classification, Polymer
                        structure; Polymerization mechanisms, Thermal behavior,
                        Types of interactions in polymers. Chemical industry:
                        paints, emulsions, colloids, synthetic materials, soap
                        and detergents formulations.
                      </CardContent> */}
                      <CardActions></CardActions>
                    </Grid>
                  </div>
                  <div>
                    {/* <Typography variant="h6" gutterBottom>
                      Started at:
                    </Typography> */}
                  </div>
                </div>
              </CardContent>

              <CardActions style={{ justifyContent: "end" }}>
                {/* <Typography style={{ marginRight: "auto" }}>
                  By Shiran
                </Typography> */}
                {/* <Button
                  style={{
                    backgroundColor: "#d96767",
                    borderRadius: "12px",
                    height: "60px",
                    width: "180px",
                    label: "Join Now",
                  }}
                  variant="contained"
                  endIcon={<TrendingFlatIcon />}
                >
                  Join Now
                </Button> */}
              </CardActions>
            </Card>

          <Box sx={{ mt: 10, backgroundColor: "white", borderRadius: "20px" }}>
          <Accordion  style={{borderRadius:"20px"}}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography
                sx={{
                  ml: 5,
                  fontWeight: 800,
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: 20,
                }}
              >
               Past Recording
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
            
            </AccordionDetails>
          </Accordion>
        </Box>
          </Grid>
          

          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ml:0}}>
            <Typography
              sx={{
                ml: 0,
                fontWeight: 600,
                fontFamily: "Poppins, sans-serif",
                fontSize:"24px",
              }}
            >
              Assignments
            </Typography>

            <Card
              onClick={() => {
                navigate("/Assignmentspage");
              }}
              variant="outlined"
              style={{
                width: "510px",
                height: "163px",
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
                        fontWeight:700,
                        fontSize: "20px",
                        fontFamily: "Poppins, sans-serif",
                        
                      }}
                    >
                      Biology
                    </Typography>

                    <Typography
                      variant="h5"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight:400,
                        fontSize: "16px",
                        textAlign: "left",
                      }}
                    >
                      Polymers: Organic polymers (polyphenols, polyvinyls),
                      Classification and basis of classification, Polymer
                      structure; Polymerization mechanisms,
                    </Typography>
                  </div>
                  <div>
                    <p style={{ margin: 0 , fontFamily:"Poppins, sans-serif", fontWeight:400, fontSize:"14px"}}>Due on</p>
                    <p style={{ margin: 0 , fontFamily:"Poppins, sans-serif", fontWeight:700, fontSize:"16px"}}>2024.01.24</p>
                  </div>
                </div>
              </CardContent>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div></div>
                <div>
                  <Alert severity="success">Submitted</Alert>
                </div>
              </div>
            </Card>

            <Card
              variant="outlined"
              style={{
                width: "510px",
                height: "163px",
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
                        fontWeight:700,
                        fontSize: "20px",
                        fontFamily: "Poppins, sans-serif",
                        
                      }}
                    >
                      Chemistry
                    </Typography>

                    <Typography
                      variant="h5"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "16px",
                      }}
                    >
                      Polymers: Organic polymers (polyphenols, polyvinyls),
                      Classification and basis of classification, Polymer
                      structure; Polymerization mechanisms,
                    </Typography>
                  </div>
                  <div>
                    <p style={{ margin: 0 , fontFamily:"Poppins, sans-serif", fontWeight:400, fontSize:"14px"}}>Due on</p>
                    <p style={{ margin: 0 , fontFamily:"Poppins, sans-serif", fontWeight:700, fontSize:"16px"}}>2024.01.24</p>
                  </div>
                </div>
              </CardContent>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div></div>
                <div>
                  <Alert severity="error">Not Submitted</Alert>
                </div>
              </div>
            </Card>

            <Card
              variant="outlined"
              style={{
                width: "510px",
                height: "163px",
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
                        fontWeight:700,
                        fontSize: "20px",
                        fontFamily: "Poppins, sans-serif",
                        
                      }}
                    >
                      Physics
                    </Typography>

                    <Typography
                      variant="h5"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight:400,
                        fontSize: "16px",
                      }}
                    >
                      Polymers: Organic polymers (polyphenols, polyvinyls),
                      Classification and basis of classification, Polymer
                      structure; Polymerization mechanisms,
                    </Typography>
                  </div>
                  <div>
                  <p style={{ margin: 0 , fontFamily:"Poppins, sans-serif", fontWeight:400, fontSize:"14px"}}>Due on</p>
                    <p style={{ margin: 0 , fontFamily:"Poppins, sans-serif", fontWeight:700, fontSize:"16px"}}>2024.01.24</p>
                  </div>
                </div>
              </CardContent>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div></div>
                <div>
                  <Alert severity="success">Submitted</Alert>
                </div>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  
  window: PropTypes.func,
};

export default ResponsiveDrawer;
