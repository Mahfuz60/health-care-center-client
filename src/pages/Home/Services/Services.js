import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Fluoride from "../../../images/fluoride.png";
import Cavity from "../../../images/cavity.png";
import Whitening from "../../../images/whitening.png";
import Service from "../Service/Service";

const services = [
  {
    name: "Fluoride Treatment",
    img: Fluoride,
    description:
      "Fluoride is a natural mineral that builds strong teeth and prevents cavities. It’s been an essential oral health treatment for decades. Fluoride supports healthy tooth enamel and fights the bacteria that harm teeth and gums. ",
  },
  {
    name: "Cavity Felling",
    img: Cavity,
    description:
      "Dental caries (tooth decay) is one of the most common diseases, with approximately 80% of the population in developed countries having experienced the condition. If decay has not been prevented cavities develop. ",
  },
  {
    name: "Teeth Whitening",
    img: Whitening,
    description:
      "Tooth whitening can be a very effective way of lightening the natural colour of your teeth without removing any of the tooth surface. It cannot make a complete colour change, but it may lighten the existing shade.",
  },
];

const Services = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Typography sx={{ color: "#1CC7C1", fontWeight: "bold", my: 8 }} variant="h4" >
            We Provides Services
          </Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {services.map((service) => (
              <Service service={service} key={service.name}></Service>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Services;
