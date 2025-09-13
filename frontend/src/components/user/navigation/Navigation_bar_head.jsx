import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
//animation
import { motion, AnimatePresence } from "framer-motion";

const Navigation_bar_head = () => {
  //active navigation
  const [activeNav, set_active_nav] = useState(" ");
  //responsive navigation
  const [menuOpen, set_menu_open] = useState(false);
  //token
  const token = "token";
  return (
    <div className="z-[10000] text-white">
      <div className="w-[100%] h-[60px] bg-[#0c0c0c] flex items-center p-[10px] sm:h-[100px] ">
        <img
          className="h-[50px] object-cover mr-auto sm:h-[80px] "
          src="logo.png"
          alt="logo"
        />
        {/* navigation streched */}
        <div className="hidden sm:flex w-auto h-[50px] items-center justify-around gap-[10px]">
          <div className="w-auto h-auto flex items-center justify-center gap-[5px]">
            <input
              className=" w-[300px] h-[40px] bg-[#1d1d1d] rounded-[20px] pl-[15px] p-[10px] border-1 border-gray-600"
              type="text"
              placeholder="Search for movies"
              max={100}
            />
            <h4 className="w-[40px] h-[40px] flex items-center justify-center rounded-tr-[5px] rounded-br-[5px] hover:text-[#f21f30] transition-colors duration-300 ease-out cursor-pointer">
              <i className="bi bi-search"></i>
            </h4>
          </div>
          <Link to="/ticket" onClick={() => set_active_nav("ticket")}>
            <h4
              className={`${
                activeNav === "ticket" ? "text-[#f21f30]" : ""
              } w-[40px] h-[40px] flex items-center justify-center hover:text-[#f21f30] transition-colors duration-300 ease-out cursor-pointer`}
            >
              <i className="bi bi-ticket-perforated"></i>
            </h4>
          </Link>
          {/* account */}
          {token ? (
            <Link to="/account" onClick={() => set_active_nav("account")}>
              <h4
                className={`${
                  activeNav === "account" ? "text-[#f21f30]" : ""
                } w-[40px] h-[40px] flex items-center justify-center hover:text-[#f21f30] transition-colors duration-300 ease-out cursor-pointer`}
              >
                <i className="bi bi-person"></i>
              </h4>
            </Link>
          ) : (
            <Link to="/login" onClick={() => set_active_nav("login")}>
              <h4
                className={`${
                  activeNav === "login" ? "text-[#f21f30]" : ""
                } w-[40px] h-[40px] flex items-center justify-center hover:text-[#f21f30] transition-colors duration-300 ease-out cursor-pointer`}
              >
                <i className="bi bi-person"></i>
              </h4>
            </Link>
          )}
        </div>
        <h4
          className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out sm:hidden"
          onClick={() => set_menu_open(!menuOpen)}
        >
          <i className="bi bi-list"></i>
        </h4>
      </div>
      {/* navigation ham */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -5, width: 0 }}
            animate={{ opacity: 1, x: 0, width: 180 }}
            transition={{ duration: 0.3 }}
            className="z-[10100] h-[100vh] bg-[#0c0c0c] right-0 absolute top-0 p-[10px] sm:hidden"
          >
            <h4
              className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out"
              onClick={() => set_menu_open(!menuOpen)}
            >
              <i className="bi bi-x-lg"></i>
            </h4>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="w-[90%] h-auto mt-[50px] font-light mx-auto flex flex-col items-center justify-center "
            >
              <NavLink
                className={
                  "w-[100%] h-[40px] flex items-center justify-center border-b-[2px] border-transparent active_nav"
                }
                onClick={() => set_menu_open(!menuOpen)}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={
                  "w-[100%] h-[40px] flex items-center justify-center border-b-[2px] border-transparent"
                }
                onClick={() => set_menu_open(!menuOpen)}
                to="/upcoming"
              >
                Upcoming
              </NavLink>
              <NavLink
                className={
                  "w-[100%] h-[40px] flex items-center justify-center border-b-[2px] border-transparent"
                }
                onClick={() => set_menu_open(!menuOpen)}
                to="/contact"
              >
                Contact Us
              </NavLink>
            </motion.div>
            <div className="w-[90%] h-auto mx-auto flex flex-col items-start justify-center absolute bottom-[10px]">
              <Link to="/ticket">
                <h4 className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer">
                  <i className="bi bi-ticket-perforated"></i>
                </h4>
              </Link>
              {/* account */}
              {token ? (
                <Link onClick={() => set_menu_open(!menuOpen)} to="/account">
                  <h4 className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer">
                    <i className="bi bi-person"></i>
                  </h4>
                </Link>
              ) : (
                <Link onClick={() => set_menu_open(!menuOpen)} to="/login">
                  <h4 className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer">
                    <i className="bi bi-person"></i>
                  </h4>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation_bar_head;
