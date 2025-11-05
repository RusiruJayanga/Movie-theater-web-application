import React from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";

const Thank = () => {
  //navigate
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="fixed top-0 left-0 w-[100%] h-[100%] flex flex-col items-center justify-center gap-[20px]">
      <div className="w-[350px] xl:w-[500px]">
        <dotlottie-wc
          src="https://lottie.host/1e985a36-3188-4100-b39c-31f898e3d744/JF7y3qxxea.lottie"
          autoplay
          loop
        ></dotlottie-wc>
      </div>
      <div className="w-[90%] flex flex-col items-center justify-center gap-[20px] font-medium">
        <h5 className="text-[#bdbdbd] font-light text-center ">
          Your booking is successfully placed. Please check ticket page for QR
          code. Scan QR code at entrance to get entry.
        </h5>
        <button
          className="w-[100px] flex bg-[#f21f30] text-white border-[1px] border-[#f21f30] hover:bg-transparent hover:text-[#f21f30]"
          onClick={handleNavigate}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Thank;
