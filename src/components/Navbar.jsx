import React from "react";

import { Typography, AppBar, Container, Box } from "@mui/material";

import { Link } from "react-router-dom";
import { ReactComponent as AppLogo } from "assets/ace-fuels-logo.svg";

import SearchIcon from "@mui/icons-material/Search";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import { pxToRem } from "utils/pxToRem";

const Navbar = () => {
  const links = [
    {
      path: "/",
      label: "News",
    },
    {
      path: "/",
      label: "Events",
    },
    {
      path: "/",
      label: "Blog",
    },
    {
      path: "/",
      label: "Professional Courses",
    },
    {
      path: "/",
      label: "FAQ",
    },
    {
      path: "/",
      label: "Select Language",
    },
  ];

  const sublinks = [
    { path: "/", label: "Home" },
    { path: "/people", label: "People" },
    { path: "/programmes", label: "Programmes" },
    { path: "", label: "E-GRM" },
    { path: "/ace-impact", label: "Ace Impact" },
    { path: "", label: "Partnerships" },
    { path: "", label: "Admissions" },
    { path: "", label: "About us" },
    { path: "", label: "Resources" },
  ];
  return (
    <AppBar
      elevation={0}
      sx={{
        bgcolor: "#fff",
      }}
      position='sticky'
    >
      <Container>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          mt={3}
        >
          <Box>
            <Link to='/'>
              <AppLogo />
            </Link>
            <Box
              display='flex'
              alignItems='center'
              justifyContent='space-around'
              color='#1C1C1C'
            >
              <Typography variant='subtitle2'>Follow us on</Typography>
              <TwitterIcon />
              <LinkedInIcon />
              <FacebookIcon />
              <InstagramIcon />
            </Box>
          </Box>

          <Box
            display='flex'
            alignItems='center'
            justifyContent='space-between'
          >
            {links.map((x) => (
              <Link
                key={x.label}
                to={x.path}
                style={{
                  color: "#1C1C1C",
                  padding: "10px",
                }}
              >
                {x.label}
              </Link>
            ))}
            <SearchIcon
              sx={{
                color: "#1C1C1C",
              }}
            />
          </Box>
        </Box>
      </Container>

      <Box py={2} px={10} mt={2} bgcolor='#4E4E4E'>
        <Box display='flex' alignItems='center' justifyContent='space-around'>
          {sublinks.map((x) => (
            <Link
              key={x.label}
              to={x.path}
              style={{
                color: "#fff",
                padding: "10px",
              }}
            >
              {x.label}
            </Link>
          ))}
        </Box>
      </Box>
    </AppBar>
  );
};

export default Navbar;
