import React from "react";
//animation
import { motion, AnimatePresence, m } from "framer-motion";
//hooks
import { useMovies } from "../../../hooks/common/Movie";
import { formatDuration, formatDate } from "../../../hooks/common/Format";

const Now_showing = () => {
  //movies
  const { data: movies } = useMovies();

  return (
    <section className="w-[100%] grid gap-[20px] xl:[grid-template-columns:repeat(auto-fit,_580px)] ">
      {/* repeat */}
      {movies
        ?.filter((movie) => movie.status === "nowShowing")
        .map((movie) => (
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
            key={movie?._id}
          >
            <img
              className="w-[100px] h-[150px] object-cover rounded-[5px]"
              src={movie?.poster || "default_movie.jpg"}
              alt={movie?.title}
            />
            <div className="flex flex-col ml-[20px]">
              <h5 className="w-[100%] font-light uppercase ">{movie?.title}</h5>
              <p className="capitalize mt-[10px] opacity-[0.8]">
                {formatDuration(movie?.runtime)}
              </p>
              <p className="mt-[5px] opacity-[0.8]">
                Released Date - {formatDate(movie?.releaseDate)}
              </p>
              <p className="mt-[5px] opacity-[0.8]">
                Close Date - {formatDate(movie?.closeDate)}
              </p>
              <h5 className="mt-[5px] text-[#f21f30] uppercase font-bold">
                {movie?.ratingCategory}
              </h5>
            </div>
            <div className="flex ml-auto items-center justify-center">
              <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out ">
                <i className="bi bi-trash3"></i>
              </h5>
            </div>
          </motion.div>
        ))}
      {/* repeat */}
      {movies?.filter((movie) => movie.status === "nowShowing").length ===
        0 && <p className="font-extralight opacity-[0.8] ">no data to show</p>}
    </section>
  );
};

export default Now_showing;
