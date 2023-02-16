import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

import BlogCard from "components/BlogCard";

import { Box, Typography } from "@mui/material";

export default function Programmes() {
  return (
    <Box>
      <Navbar />
      <Box
        mt={8}
        mx={{ xs: 3, md: 24 }}
        display='flex'
        alignItems='flex-start'
        justifyContent='space-between'
        mb={2}
      >
        <Box
          width='30%'
          bgcolor='#F9F9F9'
          border=' 1px solid #D4D4D4'
          p={2}
          mr={2}
        >
          <Typography fontWeight={500} variant='h3' mb={3}>
            Academic Programmes and Research Focus Areas
          </Typography>

          <Typography my={2}>Electrochemical Technology </Typography>
          <Typography
            sx={{
              bgcolor: "#9FE1FF",
              p: 1,
            }}
            my={2}
          >
            Corrosion Technology{" "}
          </Typography>
          <Typography my={2}>Future Energies </Typography>
          <Typography my={2}>Nanotechnology </Typography>
          <Typography my={2}>
            Executive Master of Science (MSc) programmes
          </Typography>
        </Box>
        <Box width='70%'>
          <BlogCard />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
