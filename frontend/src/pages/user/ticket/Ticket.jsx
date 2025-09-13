import React, { useState } from "react";

const Ticket = () => {
  //manue open
  const [menuInterestsOpen, set_menu_Interests_open] = useState(false);
  const [menuHistoryOpen, set_menu_History_open] = useState(false);
  const [menuSettingsOpen, set_menu_Settings_open] = useState(false);

  return (
    <div className="p-[10px] flex flex-col items-start text-white cursor-default mt-[40px] md:w-[80%] md:mx-auto xl:w-[60%] xl:mt-[20px] ">
      <div className="w-[100%] flex flex-col items-start font-light ">
        <div
          className={`${
            menuInterestsOpen ? "border-gray-400" : "border-gray-600"
          } w-[100%] flex items-center justify-between p-[20px] border-t-[1px] border-b-[1px] transition-colors duration-300 ease-out`}
        >
          <h5>
            <i className="bi bi-ticket-perforated"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">New Tickets</h5>
          <span className="w-[30px] h-[30px] flex items-center justify-center rounded-full mr-[20px] opacity-[0.8] bg-gray-600 text-[13px] font-extralight ">
            10+
          </span>
          <h5
            className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out"
            onClick={() => set_menu_Interests_open(!menuInterestsOpen)}
          >
            <i
              className={`${
                menuInterestsOpen ? "rotate-180" : "rotate-0"
              } bi bi-chevron-down transition-transform duration-300 ease-out`}
            ></i>
          </h5>
        </div>
        {/* repeat */}
        <div
          className={`${
            menuInterestsOpen ? "Flex" : "hidden"
          } flex w-[100%] items-center justify-start p-[20px] font-extralight border-t-[1px] border-b-[1px] border-gray-800 cursor-pointer opacity-[0.8] hover:opacity-[1] transition-opacity duration-300 ease-out `}
        >
          <p className="w-[150px] uppercase ml-[40px] md:w-[300px] ">
            Movie Title
          </p>
          <p className="hidden xl:block capitalize ml-auto">1 h 35 min</p>
          <p className="hidden xl:block ml-auto">Seat - 2/95</p>
          <p className="ml-auto mr-[30px]">Due - 2/9/2025</p>
          <p className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
            <i className="bi bi-x-lg"></i>
          </p>
        </div>
        <div
          className={`${
            menuInterestsOpen ? "Flex" : "hidden"
          } flex w-[100%] items-center justify-center p-[20px] border-t-[1px] border-b-[1px] border-gray-800 opacity-[0.8] `}
        >
          <p className="font-extralight ">no data to show</p>
        </div>
        {/* repeat */}

        <div
          className={`${
            menuHistoryOpen ? "border-gray-400" : "border-gray-600"
          } w-[100%] flex items-center justify-between p-[20px] border-t-[1px] border-b-[1px] transition-colors duration-300 ease-out`}
        >
          <h5>
            <i className="bi bi-ticket-perforated-fill"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Due Tickets</h5>
          <span className="w-[30px] h-[30px] flex items-center justify-center rounded-full mr-[20px] opacity-[0.8] bg-gray-600 text-[13px] font-extralight ">
            10+
          </span>
          <h5
            className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out"
            onClick={() => set_menu_History_open(!menuHistoryOpen)}
          >
            <i
              className={`${
                menuHistoryOpen ? "rotate-180" : "rotate-0"
              } bi bi-chevron-down transition-transform duration-300 ease-out`}
            ></i>
          </h5>
        </div>
        {/* repeat */}
        <div
          className={`${
            menuHistoryOpen ? "Flex" : "hidden"
          } flex w-[100%] items-center justify-start p-[20px] font-extralight border-t-[1px] border-b-[1px] border-gray-800 cursor-pointer opacity-[0.8] hover:opacity-[1] transition-opacity duration-300 ease-out `}
        >
          <p className="w-[150px] uppercase ml-[40px] md:w-[300px] ">
            Movie Title
          </p>
          <p className="hidden xl:block capitalize ml-auto">1 h 35 min</p>
          <p className="hidden xl:block ml-auto">Seat - 2/95</p>
          <p className="ml-auto">Due - 2/9/2025</p>
        </div>
        <div
          className={`${
            menuHistoryOpen ? "Flex" : "hidden"
          } flex w-[100%] items-center justify-center p-[20px] border-t-[1px] border-b-[1px] border-gray-800 opacity-[0.8] `}
        >
          <p className="font-extralight ">no data to show</p>
        </div>
        {/* repeat */}
      </div>
    </div>
  );
};

export default Ticket;
