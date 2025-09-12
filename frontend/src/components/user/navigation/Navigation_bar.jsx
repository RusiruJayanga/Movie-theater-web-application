import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navigation_bar = () => {
  return (
    <div className="hidden sm:flex z-[10000] sticky top-0 w-full h-[60px] bg-transparent items-center justify-center gap-[20px] font-light text-white nav-scroll">
      <NavLink
        className={
          "w-[80px] h-[40px] flex items-center justify-center border-b-[2px] border-transparent hover:text-[#f21f30] transition-colors duration-300 ease-out active_nav"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={
          "w-[80px] h-[40px] flex items-center justify-center border-b-[2px] border-transparent hover:text-[#f21f30] transition-colors duration-300 ease-out"
        }
        to="/upcoming"
      >
        Upcoming
      </NavLink>
      <NavLink
        className={
          "w-[80px] h-[40px] flex items-center justify-center border-b-[2px] border-transparent hover:text-[#f21f30] transition-colors duration-300 ease-out"
        }
        to="/contact"
      >
        Contact Us
      </NavLink>
    </div>
  );
};

export default Navigation_bar;
