import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/UseAuth";

const NavBar = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: "left", fontWeight: "bold" }}>
              Health Care Center
            </Typography>
            <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
              <Button color="inherit">Home</Button>
            </Link>
            <Link to="/appointment" style={{ textDecoration: "none", color: "white" }}>
              <Button color="inherit">Appointment</Button>
            </Link>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact Us</Button>
            <Button color="inherit">Review</Button>

            {user?.email ? (
              <Link style={{ textDecoration: "none", color: "white" }}>
                <Button onClick={logOut} color="inherit">
                  LogOut
                </Button>
              </Link>
            ) : (
              <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
                <Button color="inherit">Login</Button>
              </Link>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
