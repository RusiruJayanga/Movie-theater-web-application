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
          className="w-[350px] bg-[#1a1a1a] flex items-start justify-center p-[5px] rounded-[20px] border-[1px] hover:scale-102 transition duration-300 ease-out md:w-[400px] xl:w-[450px]"
        >
          <img
            className="w-[150px] h-[200px] object-cover rounded-[15px] xl:h-[250px] xl:w-[200px]"
            src="movies/1.jpg"
            alt="movie"
          />
          <div className="w-[100%] p-[10px]">
            <h4 className="text-white font-medium xl:font-extralight ">
              Movie Title
            </h4>
            <p className="text-[#bdbdbd] mt-[20px] flex items-center gap-[5px]">
              <span className="ml-[5px] text-[11px] uppercase">Released -</span>
              2023-01-01
              <span className="hidden md:block ml-auto">
                3/10 &nbsp;
                <i className="bi bi-star-fill text-amber-400"></i>
              </span>
            </p>
            <p className="text-[#bdbdbd] mt-[5px] flex items-center gap-[5px]">
              <span className="ml-[5px] text-[11px] uppercase">Director -</span>
              rusiru jayanga
            </p>
            <p className="text-[#bdbdbd] mt-[5px] flex items-center gap-[5px]">
              <span className="ml-[5px] text-[11px] uppercase">
                Age Rating -
              </span>
              16+
            </p>
            <div className="w-[100%] flex items-center justify-center mt-[20px] gap-[10px] xl:mt-[60px] xl:w-[200px] xl:ml-auto">
              <Link
                to="/details"
                className="w-[100%] flex items-center justify-center h-[40px] rounded-[20px] uppercase bg-[#f21f30] text-white font-medium border-[1px] border-[#f21f30] transition-colors duration-300 ease-out hover:bg-[#1a1a1a] hover:text-[#f21f30]"
              >
                More
              </Link>
              <button className="flex w-[50px] uppercase text-white border-[1px] border-white hover:bg-white hover:text-black xl:w-[55px]">
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
