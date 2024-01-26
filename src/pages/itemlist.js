import  React from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"; 
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import PaymentsIcon from "@mui/icons-material/Payments";
import HomeIcon from '@mui/icons-material/Home';
import ClassIcon from '@mui/icons-material/Class';
export const mainListItem = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="Home"/>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <ClassIcon/>
            </ListItemIcon>
            <ListItemText primary="Classes"/>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <LocalLibraryRoundedIcon/>
            </ListItemIcon>
            <ListItemText primary="Teachers"/>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <PaymentsIcon/>
            </ListItemIcon>
            <ListItemText primary="Payments"/>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <SettingsRoundedIcon/>
            </ListItemIcon>
            <ListItemText primary="Settings"/>
        </ListItemButton>
    </React.Fragment>
)