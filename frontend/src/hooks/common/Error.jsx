import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

//error screen
const Error = () => {
  //navigate to home
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

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
      <div className="flex flex-col items-center justify-center font-medium">
        <img
          className="w-[150px] h-[150px] object-cover"
          src="gif/error.gif"
          alt="error"
        />
        <h1 className="text-white font-bold">Oops !</h1>
        <hp className="font-light text-[#bdbdbd]">
          the page you requested was not found
        </hp>

        <button
          className="w-[150px] mt-[10px] flex bg-[#f21f30] text-white border-[1px] border-[#f21f30] hover:bg-transparent hover:text-[#f21f30]"
          onClick={handleNavigate}
        >
          GO HOME
        </button>
      </div>
    </Box>
  );
};

export default Error;
