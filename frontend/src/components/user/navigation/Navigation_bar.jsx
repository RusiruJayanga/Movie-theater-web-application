import React from "react";
import { NavLink } from "react-router-dom";

const Navigation_bar = () => {
  return (
    <div className="hidden sm:flex z-[10000] sticky top-0 w-full h-[60px] bg-transparent items-center justify-center gap-[20px] font-light text-white nav-scroll">
      <NavLink
        className="w-[80px] h-[40px] flex items-center justify-center border-b-[2px]"
        style={({ isActive }) => {
          return {
            borderBottomColor: isActive ? "#f21f30" : "transparent",
            color: isActive ? "#f21f30" : "white",
          };
        }}
        to="/"
      >
        <p className="hover:text-[#f21f30] transition-colors duration-300 ease-out">
          Home
        </p>
      </NavLink>
      <NavLink
        className={
          "w-[80px] h-[40px] flex items-center justify-center border-b-[2px]"
        }
        style={({ isActive }) => {
          return {
            borderBottomColor: isActive ? "#f21f30" : "transparent",
            color: isActive ? "#f21f30" : "white",
          };
        }}
        to="/showtime"
      >
        <p className="hover:text-[#f21f30] transition-colors duration-300 ease-out">
          Showtimes
        </p>
      </NavLink>
      <NavLink
        className={
          "w-[80px] h-[40px] flex items-center justify-center border-b-[2px]"
        }
        style={({ isActive }) => {
          return {
            borderBottomColor: isActive ? "#f21f30" : "transparent",
            color: isActive ? "#f21f30" : "white",
          };
        }}
        to="/contact"
      >
        <p className="hover:text-[#f21f30] transition-colors duration-300 ease-out">
          Contact Us
        </p>
      </NavLink>
    </div>
  );
};

export default Navigation_bar;
