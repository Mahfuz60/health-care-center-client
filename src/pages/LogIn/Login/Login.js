import { Button, Container, Grid, TextField, Typography, Alert, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/UseAuth";
import loginBg from "../../../images/login.png";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, loading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newLoginUser = { ...loginData };
    newLoginUser[field] = value;
    setLoginData(newLoginUser);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);

    e.preventDefault();
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 15, fontWeight: "bold" }} variant="h5">
            Please LogIn
          </Typography>

          {!loading && (
            <form onSubmit={handleLoginSubmit} style={{ marginTop: "15px" }}>
              <TextField
                placeholder="Your Email"
                type="email"
                sx={{ width: "60%", mt: 2 }}
                variant="standard"
                name="email"
                onChange={handleOnChange}
              />
              <TextField
                type="password"
                placeholder="Your Password"
                sx={{ width: "60%", mt: 2 }}
                variant="standard"
                name="password"
                onChange={handleOnChange}
              />
              <br />

              <Button type="submit" variant="contained" sx={{ mt: 5, backgroundColor: "#0CCFD8", color: "white", width: "60%" }}>
                SignIn
              </Button>
              <NavLink to="/register" style={{ textDecoration: "none" }}>
                <Button variant="text" sx={{ width: "60%", pt: 2 }}>
                  New User? Please Register
                </Button>
              </NavLink>
            </form>
          )}
          {loading && <CircularProgress />}
          {user?.email && <Alert severity="success">User LogIn Successfully!</Alert>}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={loginBg} alt="" style={{ width: "100%", height: "80%", marginTop: "50px" }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
