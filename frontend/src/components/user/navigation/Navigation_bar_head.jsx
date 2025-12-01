import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
//animation
import { motion, AnimatePresence, m } from "framer-motion";
//alert
import { toast } from "react-toastify";
//hooks
import { useMovies } from "../../../hooks/common/Movie";

const Navigation_bar_head = () => {
  //get token
  const token = localStorage.getItem("token");

  //fetch movies function
  const { data: movies } = useMovies();
  //search function
  const [searchText, setSearchText] = useState("");
  //filter movies
  const filteredMovies =
    movies?.filter((movie) =>
      movie.title.toLowerCase().includes(searchText.toLowerCase())
    ) ?? [];

  const [searchActive, setSearchActive] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!containerRef.current?.contains(e.target)) {
        setSearchActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  //navigate to details page
  const navigate = useNavigate();
  const handleDetailsCardClick = (movieId) => {
    navigate(`/details`, { state: { movieId } });
  };

  //navigation toggle
  const [menuOpen, set_menu_open] = useState(false);

  //ticket function
  const errorTicket = () => {
    toast.warning("Please log in to book tickets !");
  };

  return (
    <div
      className="z-[10000] text-white font-light xl:relative cursor-default"
      ref={containerRef}
    >
      <div className="w-[100%] h-[60px] bg-[#0c0c0c] flex items-center p-[10px] sm:h-[100px] xl:bg-transparent ">
        <img
          className="h-[50px] object-cover mr-auto sm:h-[80px] "
          src="logo.png"
          alt="logo"
        />
        {/* navigation streched */}
        <div className="hidden sm:flex w-auto h-[50px] items-center justify-around gap-[10px]">
          {/* search bar */}
          <div className="flex flex-col">
            <div className="flex items-center justify-center gap-[5px]">
              <input
                className="w-[300px] h-[50px] pl-[10px] rounded-full border-[1px] bg-[#bdbdbd]/30 border-[#bdbdbd]/50"
                placeholder="Search For Movies"
                type="text"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  setSearchActive(true);
                }}
                onFocus={() => setSearchActive(true)}
              />
              <h4 className="w-[40px] h-[40px] flex items-center justify-center rounded-tr-[5px] rounded-br-[5px] hover:text-[#f21f30] transition-colors duration-300 ease-out cursor-pointer">
                <i className="bi bi-search"></i>
              </h4>
            </div>
            <div
              className={`${
                searchActive && searchText.trim() !== "" ? "block" : "hidden"
              } absolute w-[300px] bg-[#0c0c0c] top-[80px] rounded-[5px] max-h-[200px] overflow-y-auto z-[11000]`}
            >
              {filteredMovies.length > 0 ? (
                filteredMovies.map((movie) => (
                  <p
                    key={movie._id}
                    className="w-[100%]s p-[10px] uppercase hover:bg-[#ffffff22] rounded-[5px] transition-colors duration-300 ease-out cursor-pointer"
                    onClick={() => {
                      setSearchText(movie.title);
                      setSearchActive(false);
                      handleDetailsCardClick(movie._id);
                    }}
                  >
                    {movie.title}
                  </p>
                ))
              ) : (
                <p className="w-[100%]s p-[10px] font-extralight text-[#bdbdbd]">
                  No results found
                </p>
              )}
            </div>
          </div>

          {/* ticket */}
          {token ? (
            <NavLink
              to="/ticket"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#f21f30" : "white",
                };
              }}
            >
              <h4 className=" w-[40px] h-[40px] flex items-center justify-center hover:text-[#f21f30] transition-colors duration-300 ease-out cursor-pointer">
                <i className="bi bi-ticket-perforated"></i>
              </h4>
            </NavLink>
          ) : (
            <NavLink onClick={errorTicket}>
              <h4 className=" w-[40px] h-[40px] flex items-center justify-center hover:text-[#f21f30] transition-colors duration-300 ease-out cursor-pointer">
                <i className="bi bi-ticket-perforated"></i>
              </h4>
            </NavLink>
          )}

          {/* account */}
          {token ? (
            <NavLink
              to="/account"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#f21f30" : "white",
                };
              }}
            >
              <h4 className=" w-[40px] h-[40px] flex items-center justify-center hover:text-[#f21f30] transition-colors duration-300 ease-out cursor-pointer">
                <i className="bi bi-person"></i>
              </h4>
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#f21f30" : "white",
                };
              }}
            >
              <h4 className=" w-[40px] h-[40px] flex items-center justify-center hover:text-[#f21f30] transition-colors duration-300 ease-out cursor-pointer">
                <i className="bi bi-person"></i>
              </h4>
            </NavLink>
          )}
        </div>
        <h4
          className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out sm:hidden"
          onClick={() => set_menu_open(!menuOpen)}
        >
          <i className="bi bi-list"></i>
        </h4>
      </div>
      {/* navigation responsive */}
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
                className="w-[80px] h-[40px] flex items-center justify-center border-b-[2px]"
                style={({ isActive }) => {
                  return {
                    borderBottomColor: isActive ? "#f21f30" : "transparent",
                    color: isActive ? "#f21f30" : "white",
                  };
                }}
                to="/"
                onClick={() => set_menu_open(!menuOpen)}
              >
                <p>Home</p>
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
                onClick={() => set_menu_open(!menuOpen)}
              >
                <p>Showtimes</p>
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
                onClick={() => set_menu_open(!menuOpen)}
              >
                <p>Contact Us</p>
              </NavLink>
            </motion.div>
            <div className="w-[90%] h-auto mx-auto flex flex-col items-start justify-center absolute bottom-[10px]">
              {/* ticket */}
              {token ? (
                <NavLink
                  to="/ticket"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#f21f30" : "white",
                    };
                  }}
                  onClick={() => set_menu_open(!menuOpen)}
                >
                  <h4 className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer">
                    <i className="bi bi-ticket-perforated"></i>
                  </h4>
                </NavLink>
              ) : (
                <NavLink
                  onClick={() => set_menu_open(!menuOpen)}
                  to={errorTicket}
                >
                  <h4 className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer">
                    <i className="bi bi-ticket-perforated"></i>
                  </h4>
                </NavLink>
              )}

              {/* account */}
              {token ? (
                <NavLink
                  to="/account"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#f21f30" : "white",
                    };
                  }}
                  onClick={() => set_menu_open(!menuOpen)}
                >
                  <h4 className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer">
                    <i className="bi bi-person"></i>
                  </h4>
                </NavLink>
              ) : (
                <NavLink
                  to="/login"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#f21f30" : "white",
                    };
                  }}
                  onClick={() => set_menu_open(!menuOpen)}
                >
                  <h4 className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer">
                    <i className="bi bi-person"></i>
                  </h4>
                </NavLink>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation_bar_head;
