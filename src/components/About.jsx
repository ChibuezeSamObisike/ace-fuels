import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Box bgcolor='#F9F9F9' p={4}>
      <Container>
        <Typography variant='h3' color='#717171'>
          About us
        </Typography>

        <Box
          display='flex'
          alignItems='baseline'
          justifyContent='space-between'
          flexDirection={{ md: "row", xs: "column" }}
          mt={3}
        >
          <Box mr={2}>
            <Typography color='#2A2A2A' variant='h5' fontWeight='bold' mb={2}>
              Welcome to ACE-FUELS, FUTO, Nigeria
            </Typography>
            <Typography color='#4E4E4E' variant='subtitle1'>
              ACE-FUELS is an acronym for the African Center of Excellence in
              Future Energies and Electrochemical Systems, domiciled at the
              Federal University of Technology Owerri, Nigeria. It was set up
              primarily to fill a growing education, skills and information gap
              in the field of renewables and other clean energy sources within
              the sub region and in this way address the regional development
              challenge of poor availability and access to energy.{" "}
            </Typography>
          </Box>
          <Box mt={{ xs: 10, md: 0 }}>
            <Typography color='#4E4E4E' variant='subtitle1'>
              The center focuses on four core areas of discipline namely; Clean
              & Future Energy, Electrochemical Systems, Nanotechnology and
              Corrosion Technology, which complement each order and prioritizes
              research and development; knowledge sharing and dissemination;
              community education, technical skills and capacity development...
            </Typography>
            <Link>Read More</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
