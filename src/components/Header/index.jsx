import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@mui/material";

import logo from "../../assets/img/logotipos/logo-2tp.png";
import "./index.css";

const pages = [
  {
    descricao: "Início",
    ref: "/",
  },
  {
    descricao: "Contato",
    ref: "/contact",
  },
  {
    descricao: "Projetos",
    ref: "/project",
  },

  {
    descricao: "Sobre",
    ref: "/about",
  },
];

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#000000",
      color: "white",
    },
  },
});

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
              }}
            >
              <Link to="/">
                <img id="logotipo" src={logo} alt="Logo" />
              </Link>
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <NavLink
                      key={page}
                      to={page.ref}
                      onClick={handleCloseNavMenu}
                      sx={{ color: "white" }}
                    >
                      {page.descricao}
                    </NavLink>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                justifyContent: "flex-end",
              }}
            >
              <Link to="/">
                <img id="logotipo" src={logo} alt="Logo" />
              </Link>
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page) => (
                <Button>
                  <NavLink
                    key={page}
                    to={page.ref}
                    onClick={handleCloseNavMenu}
                    sx={{ padding: "10px", color: "white" }}
                  >
                    {page.descricao}
                  </NavLink>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
