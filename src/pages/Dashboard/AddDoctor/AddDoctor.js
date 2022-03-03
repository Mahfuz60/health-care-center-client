import React from "react";
import { Container, Typography } from "@mui/material";

const AddDoctor = () => {
  return (
    <Container container spacing={2} sx={{ pt: 8 }}>
      <Typography variant="h5" sx={{ color: "#1976D2", fontWeight: "bold" }}>
        Add Doctor
      </Typography>
    </Container>
  );
};

export default AddDoctor;
