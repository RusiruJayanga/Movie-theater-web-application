import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const Thank = () => {
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
          src="gif/success.gif"
          alt="success"
        />
        <h1 className="text-white font-bold">Thank You !</h1>
        <hp className="w-[500px] text-center font-light text-[#bdbdbd]">
          your booking is successfully placed. Please check ticket page for QR
          code. scan QR code at entrance to get entry.
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

export default Thank;
