import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

const theme = createTheme();

export default function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "Services Connections - Formulário de contato",
    honeypot: "", // if any value received in this field, form submission will be ignored.
    message: "",
    replyTo: "@", // this will set replyTo of email to email address entered in the form
    accessKey: "262c1e21-f984-469e-b2fd-b97bd680cb84", // get your access key from https://www.staticforms.xyz
  });

  const [response, setResponse] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          type: "success",
          message: "Thank you for reaching out to us.",
        });
        resetarCampos();
      } else {
        setResponse({
          type: "error",
          message: json.message,
        });
      }
    } catch (e) {
      console.log("An error occurred", e);
      setResponse({
        type: "error",
        message: "An error occured while submitting the form",
      });
    }
  };

  const resetarCampos = () => {
    setContact({ name: "", email: "", message: "" });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box component="main">
        <Box
          action="https://api.staticforms.xyz/submit"
          method="post"
          component="form"
          onSubmit={handleSubmit}
          sx={{ flexGrow: 1 }}
        >
          <input
            type="hidden"
            name="accessKey"
            value="262c1e21-f984-469e-b2fd-b97bd680cb84"
          />
          <input
            type="hidden"
            name="redirectTo"
            value="http://localhost:3000/contato"
          />
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Item>
                <Typography
                  variant="h4"
                  component="div"
                  align="center"
                  fontWeight={700}
                  gutterBottom
                >
                  Formulário de Contato
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <Typography variant="body1" align="justify">
                  Para mais perguntas, incluindo oportunidades, curiosidades ou
                  entrevistas envie um e-mail para ncls.braga19@gmail.com ou
                  entre em contato usando o formulário.
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <TextField
                  name="name"
                  id="standard-basic"
                  label="Nome Completo"
                  variant="standard"
                  type="text"
                  onChange={handleChange}
                  value={contact.name}
                  required
                />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <TextField
                  name="email"
                  id="standard-basic"
                  label="E-mail"
                  variant="standard"
                  type="email"
                  onChange={handleChange}
                  value={contact.email}
                  required
                />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <TextField
                  name="message"
                  fullWidth
                  id="standard-multiline-static"
                  label="Preencha o formulário"
                  multiline
                  rows={4}
                  variant="standard"
                  type="text"
                  onChange={handleChange}
                  value={contact.message}
                  required
                />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <Button variant="contained" type="submit">
                  Enviar Mensagem
                </Button>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

const Item = styled(Paper)({
  padding: theme.spacing(1),
  background: "none",
  boxShadow: "none",
});
