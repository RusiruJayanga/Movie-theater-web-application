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
          className="w-[190px] bg-[#242124] p-[5px] rounded-[20px] border-[1px] hover:scale-102 transition duration-300 ease-out xl:w-[300px] xl:p-[10px] xl:items-start xl:justify-between xl:gap-[10px]"
        >
          <img
            className="w-[100%] h-[190px] object-cover rounded-[15px] xl:h-[260px]"
            src="movies/1.jpg"
            alt="movie"
          />
          <div className="w-[100%] mt-[5px] xl:mt-[10px]">
            <h4 className="text-white font-medium xl:font-extralight ">
              Movie Title
            </h4>
            <p className="text-[#bdbdbd] mt-[5px] flex items-center gap-[5px] xl:mt-[20px]">
              <span className="hidden xl:block ml-[5px] text-[11px] uppercase">
                Duration -
              </span>
              1h 35min
              <span className="ml-auto">
                3/10 &nbsp;
                <i className="bi bi-star-fill text-amber-400"></i>
              </span>
            </p>
            <p className="hidden text-[#bdbdbd] mt-[5px] items-center gap-[5px] xl:flex ">
              <span className="hidden xl:block ml-[5px] text-[11px] uppercase">
                Director -
              </span>
              Rusiru jayanga
            </p>
            <div className="w-[100%] flex items-center justify-center mt-[5px] gap-[10px] xl:mt-[10px]">
              <Link
                to="/details"
                className="w-[100%] h-[40px] flex items-center justify-center rounded-[20px] uppercase bg-[#f21f30] text-white border-[1px] border-[#f21f30] transition-colors duration-300 ease-out hover:bg-[#242124] hover:text-[#f21f30] xl:hidden"
              >
                More
              </Link>
              <Link className="hidden xl:flex items-center justify-center w-[100%] h-[40px] rounded-[20px] uppercase bg-[#f21f30] text-white border-[1px] border-[#f21f30] transition-colors duration-300 ease-out hover:bg-[#242124] hover:text-[#f21f30]">
                Get Tickets
              </Link>
              <Link
                to="/details"
                className="hidden xl:flex items-center justify-center w-[100px] h-[40px] rounded-[20px] uppercase bg-[#242124] text-white border-[1px] border-white transition-colors duration-300 ease-out hover:bg-white hover:text-black"
              >
                More
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
