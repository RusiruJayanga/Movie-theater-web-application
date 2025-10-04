import React, { useState } from "react";
//components
import Dashboard from "../../../components/admin/dashboard/Dashboard";
import Now_showing from "../../../components/admin/now_showing/Now_showing";
import Upcoming from "../../../components/admin/upcoming/Upcoming";
import Add from "../../../components/admin/add/Add";

const Home = () => {
  //components
  const [component, setComponent] = useState("dashbord");

  return (
    <div className="text-white cursor-default flex flex-2 ">
      <div className="hidden md:block h-dvh w-[280px] bg-[#1a1a1a] sticky top-[100px] left-0 font-light ">
        <div
          className={`${
            component === "dashbord"
              ? "bg-[#303030] opacity-[1]"
              : "bg-[#1a1a1a] opacity-[0.8] font-extralight"
          } w-[100%] flex items-center p-[20px] hover:opacity-[1] transition duration-300 ease-out cursor-pointer `}
          onClick={() => setComponent("dashbord")}
        >
          <h5>
            <i className="bi bi-house"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Home</h5>
          <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
            <i className=" bi bi-chevron-right"></i>
          </h5>
        </div>
        <span className="font-extralight opacity-[0.8] text-[13px] mt-[20px] ml-[10px]">
          movies
        </span>
        <div
          className={`${
            component === "now"
              ? "bg-[#303030] opacity-[1]"
              : "bg-[#1a1a1a] opacity-[0.8] font-extralight"
          } w-[100%] flex items-center p-[20px] hover:opacity-[1] transition duration-300 ease-out cursor-pointer  `}
          onClick={() => setComponent("now")}
        >
          <h5>
            <i className="bi bi-eye"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Now Showing</h5>
          <span className="flex items-center justify-center rounded-full mr-[20px] opacity-[0.8] bg-[#bdbdbd]/30 font-extralight w-[30px] h-[30px] text-[13px]">
            10+
          </span>
          <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
            <i className=" bi bi-chevron-right"></i>
          </h5>
        </div>
        <div
          className={`${
            component === "upcoming"
              ? "bg-[#303030] opacity-[1]"
              : "bg-[#1a1a1a] opacity-[0.8] font-extralight"
          } w-[100%] flex items-center p-[20px] hover:opacity-[1] transition duration-300 ease-out cursor-pointer  `}
          onClick={() => setComponent("upcoming")}
        >
          <h5>
            <i className="bi bi-eye-slash"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Upcoming</h5>
          <span className="flex items-center justify-center rounded-full mr-[20px] opacity-[0.8] bg-[#bdbdbd]/30 font-extralight w-[30px] h-[30px] text-[13px]">
            10+
          </span>
          <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
            <i className=" bi bi-chevron-right"></i>
          </h5>
        </div>
        <div
          className={`${
            component === "add"
              ? "bg-[#303030] opacity-[1]"
              : "bg-[#1a1a1a] opacity-[0.8] font-extralight"
          } w-[100%] flex items-center p-[20px] hover:opacity-[1] transition duration-300 ease-out cursor-pointer  `}
          onClick={() => setComponent("add")}
        >
          <h5>
            <i className="bi bi-plus-square"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Add Movies</h5>
          <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
            <i className=" bi bi-chevron-right"></i>
          </h5>
        </div>
        <span className="font-extralight opacity-[0.8] text-[13px] mt-[20px] ml-[10px]">
          book
        </span>
        <div
          className={`${
            component === "seat"
              ? "bg-[#303030] opacity-[1]"
              : "bg-[#1a1a1a] opacity-[0.8] font-extralight"
          } w-[100%] flex items-center p-[20px] hover:opacity-[1] transition duration-300 ease-out cursor-pointer  `}
          onClick={() => setComponent("seat")}
        >
          <h5>
            <i className="bi bi-ticket-perforated-fill"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Seats</h5>
          <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
            <i className=" bi bi-chevron-right"></i>
          </h5>
        </div>
        <div
          className={`${
            component === "booking"
              ? "bg-[#303030] opacity-[1]"
              : "bg-[#1a1a1a] opacity-[0.8] font-extralight"
          } w-[100%] flex items-center p-[20px] hover:opacity-[1] transition duration-300 ease-out cursor-pointer  `}
          onClick={() => setComponent("booking")}
        >
          <h5>
            <i className="bi bi-journal"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Bookings</h5>
          <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
            <i className=" bi bi-chevron-right"></i>
          </h5>
        </div>
        <span className="font-extralight opacity-[0.8] text-[13px] mt-[20px] ml-[10px]">
          user
        </span>
        <div
          className={`${
            component === "contact"
              ? "bg-[#303030] opacity-[1]"
              : "bg-[#1a1a1a] opacity-[0.8] font-extralight"
          } w-[100%] flex items-center p-[20px] hover:opacity-[1] transition duration-300 ease-out cursor-pointer  `}
          onClick={() => setComponent("contact")}
        >
          <h5>
            <i className="bi bi-person-rolodex"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Contact</h5>
          <span className="flex items-center justify-center rounded-full mr-[20px] opacity-[0.8] bg-[#bdbdbd]/30 font-extralight w-[30px] h-[30px] text-[13px]">
            10+
          </span>
          <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
            <i className=" bi bi-chevron-right"></i>
          </h5>
        </div>
        <div
          className={`${
            component === "user"
              ? "bg-[#303030] opacity-[1]"
              : "bg-[#1a1a1a] opacity-[0.8] font-extralight"
          } w-[100%] flex items-center p-[20px] hover:opacity-[1] transition duration-300 ease-out cursor-pointer  `}
          onClick={() => setComponent("user")}
        >
          <h5>
            <i className="bi bi-person"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Users</h5>
          <span className="flex items-center justify-center rounded-full mr-[20px] opacity-[0.8] bg-[#bdbdbd]/30 font-extralight w-[30px] h-[30px] text-[13px]">
            10+
          </span>
          <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
            <i className=" bi bi-chevron-right"></i>
          </h5>
        </div>
      </div>
      {/* info section */}
      <div className="flex-1 p-[20px] md:p-[30px] font-light">
        {component === "dashbord" ? (
          <Dashboard />
        ) : component === "now" ? (
          <Now_showing />
        ) : component === "upcoming" ? (
          <Upcoming />
        ) : component === "add" ? (
          <Add />
        ) : (
          <p className="font-extralight opacity-[0.8] ">no data to show</p>
        )}
      </div>
      {/* info section */}
    </div>
  );
};

export default Home;
