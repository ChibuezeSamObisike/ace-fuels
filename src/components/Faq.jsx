import React from "react";
import { Typography, Box } from "@mui/material";
import { pxToRem } from "utils/pxToRem";

export default function Faq() {
  return (
    <Box mt={6} width='100%'>
      <Box mx={{ xs: 3, md: 24 }}>
        <Typography color='#717171' fontSize={pxToRem(32)} fontWeight='bold'>
          Frequently Asked Questions (FAQs)
        </Typography>
      </Box>
    </Box>
  );
}
