import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import * as React from "react";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ProjectCard from "../../components/ProjectCard";

import "./project.css";

const theme = createTheme();

const Item = styled(Paper)(() => ({
  padding: 30,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
}));

export default function Project() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box component="main">
        <Box sx={{ width: "100%" }}>
          <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid borderBottom={2} item xs={6}>
              <Item>
                <img
                  src="https://img.freepik.com/vetores-gratis/web-design-producao-e-manutencao-de-sites-grafico-web-design-de-interface-site-responsivo-icone-colorido-de-engenharia-e-desenvolvimento-de-software_335657-2699.jpg?t=st=1658712253~exp=1658712853~hmac=1aab49da24c0ab19034b25075bc7b0bad7e2146107cf9d1d68dc9660cd178976&w=740"
                  alt="Bg"
                  width="100%"
                />
              </Item>
            </Grid>
            <Grid borderBottom={2} item xs={6}>
              <Item>
                <Typography
                  variant="h3"
                  component="div"
                  align="center"
                  fontWeight={700}
                  gutterBottom
                >
                  Meus Projetos
                </Typography>
                <Typography variant="body1" align="justify">
                  Estou sempre buscando novas oportunidades, por enquanto minhas
                  experiências vem de propostas freelancer, tenho projetos
                  individuais onde já apresentei para a empresa onde estou
                  atualmente, meu ecommerce que é um grande sonho e também
                  projetos de cursos que já fiz, um dos mais importantes que
                  estou tendo o privilégio de participar é o da EmoriÔ Digital
                  do programa RECODE PRO.
                </Typography>
              </Item>
            </Grid>
            <Grid borderBottom={2} item xs={6}>
              <Item>
                <Typography
                  variant="h3"
                  component="div"
                  align="center"
                  fontWeight={700}
                  gutterBottom
                >
                  Linguagens
                </Typography>
                <Typography variant="body1" align="justify">
                  A partir de um projeto que participei, pude ter meu primeiro
                  contato com React JS e desde lá venho aperfeiçoando minhas
                  habilidades com essa biblioteca, acredito que, com HTML, CSS e
                  JavaScript estou meio que em um nível intermediário.
                  Melhorando em Flex Box, Grid Layout, Design Responsivo,
                  Funções, CRUD, API e ultimamente estou iniciando a criação do
                  Backend com Node JS.
                </Typography>
              </Item>
            </Grid>
            <Grid borderBottom={2} item xs={6}>
              <Item>
                <img
                  src="https://img.freepik.com/vetores-gratis/script-de-estilo-personalizado-otimizacao-de-sites-codificacao-desenvolvimento-de-software-personagem-de-desenho-animado-de-programador-feminino-trabalhando-adicionando-javascript-codigo-css_335657-2370.jpg?t=st=1658712253~exp=1658712853~hmac=7dcd461500873218dbf6270417864c00009128daca099394776a1255307a82c7&w=740"
                  alt="Bg"
                  width="100%"
                />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <img
                  src="https://img.freepik.com/vetores-gratis/codificacao-e-desenvolvimento-de-sites-suporte-tecnico-engenharia-de-programacao-coder-desenvolvedor-web-software-de-computador-ilustracao-de-conceito-de-personagem-plano-masculino-programador_335657-1740.jpg?t=st=1658712253~exp=1658712853~hmac=27c00122aa039b6f1851fd771bef211bcaff5cd2290d164c6fe91ae3f57f99ed&w=740"
                  alt="Bg"
                  width="100%"
                />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Typography
                  variant="h3"
                  component="div"
                  align="center"
                  fontWeight={700}
                  gutterBottom
                >
                  Objetivos
                </Typography>
                <Typography variant="body1" align="justify">
                  Meu plano futuro é ser um profissional Full Stack, venho
                  estudando aos poucos e pesquisando sobre a carreira. Busco uma
                  oportunidade nessa aréa para poder ter uma direção daquilo que
                  é necessário para dar os primeiros passos no desenvolvimento
                  de sites.
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
            backgroundColor: "#7510F7",
          }}
        >
          {data.map((item, index) => (
            <ProjectCard
              key={index}
              title={item.title}
              text={item.text}
              image={item.image}
              tags={item.tags}
            />
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

const data = [
  {
    title: "EmoriÔ Digital",
    text: "Iniciativa Social criada a partir do programa RECODE PRO, onde pude desenvolver o projeto junto ao SQUAD 053. ",
    tags: ["#HTML ", "#CSS ", "#JavaScript ", "#Bootstrap ", "#MySQL "],
    image: "/img/emorio.png",
  },
  {
    title: "Services Conections",
    text: "Meu grande objetivo é terminar de desenvolver meu ecommerce e implantar ele através dos conhecimentos obtidos durante minha trajetória com a programação.",
    tags: [
      "#HTML ",
      "#StyledComponents ",
      "#JavaScript ",
      "#ReactJS ",
      "#MaterialUI ",
      "#API ",
    ],
    image: "/img/servconn.png",
  },
  {
    title: "Rede Amazônica",
    text: "Projeto desenvolvido para a Rede Amazônica com a intenção de melhorar os processos do setor de Exibição e Estratégia, onde a maioria das ações são feitas no papel impresso.",
    tags: [
      "#HTML ",
      "#StyledComponents ",
      "#JavaScript ",
      "#ReactJS ",
      "#MaterialUI ",
      "#Firebase",
    ],
    image: "/img/redeam.png",
  },
];
