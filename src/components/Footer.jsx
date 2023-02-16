import React from "react";
import { ReactComponent as AppLogo } from "assets/ace-fuels-logo.svg";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Divider,
} from "@mui/material";

import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Box bgcolor='#4E4E4E' p={4} color='white'>
      <Grid
        justifyContent={"space-between"}
        container
        sx={{
          width: "100%",
        }}
      >
        <Grid item md={2}>
          <Box bgcolor='white'>
            <AppLogo />
          </Box>
          <Box mt={1}>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              my={2}
            >
              <RoomOutlinedIcon
                sx={{
                  mr: 2,
                }}
              />
              Federal University of Technology, PMB 1526, Owerri Imo State,
              Nigeria.
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              my={2}
            >
              <LocalPhoneOutlinedIcon
                sx={{
                  mr: 2,
                }}
              />
              +234 8123456789
            </Typography>
          </Box>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            my={2}
          >
            Follow us on
            <TwitterIcon sx={{ mx: 2 }} />
            <LinkedInIcon sx={{ mr: 2 }} />
            <FacebookIcon sx={{ mr: 2 }} />
            <InstagramIcon />
          </Typography>
        </Grid>

        <Grid item md={6}>
          <Box>
            <Typography color='#fff' variant='h3'>
              Links
            </Typography>
            <Divider sx={{ my: 2, color: "#fff", bgcolor: "white" }} />
            <Box>
              <Grid container>
                {[
                  "Home",
                  "Administration",
                  "Programmes",
                  "EGRM",
                  "Ace Impact",
                  "Partnerships",
                  "Contact us",
                  "Admissions",
                  "About us",
                  "Resources",
                  "News",
                  "Events",
                  "Blog",
                  "Professional courses",
                  "FAQ",
                ].map((x) => (
                  <Grid md={4}>
                    <Typography
                      sx={{
                        my: 1,
                      }}
                    >
                      {x}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Grid>

        <Grid item md={2}>
          <Box display='flex' flexDirection='column'>
            <Typography variant='h5' color='white'>
              Subscribe to our newsletter
            </Typography>
            <TextField
              placeholder='Enter your email'
              sx={{
                bgcolor: "#949494",
                my: 3,
              }}
            />

            <Button variant='contained'>Subscribe</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
