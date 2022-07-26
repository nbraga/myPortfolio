import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Container } from "@mui/material";

import bgcv from "../../assets/img/bgilustrado.png";
import perfil from "../../assets/img/perfil.jpeg";
import setup from "../../assets/img/setup.svg";

import Botao from "../../components/BotaoAcao";

import "./about.css";

const theme = createTheme();

const Item = styled(Paper)({
  display: "flex",
  justifyContent: "center",
  background: "none",
  boxShadow: "none",
});

export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box component="main">
        <Box sx={{ width: "100%", background: "#7510F7" }}>
          <Container>
            <Stack>
              <Item>
                <Typography
                  variant="h3"
                  component="div"
                  fontWeight={700}
                  color="white"
                  gutterBottom
                >
                  Sobre
                </Typography>
              </Item>
              <Item>
                <img className="img-perfil" src={perfil} alt="Nicolas Braga" />
              </Item>
              <Item>
                <Typography
                  variant="body1"
                  align="center"
                  color="white"
                  width={400}
                  margin={5}
                >
                  Meu nome é Nicolas, tenho 25 anos, sou formado em Sistemas de
                  Informação, meu grande objetivo desse ano é conseguir minha
                  primeira vaga como desenvolvedor WEB e um dia poder ser um
                  excelente profissional Full Stack.
                </Typography>
              </Item>
              <Item>
                <img src={setup} alt="Setup" width="90%" />
              </Item>
            </Stack>
          </Container>
        </Box>

        {/* Curriculum */}
        <section className="section-perfil">
          <Typography
            variant="h3"
            component="div"
            fontWeight={700}
            color="white"
            gutterBottom
          >
            Curriculum
          </Typography>

          <div className="img-text">
            <img width={400} src={bgcv} alt="Ilustração" />
            <Typography variant="body1" align="justify" width={400} margin={10}>
              Estou anexando meu curriculum caso seja necessário, acredito que
              tenha todas informações, caso falte algo, peço que me enviem pelo
              formulário de contato, sugestões também serão bem-vindas.
            </Typography>
          </div>

          <a href="docs/curriculum.pdf" download>
            <Botao texto="Download" icon={true} />
          </a>
        </section>
        {/* Curriculum */}

        {/* Apresentação */}
        <Box
          sx={{
            width: "100%",
            background: "#7510F7",
            padding: "50px 20px 50px 20px",
          }}
        >
          <Stack>
            <Item>
              <Typography
                variant="h3"
                component="div"
                fontWeight={700}
                align="center"
                color="white"
                gutterBottom
              >
                Video de Apresentação
              </Typography>
            </Item>
            <Item>
              <iframe
                title="Apresentação"
                width="80%"
                height="500"
                src="https://www.youtube.com/embed/Zi_XLOBDo_Y"
              />
            </Item>
          </Stack>
        </Box>
        {/* Apresentação*/}
      </Box>
    </ThemeProvider>
  );
}
