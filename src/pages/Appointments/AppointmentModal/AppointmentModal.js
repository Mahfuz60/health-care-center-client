import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Button, Fade } from "@mui/material";
import TextField from "@mui/material/TextField";

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

const AppointmentModal = ({ openModal, handleCloseModal, appointment, date }) => {
  const { name, time } = appointment;
  const [value, setValue] = useState(null);
  //form Handler
  const HandlerFromBooking = (e) => {
    alert("Appointment Submitted");
    handleCloseModal();
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
            <TextField sx={{ width: "90%", m: 1 }} placeholder="Your Name" />
            <TextField sx={{ width: "90%", m: 1 }} placeholder="Your Phone Number" />
            <TextField sx={{ width: "90%", m: 1 }} placeholder="Your Email" />
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
