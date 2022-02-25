import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import Bg from "../../../images/bg.png";
import { Button, Typography } from "@mui/material";

const HomeBanner = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, mt: 18, mb: 15 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Your New Smile <br /> Starts Here
            </Typography>
            <Typography variant="p" sx={{ color: "gray"}}>
              Today's connected and busy medical practices can benefit greatly by adopting a patient portal or combined patient and doctor portal. The
              right software, system integration and security allows any practice to create one portal that benefits patients, physicians and other
              medical and administrative staff.
            </Typography>
            <br />
            <Button variant="contained" sx={{ color: "white", backgroundColor: "#1CC7C1", mt: 4 }}>
              GET APPOINTMENT
            </Button>
          </Grid>
          <Grid xs={12} md={7}>
            <img src={chair} alt="" style={{ width: "600px" }} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HomeBanner;
