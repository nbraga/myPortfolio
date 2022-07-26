import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  return (
    <Card sx={{ maxWidth: 345, minHeight: 350, p: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image={props.image}
          alt={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" align="center" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" align="justify" color="text.secondary">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Typography variant="body2" color="text.secondary">
        {props.tags}
      </Typography>
    </Card>
  );
}
