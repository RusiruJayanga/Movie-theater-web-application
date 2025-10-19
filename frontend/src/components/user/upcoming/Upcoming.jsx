import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
//animation
import { motion, AnimatePresence } from "framer-motion";
//hooks
import { useMovies } from "../../../hooks/common/Movie";
import { useAddUserInterests } from "../../../hooks/user/Interest";
import { formatDuration, formatDate } from "../../../hooks/common/Format";

const Upcoming = () => {
  //movies
  const { data: movies } = useMovies();

  //details page
  const navigate = useNavigate();
  const handleDetailsCardClick = (movieId) => {
    navigate(`/details`, { state: { movieId } });
  };

  //interests function
  const { mutate: handleAddInterest } = useAddUserInterests();

  //filter movies
  const upcoming = movies?.filter((movie) => movie.status === "upComing");

  return (
    <section className="w-[98%] mx-auto mt-[50px] p-[10px] text-white grid [grid-template-columns:repeat(auto-fit,_350px)] gap-[10px] justify-center cursor-default md:[grid-template-columns:repeat(auto-fit,_400px)] xl:gap-[30px] xl:[grid-template-columns:repeat(auto-fit,_450px)] xl:mt-[30px] ">
      {/* repeat */}
      {upcoming?.map((movie) => (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-[350px] bg-[#1a1a1a] font-light flex items-start justify-center p-[5px] rounded-[20px] hover:scale-102 transition duration-300 ease-out md:w-[400px] xl:w-[450px]"
          key={movie?._id}
        >
          <img
            className="w-[150px] h-[200px] object-cover rounded-[15px] xl:h-[250px] xl:w-[200px]"
            src={movie?.poster || "default_movie.jpg"}
            alt={movie?.title}
          />
          <div className="w-[100%] p-[10px]">
            <h5 className="uppercase">{movie?.title}</h5>
            <p className="opacity-[0.8] font-extralight capitalize mt-[5px] flex items-center xl:mt-[15px]">
              {formatDuration(movie?.runtime)}
              <span className="ml-auto text-[#f21f30] uppercase mr-[10px] pl-[5px] pr-[5px] border-l-[1px] border-r-[1px] border-gray-600 font-bold xl:text-[17px] ">
                {movie?.ratingCategory}
              </span>
            </p>
            <p className="font-extralight opacity-[0.8] capitalize mt-[5px] xl:block">
              Release {formatDate(movie?.releaseDate)}
            </p>
            <p className="hidden font-extralight opacity-[0.8] capitalize mt-[5px] xl:block">
              {movie?.studio}
            </p>
            <div className="w-[100%] flex items-center justify-center mt-[60px] gap-[10px] xl:w-[200px] xl:ml-auto">
              <button
                className="w-[100%] flex bg-[#f21f30] border-[1px] border-[#f21f30] hover:bg-[#1a1a1a] hover:text-[#f21f30]"
                onClick={() => handleDetailsCardClick(movie?._id)}
              >
                MORE
              </button>
              <button
                className="flex w-[50px] border-[1px] border-white hover:bg-white hover:text-black xl:w-[55px]"
                onClick={() => handleAddInterest(movie?._id)}
              >
                <i className="bi bi-heart-fill"></i>
              </button>
            </div>
          </div>
        </motion.div>
      ))}
      {/* repeat */}
      {upcoming?.length === 0 && (
        <p className="font-extralight opacity-[0.8]">no data to show</p>
      )}
    </section>
  );
};

export default Upcoming;
