import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Toolbar } from "@mui/material";
import LogoSvg from "../Assets/logo.svg";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;

  const iconList = [
    <GridViewRoundedIcon sx={{ fontSize: "medium" }} />,
    <MonetizationOnRoundedIcon sx={{ fontSize: "medium" }} />,
    <AccountBalanceRoundedIcon sx={{ fontSize: "medium" }} />,
    <TimelineRoundedIcon sx={{ fontSize: "medium" }} />,
    <ReceiptRoundedIcon sx={{ fontSize: "medium" }} />,
    <BubbleChartRoundedIcon sx={{ fontSize: "medium" }} />,
    <SavingsRoundedIcon sx={{ fontSize: "medium" }} />,
    <HelpRoundedIcon sx={{ fontSize: "medium" }} />,
  ];

  const drawer = (
    <div>
      <Toolbar />
      <List>
        <ListItemButton sx={{ marginBottom: "15px" }}>
          <ListItemIcon>
            <img src={LogoSvg} alt="Logo" />
          </ListItemIcon>
          <ListItemText
            primary="Climate Angels"
            primaryTypographyProps={{
              fontFamily: "Qanelas Soft",
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: "24px",
              textAlign: "left",
              color: "#000000",
            }}
            sx={{ marginTop: "10px" }}
          />
        </ListItemButton>
        {[
          "Portfolio",
          "Invest",
          "Syndicates",
          "Ledger",
          "Messages",
          "Events",
          "News & Blogs",
          "Help & Support",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{iconList[index]}</ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  fontFamily: "Qanelas Soft",
                  fontSize: "15px",
                  fontWeight: 600,
                  lineHeight: "24px",
                  textAlign: "left",
                  color: "#A3A09C",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          backgroundColor: "#FFFAF4",
          "& .MuiDrawer-paper": {
            backgroundColor: "#FFFAF4", // Apply the background color to the drawer paper
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={props.mobileOpen}
          onTransitionEnd={props.handleDrawerTransitionEnd}
          onClose={props.handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
