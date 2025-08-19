import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navigation_bar = () => {
  return (
    <div>
      <div className="w-full h-[100px] bg-[#292929] flex items-center p-[10px] cursor-default">
        <img
          className="h-[90px] object-cover mr-auto "
          src="logo.png"
          alt="logo"
        />
        <div className="w-auto h-[50px] flex items-center justify-around gap-[10px]">
          <div className="w-auto h-auto flex items-center justify-center border-1 border-gray-500 rounded-[5px]">
            <input
              className="w-[300px] h-[40px] bg-[#1f1f1f] rounded-[5px] p-[8px] text-white"
              type="text"
              placeholder="Search for movies"
              max={100}
            />
            <h4 className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer  text-white rounded-tr-[5px] rounded-br-[5px]">
              <i class="bi bi-search"></i>
            </h4>
          </div>
          <h4 className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer text-white">
            <i className="bi bi-ticket-perforated"></i>
          </h4>
          <h4 className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer text-white">
            <i className="bi bi-person"></i>
          </h4>
        </div>
      </div>
      <div className="w-full h-[60px] sticky top-0 z-10000 bg-transparent flex items-center justify-center gap-[20px] capitalize font-light text-[#cecece] ">
        <NavLink
          className={
            "w-[80px] h-[40px] flex items-center justify-center border-b-[2px] border-transparent hover:text-[#f21f30] active_nav"
          }
          to="/"
        >
          home
        </NavLink>
        <NavLink
          className={
            "w-[80px] h-[40px] flex items-center justify-center border-b-[2px] border-transparent hover:text-[#f21f30]"
          }
          to="/upcoming"
        >
          upcoming
        </NavLink>
        <NavLink
          className={
            "w-[80px] h-[40px] flex items-center justify-center border-b-[2px] border-transparent hover:text-[#f21f30]"
          }
          to="/contact"
        >
          contact us
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation_bar;
