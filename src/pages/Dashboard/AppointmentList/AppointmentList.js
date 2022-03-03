import { Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/UseAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const AppointmentList = ({ date }) => {
  const { user, token } = useAuth();
  const [appointments, setAppointments] = useState([]);

  const [visited, setVisited] = useState(true);
  const handleAction = () => {
    setVisited(false);
  };

  useEffect(() => {
    const url = `http://localhost:5000/appointments?email=${user.email}&date=${date}`;
    fetch(url, {
      headers: { authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [date]);
  return (
    <Container>
      <Grid container spacing={2}>
        <TableContainer>
          <Typography variant="h5" sx={{ backgroundColor: "#11D0DA", width: "100%", textAlign: "center", fontWeight: "bold" }}>
            Appointment:{appointments.length}
          </Typography>
          <Table aria-label="Appointments table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">Service</TableCell>
                <TableCell align="center">Phone Number</TableCell>
                <TableCell align="center">Schedule</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.map((row) => (
                <TableRow key={row._id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.patientName}
                  </TableCell>
                  <TableCell align="center">{row.serviceName}</TableCell>
                  <TableCell align="center">{row.phone}</TableCell>
                  <TableCell align="center">{row.time}</TableCell>

                  {/* Action show */}
                  <TableCell align="center">
                    {visited ? (
                      <Button onClick={handleAction} variant="contained" sx={{ color: "white" }}>
                        Not visited
                      </Button>
                    ) : (
                      <Button variant="contained" sx={{ color: "white" }}>
                        visited
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Container>
  );
};

export default AppointmentList;
