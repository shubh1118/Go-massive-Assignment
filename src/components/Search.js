import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
const Search = styled("div")(({ theme }) => ({
 position: "relative",
 borderRadius: theme.shape.borderRadius,
 backgroundColor: alpha(theme.palette.common.white, 0.15),
 border: "1px solid #A8A8A7",
 "&:hover": {
   backgroundColor: alpha(theme.palette.common.white, 0.25),
 },
 marginRight: theme.spacing(2),
 marginLeft: 0,
 width: "100%",
 [theme.breakpoints.up("sm")]: {
   marginLeft: theme.spacing(3),
   width: "auto",
 },
}));
export {Search}
const SearchIconWrapper = styled("div")(({ theme }) => ({
 padding: theme.spacing(0, 2),
 height: "100%",
 position: "absolute",
 pointerEvents: "none",
 display: "flex",
 alignItems: "center",
 justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
 color: "inherit",
 "& .MuiInputBase-input": {
   padding: theme.spacing(1, 1, 1, 0),
   // vertical padding + font size from searchIcon
   paddingLeft: `calc(1em + ${theme.spacing(4)})`,
   transition: theme.transitions.create("width"),
   width: "100%",
   [theme.breakpoints.up("md")]: {
     width: "20ch",
   },
 },
}));
const SearchBox = () => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon sx={{ color: "#A8A8A7" }} />
      </SearchIconWrapper>
      <StyledInputBase
        sx={{ color: "#A8A8A7" }}
        placeholder="Search by company"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default SearchBox;
