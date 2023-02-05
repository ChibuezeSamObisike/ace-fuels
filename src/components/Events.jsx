import React from "react";
import { Typography, Box } from "@mui/material";

import { pxToRem } from "utils/pxToRem";
import style from "style/style";
import EventCard from "shared/EventsCard";

export default function Events() {
  return (
    <Box mt={6} width='100%'>
      <Box mx={{ xs: 3, md: 24 }}>
        <Typography color='#717171' fontSize={pxToRem(32)} fontWeight='bold'>
          Events
        </Typography>

        <Box sx={{ ...style.flexStyle, justifyContent: "space-around" }} mb={3}>
          <Box width='100%' mr={2}>
            <EventCard />
          </Box>
          <EventCard />
        </Box>
        <Box sx={{ ...style.flexStyle, justifyContent: "space-around" }} mb={3}>
          <Box width='100%' mr={2}>
            <EventCard />
          </Box>
          <EventCard />
        </Box>
        <Box sx={{ ...style.flexStyle, justifyContent: "space-around" }} mb={3}>
          <Box width='100%' mr={2}>
            <EventCard />
          </Box>
          <EventCard />
        </Box>
      </Box>
    </Box>
  );
}
