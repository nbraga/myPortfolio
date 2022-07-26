import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";

import logo from "../../assets/img/logotipos/logo-2tp.png";

import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
  background: "none",
}));

function Copyright() {
  return (
    <Typography variant="body2" color="#fff" align="center">
      {"Todos os direitos reservados © "}
      <Link
        color="inherit"
        target="_blank"
        href="https://www.instagram.com/nclsbraga_/"
      >
        Nicolas Braga
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
        py: 5,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack alignItems="center" spacing={1}>
            <Item>
              <img src={logo} alt="Logo" width={150} />
            </Item>
            <Item
              sx={{
                display: "flex",
                alignItems: "center",
                width: "50%",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="body2"
                fontWeight={500}
                color="#fff"
                align="center"
              >
                “A força não vem de vencer. Suas lutas desenvolvem suas forças.
                Quando você atravessa dificuldades e decide não se render, isso
                é força.”
              </Typography>
            </Item>
            <Item
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-around",
              }}
            >
              <Link target="_blank" href="https://www.facebook.com/ncls.braga/">
                <FaFacebook size={50} color="blue" />
              </Link>
              <Link target="_blank" href="https://github.com/nbraga">
                <FaGithub size={50} color="white" />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/nbraga2022/"
              >
                <FaLinkedin size={50} color="blue" />
              </Link>
            </Item>
            <Item>
              <Copyright />
            </Item>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
