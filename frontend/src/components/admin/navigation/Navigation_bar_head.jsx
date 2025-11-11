import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
//animation
import { motion, AnimatePresence } from "framer-motion";
//hooks
import { logout } from "../../../hooks/admin/Auth.jsx";

const Navigation_bar_head = () => {
  //active navigation
  const [activeNav, set_active_nav] = useState(" ");
  //responsive navigation
  const [menuOpen, set_menu_open] = useState(false);

  //logout
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/adminLogin");
  };

  return (
    <div className="z-[10000] text-white sticky top-0">
      <div className="w-[100%] h-[60px] bg-[#1a1a1a] flex items-center p-[10px] sm:h-[100px] ">
        <img
          className="h-[50px] object-cover mr-auto sm:h-[80px] "
          src="logo.png"
          alt="logo"
        />
        <h4
          className="hidden md:flex w-[40px] h-[40px] items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out"
          onClick={handleLogout}
        >
          <i className="bi bi-box-arrow-right"></i>
        </h4>
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
            className="z-[10100] h-[100vh] bg-[#1a1a1a] right-0 absolute top-0 p-[10px] sm:hidden"
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
                to="/adminHome"
              >
                Home
              </NavLink>
              <NavLink
                className={
                  "w-[100%] h-[40px] flex items-center justify-center border-b-[2px] border-transparent"
                }
                onClick={() => set_menu_open(!menuOpen)}
                to="/adminMovies"
              >
                Now Showing
              </NavLink>
              <NavLink
                className={
                  "w-[100%] h-[40px] flex items-center justify-center border-b-[2px] border-transparent"
                }
                onClick={() => set_menu_open(!menuOpen)}
                to="/adminMovies"
              >
                Upcoming
              </NavLink>
              <NavLink
                className={
                  "w-[100%] h-[40px] flex items-center justify-center border-b-[2px] border-transparent"
                }
                onClick={() => set_menu_open(!menuOpen)}
                to="/adminAddMovies"
              >
                Add Movies
              </NavLink>
              <NavLink
                className={
                  "w-[100%] h-[40px] flex items-center justify-center border-b-[2px] border-transparent"
                }
                onClick={() => set_menu_open(!menuOpen)}
                to="/adminSeat"
              >
                Seats
              </NavLink>
              <NavLink
                className={
                  "w-[100%] h-[40px] flex items-center justify-center border-b-[2px] border-transparent"
                }
                onClick={() => set_menu_open(!menuOpen)}
                to="/adminContact"
              >
                Bookings
              </NavLink>
              <NavLink
                className={
                  "w-[100%] h-[40px] flex items-center justify-center border-b-[2px] border-transparent"
                }
                onClick={() => set_menu_open(!menuOpen)}
                to="/adminContact"
              >
                Contact
              </NavLink>
              <NavLink
                className={
                  "w-[100%] h-[40px] flex items-center justify-center border-b-[2px] border-transparent"
                }
                onClick={() => set_menu_open(!menuOpen)}
                to="/adminUser"
              >
                Users
              </NavLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation_bar_head;
