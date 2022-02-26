import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import AppointmentBook from "../AppointmentBook/AppointmentBook";

const appointmentSlot = [
  {
    id: 1,
    name: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "10:50 AM - 11:30 AM",
    space: 10,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "5:00 PM - 6:00 PM",
    space: 10,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "7:00 AM - 8:30 AM",
    space: 10,
  },
  {
    id: 5,
    name: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    space: 10,
  },
  {
    id: 6,
    name: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    space: 10,
  },
];

const AvailableAppointment = ({ date }) => {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" style={{ color: "#1CC7C1", fontWeight: "bold", textAlign: "center" }}>
        Available Appointments on {date.toDateString()}
      </Typography>

      <Grid container spacing={2} sx={{ mt: 4 }}>
        {appointmentSlot.map((appointment) => (
          <AppointmentBook key={appointment.id} appointment={appointment} date={date}></AppointmentBook>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointment;
