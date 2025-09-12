import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
//animation
import { motion, AnimatePresence } from "framer-motion";

const Now_showing = () => {
  //movies
  const new_Movie = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="w-[98%] mx-auto mt-[50px] grid [grid-template-columns:repeat(auto-fit,_190px)] gap-[10px] justify-center cursor-default xl:gap-[30px] xl:[grid-template-columns:repeat(auto-fit,_300px)] xl:mt-[150px] ">
      {/* repeat */}
      {new_Movie.map((new_movie) => (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          key={new_movie}
          className="w-[190px] bg-[#1a1a1a] p-[5px] rounded-[20px] border-[1px] hover:scale-102 transition duration-300 ease-out xl:w-[300px] xl:p-[10px] xl:items-start xl:justify-between xl:gap-[10px]"
        >
          <img
            className="w-[100%] h-[190px] object-cover rounded-[15px] xl:h-[260px]"
            src="movies/1.jpg"
            alt="movie"
          />
          <div className="w-[100%] mt-[5px] xl:mt-[10px]">
            <h5 className="text-white uppercase font-light">Movie Title</h5>
            <p className="text-white opacity-[0.8] font-extralight capitalize mt-[5px] flex items-center xl:mt-[15px]">
              1 h 35 min
              <span className="ml-auto text-[#f21f30] uppercase mr-[10px] pl-[5px] pr-[5px] border-l-[1px] border-r-[1px] border-gray-600 font-bold xl:text-[17px] ">
                PG
              </span>
            </p>
            <p className="hidden text-white font-extralight opacity-[0.8] capitalize mt-[5px] xl:block">
              Released Sep 5,2025
            </p>
            <div className="w-[100%] flex items-center justify-center mt-[10px] gap-[10px] text-white font-light">
              <Link
                to="/details"
                className="w-[100%] h-[40px] flex items-center justify-center rounded-[20px] bg-[#f21f30] border-[1px] border-[#f21f30] transition-colors duration-300 ease-out hover:bg-[#1a1a1a] hover:text-[#f21f30] xl:hidden"
              >
                MORE
              </Link>
              <Link className="hidden xl:flex items-center justify-center w-[100%] h-[40px] rounded-[20px] bg-[#f21f30] border-[1px] border-[#f21f30] transition-colors duration-300 ease-out hover:bg-[#1a1a1a] hover:text-[#f21f30]">
                GET TICKETS
              </Link>
              <Link
                to="/details"
                className="hidden xl:flex items-center justify-center w-[100px] h-[40px] rounded-[20px] border-[1px] border-white transition-colors duration-300 ease-out hover:bg-white hover:text-black"
              >
                MORE
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
      {/* repeat */}
    </section>
  );
};

export default Now_showing;
