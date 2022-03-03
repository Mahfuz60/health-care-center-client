import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import doctor1 from "../../../images/doctor1.png";
import doctor2 from "../../../images/doctor2.png";
import doctor3 from "../../../images/doctor3.png";
import OurDoctorCard from "../OurDoctorCard/OurDoctorCard";
const doctors = [
  {
    pic: doctor1,
    name: "Dr. Emric Smith ",
    phone: "+9850025555",
  },
  {
    pic: doctor2,
    name: "Dr. Ema Watson",
    phone: "+9888054522",
  },
  {
    pic: doctor3,
    name: "Dr. Wilson Smith",
    phone: "+9850025533",
  },
];

const OurDoctor = () => {
  return (
    <Container sx={{ pt: 8 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#1CC7C1", textAlign: "center", justifyContent: "center" }}>
        Our Doctors
      </Typography>
      <Grid  container spacing={4} sx={{ mt: 4 }}>
        {doctors.map((doctor) => (
          <OurDoctorCard key={doctor.name} doctor={doctor}></OurDoctorCard>
        ))}
      </Grid>
    </Container>
  );
};

export default OurDoctor;
