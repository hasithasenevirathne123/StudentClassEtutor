import React, { useState } from "react";
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  Item,
  Grid,
  FormControlLabel,
  Tab,
  Tabs,
  CardHeader,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container

} from "@mui/material";
import {  ExpandMore } from "@mui/icons-material";
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

    const [value, setValue] = React.useState("one");

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
   
  
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

        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid xs={12} lg={8}>
              <Card
                variant="outlined"
                style={{
                  width: "773px",
                  height: "353px",
                  borderRadius: "20px",
                }}
                sx={{ backgroundColor: "white" }}
              >
                <CardContent>
                  <Grid container spacing={5}>
                    <Grid item xs={6}>
                      
                      <Grid item xs={6}> <Typography
                        style={{
                          fontWeight: 400,
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "40px",
                        }}
                      >
                        Chemistry
                      </Typography></Grid>
                      <Typography
                        style={{
                          fontWeight: 700,
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        Grade 12
                      </Typography>
                      <Avatar
                        alt="Travis Howard"
                        sx={{ width: 50, height: 50, mt: 2 }}
                        variant="dot"
                        src={pic1}
                      />
                      <Typography
                        style={{
                          fontSize: "16px",
                          fontWeight: "700",
                          fontFamily: "Poppins, sans-serif",
                          color: "black",
                        }}
                      >
                        Tharindu Silva
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography>
                  Polymers: Organic polymers (polyphenols, polyvinyls),
                        Classification and basis of classification, Polymer
                        structure; Polymerization mechanisms, Thermal behavior,
                        Types of interactions in polymers. Chemical industry:
                        paints, emulsions, colloids, synthetic materials, soap
                        and detergents.
                  </Typography>

                </CardContent>

                <CardActions style={{ justifyContent: "end" }}></CardActions>
              </Card>
            </Grid>

            <Grid xs={12} md={6} lg={4}>
              <Card
                variant="outlined"
                style={{
                  width: "386px",
                  height: "353px",
                  borderRadius: "20px",
                  // marginLeft: "auto",
                }}
                sx={{ backgroundColor: "white" }}
              >
                <CardContent>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <Grid item flexDirection="row">
                        <Typography
                          style={{
                            fontWeight: 700,
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "20px",
                          }}
                        >
                          Chemistry
                        </Typography>
                        <CardContent
                          style={{
                            fontSize: "16px",
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: 400,
                          }}
                        >
                          <div>
                            <p
                              style={{
                                margin: 0,
                                fontWeight: 400,
                                fontSize: "14px",
                                fontFamily: "Poppins, sans-serif",
                                margintop: "14px",
                              }}
                            >
                              Date
                            </p>
                            <p
                              style={{
                                margin: 0,
                                fontWeight: 700,
                                fontSize: "20px",
                                fontFamily: "Poppins, sans-serif",
                              }}
                            >
                              Every Friday
                            </p>
                          </div>
                          <div>
                            <p
                              style={{
                                margin: 0,
                                fontWeight: 400,
                                fontSize: "14px",
                                fontFamily: "Poppins, sans-serif",
                                marginTop: "14px",
                              }}
                            >
                              Time
                            </p>
                            <p
                              style={{
                                margin: 0,
                                fontWeight: 700,
                                fontSize: "20px",
                                fontFamily: "Poppins, sans-serif",
                              }}
                            >
                              4.30PM - 6.30PM
                            </p>
                          </div>
                          <div>
                            <p
                              style={{
                                margin: 0,
                                fontWeight: 400,
                                fontSize: "14px",
                                fontFamily: "Poppins, sans-serif",
                                marginTop: "14px",
                              }}
                            >
                              No of Students Enrolled
                            </p>
                            <p
                              style={{
                                margin: 0,
                                fontWeight: 700,
                                fontSize: "20px",
                                fontFamily: "Poppins, sans-serif",
                              }}
                            >
                              5000
                            </p>
                          </div>
                        </CardContent>

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
                              Enroll Now
                            </Typography>
                          </Button>
                        </CardActions>
                      </Grid>
                    </div>
                  </div>
                </CardContent>

                <CardActions style={{ justifyContent: "end" }}></CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>

        {/* <Grid container sx={{ mt: 2 }}>
         */}

        {/* <Grid item lg={6} md={6} sm={12} xs={12}></Grid> */}

        {/* <Grid item lg={6} md={6} sm={12} xs={12} style={{ marginTop: "5px" }}>
        
          </Grid> */}
        {/* </Grid> */}

        <Grid container style={{ marginTop: "30px" }}>
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
              style={{ width: "1192px", height: "492px", borderRadius: "20px" }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                <Tab value="one" label="Syllabus" />
                <Tab value="two" label="Reviews" />
              </Tabs>

              <CardContent>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <Grid item flexDirection="row">
                      <Typography
                        style={{
                          fontWeight: 700,
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        Chemistry
                      </Typography>
                      <CardContent
                        style={{
                          fontSize: "16px",
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: 400,
                        }}
                      >
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
                    </Grid>
                  </div>
                </div>
              </CardContent>
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
