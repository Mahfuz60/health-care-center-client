import React, { useState } from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import AppointmentModal from "../AppointmentModal/AppointmentModal";

const AppointmentBook = ({ appointment, date,setAppointmentSuccess }) => {
  const { name, time, space } = appointment;

  //Modal open
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ backgroundColor: "white", margin: "10px" }}>
          <Typography sx={{ color: "#1CC7C1", fontWeight: "bold", pt: 2 }} variant="h5">
            {name}
          </Typography>
          <Typography variant="h6">{time}</Typography>
          <Typography variant="p" sx={{ color: "gray", fontWeight: "bold" }}>
            {space} Spaces Available
          </Typography>
          <br />
          <Button onClick={handleOpenModal} variant="contained" sx={{ backgroundColor: "#1CC7C1", color: "white", m: 2 }}>
            Book Appointment
          </Button>
        </Paper>
      </Grid>
      <AppointmentModal openModal={openModal} handleCloseModal={handleCloseModal} appointment={appointment} date={date} setAppointmentSuccess={setAppointmentSuccess}></AppointmentModal>
    </>
  );
};

export default AppointmentBook;
