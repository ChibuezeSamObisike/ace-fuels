import React from "react";

import { Box, Button, Typography } from "@mui/material";

import girlImg from "assets/girl-image.jpg";

import style from "style/style";

export default function ContactUs() {
  return (
    <div
      style={{
        background: "#F9F9F9",
        padding: "10px",
        marginTop: "10px",
      }}
    >
      <Box mx={{ xs: 3, md: 24 }} mt={3} sx={{ ...style?.flexStyle }}>
        <img src={girlImg} alt='Img' width='613px' height='auto' />
        <Box ml={{ md: 2, xs: 0 }}>
          <Typography color='#717171' variant='h2' mb={2} fontWeight={600}>
            Contact us
          </Typography>
          <Typography variant='h4'>
            Can’t find the answer to your question from the FAQs? You can
            contact us directly and ask your question. Our team will get back to
            you within 24 hrs.
          </Typography>

          <Button
            variant='contained'
            sx={{
              mt: 2,
            }}
          >
            Contact us
          </Button>
        </Box>
      </Box>
    </div>
  );
}
