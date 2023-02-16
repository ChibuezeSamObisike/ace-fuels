import React from "react";

import { Breadcrumbs, Link, Typography } from "@mui/material";
import { pxToRem } from "utils/pxToRem";

export default function AppBreadCrumb({ links, current }) {
  return (
    <Breadcrumbs aria-label='breadcrumb'>
      {links.map((x) => (
        <Link
          underline='none'
          color='#717171'
          sx={{
            fontSize: pxToRem(34),
          }}
          href={x.link}
        >
          {x.title}
        </Link>
      ))}

      <Typography
        sx={{
          fontSize: pxToRem(34),
        }}
        color='#40C4FF'
      >
        {current}
      </Typography>
    </Breadcrumbs>
  );
}
