import React from "react";
import { Box, Typography } from "@mui/material";
import AppBreadCrumb from "shared/BreadCrumb";
import img from "assets/Rectangle 574.jpg";

import { pxToRem } from "utils/pxToRem";

export default function BlogCard() {
  return (
    <Box>
      <AppBreadCrumb
        current='Corrosion Technology'
        links={[
          {
            link: "",
            title: "Programmes",
          },
        ]}
      />

      <Box>
        <img src={img} alt='' width='100%' />
        <Typography fontSize={pxToRem(18)}>
          Electrochemical storage devices like batteries, supercapacitors; fuel
          cells. Development of new carbon-based materials for electrochemical
          storage systems. Environmental electrochemistry, electrochemical water
          purification and remediation, electrokinetic remediation.
          Bioelectrochemistry. Electrocatalysts for water splitting, CO 2
          conversion and reduction. Electrochemical storage devices like
          batteries, supercapacitors; fuel cells. Development of new
          carbon-based materials for electrochemical storage systems.
          Environmental electrochemistry, electrochemical water purification and
          remediation, electrokinetic remediation. Bioelectrochemistry.
          <br />
          <br />
          Electrocatalysts for water splitting, CO 2 conversion and reduction.
          Electrochemical storage devices like batteries, supercapacitors; fuel
          cells. Development of new carbon-based materials for electrochemical
          storage systems. Environmental electrochemistry, electrochemical water
          purification and remediation, electrokinetic remediation.
          Bioelectrochemistry. Electrocatalysts for water splitting, CO 2
          conversion and reduction.
        </Typography>
      </Box>
    </Box>
  );
}
