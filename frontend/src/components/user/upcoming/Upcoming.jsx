import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
//animation
import { motion, AnimatePresence } from "framer-motion";

const Upcoming = () => {
  //movies
  const upcome_movie = [1, 2, 3, 4, 5, 6];
  return (
    <section className="w-[98%] mx-auto mt-[50px] p-[10px] grid [grid-template-columns:repeat(auto-fit,_350px)] gap-[10px] justify-center cursor-default md:[grid-template-columns:repeat(auto-fit,_400px)] xl:gap-[30px] xl:[grid-template-columns:repeat(auto-fit,_450px)] xl:mt-[30px] ">
      {/* repeat */}
      {upcome_movie.map((upcome_movie) => (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          key={upcome_movie}
          className="w-[350px] bg-[#1a1a1a] text-white font-light flex items-start justify-center p-[5px] rounded-[20px] hover:scale-102 transition duration-300 ease-out md:w-[400px] xl:w-[450px]"
        >
          <img
            className="w-[150px] h-[200px] object-cover rounded-[15px] xl:h-[250px] xl:w-[200px]"
            src="movies/1.jpg"
            alt="movie"
          />
          <div className="w-[100%] p-[10px]">
            <h5 className="uppercase">Movie Title</h5>
            <p className="opacity-[0.8] font-extralight capitalize mt-[5px] flex items-center xl:mt-[15px]">
              1 h 35 min
              <span className="ml-auto text-[#f21f30] uppercase mr-[10px] pl-[5px] pr-[5px] border-l-[1px] border-r-[1px] border-gray-600 font-bold xl:text-[17px] ">
                PG
              </span>
            </p>
            <p className="font-extralight opacity-[0.8] capitalize mt-[5px] xl:block">
              Opening Sep 5,2025
            </p>
            <p className="hidden font-extralight opacity-[0.8] capitalize mt-[5px] xl:block">
              Universal Pictures
            </p>
            <div className="w-[100%] flex items-center justify-center mt-[60px] gap-[10px] xl:w-[200px] xl:ml-auto">
              <Link
                to="/details"
                className="w-[100%] flex items-center justify-center h-[40px] rounded-[20px] bg-[#f21f30] border-[1px] border-[#f21f30] transition-colors duration-300 ease-out hover:bg-[#1a1a1a] hover:text-[#f21f30]"
              >
                MORE
              </Link>
              <button className="flex w-[50px] border-[1px] border-white hover:bg-white hover:text-black xl:w-[55px]">
                <i className="bi bi-heart-fill"></i>
              </button>
            </div>
          </div>
        </motion.div>
      ))}
      {/* repeat */}
    </section>
  );
};

export default Upcoming;
