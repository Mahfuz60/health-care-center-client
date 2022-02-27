import React from "react";
import { Card, CardActions, Grid, Typography } from "@mui/material";

const TestimonialCard = ({ testimonial }) => {
  const { name, pic, description, from } = testimonial;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card elevation={8} sx={{ p: 3 }}>
        <Typography variant="p" sx={{ color: "gray" }}>
          {description}
        </Typography>

        <CardActions>
          <img src={pic} alt="" sx={{ width: "80px", pt: 1 }} />
          <Typography variant="h6" sx={{ color: "#1CC7C1", fontWeight: "bold", pt: 2, ml: 2 }}>
            {name}
          </Typography>

          <Typography variant="p" sx={{ color: "gray", pt: 2, ml: 2 }}>
           , {from}
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default TestimonialCard;
