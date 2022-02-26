import React from "react";
import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

const bannerBg = {
  background: `url(${bg})`,
  width: "100%",
};
const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 500,
  marginTop: 50,
};
const HomeBanner = () => {
  return (
    <>
      <Container sx={{ flexGrow: 1 }} style={bannerBg}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5} style={{ ...verticalCenter, textAlign: "left" }}>
            <Box sx={{ ml: 3 }}>
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
                Your New Smile <br /> Starts Here
              </Typography>
              <Typography variant="p" sx={{ color: "gray" }}>
                Today's connected and busy medical practices can benefit greatly by adopting a patient portal or combined patient and doctor portal.
                The right software, system integration and security allows any practice to create one portal that benefits patients, physicians and
                other medical and administrative staff.
              </Typography>
              <br />
              <Button variant="contained" sx={{ color: "white", backgroundColor: "#1CC7C1", mt: 4, mb: 4 }}>
                GET APPOINTMENT
              </Button>
            </Box>
          </Grid>
          <Grid xs={12} md={7} style={verticalCenter}>
            <img src={chair} alt="" style={{ width: "500px", marginLeft: "70px" }} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomeBanner;
