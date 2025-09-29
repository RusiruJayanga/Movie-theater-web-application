import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navigation_bar = () => {
  return (
    <div className="hidden sm:flex z-[10000] sticky top-0 w-full h-[60px] bg-transparent items-center justify-center gap-[20px] font-light text-white nav-scroll">
      <NavLink
        className={
          "w-[100px] h-[40px] flex items-center justify-center border-b-[2px] border-transparent hover:text-[#f21f30] transition-colors duration-300 ease-out active_nav"
        }
        to="/adminHome"
        onClick={() => set_active_nav(" ")}
      >
        Home
      </NavLink>
      <NavLink
        className={
          "w-[100px] h-[40px] flex items-center justify-center border-b-[2px] border-transparent hover:text-[#f21f30] transition-colors duration-300 ease-out"
        }
        to="/adminMovies"
        onClick={() => set_active_nav(" ")}
      >
        Movies
      </NavLink>
      <NavLink
        className={
          "w-[100px] h-[40px] flex items-center justify-center border-b-[2px] border-transparent hover:text-[#f21f30] transition-colors duration-300 ease-out"
        }
        to="/adminAddMovies"
        onClick={() => set_active_nav(" ")}
      >
        Add movies
      </NavLink>
      <NavLink
        className={
          "w-[100px] h-[40px] flex items-center justify-center border-b-[2px] border-transparent hover:text-[#f21f30] transition-colors duration-300 ease-out"
        }
        to="/adminSeat"
        onClick={() => set_active_nav(" ")}
      >
        Seats
      </NavLink>
      <NavLink
        className={
          "w-[100px] h-[40px] flex items-center justify-center border-b-[2px] border-transparent hover:text-[#f21f30] transition-colors duration-300 ease-out"
        }
        to="/adminContact"
        onClick={() => set_active_nav(" ")}
      >
        Contact
      </NavLink>
    </div>
  );
};

export default Navigation_bar;
