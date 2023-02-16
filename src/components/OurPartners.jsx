import React from "react";
import afdImg from "assets/afd.png";
import worldBankImg from "assets/world-bank-group.png";
import ecowasImg from "assets/ecowas.png";
import aauImg from "assets/aau.png";
import himinImg from "assets/him.png";
import futoImg from "assets/futo.png";
import schienderImg from "assets/schenider.png";

import { Box, Container, Grid, Typography } from "@mui/material";

import { pxToRem } from "utils/pxToRem";

export default function OurPartners() {
  const imgs = [
    afdImg,
    worldBankImg,
    ecowasImg,
    aauImg,
    himinImg,
    futoImg,
    schienderImg,
  ];
  return (
    <Box mt={6} mx={{ xs: 3, md: 24 }}>
      {/* <Container> */}
      <Typography color='#717171' fontSize={pxToRem(32)} fontWeight='bold'>
        Our Partners
      </Typography>
      <Grid container>
        {imgs.map((x) => (
          <Grid item md={4}>
            <img src={x} alt='Img' width='200' />
          </Grid>
        ))}
      </Grid>
      {/* </Container> */}
    </Box>
  );
}
