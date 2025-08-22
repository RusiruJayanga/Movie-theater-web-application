import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navigation_bar_head = () => {
  //responsive navigation
  const [menuOpen, set_menu_open] = useState(false);

  return (
    <div className="z-[10000]">
      <div className="w-[100%] h-[60px] bg-[#202020] flex items-center p-[10px] sm:h-[100px] ">
        <img
          className="h-[50px] object-cover mr-auto sm:h-[80px] "
          src="logo.png"
          alt="logo"
        />
        {/* navigation streched */}
        <div className="hidden sm:flex w-auto h-[50px] items-center justify-around gap-[10px]">
          <div className="w-auto h-auto flex items-center justify-center gap-[5px]">
            <input
              className=" w-[300px] h-[40px] bg-[#2b2b2b] rounded-[5px] p-[8px] text-white border-1 border-gray-500"
              type="text"
              placeholder="Search for movies"
              max={100}
            />
            <h4 className="w-[40px] h-[40px] flex items-center justify-center text-white rounded-tr-[5px] rounded-br-[5px] hover:text-[#f21f30] transition-colors duration-300 ease-out cursor-pointer">
              <i className="bi bi-search"></i>
            </h4>
          </div>
          <h4 className="w-[40px] h-[40px] flex items-center justify-center text-white hover:text-[#f21f30] transition-colors duration-300 ease-out cursor-pointer">
            <i className="bi bi-ticket-perforated"></i>
          </h4>
          <h4 className="w-[40px] h-[40px] flex items-center justify-center text-white hover:text-[#f21f30] transition-colors duration-300 ease-out cursor-pointer">
            <i className="bi bi-person"></i>
          </h4>
        </div>
        <h4
          className="w-[40px] h-[40px] flex items-center justify-center text-white cursor-pointer sm:hidden"
          onClick={() => set_menu_open(!menuOpen)}
        >
          <i className="bi bi-list"></i>
        </h4>
      </div>
      {/* navigation ham */}
      <div
        className={`mt-[-60px] z-[10100] w-[180px] h-[100vh] bg-[#202020] right-0 p-[10px] absolute transition-all duration-300 sm:hidden ${
          menuOpen
            ? "block opacity-100 scale-100"
            : "hidden opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <h4
          className="w-[40px] h-[40px] flex items-center justify-center text-white cursor-pointer"
          onClick={() => set_menu_open(!menuOpen)}
        >
          <i className="bi bi-x-lg"></i>
        </h4>
        <div className="w-[90%] h-auto mt-[50px] text-white capitalize font-light mx-auto flex flex-col items-center justify-center ">
          <NavLink
            className={
              "w-[100%] h-[40px] flex items-center justify-center border-b-[2px] border-transparent hover:text-[#f21f30] transition-colors duration-300 ease-out active_nav"
            }
            to="/"
          >
            home
          </NavLink>
          <NavLink
            className={
              "w-[100%] h-[40px] flex items-center justify-center border-b-[2px] border-transparent hover:text-[#f21f30] transition-colors duration-300 ease-out"
            }
            to="/upcoming"
          >
            upcoming
          </NavLink>
          <NavLink
            className={
              "w-[100%] h-[40px] flex items-center justify-center border-b-[2px] border-transparent hover:text-[#f21f30] transition-colors duration-300 ease-out"
            }
            to="/contact"
          >
            contact us
          </NavLink>
        </div>
        <div className="w-[90%] h-auto text-white font-light mx-auto flex flex-col items-start justify-center absolute bottom-[10px]">
          <h4 className="w-[40px] h-[40px] flex items-center justify-center text-white hover:text-[#f21f30] transition-colors duration-300 ease-out cursor-pointer">
            <i className="bi bi-ticket-perforated"></i>
          </h4>
          <h4 className="w-[40px] h-[40px] flex items-center justify-center text-white hover:text-[#f21f30] transition-colors duration-300 ease-out cursor-pointer">
            <i className="bi bi-person"></i>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Navigation_bar_head;
