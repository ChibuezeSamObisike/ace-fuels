import React from "react";

import { Box } from "@mui/material";
import afdImg from "assets/afd.png";
import worldBankImg from "assets/world-bank-group.png";
import ecowasImg from "assets/ecowas.png";
import aauImg from "assets/aau.png";
import himinImg from "assets/him.png";
import futoImg from "assets/futo.png";
import schienderImg from "assets/schenider.png";

export default function Sponsors() {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      p={3}
      mx={5}
      zIndex={100}
      bgcolor='#fff'
      mt={-5}
      boxShadow='0px 1px 10px rgba(0, 0, 0, 0.15);'
    >
      {[
        afdImg,
        worldBankImg,
        ecowasImg,
        aauImg,
        himinImg,
        futoImg,
        schienderImg,
      ].map((x) => (
        <img src={x} alt='' width='100px' />
      ))}
    </Box>
  );
}
