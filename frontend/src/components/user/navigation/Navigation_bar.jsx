import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navigation_bar = () => {
  return (
    <div className="w-[100%] h-[80px] sticky top-0 z-10000 bg-red-600 flex items-center justify-between px-4">
      <img className="h-[60px] ml-[20px]" src="logo.png" alt="logo" />
      <div className="w-[30%] h-[50px] bg-amber-50"></div>
      <search className="w-[300px] h-[50px] bg-amber-50"></search>
    </div>
  );
};

export default Navigation_bar;
