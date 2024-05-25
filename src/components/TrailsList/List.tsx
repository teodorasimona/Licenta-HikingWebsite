// src/components/TrailsList.tsx
import React, { useState } from "react";
import {
  CircularProgress,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Grid,
} from "@mui/material";
import TrailsDetails from "../TrailsDetails/TrailsDetails";

const TrailsList = () => {
  const [type, setType] = useState("");
  const [rating, setRating] = useState("");
  const isLoading = false; // Replace with actual loading state
  const trails = [
    { name: "Poiana Brasov" },
    { name: "Canionul 7 scari" },
    { name: "Pietrele lui Solomon" },
  ];

  return (
    <div className="p-4 h-[85vh] bg-white">
      <Typography variant="h4" className="mb-4">
        Trails Around You
      </Typography>
      {isLoading ? (
        <div className="flex justify-center items-center h-96">
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className="w-full mb-4">
            <InputLabel id="type-label">Type</InputLabel>
            <Select
              labelId="type-label"
              value={type}
              onChange={(e) => setType(e.target.value as string)}
            >
              <MenuItem value="hiking">Hiking</MenuItem>
              <MenuItem value="biking">Biking</MenuItem>
              <MenuItem value="walking">Walking</MenuItem>
            </Select>
          </FormControl>
          <FormControl className="w-full mb-4">
            <InputLabel id="rating-label">Rating</InputLabel>
            <Select
              labelId="rating-label"
              value={rating}
              onChange={(e) => setRating(e.target.value as string)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3}>
            {trails?.map((trail, i) => (
              <Grid item key={i} xs={12}>
                <TrailsDetails />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default TrailsList;
