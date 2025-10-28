import React from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Box } from "@mui/material";

//error screen
const Error = () => {
  //navigate
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "1000000",
        }}
      >
        <div className="flex flex-col items-center justify-center gap-[20px] font-medium">
          <h5 className="text-white font-light">
            ❌ Failed to load details. Please try again later.
          </h5>
          <button
            className="w-[100px] flex bg-[#f21f30] text-white border-[1px] border-[#f21f30] hover:bg-transparent hover:text-[#f21f30]"
            onClick={handleNavigate}
          >
            OK
          </button>
        </div>
      </Box>
    </div>
  );
};

export default Error;
