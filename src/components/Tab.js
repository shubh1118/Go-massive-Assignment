import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "@mui/lab/TabPanel";
import Misupdates from "./Misupdates";
import TabContext from "@mui/lab/TabContext";
import Divider from "@mui/material/Divider";

export default function AccessibleTabs2() {
  const [value, setValue] = React.useState("2");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          fontFamily: "Qanelas Soft",
          fontSize: "16px",
          lineHeight: "24px",
          textAlign: "left",
        }}
      >
        <TabContext value={value}>
          <Tabs
            onChange={handleChange}
            value={value}
            aria-label="Tabs where each tab needs to be selected manually"
          >
            <Tab
              value="1"
              label="Dashboard"
              sx={{ fontWeight: 600, color: "#484644" }}
            />
            <Tab
              value="2"
              label="Mis & Updates"
              sx={{
                fontWeight: 600,
                color: "black",
                "&:hover": {
                  color: "black", // Change color on hover
                },
              }}
            />
            <Tab
              value="3"
              label="Insights"
              sx={{ fontWeight: 600, color: "#484644" }}
            />
          </Tabs>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">
            <Misupdates />
          </TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
        <Divider />
      </Box>
      
    </>
  );
}
