import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Button, Fade } from "@mui/material";
import TextField from "@mui/material/TextField";
import useAuth from "../../../hooks/UseAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AppointmentModal = ({ openModal, handleCloseModal, appointment, date, setAppointmentSuccess }) => {
  const { name, time } = appointment;
  const { user } = useAuth();
  //Initial AppointmentInfo
  const initialInfo = { patientName: user.displayName, email: user.email, phone: "" };
  const [appointmentInfo, setAppointmentInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...appointmentInfo };
    newInfo[field] = value;

    setAppointmentInfo(newInfo);
    e.preventDefault();
  };
  //form Handler
  const HandlerFromBooking = (e) => {
    // alert(" Appointment Booking Successfully ");

    //collect data
    const appointment = {
      ...appointmentInfo,
      time,
      serviceName: name,
      date: date.toLocaleDateString(),
    };

    //send to data server
    fetch("http://localhost:5000/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          handleCloseModal();
          setAppointmentSuccess(true);
        }
      });

    e.preventDefault();
  };
  return (
    <Modal open={openModal} onClose={handleCloseModal}>
      <Fade in={openModal}>
        <Box sx={style}>
          <Typography variant="h5" sx={{ textAline: "center", color: "#1CC7C1" }}>
            {name}
          </Typography>
          <form onSubmit={HandlerFromBooking}>
            <TextField disabled sx={{ width: "90%", m: 1 }} defaultValue={time} />
            <TextField onBlur={handleOnBlur} name="patientName" sx={{ width: "90%", m: 1 }} defaultValue={user.displayName} />
            <TextField onBlur={handleOnBlur} name="phone" sx={{ width: "90%", m: 1 }} placeholder="Your Phone Number" />
            <TextField onBlur={handleOnBlur} name="email" sx={{ width: "90%", m: 1 }} defaultValue={user.email} />
            <TextField disabled sx={{ width: "90%", m: 1 }} defaultValue={date.toDateString()} />

            <Button type="submit" variant="contained" sx={{ backgroundColor: "#1CC7C1", color: "white", mt: 2 }}>
              Submit
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default AppointmentModal;
