import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import treatment from "../../../images/treatment.png";

const DentalInfo = () => {
  return (
    <Container sx={{ p: 10 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <img src={treatment} alt="" style={{ width: "320px" }} />
        </Grid>
        <Grid xs={12} md={6} sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", pb: 4 }}>
            Exceptional Dental, <br /> Care on Your Terms
          </Typography>
          <Typography variant="p" sx={{ color: "gray" }}>
            We understand that many patients are reluctant to visit the dentist due to dental anxiety. Some people put off the dental care they need.
            They often end up with decay or other oral health problems. We offer complimentary oral sedation if you have anxiety.Our dentists will
            explain the dental treatment you will receive before they begin. Always reassuring, that you feel comfortable. Here, you will feel special
            and cared for. We perform treatments gently and slowly.
          </Typography>{" "}
          <br />
          <Button variant="contained" sx={{ backgroundColor: "#1CC7C1", color: "white", mt: 4 }}>
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DentalInfo;
