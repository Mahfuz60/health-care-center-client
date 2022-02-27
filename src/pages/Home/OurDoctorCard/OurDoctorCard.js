import { Card, Grid, Typography } from "@mui/material";
import Icon from "@mui/material/Icon";
import MdPhone from "@mui/icons-material/Phone";
import Chip from "@mui/material/Chip";
import React from "react";

const OurDoctorCard = ({ doctor }) => {
  const { name, phone, pic } = doctor;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card elevation={3} sx={{ p: 5, m: 4 }}>
        <img src={pic} alt="" style={{ width: "250px", height: "250px" }} />
        <Typography variant="h6">{name}</Typography>
        <Typography variant="h6">
          <Chip icon={<MdPhone />} sx={{ color: "black", backgroundColor: "white" }} />
          {phone}
        </Typography>
      </Card>
    </Grid>
  );
};

export default OurDoctorCard;
