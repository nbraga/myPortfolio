import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";
import Botao from "../../components/BotaoAcao";

import Zoom from "react-reveal/Zoom";
import CardProjeto from "../../components/HomeCardProjeto";
import "./home.css";

import emorio from "../../assets//img/emorio.png";
import rede from "../../assets//img/redeam.png";
import servconn from "../../assets//img/servconn.png";
import bg from "../../assets/img/bg-home.jpg";

const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box component="main">
        {/* Home BG */}
        <Box
          sx={{
            pt: 20,
            pb: 6,
            minHeight: "100vh",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)),url(${bg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Container
            sx={{
              textShadow: "2px 2px 4px #000000",
              p: 5,
            }}
            maxWidth="lg"
          >
            <Typography
              fontSize="4rem"
              component="h1"
              variant="h2"
              align="center"
              gutterBottom
              fontWeight={900}
            >
              Desenvolvedor Web
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="#ffffff"
              paragraph
              fontWeight={900}
            >
              Olá! Seja Bem Vindo(a), desde já agradeço por dedicar seu tempo
              para conhecer um pouco sobre mim, espero que goste do meu
              portfólio e das minhas habilidades, fique a vontade!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Link to="/about">
                <Botao texto="Ver Mais Informações" icon={true} />
              </Link>
              <Link to="/contact">
                <Botao texto="Entrar em Contato" icon={false} />
              </Link>
            </Stack>
          </Container>
        </Box>
        {/* Home BG */}

        {/* Perfil */}
        <Box
          sx={{
            width: 1,
            minHeight: "40rem",
            background: "#7510F7",
          }}
        >
          <Zoom>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                pt: 10,
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography
                component="h1"
                variant="h5"
                gutterBottom
                fontWeight={900}
              >
                Olá, eu sou Nicolas Braga. Tudo Bem!
              </Typography>

              <Typography width="60%" align="center" lineHeight={2} paragraph>
                Estou iniciando nesse imenso mundo da programação, são os
                primeiros passos, estou em fase de aprendizado mas já coloco em
                prática aquilo que sei. Existem muitos profissionais no ramo,
                porém eu me destaco por meu esforço e foco naquilo que desejo.
              </Typography>
            </Box>
          </Zoom>
        </Box>

        {/* Perfil */}

        {/* Projetos */}
        <Box
          sx={{
            background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
            boxShadow: 10,
          }}
        >
          {/* Container Flutuante */}
          <Container
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              borderRadius: "10px",
              position: { md: "relative" },
              background: "white",
              bottom: "15rem",
            }}
          >
            {data.map((item, index) => (
              <CardProjeto
                key={index}
                titulo={item.titulo}
                texto={item.texto}
                subtitulo={item.subtitulo}
                texto2={item.texto2}
                subtitulo2={item.subtitulo2}
                texto3={item.texto3}
                icone={item.icone}
              />
            ))}
          </Container>
          {/* Container Flutuante */}
          {/* Projetos Listados */}
          <Zoom>
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 5,
              }}
              maxWidth="lg"
            >
              <Typography
                component="h1"
                variant="h3"
                align="center"
                gutterBottom
                fontWeight={900}
              >
                Meus Projetos Recentes
              </Typography>
              <Typography
                lineHeight={2}
                variant="body"
                align="center"
                color="#ffffff"
              >
                Já apresentei um projeto para Rede Amazônica, local onde
                trabalho atualmente e fiz alguns projetos freelancer onde pude
                desenvolver novas habilidades, aplicando meus conhecimentos
                aprendidos nos cursos da UDEMY e conquistei uma oportunidade
                única, que foi ser aprovado para participar do Programa RECODE
                PRO, uma formação Full Stack de 6 meses, onde estou bem feliz e
                aprendendo ainda mais!
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <div className="flip-container">
                  <div className="flipper">
                    <div className="front">
                      <img id="imgCard" src={emorio} alt="Emoriô" />
                    </div>
                    <div class="back">
                      <Typography
                        fontSize={12}
                        align="center"
                        color="#ffffff"
                        paragraph
                      >
                        Emoriô é uma criação do SQUAD 053, projeto visa
                        erradicar o analfabetismo nas zonas rurais e busca
                        expandir seu alcance realizando parcerias com diversas
                        pessoas.
                      </Typography>
                      <a
                        href="https://squad53-recodepro.github.io/emorio-digital2/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Botao texto="Visitar o Site" icon={true} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flip-container">
                  <div className="flipper">
                    <div className="front">
                      <img id="imgCard" src={rede} alt="Rede Amazônica" />
                    </div>
                    <div class="back">
                      <Typography
                        fontSize={12}
                        align="center"
                        color="#ffffff"
                        paragraph
                      >
                        Projeto apresentado para Rede Amazônica, ainda em
                        desenvolvimento, após a apresentação da central casting,
                        toda operação da empresa será com Sede em Manaus,
                        necessitando de uma inovação no setor.
                      </Typography>
                      <a
                        href="https://programacao-ram.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Botao texto="Visitar o Site" icon={true} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flip-container">
                  <div className="flipper">
                    <div className="front">
                      <img id="imgCard" src={servconn} alt="ServConn" />
                    </div>
                    <div class="back">
                      <Typography
                        fontSize={12}
                        align="center"
                        color="#ffffff"
                        paragraph
                      >
                        Um de meus grandes sonhos é ter todas skils necessárias
                        para fazer um Ecommerce de sucesso, onde eu possa ter um
                        retorno futuramente, sempre acreditando que tudo é
                        possível, basta o primeiro passo.
                      </Typography>
                      <a
                        href="https://servconn.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Botao texto="Visitar o Site" icon={true} />
                      </a>
                    </div>
                  </div>
                </div>
              </Box>
            </Container>
          </Zoom>
        </Box>
        {/* Projetos */}
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia component="img" image={card.bg} alt={card.title} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>{card.text}</Typography>
                  </CardContent>
                  <CardActions>
                    <a href={card.linkPointer} target="_blank" rel="noreferrer">
                      <Button size="small">Ver</Button>
                    </a>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

