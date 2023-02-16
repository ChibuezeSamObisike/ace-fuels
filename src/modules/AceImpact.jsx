import React from "react";
import { Box, Typography } from "@mui/material";

import Navbar from "components/Navbar";
import Footer from "components/Footer";
import acebg from "assets/ace-impact-bg.jpg";
import AceCards from "shared/AceCards";

export default function AceImpact() {
  return (
    <Box>
      <Navbar />
      <Box
        mt={0}
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        flexDirection='column'
        mb={2}
      >
        <Box
          sx={{
            backgroundImage: `url(${acebg})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            height: "40vh",
            width: "100%",
          }}
        >
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
            textAlign='center'
            mt={10}
            color='white'
            p={6}
          >
            <Typography variant='h1' fontWeight={600} mb={2} color='white'>
              Academic Programmes and Research Focus Areas
            </Typography>
            <Typography variant='h3' color='white' px={12}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Parturient tortor, consectetur ac nisi. Ut sed sed suspendisse
              aenean fermentum, et.
            </Typography>
          </Box>
        </Box>
        <Box
          mx={{ xs: 3, md: 24 }}
          sx={{
            width: "100%",
          }}
        >
          <Box
            display='flex'
            alignItems='center'
            sx={{
              width: "100%",
            }}
            justifyContent='center'
            textAlign='center'
          >
            <Typography variant='h1' mb={2} mx='auto' mt={3}>
              ACE-FUELS downloadable projects documents
            </Typography>
          </Box>
          <Box
            display='flex'
            alignItems='center'
            mx={{ xs: 3, md: 24 }}
            justifyContent='space-between'
            my={2}
          >
            <AceCards /> <AceCards /> <AceCards />
          </Box>
          <Box
            display='flex'
            alignItems='center'
            mx={{ xs: 3, md: 24 }}
            justifyContent='space-between'
            my={2}
          >
            <AceCards /> <AceCards /> <AceCards />
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
