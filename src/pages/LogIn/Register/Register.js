import { Button, Container, Grid, TextField, Typography, Alert, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/UseAuth";
import loginBg from "../../../images/login.png";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, registerUser, loading, authError } = useAuth();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newRegisterUser = { ...loginData };
    newRegisterUser[field] = value;
    setLoginData(newRegisterUser);
  };

  //Handle register user
  const handleRegisterSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match!");
      return;
    }

    registerUser(loginData.email, loginData.password, history, loginData.name);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 15, fontWeight: "bold" }} variant="h5">
            Please Register
          </Typography>

          {!loading && (
            <form onSubmit={handleRegisterSubmit} style={{ marginTop: "15px" }}>
              <TextField
                placeholder="Enter Your Name"
                sx={{ width: "60%", mt: 2 }}
                variant="standard"
                type="text"
                name="name"
                onBlur={handleOnBlur}
              />
              <TextField
                placeholder="Enter Your Email"
                sx={{ width: "60%", mt: 2 }}
                variant="standard"
                type="email"
                name="email"
                onBlur={handleOnBlur}
              />
              <TextField
                type="password"
                placeholder="Enter Your Password"
                sx={{ width: "60%", mt: 2 }}
                variant="standard"
                name="password"
                onBlur={handleOnBlur}
              />
              <TextField
                type="password"
                placeholder="Retype Your Password"
                sx={{ width: "60%", mt: 2 }}
                variant="standard"
                name="password2"
                onBlur={handleOnBlur}
              />
              <br />

              <Button type="submit" variant="contained" sx={{ mt: 5, backgroundColor: "#0CCFD8", color: "white", width: "60%" }}>
                Register
              </Button>

              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button variant="text" sx={{ width: "60%", pt: 2 }}>
                  Already User? Please Login
                </Button>
              </Link>
            </form>
          )}
          {loading && <CircularProgress />}
          {user?.email && <Alert severity="success">User Registration Successfully!</Alert>}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>

        <Grid item xs={12} md={6}>
          <img src={loginBg} alt="" style={{ width: "100%", height: "80%", marginTop: "50px" }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
