import { Box } from "@mui/material";
import Navbar from "./components/Navbar";

import Carousel from "components/Carousel";
import About from "components/About";

import Sponsors from "components/Sponsors";
import MainActivities from "components/MainActivities";
import OurProgrammes from "components/OurProgrammes";
import Events from "components/Events";
import Faq from "components/Faq";
import ContactUs from "components/ContactUs";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Box position='relative'>
        <Box>
          <Carousel />
        </Box>
        <Box
          position='absolute'
          bottom='-30px'
          left='0'
          sx={{
            width: "100%",
          }}
        >
          <Sponsors />
        </Box>
      </Box>
      <Box mt={8} mb={16}>
        <About />
        <MainActivities />
        <OurProgrammes />
        <Events />
        <Faq />
        <ContactUs />
      </Box>
    </div>
  );
}

export default App;
