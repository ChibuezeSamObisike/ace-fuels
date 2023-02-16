import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { Box, Divider, Grid } from "@mui/material";
import AppBreadCrumb from "shared/BreadCrumb";
import ImageCard from "shared/ImageCard";

export default function NewsPage() {
  return (
    <div>
      <Navbar />
      <Box mt={8} mx={{ xs: 3, md: 24 }}>
        <AppBreadCrumb current='News' links={[{ link: "/", title: "Home" }]} />
        <Divider
          sx={{
            my: 2,
            bgcolor: "#D4D4D4",
          }}
        />
        <Box my={3}>
          <Grid container justifyContent='space-between'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((x) => (
              <Grid item md={3.5} sx={{ my: 2 }}>
                <ImageCard />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}
