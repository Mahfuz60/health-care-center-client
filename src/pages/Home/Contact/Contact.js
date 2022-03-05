import { Button, Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";


const Contact = () => {
  const [value, setValue] = useState(null);
  const handleContactFrom = (e) => {
    alert("Message Submitted");
    setValue("");
    e.preventDefault();
  };
  return (
    <>
   
      <Container id="contactUs" sx={{ py: 8 }}>
        <Grid item container spacing={2} xs={12} md={12}>
          <Box sx={{ backgroundColor: "#3A4154", textAlign: "center", width: "200%" }}>
            <Typography variant="h5" sx={{ color: "#1CC7C1", p: 2, fontWeight: "bold" }}>
              Contact Us
            </Typography>
            <Typography variant="h4" sx={{ color: "white" }}>
              Always connect with us
            </Typography>
            <form onSubmit={handleContactFrom}>
              <TextField sx={{ width: "90%", m: 1, backgroundColor: "white" }} placeholder="Email Address*" value={value} />
              <TextField sx={{ width: "90%", m: 1, backgroundColor: "white" }} placeholder="Subject*" value={value} />
              <TextField multiline sx={{ width: "90%", m: 1, backgroundColor: "white" }} placeholder="Message*" value={value} /> <br />
              <Button type="submit" variant="contained" sx={{ width: "100px", backgroundColor: "#1CC7C1", color: "white", m: 3 }}>
                Submit
              </Button>
            </form>
          </Box>
        </Grid>
      </Container>

     
    </>
  );
};

export default Contact;