const data = [
  {
    titulo: "Web Design",
    texto:
      "Me interesso por UX/UI, dedico parte do meu tempo para desenhar novas interfaces no Figma.",
    subtitulo: "Gosto de projetar",
    texto2:
      "UI UX, interfaces de usuários, web, dispositivos móveis, aplicativos e logotipos",
    subtitulo2: "Ferramentas de projeto",
    texto3: "Canva e Figma",
    icone: "icons/design.svg",
  },
  {
    titulo: "Desenvolvedor Front-end",
    texto:
      "Já atuei em pequenos projetos e estou trilhando o caminho para me tornar Desenvolvedor Full Stack.",
    subtitulo: "Meu Estudo",
    texto2:
      "Estou focado em API e NodeJS para aprimorar meu conhecimento em Back-end para ter uma atuação ampla.",
    subtitulo2: "Conteúdos",
    texto3:
      "Html, Css, JavaScript, Bootstrap, React JS, NodeJS, Redux, Styled Components, Material UI, Firebase, MongoDB, MySQL, API e Git Hub",
    icone: "icons/frontend.svg",
  },
  {
    titulo: "Mentor",
    texto:
      "Tenho vocação para ensinar e no futuro pretendo colocar em prática. Da mesma forma que aprendi com ótimos profissionais, quero transmitir meus conhecimentos para mais pessoas.",
    subtitulo: "Futuro",
    texto2:
      "Quando terminar o curso Full Stack na Recode Pro, começarei um curso de pós-graduação em Desenvolvimento em Aplicações WEB e aprimorar o inglês.",
    subtitulo2: "O que faço para melhorar?",
    texto3:
      "Durante a pandemia, evolui muito no autodidatismo, através de leituras e tutoriais. Busco sempre manter a leitura atualizada para meu desenvolvimento pessoal e manter networking com profissionais da área.",
    icone: "icons/mentor.svg",
  },
];

const cards = [
  {
    title: "Artigo publicado",
    text: "Um de meus planos para o futuro é poder dar continuidade ao projeto do meu artigo LifeCar, para mobile com integrações de novas tecnologias.",
    bg: "img/artigo.jpg",
    linkPointer:
      "https://www.journalijdr.com/development-application-control-semi-new-vehicles-history-%E2%80%93-lifecar",
  },
  {
    title: "Conheça a Emoriô Digital",
    text: "Faça parte dessa iniciativa criada pelo SQUAD 053 que trata a questão social do analfabetismo nas zonas rurais, buscando apoio e parcerias",
    bg: "img/emorioLogo.jpeg",
    linkPointer: "https://www.linkedin.com/company/emori%C3%B4-digital/",
  },
  {
    title: "RECODE PRO",
    text: "Tenho muito orgulho de poder participar do programa da RECODE, estou obtendo muito conhecimento e conhecendo pessoas maravilhosas, uma ótima experiência.",
    bg: "https://yt3.ggpht.com/ytc/AKedOLQ_E5H_tOySckFgoTrdhGOijyWGJNcCnZJXJPtTww=s900-c-k-c0x00ffffff-no-rj",
    linkPointer: "https://recodepro.org.br/",
  },
];
