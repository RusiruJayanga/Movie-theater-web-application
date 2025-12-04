import React from "react";
import { useNavigate } from "react-router-dom";
//hooks
import { logout } from "../../../hooks/admin/Auth.jsx";

const Navigation_bar_head = () => {
  //logout function
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/adminLogin");
  };

  return (
    <div className="z-[10000] text-white sticky top-0">
      <div className="w-[100%] h-[60px] bg-[#1a1a1a] flex items-center p-[10px] sm:h-[100px] ">
        <img
          className="h-[50px] object-cover mr-auto sm:h-[80px] "
          src="logo.png"
          alt="logo"
        />
        <h4
          className="flex w-[40px] h-[40px] items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out"
          onClick={handleLogout}
        >
          <i className="bi bi-box-arrow-right"></i>
        </h4>
      </div>
    </div>
  );
};

export default Navigation_bar_head;
