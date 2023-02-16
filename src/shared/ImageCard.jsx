import React from "react";
import { Box, Typography } from "@mui/material";
import img from "assets/Rectangle 574.jpg";

export default function ImageCard() {
  return (
    <Box border='1px solid #D4D4D4' borderRadius='15px'>
      <img src={img} alt='' height='auto' width='100%' />
      <Box p={2}>
        <Typography color='#949494'>12th Nov, 2022</Typography>
        <Typography color='#2A2A2A' fontWeight={700} variant='h5'>
          AEC-Fuels accquires materials studio license
        </Typography>
      </Box>
    </Box>
  );
}
