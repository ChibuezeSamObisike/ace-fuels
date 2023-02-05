import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import img from "assets/Rectangle 570.jpg";
import style from "style/style";
import { Link } from "react-router-dom";

export default function EventCard() {
  const theme = useTheme();

  return (
    <Card
      elevation={0}
      sx={{
        display: "flex",
        width: "90%",
        borderRadius: "15px 0px 0px 15px",
        border: "1px solid #B8B8B8",
      }}
    >
      <CardMedia
        component='img'
        sx={{ width: 171 }}
        image={img}
        alt='Live from space album cover'
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component='div' variant='h5'>
            ACE-FUELS webinar series
          </Typography>
          <Typography
            variant='subtitle1'
            color='text.secondary'
            component='div'
            sx={{ ...style.flexStyle, justifyContent: "" }}
          >
            <CalendarMonthIcon sx={{ mr: 1 }} />
            <Typography>25th August, 2022</Typography>
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Link>
            <Box sx={style.flexStyle}>
              <Typography color='#206280'>REGISTER HERE</Typography>
              <ArrowForwardIcon sx={{ ml: 2, color: "#206280" }} />
            </Box>
          </Link>
        </Box>
      </Box>
    </Card>
  );
}
