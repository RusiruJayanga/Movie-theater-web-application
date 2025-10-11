import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
//animation
import { motion, AnimatePresence } from "framer-motion";

const Seat = () => {
  //movies
  const new_Movie = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="w-[100%] grid gap-[20px] xl:[grid-template-columns:repeat(auto-fit,_580px)] ">
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
          className="flex w-[100%] items-start justify-start p-[10px] font-extralight rounded-[20px] bg-[#1a1a1a] hover:scale-102 transition duration-300 ease-out "
        >
          <img
            className="w-[100px] h-[150px] object-cover rounded-[5px]"
            src="movies/1.jpg"
            alt="movie"
          />
          <div className="flex flex-col ml-[20px]">
            <h5 className="w-[100%] font-light uppercase ">Movie Title</h5>
            <p className="capitalize mt-[10px] opacity-[0.8]">
              Tuesday 8.00 AM
            </p>
            <p className="mt-[5px] opacity-[0.8]">Tuesday 8.00 AM</p>
            <p className="mt-[5px] opacity-[0.8]">Tuesday 8.00 AM</p>
            <Link
              to=""
              className="flex items-center justify-center font-light w-[150px] mt-[10px] h-[40px] rounded-[20px] border-[1px] border-white transition-colors duration-300 ease-out hover:bg-white hover:text-black"
            >
              VIEW DETAILS
            </Link>
          </div>
          <div className="flex ml-auto items-center justify-center"></div>
        </motion.div>
      ))}
      {/* repeat */}
    </section>
  );
};

export default Seat;
