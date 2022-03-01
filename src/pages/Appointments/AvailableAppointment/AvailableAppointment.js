import { Alert, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import AppointmentBook from "../AppointmentBook/AppointmentBook";

const appointmentSlot = [
  {
    id: 1,
    name: "Teeth  Extraction",
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
    name: "Fluoride Treatment",
    time: "8:00 AM - 9:00 AM",
    space: 10,
  },
  {
    id: 6,
    name: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    space: 10,
  },
  {
    id: 7,
    name: "Oral Surgery",
    time: "10:00 AM - 11:00 AM",
    space: 7,
  },
  {
    id: 8,
    name: "Pediatric Dental",
    time: "2:00 PM - 3:00 pM",
    space: 18,
  },
  {
    id: 9,
    name: "Teeth Whitening",
    time: "5:00 PM - 8:00 pM",
    space: 20,
  },
];

const AvailableAppointment = ({ date }) => {
  const [appointmentSuccess, setAppointmentSuccess] = useState(false);
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" style={{ color: "#1CC7C1", fontWeight: "bold", textAlign: "center" }}>
        Available Appointments on {date.toDateString()}
      </Typography>

      {/* confirmation appointment booking information */}
      {appointmentSuccess && <Alert severity="success">Appointment Booked Successfully!</Alert>}

      <Grid item container spacing={2} sx={{ my: 10 }}>
        {appointmentSlot.map((appointment) => (
          <AppointmentBook key={appointment.id} appointment={appointment} date={date} setAppointmentSuccess={setAppointmentSuccess}></AppointmentBook>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointment;
