import { Paper, styled } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";

const DivContainer = styled(Paper)({
  height: 120,
  boxShadow: "none",
});

export default function CardProjeto(props) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 2,
        maxWidth: 380,
      }}
    >
      <DivContainer sx={{ display: "flex" }}>
        <img src={props.icone} alt={props.titulo} width={50} />
      </DivContainer>
      <CardContent>
        <DivContainer>
          <Typography
            align="center"
            gutterBottom
            variant="h5"
            fontWeight={900}
            component="div"
            color="#7510F7"
          >
            {props.titulo}
          </Typography>
          <Typography
            align="center"
            variant="body2"
            mb={3}
            color="text.secondary"
          >
            {props.texto}
          </Typography>
        </DivContainer>
        <DivContainer>
          <Typography
            align="center"
            gutterBottom
            variant="h6"
            component="div"
            color="#7510F7"
          >
            {props.subtitulo}
          </Typography>
          <Typography
            align="center"
            gutterBottom
            variant="body2"
            mb={3}
            color="text.secondary"
          >
            {props.texto2}
          </Typography>
        </DivContainer>

        <Typography
          align="center"
          gutterBottom
          variant="h6"
          component="div"
          color="#7510F7"
        >
          {props.subtitulo2}
        </Typography>
        <Typography align="center" variant="body2" color="text.secondary">
          {props.texto3}
        </Typography>
      </CardContent>
    </Card>
  );
}
