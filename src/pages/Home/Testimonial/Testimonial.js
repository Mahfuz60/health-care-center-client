import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import john from "../../../images/people-1.png";
import emri from "../../../images/people-2.png";
import wilson from "../../../images/people-3.png";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const testimonials = [
  {
    description:
      "Dr. John Smith, MD is a Internal Medicine Specialist in Houston, TX.  He is affiliated with HCA Houston Healthcare West.  He is accepting new patients and has indicated that he accepts telehealth appointments and holistic approach to caring for patients with pain-related problems.",
    pic: john,
    name: "John Smith",
    from: "California",
  },
  {
    description:
      "Dr Emri White is a consultant in Pain Medicine, with over 20 years’ experience in his field. Previously a Consultant at St Barts and The Royal London Hospitals, he is now firmly established in the independent sector. His breadth of experience ultimately resulted integrated.",
    pic: emri,
    name: "Emri white",
    from: "New Jersey",
  },
  {
    description:
      "Dr. Wilson Smith, MD is a Critical Care Medicine Specialist in Spartanburg, SC and has over 45 years of experience in the medical field.  He graduated from West Virginia U, School of Medicine medical school in 1976.  He is affiliated with medical facilities Pelham Medical Center .",
    pic: wilson,
    name: "Wilson Smith",
    from: "Florida",
  },
];

const Testimonial = () => {
  return (
    <Container sx={{ pt: 10 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#1CC7C1", textAlign: "left" }}>
        Testimonial
      </Typography>
      <br />
      <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "left",pb:5 }}>
        What's our patients <br /> Says
      </Typography>
      <Grid container spacing={2} >
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial}></TestimonialCard>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonial;
