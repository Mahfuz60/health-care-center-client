import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import chair from "../../../images/chair.png";
import Calender from "../../Shared/Calender/Calender";

const AppointmentHeader = ({ date, setDate }) => {
  return (
    <Container>
      <Grid container spacing={2} sx={{ mt: 10 }}>
        <Grid item xs={12} md={6} >
          <Typography variant="h4"  style={{ color: "#1CC7C1",fontWeight: "bold" }}>
            Appointment
          </Typography>
          <Box sx={{ m: 5 }}>
            <Calender date={date} setDate={setDate}></Calender>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} >
          <img src={chair} alt="" style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppointmentHeader;
