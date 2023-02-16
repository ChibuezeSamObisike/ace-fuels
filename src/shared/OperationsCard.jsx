import { Box, Typography } from "@mui/material";
import React from "react";

import img from "assets/Rectangle 574.jpg";

export default function OperationsCard() {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      border='1px solid #D4D4D4'
      my={2}
    >
      <Box
        width='30%'
        bgcolor='#717171'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <img
          src={img}
          alt=''
          width='300'
          height='300'
          style={{
            borderRadius: "50%",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
        }}
        p={2}
      >
        <Typography variant='h5'>Prof. Andrew Ano</Typography>
        <Typography variant='subtitle1' color='#2B83AA'>
          ACE Center leader
        </Typography>

        <Typography variant='subtitle1' mt={2} color='#4E4E4E'>
          Emeka Oguzie is a Professor of Physical Chemistry at the Federal
          University of Technology Owerri (FUTO). He received his Ph.D in
          Physical Chemistry from the University of Calabar. He was a visiting
          (CAS-TWAS) post doctoral research fellow (2006-2007) and TWAS-UNESCO
          Associate (2008-2011) at the State Key Laboratory for Corrosion and
          Protection, Institute of Metal Research, Shenyang China. He was
          appointed Young Affiliate of TWAS, the World Academy of Science
          (2017-2012). He is Fellow of the OPEC Fund for International
          Development (OFID).
        </Typography>
      </Box>
    </Box>
  );
}
