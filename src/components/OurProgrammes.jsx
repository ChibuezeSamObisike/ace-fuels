import React from "react";
import Img1 from "assets/Rectangle 576.jpg";
import Img2 from "assets/Rectangle 575.jpg";
import Img3 from "assets/Rectangle 574.jpg";
import Img4 from "assets/Rectangle 573.jpg";
import Img5 from "assets/Rectangle 572.jpg";

import { Box, Typography } from "@mui/material";

import { pxToRem } from "utils/pxToRem";

export default function OurProgrammes() {
  const listImg = [
    {
      img: Img1,
      title: "Nanotechnology",
    },
    {
      img: Img2,
      title: "Future Energies",
    },
    {
      img: Img3,
      title: "Corrosion Technology ",
    },
    {
      img: Img4,
      title: "Electrochemical Technology",
    },
    {
      img: Img5,
      title: "Executive Master of Science (MSc) programmes",
    },
  ];
  return (
    <Box mt={6} width='100%'>
      <Box mx={{ xs: 3, md: 24 }}>
        <Typography color='#717171' fontSize={pxToRem(32)} fontWeight='bold'>
          Our programmes
        </Typography>
        <Box
          display='flex'
          width='100%'
          flexDirection={{
            xs: "column",
            md: "row",
          }}
          alignItems='unset'
          justifyContent='space-between'
        >
          {listImg.map((x) => (
            <Box m={1}>
              <Box>
                <img height='322px' width='auto' src={x.img} alt='img' />
                <Typography
                  color='#2A2A2A'
                  fontSize={pxToRem(20)}
                  fontWeight={400}
                >
                  {x.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
