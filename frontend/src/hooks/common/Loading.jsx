import React from "react";
import { Box } from "@mui/material";

//loading screen
const Loading = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "1000000",
      }}
    >
      <img
        className="w-[100px] h-[100px] object-cover"
        src="gif/loader.gif"
        alt="loader"
      />
    </Box>
  );
};

export default Loading;
