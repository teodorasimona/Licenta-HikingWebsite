// mapbox://styles/teodorraa/clvfdw20u014r01qr99m23z5g
import * as React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Box, Typography, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import Map from "../../components/map";

export default function ExplorePage() {
  return (
    <div className="pt-20">
      <AppBar position="static">
        <Toolbar className="flex justify-between bg-white">
          <Box display="flex" className="space-x-4">
            <Typography variant="h6" className="hidden sm:block text-black">
              Explore trails
            </Typography>
            <div className="relative rounded-md bg-opacity-15 bg-black hover:bg-opacity-25 mx-0 sm:ml-8 sm:mr-2 w-full sm:w-auto">
              <div className="absolute inset-y-0 right-0 pl-2 flex items-center pointer-events-none">
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search..."
                classes={{
                  root: "text-inherit pl-2",
                  input:
                    "pl-10 pr-2 py-1 w-full sm:w-auto transition-width duration-200 ease-in-out md:w-52",
                }}
              />
            </div>
          </Box>
          <Map />
        </Toolbar>
      </AppBar>
    </div>
  );
}
