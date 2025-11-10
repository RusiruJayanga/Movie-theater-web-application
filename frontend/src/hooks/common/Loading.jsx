import React from "react";
import { CircularProgress, Box } from "@mui/material";

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
          color: "#f21f30",
          justifyContent: "center",
          zIndex: "1000000",
        }}
      >
        <CircularProgress size={70} thickness={3} color="inherit" />
      </Box>
    </div>
  );
};

export default Loading;
