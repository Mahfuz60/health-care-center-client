import React, { useState } from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <NavBar></NavBar>
      <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
      <AvailableAppointment date={date} ></AvailableAppointment>
    </div>
  );
};

export default Appointment;
