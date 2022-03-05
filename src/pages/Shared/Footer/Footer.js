import { Chip, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import footerBg from "../../../images/footer-bg.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


const footerBgStyle = {
  background: `url(${footerBg})`,
  width: "100%",
  marginTop: "30px",
};

const Footer = () => {
  return (
    <>
     
      <Container id="about" style={footerBgStyle}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: "center", p: 2 }}>
              <Typography variant="h5" sx={{ color: "#17CBAA", my: 3, fontWeight: "bold" }}>
                About Health <br />
                Care Center
              </Typography>
              <Typography variant="p" sx={{ color: "gray", textAlign: "center" }}>
                Health centers are community-based and patient-directed organizations that deliver comprehensive, culturally competent, high-quality
                primary health care services to the nation’s most vulnerable individuals and families, including people experiencing homelessness,
                agricultural workers, residents of public housing, and veterans.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: "center", p: 2 }}>
              <Typography variant="h5" sx={{ color: "#17CBAA", my: 3, fontWeight: "bold" }}>
                Services
              </Typography>
              <Typography sx={{ color: "gray", mt: 1 }} variant="body2">
                Emergency Dental Care
              </Typography>
              <Typography sx={{ color: "gray", mt: 1 }} variant="body2">
                Treatment of Personal Diseases
              </Typography>
              <Typography sx={{ color: "gray", mt: 1 }} variant="body2">
                Tooth Extraction
              </Typography>
              <Typography sx={{ color: "gray", mt: 1 }} variant="body2">
                Check Up
              </Typography>
              <Typography sx={{ color: "gray", mt: 1 }} variant="body2">
                Teeth Whitening
              </Typography>
              <Typography sx={{ color: "gray", mt: 1 }} variant="body2">
                Cavity Felling
              </Typography>
              <Typography sx={{ color: "gray", mt: 1 }} variant="body2">
                Fluoride Treatment
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: "center", p: 2 }}>
              <Typography variant="h5" sx={{ color: "#17CBAA", my: 3, fontWeight: "bold" }}>
                Oral Health
              </Typography>
              <Typography sx={{ color: "gray", mt: 1 }} variant="body2">
                Complex cardiac conditions
              </Typography>
              <Typography sx={{ color: "gray", mt: 1 }} variant="body2">
                Bleeding disorders including Hemophilia
              </Typography>
              <Typography sx={{ color: "gray", mt: 1 }} sx={{ color: "gray", mt: 1 }} variant="body2">
                Cancer Patients
              </Typography>
              <Typography sx={{ color: "gray", mt: 1 }} variant="body2">
                Neurological disorders
              </Typography>
              <Typography sx={{ color: "gray", mt: 1 }} variant="body2">
                Teeth Whitening
              </Typography>
              <Typography sx={{ color: "gray", mt: 1 }} variant="body2">
                Cavity Felling
              </Typography>
              <Typography sx={{ color: "gray", mt: 1 }} variant="body2">
                Fluoride Treatment
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: "center", p: 2 }}>
              <Typography variant="h5" sx={{ color: "#17CBAA", my: 3, fontWeight: "bold" }}>
                Our Address
              </Typography>
              <Typography variant="body2">Brooklyn, NY-10036,USA</Typography>
              <Typography sx={{ my: 5, color: "#17CBAA" }}>
                <Chip sx={{ backgroundColor: "white" }} icon={<FacebookIcon />} />
                <Chip sx={{ backgroundColor: "white" }} icon={<GitHubIcon />} />
                <Chip sx={{ backgroundColor: "white" }} icon={<TwitterIcon />} />
                <Chip sx={{ backgroundColor: "white" }} icon={<LinkedInIcon />} />
              </Typography>
              <Typography variant="body1" sx={{ color: "white", textAlign: "center", backgroundColor: "black" }}>
                Call Now:+2025550295
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Typography sx={{ fontSize: "18px", my: 3 }}>Copyright {new Date().getFullYear()} All Rights Reserved</Typography>
      </Container>
    </>
  );
};

export default Footer;
