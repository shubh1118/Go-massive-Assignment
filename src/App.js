import "./App.css";
import PrimarySearchAppBar from "./components/Navbar";
import ResponsiveDrawer from "./components/Sidebar";
import AccessibleTabs2 from "./components/Tab";
// import Cardone from "./components/Card";
import RecipeReviewCard from "./components/Extracard";
import React from "react";
import { Box } from "@mui/material";

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <>
      <div className="App">
        <div className="sidebar-section">
          <ResponsiveDrawer
            handleDrawerClose={handleDrawerClose}
            handleDrawerTransitionEnd={handleDrawerTransitionEnd}
            mobileOpen={mobileOpen}
          />
        </div>
        <div className="main-section">
          <div className="navbar">
            <PrimarySearchAppBar handleDrawerToggle={handleDrawerToggle} />
          </div>
          <div className="content-section">
            <AccessibleTabs2 />
          </div>
        </div>

        {/* <Cardone /> */}
        {/* <RecipeReviewCard /> */}
      </div>
    </>
  );
}

export default App;
