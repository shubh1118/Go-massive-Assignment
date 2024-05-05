import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import Searchbox from "./Search";
import Carddata from "../data/Carddata";
import Card from "./Card";
import Extracard from "./Extracard"
function Misupdates() {
  return (
    <>
      <div>
        <Box
          display="flex"
          justifyContent="start"
          alignItems="center"
          marginTop={1}
          mb={2}
        >
          <Searchbox />
          <Box marginLeft={2}>
            <FormControl variant="outlined">
              <InputLabel id="filter-label">Filter</InputLabel>
              <Select
                labelId="filter-label"
                id="filter"
                label="Filter"
                defaultValue=""
                style={{ minWidth: 150, height: 48 }}
                startAdornment={
                  <InputAdornment position="start">
                    <IconButton>
                      <FilterListIcon />
                    </IconButton>
                  </InputAdornment>
                }
                MenuProps={{
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "center",
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "center",
                  },
                  getContentAnchorEl: null,
                }}
              >
                <MenuItem value="" style={{ justifyContent: "center" }}>
                  None
                </MenuItem>
                <MenuItem value="option1" style={{ justifyContent: "center" }}>
                  Option 1
                </MenuItem>
                <MenuItem value="option2" style={{ justifyContent: "center" }}>
                  Option 2
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <h2>Activity Feed</h2>
        {Carddata.map((item, i) => {
          return <Extracard {...item} />;
        })}
      </div>
    </>
  );
}

export default Misupdates;
