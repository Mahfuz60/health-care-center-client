import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Doctor from "../../../images/doctor.png";
import DoctorBg from "../../../images/appointment-bg.png";
import { Button, Typography } from "@mui/material";

const appointmentBannerBg = {
  background: `url(${DoctorBg})`,
  backgroundColor: "#40485B",
  backgroundBlendMode: "darken, luminosity",
};

const AppointmentBanner = () => {
  return (
    <>
      <Box style={appointmentBannerBg} sx={{ flexGrow: 1, mt: 10 }}>
        <Grid container spacing={2}>
          <Grid xs={12} md={6}>
            <img src={Doctor} alt="" style={{ width: "400px", marginTop: "-100px" }} />
          </Grid>
          <Grid xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-start", textAlign: "left", alignItems: "center" }}>
            <Box>
              <Typography variant="h5" sx={{ my: 3, color: "#1CC7C1", fontWeight: "bold" }}>
                Appointment
              </Typography>
              <Typography variant="h4" sx={{ mb: 2, color: "white" }}>
                Make an Appointment <br /> Today
              </Typography>
              <Typography variant="p" sx={{ color: "white", mb: 3 }}>
                A doctor appointment letter informs a patient that a doctors appointment has been set aside either by their request, by request of
                another doctor or medical professional or as part of an ongoing program of care.
              </Typography>
              <br />
              <Button variant="contained" sx={{ mt: 3 }} sx={{ backgroundColor: "#1CC7C1", mt: 3 }}>
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AppointmentBanner;
