import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SettingsIcon from "@mui/icons-material/Settings";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LogoutIcon from "@mui/icons-material/Logout";
import ContactsIcon from "@mui/icons-material/Contacts";
import List from "@mui/material/List";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import useAuth from "../../../hooks/UseAuth";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddDoctor from "../AddDoctor/AddDoctor";
import AdminRoute from "../../LogIn/AdminRoute/AdminRoute";

const drawerWidth = 200;

const Dashboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const { logOut, admin } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //nested route
  let { path, url } = useRouteMatch();

  const drawer = (
    <Box>
      <Toolbar />
      <Divider />
      <List sx={{ textAlign: "start" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#11D0DA" }}>
          <Button color="inherit" sx={{ mt: 2 }}>
            <HomeIcon />
            Home
          </Button>
        </Link>
        <br />

        {/* Nested Route start */}
        <Link to={`${url}`} style={{ textDecoration: "none", color: "#11D0DA" }}>
          <Button color="inherit" sx={{ mt: 2 }}>
            <DashboardIcon />
            Dashboard
          </Button>
        </Link>
        <br />

        {admin && (
          <Box>
            <Link to={`${url}/addDoctor`} style={{ textDecoration: "none", color: "#11D0DA" }}>
              <Button color="inherit" sx={{ mt: 2 }}>
                <ContactsIcon />
                Add Doctor
              </Button>
            </Link>
            <br />
            <Link to={`${url}/makeAdmin`} style={{ textDecoration: "none", color: "#11D0DA" }}>
              <Button color="inherit" sx={{ mt: 2 }}>
                <ContactsIcon />
                Make Admin
              </Button>
            </Link>
            <br />
          </Box>
        )}
        {/* Nested Route end*/}
        <Link to="/appointment" style={{ textDecoration: "none", color: "#11D0DA" }}>
          <Button color="inherit" sx={{ mt: 2 }}>
            <AssignmentIcon />
            Appointment
          </Button>
        </Link>
        <br />

        <Link to="/" style={{ textDecoration: "none", color: "#11D0DA" }}>
          <Button color="inherit" sx={{ mt: 2 }}>
            <ContactsIcon />
            Patients
          </Button>
        </Link>
        <br />
        <Link to="/" style={{ textDecoration: "none", color: "#11D0DA" }}>
          <Button color="inherit" sx={{ mt: 2 }}>
            <InboxIcon />
            Prescriptions
          </Button>
        </Link>
        <br />
        <Link to="/" style={{ textDecoration: "none", color: "#11D0DA" }}>
          <Button color="inherit" sx={{ mt: 2 }}>
            <SettingsIcon />
            Setting
          </Button>
        </Link>
        <br />

        <Link to="/" style={{ textDecoration: "none", color: "#11D0DA" }}>
          <Button onClick={logOut} color="inherit" sx={{ mt: 2 }}>
            <LogoutIcon />
            LogOut
          </Button>
        </Link>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />

        {/* Nested Routing */}

        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/addDoctor`}>
            <AddDoctor></AddDoctor>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
};

export default Dashboard;
