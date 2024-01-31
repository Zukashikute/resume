import React from "react";
import { Box, Typography, Avatar, useMediaQuery } from "@mui/material";
import JradLogo from "../../assets/img/JradTransparent.png";

const Footer = () => {
  const desktopView = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
        background: "black",
        padding: 2,
      }}
    >
      <Typography
        variant={desktopView ? "h6" : "button"}
        color="white"
        sx={{ textTransform: "none" }}
      >
        © 2024
      </Typography>
      <Avatar
        src={JradLogo}
        alt=""
        variant="rounded"
        sx={{
          width: "100%",
          height: "100%",
          maxWidth: desktopView ? 40 : 30,
          maxHeight: desktopView ? 40 : 30,
        }}
      />
      <Typography
        variant={desktopView ? "h6" : "button"}
        color="white"
        sx={{ textTransform: "none" }}
      >
        - All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
