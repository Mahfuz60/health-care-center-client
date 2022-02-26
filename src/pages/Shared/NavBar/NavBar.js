import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" >
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: "left", fontWeight: "bold" }}>
              Health Care Center
            </Typography>
            <Button color="inherit">Home</Button>
            <Link to="/appointment">
              <Button color="inherit">Appointment</Button>
            </Link>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact Us</Button>
            <Button color="inherit">Review</Button>
            <Button color="inherit">Blog</Button>

            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
