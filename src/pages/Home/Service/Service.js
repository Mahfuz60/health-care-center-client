import { Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Service = (props) => {
  const { name, img, description } = props.service;
  return (
    <>
      <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ maxWidth: 345,border:0,boxShadow:0 }}>
          <CardActionArea>
            <CardMedia component="img" style={{ width: "auto", height: "100", margin: "10px auto" }} image={img} alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default Service;
