import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Ticket = () => {
  //manue open
  const [menuNewOpen, set_menu_New_open] = useState(false);
  const [menuDueOpen, set_menu_Due_open] = useState(false);

  return (
    <div className="p-[10px] flex flex-col items-start text-white cursor-default mt-[40px] md:w-[80%] md:mx-auto xl:w-[920px] xl:mt-[20px] ">
      <div className="w-[100%] flex flex-col items-start font-light ">
        {/* new ticket */}
        <div
          className={`${
            menuNewOpen
              ? "border-[#bdbdbd] border-b-[1px]"
              : "border-[#bdbdbd]/50"
          } w-[100%] flex items-center justify-between p-[20px] border-t-[1px] transition-colors duration-300 ease-out`}
        >
          <h5>
            <i className="bi bi-ticket-perforated"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">New Tickets</h5>
          <span className="w-[25px] h-[25px] flex items-center justify-center rounded-full mr-[20px] opacity-[0.8] bg-[#bdbdbd]/30 font-extralight text-[13px]">
            10+
          </span>
          <h5
            className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out"
            onClick={() => set_menu_New_open(!menuNewOpen)}
          >
            <i
              className={`${
                menuNewOpen ? "rotate-180" : "rotate-0"
              } bi bi-chevron-down transition-transform duration-300 ease-out`}
            ></i>
          </h5>
        </div>
        {/* repeat */}
        <div
          className={`${
            menuNewOpen ? "Flex" : "hidden"
          } flex w-[100%] items-center justify-start p-[20px] font-extralight border-t-[1px] border-b-[1px] border-[#bdbdbd]/30 cursor-pointer opacity-[0.8] hover:opacity-[1] transition-opacity duration-300 ease-out `}
        >
          <p className="w-[150px] uppercase ml-[40px] md:w-[300px] ">
            Movie Title
          </p>
          <p className="hidden xl:block capitalize ml-auto">1 h 35 min</p>
          <p className="hidden xl:block ml-auto">D4</p>
          <p className="ml-auto">Due - 2/9/2025</p>
        </div>
        <div
          className={`${
            menuNewOpen ? "block" : "hidden"
          } w-[150px] ml-auto mt-[20px] mb-[20px]`}
        >
          <Link
            className="flex items-center justify-center w-[100%] h-[40px] rounded-[20px] bg-[#f21f30] border-[1px] border-[#f21f30] transition-colors duration-300 ease-out hover:bg-[#0c0c0c] hover:text-[#f21f30]"
            to="/checkout"
          >
            CHECK OUT
          </Link>
        </div>
        <div
          className={`${
            menuNewOpen ? "flex" : "hidden"
          } flex w-[100%] items-center justify-center p-[20px] border-t-[1px] border-b-[1px] border-[#bdbdbd]/30 opacity-[0.8] `}
        >
          <p className="font-extralight ">no data to show</p>
        </div>
        {/* repeat */}

        {/* due tickets */}
        <div
          className={`${
            menuDueOpen ? "border-[#bdbdbd] " : "border-[#bdbdbd]/50"
          } w-[100%] flex items-center justify-between p-[20px] border-t-[1px] border-b-[1px] transition-colors duration-300 ease-out`}
        >
          <h5>
            <i className="bi bi-ticket-perforated-fill"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Due Tickets</h5>
          <span className="w-[25px] h-[25px] flex items-center justify-center rounded-full mr-[20px] opacity-[0.8] bg-[#bdbdbd]/30 font-extralight text-[13px] ">
            10+
          </span>
          <h5
            className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out"
            onClick={() => set_menu_Due_open(!menuDueOpen)}
          >
            <i
              className={`${
                menuDueOpen ? "rotate-180" : "rotate-0"
              } bi bi-chevron-down transition-transform duration-300 ease-out`}
            ></i>
          </h5>
        </div>
        {/* repeat */}
        <div
          className={`${
            menuDueOpen ? "Flex" : "hidden"
          } flex w-[100%] items-center justify-start p-[20px] font-extralight border-t-[1px] border-b-[1px] border-[#bdbdbd]/30 cursor-pointer opacity-[0.8] hover:opacity-[1] transition-opacity duration-300 ease-out `}
        >
          <p className="w-[150px] uppercase ml-[40px] md:w-[300px] ">
            Movie Title
          </p>
          <p className="hidden xl:block capitalize ml-auto">1 h 35 min</p>
          <p className="hidden xl:block ml-auto">D4</p>
          <p className="ml-auto">Due - 2/9/2025</p>
        </div>
        <div
          className={`${
            menuDueOpen ? "Flex" : "hidden"
          } flex w-[100%] items-center justify-center p-[20px] border-t-[1px] border-b-[1px] border-[#bdbdbd]/30 opacity-[0.8] `}
        >
          <p className="font-extralight ">no data to show</p>
        </div>
        {/* repeat */}
      </div>
    </div>
  );
};

export default Ticket;
