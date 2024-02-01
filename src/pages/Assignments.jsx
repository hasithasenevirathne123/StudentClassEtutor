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
  Input,
  Tab,
  CardHeader,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Snackbar,
  TextareaAutosize,
  Container,
  FormControl,Checkbox,FormGroup
} from "@mui/material";

import { ExpandMore } from "@mui/icons-material";
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
  const [inputValue, setInputValue] = useState("");

  // Function to handle text field changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle button click
  const handleUpload = () => {
    // You can perform the upload logic here
    console.log("Uploading:", inputValue);
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
              Assignment
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
          height: "1000px",
        }}
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <Toolbar />

        <Container>
          <Grid container>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Card
                variant="outlined"
                style={{
                  width: "95%",
                  borderRadius: "20px",
                  height: "600px",
                  position: "static",
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
                          style={{ fontWeight: 700, fontFamily:"Poppins, sans-serif", fontSize:"32px" }}
                        >
                          Chemistry
                        </Typography>
                        <CardContent style={{ fontSize: "16px",fontFamily:"Poppins, sans-serif",fontWeight:400 }}>
                          Check your plagiarism level from the turnitin reports.
                          If your plagiarism level is more than 20% you need to
                          perform a resubmission
                        </CardContent>
                        <Typography
                          style={{ fontWeight: 400, fontFamily:"Poppins, sans-serif", fontSize:"14px" }}
                        >
                          Attachments
                        </Typography>

                        <CardActions></CardActions>
                      </Grid>
                    </div>
                    <div></div>
                  </div>
                </CardContent>

                <CardActions style={{ justifyContent: "end" }}></CardActions>
              </Card>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Card
                variant="outlined"
                style={{
                  width: "95%",
                  borderRadius: "20px",
                  height: "600px",
                  position: "static",
                }}
                sx={{ backgroundColor: "white" }}
              >
                <CardContent>
                  <div
                    style={{  justifyContent: "space-between" }}
                  >
                    <div>
                      <Grid item flexDirection="row">
                        <Typography
                          variant="h5"
                          style={{
                            fontWeight: 700,
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "16px",
                          }}
                        >
                          Submit Assignment
                        </Typography>
                        <CardContent style={{ fontSize: "16px" }}>
                          <Typography
                            style={{
                              fontWeight: "600",
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "16px",
                            }}
                          >
                            Upload Assignment
                          </Typography>

                          <TextField
                            type="file"
                            variant="outlined"
                            value={inputValue}
                            onChange={handleInputChange}
                          />
                          <Typography
                            variant="h5"
                            style={{
                              fontWeight:600,
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "16px",
                              marginTop: "10px",
                              width:"100%"
                            }}
                          >
                            Notes
                          </Typography>

                          <TextField
                            variant="outlined"
                            multiline
                            style=
                            {{ 
                              width: "100%", 
                              height:"100%", 
                              justifyContent:"center" }}
                          />

                          <FormGroup>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Click to Agree"
                            />
                          </FormGroup>
                        </CardContent>

                        <CardActions>
                          <Button
                           variant="contained"  
                          style={{width:"100%", 
                          backgroundColor:"#C75C5C", 
                          fontFamily:"Poppins, sans-serif",
                          fontWeight:800
                        
                        }}
                          >Submit
                          </Button>
                        </CardActions>
                      </Grid>
                    </div>
                    <div></div>
                  </div>
                </CardContent>

                <CardActions style={{ justifyContent: "end" }}></CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
