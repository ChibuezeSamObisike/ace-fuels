import { Typography, Box } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { pxToRem } from "utils/pxToRem";
import React from "react";

export default function AceCards() {
  return (
    <Box
      boxShadow='0px 1px 10px rgba(0, 0, 0, 0.15)'
      mx={3}
      sx={{
        width: "90%",
      }}
    >
      <Box bgcolor='#206280' height='26px'></Box>
      <Box p={2}>
        <Typography color='#206280'>Title:</Typography>
        <Typography varaint='h1' fontSize={pxToRem(32)} fontWeight='bold'>
          ACE-FUELS 2022 PROCUREMENT PLAN
        </Typography>
        <Typography>Posted on: Aug 13, 2022 | 2:49 pm</Typography>

        <Box mt={18} display='flex' alignItems='center'>
          <FileDownloadOutlinedIcon /> <Typography>Download</Typography>
        </Box>
      </Box>
    </Box>
  );
}
