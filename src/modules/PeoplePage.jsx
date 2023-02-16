import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { Box, TextField, Typography, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import OperationsCard from "shared/OperationsCard";

export default function PeoplePage() {
  return (
    <div>
      <Navbar />
      <Box mt={8}>
        <Box mx={{ xs: 3, md: 24 }}>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='space-between'
          >
            <Typography variant='h1' mb={2} fontWeight='bold'>
              Head of operations
            </Typography>
            <TextField
              placeholder='Enter keyword to search'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                bgcolor: "#949494",
                my: 3,
                width: "40%",
              }}
            />
          </Box>

          <OperationsCard />
          <OperationsCard />
          <OperationsCard />
          <OperationsCard />
        </Box>
      </Box>
      <Footer />
    </div>
  );
}
