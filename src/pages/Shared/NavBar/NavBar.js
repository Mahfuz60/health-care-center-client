import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/UseAuth";
import "./NavBar.css";

const NavBar = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <nav className="navbar navbar-expand-lg nav-header ">
          <div className="container-fluid">
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: "left", fontWeight: "bold", color: "white" }}>
              Health Care Center
            </Typography>
            <button
              className="navbar-toggler navbar-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
                    <Button style={{ color: "white" }}>Home</Button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/appointment" style={{ textDecoration: "none", color: "white" }}>
                    <Button color="inherit">Appointment</Button>
                  </Link>
                </li>

                <li className="nav-item">
                  {" "}
                  <Link to="/dashboard" style={{ textDecoration: "none", color: "white" }}>
                    <Button color="inherit">Dashboard</Button>
                  </Link>{" "}
                </li>
                <li className="nav-item">
                  <Button style={{ color: "white" }}>About</Button>
                </li>
                <li className="nav-item">
                  <Button style={{ color: "white" }}>Contact Us</Button>
                </li>
                <li className="nav-item">
                  {" "}
                  <Button style={{ color: "white" }}>Review</Button>
                </li>

                {user?.email ? (
                  <li className="nav-item">
                    <Link style={{ textDecoration: "none", color: "white" }}>
                      <Button onClick={logOut} color="inherit">
                        LogOut
                      </Button>
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
                      <Button color="inherit">Login</Button>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </Box>

      {/* <Box sx={{ flexGrow: 1 }}>
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
            <Link to="/dashboard" style={{ textDecoration: "none", color: "white" }}>
              <Button color="inherit">Dashboard</Button>
            </Link>{" "}
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
      </Box> */}
    </>
  );
};

export default NavBar;
