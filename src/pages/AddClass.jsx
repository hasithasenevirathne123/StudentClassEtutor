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
  FormControl,
  InputLabel,Select
} from "@mui/material";
import {  ExpandMore } from "@mui/icons-material";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import NotificationIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import MuiDrawer from "@mui/material/Drawer";
import { ChevronLeft } from "@mui/icons-material";

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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import img1 from "./assets/flask (3).png";
import img2 from "./assets/physics.png";
import img3 from "./assets/mathematics (2).png";
import img4 from "./assets/Group 38.png";
import pic1 from './assets/1.png'
import pic2 from './assets/2.png'
import pic3 from './assets/3.png'
import pic4 from './assets/4.png'
import pic5 from './assets/5.png'
import pic6 from './assets/6.png'
import pic7 from './assets/7.png'
import computer from './assets/computer.png'

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
        <ListItem onClick={()=>{
          navigate("/home")
        }}>
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

    // const options = ['Grade9', 'Grade10', 'Grade11',  
    // 'Grade 12'] 

    const Grade = [
      { value: 'Grade10', label: 'Grade10' },
      { value: 'Grade11', label: 'Grade11' },
      { value: 'Grade12', label: 'Grade12' },
    ];
  
    const [selectedGrade, setSelectedGrade] = useState(Grade[0].value);
  
    const handleGradeChange = (value) => {
      setSelectedGrade(value);
    };


    const Stream = [
      { value: 'Maths', label: 'Maths' },
      { value: 'ICT', label: 'ICT' },
      { value: 'Biology', label: 'Biology' },
    ];
  
    const [selectedStream, setSelectedStream] = useState(Grade[0].value);
  
    const handleStreamChange = (value) => {
      setSelectedGrade(value);
    };

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
                fontSize: "36px",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "800",
                color: "black",
              }}
            >
              Add Class
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

      {/* <AppBar
        style={{ backgroundColor: "#F5F5F5", boxShadow:"none" }}
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
          <Button startIcon={<ArrowBackIcon/>}></Button>
          <Typography
            style={{
              fontSize: "48px",
              fontFamily: "Plus Jakarta Sans",
              color: "black",
            }}
            noWrap
            component="div"
          >
            Add Class
          </Typography>
        </Toolbar>
      </AppBar> */}
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
          backgroundColor: "#F5F5F5",
          height: "1000px",
        }}
      >
        <Toolbar />

        <Grid sx={{mt:4}}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item lg={3} md={8} sm={12} xs={12}>
            <div>
              <label style={{fontFamily:"Poppins, sans-serif",fontweight:"500",fontSize:"16"}}>Select Your Grade</label>
            </div>

            <div>
              <select style={{width:"221px", height:"49px", borderRadius:"10px", fontFamily:"Poppins, sans-serif", fontweight:"500", fontSize:"16px"}}>
                <option value="">Grade 12</option>
              </select>
            </div>

            </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12}>
          <div>
              <label style={{fontFamily:"Poppins, sans-serif",fontweight:"500",fontSize:"16"}}>Select Your Stream</label>
            </div>

            <div>
              <select style={{width:"221px", height:"49px", borderRadius:"10px", fontFamily:"Poppins, sans-serif", fontweight:"500", fontSize:"16px"}}>
                <option value="">Physical Science</option>
              </select>
            </div>

            {/* <FormControl
              sx={{
                justifyContent: "center",
                width: "221px",
                height: "49px",
                backgroundColor: "white",
                borderRadius: "10px",
                fontFamily: "Plus Jakarta Sans",
              }}
            >
              <Select
                labelId="dropdown-label"
                id="dropdown"
                value={selectedStream}
              >
                {Stream.map((Stream) => (
                  <MenuItem key={Stream.value} value={Stream.value}>
                    {Stream.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}
          </Grid>

        </Grid>

        <Grid flexDirection="row" sx={{ mt: 2 }}>

          <Grid
            container
            gap={4}
            style={{
              justifyContent: "left",
              border: "10px",
              marginTop: "10px",
            }}
          >
            <Grid item flexDirection="row">
              <Card onClick={()=>navigate("/ViewSubject")}
                sx={{ minWidth: 100, maxHeight: 500 }}
                style={{ backgroundColor: "", borderRadius: "12px" }}
              >
                <CardContent style={{ height: "200px" }}>
                  <CardMedia
                    component="img"
                    height="80%"
                    weight="80%"
                    image={img1}
                  />
                  <Typography
                    color="#000000"
                    fontFamily="Poppins, sans-serif"
                    fontSize="20px"
                    fontWeight="800"
                  >
                    Chemistry
                  </Typography>
                  <Typography variant="h2" component="div"></Typography>
                  <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                  ></Typography>
                  <Typography variant="body2"></Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item flexDirection="row">
              <Card
                sx={{ minWidth: 100, maxHeight: 500 }}
                style={{ backgroundColor: "", borderRadius: "12px" }}
              >
                <CardContent style={{ height: "200px" }}>
                  <CardMedia
                    component="img"
                    height="80%"
                    weight="80%"
                    image={img2}
                  />
                  <Typography
                   color="#000000"
                   fontFamily="Poppins, sans-serif"
                   fontSize="20px"
                   fontWeight="800"
                  >
                    Physics
                  </Typography>
                  <Typography variant="h2" component="div"></Typography>
                  <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                  ></Typography>
                  <Typography variant="body2"></Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item flexDirection="row">
              <Card
                sx={{ minWidth: 100, maxHeight: 500 }}
                style={{ backgroundColor: "", borderRadius: "12px" }}
              >
                <CardContent style={{ height: "200px" }}>
                  <CardMedia
                    component="img"
                    height="80%"
                    weight="80%"
                    image={img3}
                  />
                  <Typography
                   color="#000000"
                   fontFamily="Poppins, sans-serif"
                   fontSize="20px"
                   fontWeight="800"
                  >
                    Mathematics
                  </Typography>
                  <Typography variant="h2" component="div"></Typography>
                  <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                  ></Typography>
                  <Typography variant="body2"></Typography>
                </CardContent>
              </Card>
            </Grid>
           
            <Grid item flexDirection="row">
              <Card
                sx={{ minWidth: 100, maxHeight: 500 }}
                style={{ backgroundColor: "", borderRadius: "12px" }}
              >
                <CardContent style={{ height: "200px" }}>
                  <CardMedia
                    component="img"
                    height="80%"
                    weight="80%"
                    image={computer}
                  />
                  <Typography
                    color="#000000"
                    fontFamily="Poppins, sans-serif"
                    fontSize="20px"
                    fontWeight="800"
                  >
                  ICT
                  </Typography>
                  <Typography variant="h2" component="div"></Typography>
                  <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                  ></Typography>
                  <Typography variant="body2"></Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img4}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Biology
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img3}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Mathematics
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img1}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Chemistry
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img3}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Mathematics
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid> */}
          </Grid>
        </Grid>

        <Box sx={{ mt: 2, backgroundColor: "white", borderRadius: "20px" }}>
          {/* <Accordion defaultExpanded style={{borderRadius:"20px"}}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
            <Typography sx={{ml:5, fontWeight:800, fontFamily:"Plus Jakarta Sans", fontSize:20}}>Find By Subject</Typography>


            </AccordionSummary>
            <AccordionDetails>
    
            </AccordionDetails>
          </Accordion>

           <Container>
           
          </Container>  */}
        </Box>

        {/* <Box sx={{ mt: 2, backgroundColor: "white", borderRadius: "20px" }}>

        <Accordion  style={{borderRadius:"20px"}}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
            <Typography sx={{ml:5, fontWeight:800, fontFamily:"Plus Jakarta Sans", fontSize:20}}>Find By grade</Typography>


            </AccordionSummary>
            <AccordionDetails>
            <Grid>
              <Grid
                container
                gap={4}
                style={{ justifyContent: "center", border: "10px", padding:"20px" }}
              >
                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "#F9E788", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img1}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Chemistry
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "#B4DEF0", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img2}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Physics
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "#F6A695", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img3}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Mathematics
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "#F9E788", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img4}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Biology
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "#F9E788", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img3}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Mathematics
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "#F9E788", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img3}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Mathematics
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "#F9E788", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img1}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Chemistry
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "#F9E788", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img2}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Physics
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "#F9E788", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img3}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Mathematics
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "#F9E788", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img4}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Biology
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "#F9E788", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img2}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Physics
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "#F9E788", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img4}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Biology
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "#F9E788", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img3}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Mathematics
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "#F9E788", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img1}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Chemistry
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "#F9E788", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img3}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Mathematics
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>
                
              </Grid>
            </Grid>
            </AccordionDetails>
          </Accordion>

          <Container>
           
          </Container>
        </Box>

        <Box sx={{ mt: 2, backgroundColor: "white", borderRadius: "20px" }}>

        <Accordion style={{borderRadius:"20px"}}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
            <Typography sx={{ml:5, fontWeight:800, fontFamily:"Plus Jakarta Sans", fontSize:20}}>Find By Instructor</Typography>


            </AccordionSummary>
            <AccordionDetails>
            <Grid>
              <Grid
                container
                gap={4}
                style={{ justifyContent: "center", border: "10px", padding:"20px" }}
              >
                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "#F9E788", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img1}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Chemistry
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "#B4DEF0", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img2}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Physics
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "#F6A695", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img3}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Mathematics
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "#F9E788", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img4}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Biology
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "#F9E788", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img3}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Mathematics
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "#F9E788", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img3}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Mathematics
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "#F9E788", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img1}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Chemistry
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "#F9E788", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img2}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Physics
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "#F9E788", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img3}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Mathematics
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "#F9E788", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img4}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Biology
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "#F9E788", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img2}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Physics
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "#F9E788", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img4}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Biology
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "#F9E788", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img3}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Mathematics
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "#F9E788", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img1}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Chemistry
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item flexDirection="row">
                  <Card
                    sx={{ minWidth: 100, maxHeight: 500 }}
                    style={{ backgroundColor: "#F9E788", borderRadius: "12px" }}
                  >
                    <CardContent style={{ height: "200px" }}>
                      <CardMedia
                        component="img"
                        height="80%"
                        weight="80%"
                        image={img3}
                      />
                      <Typography
                        color="#000000"
                        fontWeight={800}
                        fontFamily="Plus Jakarta Sans"
                        fontSize={20}
                      >
                        Mathematics
                      </Typography>
                      <Typography variant="h2" component="div"></Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="body2"></Typography>
                    </CardContent>
                  </Card>
                </Grid>
                
              </Grid>
            </Grid>
            </AccordionDetails>
          </Accordion>

          <Container>
           
          </Container>
        </Box> */}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
