import { Alert, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import useAuth from "../../../hooks/UseAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();

  const handleOnSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
          setEmail("");
        }
      });
    e.preventDefault();
  };

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  return (
    <Container container spacing={2} sx={{ pt: 8 }}>
      <Grid item sx={{ textAlign: "center" }}>
        <Typography variant="h5" sx={{ color: "#1976D2", fontWeight: "bold" }}>
          Make an Admin
        </Typography>

        <form onSubmit={handleOnSubmit} style={{ marginTop: "15px" }}>
          <TextField placeholder=" Email" name="email" onBlur={handleOnBlur} style={{ width: "70%" }} type="email" />

          <br />

          <Button type="submit" variant="contained" style={{ width: "20%", marginTop: "10px" }}>
            Make Admin
          </Button>
        </form>

        {success && <Alert severity="success">Made Admin Successfully!</Alert>}
      </Grid>
    </Container>
  );
};

export default MakeAdmin;
