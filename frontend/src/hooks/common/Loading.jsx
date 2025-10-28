import React from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

//loading screen
const Loading = () => {
  return (
    <div>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "1000000",
        }}
      >
        <CircularProgress size={60} thickness={3} color="red" />
      </Box>
    </div>
  );
};

export default Loading;
