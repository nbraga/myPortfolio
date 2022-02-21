import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="#fff" align="center">
      {"Todos os direitos reservados © "}
      <Link color="inherit" href="https://www.instagram.com/nclsbraga_/">
        Nicolas Braga
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer(props) {
  const { description } = props;

  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        bgcolor: "#0b3c5d",
        py: 5,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="subtitle1"
          align="center"
          color="#fff"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
