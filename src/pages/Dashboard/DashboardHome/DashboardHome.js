import { Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import Calender from "../../Shared/Calender/Calender";
import AppointmentList from "../AppointmentList/AppointmentList";

const DashboardHome = () => {
  const [date, setDate] = useState(new Date());
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={4}>
        <Typography variant="h5" sx={{ py: 3, fontWeight: "bold", color: "black", textAlign: "left" }}>
          Appointment
        </Typography>

        <Paper elevation={4}>
          <Calender date={date} setDate={setDate}></Calender>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={8} sx={{ pt: 8 }}>
        <Paper sx={{ m: 4 }}>
          <AppointmentList date={date}></AppointmentList>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default DashboardHome;
