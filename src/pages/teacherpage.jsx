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
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import NotificationIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import MuiDrawer from "@mui/material/Drawer";
import { ChevronLeft, ExpandMore } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from "@mui/icons-material/Home";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
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
import DropdownList from "react-widgets/DropdownList";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import pic1 from './assets/1.png'
import pic2 from './assets/2.png'
import pic3 from './assets/3.png'
import pic4 from './assets/4.png'
import pic5 from './assets/5.png'
import pic6 from './assets/6.png'
import pic7 from './assets/7.png'
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

  // const Search = styled('div')(({ theme }) => ({
  //   position: 'relative',
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: alpha(theme.palette.common.white, 0.15),
  //   '&:hover': {
  //     backgroundColor: alpha(theme.palette.common.white, 0.25),
  //   },
  //   marginRight: theme.spacing(2),
  //   marginLeft: 0,
  //   width: '100%',
  //   [theme.breakpoints.up('sm')]: {
  //     marginLeft: theme.spacing(3),
  //     width: 'auto',
  //   },
  // }));
  
  // const SearchIconWrapper = styled('div')(({ theme }) => ({
  //   padding: theme.spacing(0, 2),
  //   height: '100%',
  //   position: 'absolute',
  //   pointerEvents: 'none',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // }));
  
  // const StyledInputBase = styled(InputBase)(({ theme }) => ({
  //   color: 'inherit',
  //   '& .MuiInputBase-input': {
  //     padding: theme.spacing(1, 1, 1, 0),
  //     // vertical padding + font size from searchIcon
  //     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  //     transition: theme.transitions.create('width'),
  //     width: '100%',
  //     [theme.breakpoints.up('md')]: {
  //       width: '20ch',
  //     },
  //   },
  // }));


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

  return (

    <>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar 
     style={{ backgroundColor:"#F5F5F5", boxShadow:"none" }}
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
            <Typography sx={{ fontSize: "2rem",fontFamily:"Plus Jakarta Sans",fontWeight:"800", color:"black" }}>
              Teachers
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

            <Typography sx={{ marginLeft: "auto" }} variant="outlined" style={{color:"black"}}>
              Naveen Pathiraja
            </Typography>
          
            <Avatar src={pic2} sx={{ marginLeft: "10px", backgroundColor:"#d96767" }} variant="contained"/>
            
           
          </>
       
      </Toolbar>
    </AppBar>
      {/* <AppBar
         style={{ backgroundColor:"#F5F5F5", boxShadow:"none" }}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#F5F5F5",
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
              fontSize: "48px",
              fontFamily: "Plus Jakarta Sans",
              color: "black",
            }}
            noWrap
            component="div"
          >
            Teachers
          </Typography>
       
        </Toolbar>

      </AppBar> */}

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth}, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders" >
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
           backgroundColor:"#F5F5F5"
          
        }}
      >
        <Toolbar />
        <Box sx={{ mt: 10, backgroundColor: "white", borderRadius: "20px" }}>
          <Accordion defaultExpanded style={{borderRadius:"20px"}}>
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
                Chemistry
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Grid>
              <Grid
                container
                gap={4}
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
                      <p style={{ margin: 0 }}>Jagath</p>
                      <p style={{ margin: 0 }}>Chandana</p>
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
                      <p style={{ margin: 0 }}>Binura</p>
                      <p style={{ margin: 0 }}>Binduhewa</p>
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
                      <p style={{ margin: 0 }}>Tharindu</p>
                      <p style={{ margin: 0 }}>Silva</p>
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
                      <p style={{ margin: 0 }}>Ravindu</p>
                      <p style={{ margin: 0 }}>Senarath</p>
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
                      <p style={{ margin: 0 }}>Tharindu</p>
                      <p style={{ margin: 0 }}>Silva</p>
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
                      <p style={{ margin: 0 }}>Binura</p>
                      <p style={{ margin: 0 }}>Binduhewa</p>
                    </div>
                  </Stack>
                </Grid>

                <Grid item flexDirection="row">
                  <Stack spacing={2} alignItems="center">
                    <Avatar
                      alt="User Avatar"
                      src={pic6}
                      sx={{ width: 100, height: 100 }}
                    />
                    <div>
                    <p style={{ margin: 0 }}>Ravindu</p>
                      <p style={{ margin: 0 }}>Senarath</p>
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
                    <p style={{ margin: 0 }}>Tharindu</p>
                      <p style={{ margin: 0 }}>Silva</p>
                    </div>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>

        <Box sx={{ mt: 5, backgroundColor: "white", borderRadius: "20px" }}>
          <Accordion style={{borderRadius:"20px"}}>
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
                Physics
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Grid>
              <Grid
                container
                gap={4}
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
                      <p style={{ margin: 0 }}>Jagath</p>
                      <p style={{ margin: 0 }}>Chandana</p>
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
                      <p style={{ margin: 0 }}>Binura</p>
                      <p style={{ margin: 0 }}>Binduhewa</p>
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
                      <p style={{ margin: 0 }}>Tharindu</p>
                      <p style={{ margin: 0 }}>Silva</p>
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
                      <p style={{ margin: 0 }}>Ravindu</p>
                      <p style={{ margin: 0 }}>Senarath</p>
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
                      <p style={{ margin: 0 }}>Tharindu</p>
                      <p style={{ margin: 0 }}>Silva</p>
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
                      <p style={{ margin: 0 }}>Binura</p>
                      <p style={{ margin: 0 }}>Binduhewa</p>
                    </div>
                  </Stack>
                </Grid>

                <Grid item flexDirection="row">
                  <Stack spacing={2} alignItems="center">
                    <Avatar
                      alt="User Avatar"
                      src={pic6}
                      sx={{ width: 100, height: 100 }}
                    />
                    <div>
                    <p style={{ margin: 0 }}>Ravindu</p>
                      <p style={{ margin: 0 }}>Senarath</p>
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
                    <p style={{ margin: 0 }}>Tharindu</p>
                      <p style={{ margin: 0 }}>Silva</p>
                    </div>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>

        <Box sx={{ mt: 5, backgroundColor: "white", borderRadius: "20px" }}>
          <Accordion style={{borderRadius:"20px"}}>
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
                Biology
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Grid>
              <Grid
                container
                gap={4}
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
                      <p style={{ margin: 0 }}>Jagath</p>
                      <p style={{ margin: 0 }}>Chandana</p>
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
                      <p style={{ margin: 0 }}>Binura</p>
                      <p style={{ margin: 0 }}>Binduhewa</p>
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
                      <p style={{ margin: 0 }}>Tharindu</p>
                      <p style={{ margin: 0 }}>Silva</p>
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
                      <p style={{ margin: 0 }}>Ravindu</p>
                      <p style={{ margin: 0 }}>Senarath</p>
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
                      <p style={{ margin: 0 }}>Tharindu</p>
                      <p style={{ margin: 0 }}>Silva</p>
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
                      <p style={{ margin: 0 }}>Binura</p>
                      <p style={{ margin: 0 }}>Binduhewa</p>
                    </div>
                  </Stack>
                </Grid>

                <Grid item flexDirection="row">
                  <Stack spacing={2} alignItems="center">
                    <Avatar
                      alt="User Avatar"
                      src={pic6}
                      sx={{ width: 100, height: 100 }}
                    />
                    <div>
                    <p style={{ margin: 0 }}>Ravindu</p>
                      <p style={{ margin: 0 }}>Senarath</p>
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
                    <p style={{ margin: 0 }}>Tharindu</p>
                      <p style={{ margin: 0 }}>Silva</p>
                    </div>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>

        <Box sx={{ mt: 5, backgroundColor: "white", borderRadius: "20px" }}>
          <Accordion style={{borderRadius:"20px"}}>
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
                Combined Mathematics
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Grid>
              <Grid
                container
                gap={4}
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
                      <p style={{ margin: 0 }}>Jagath</p>
                      <p style={{ margin: 0 }}>Chandana</p>
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
                      <p style={{ margin: 0 }}>Binura</p>
                      <p style={{ margin: 0 }}>Binduhewa</p>
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
                      <p style={{ margin: 0 }}>Tharindu</p>
                      <p style={{ margin: 0 }}>Silva</p>
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
                      <p style={{ margin: 0 }}>Ravindu</p>
                      <p style={{ margin: 0 }}>Senarath</p>
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
                      <p style={{ margin: 0 }}>Tharindu</p>
                      <p style={{ margin: 0 }}>Silva</p>
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
                      <p style={{ margin: 0 }}>Binura</p>
                      <p style={{ margin: 0 }}>Binduhewa</p>
                    </div>
                  </Stack>
                </Grid>

                <Grid item flexDirection="row">
                  <Stack spacing={2} alignItems="center">
                    <Avatar
                      alt="User Avatar"
                      src={pic6}
                      sx={{ width: 100, height: 100 }}
                    />
                    <div>
                    <p style={{ margin: 0 }}>Ravindu</p>
                      <p style={{ margin: 0 }}>Senarath</p>
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
                    <p style={{ margin: 0 }}>Tharindu</p>
                      <p style={{ margin: 0 }}>Silva</p>
                    </div>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>

      </Box>
    
    </Box>

</>
    
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
