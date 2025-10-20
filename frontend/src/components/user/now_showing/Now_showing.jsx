import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
//animation
import { motion, AnimatePresence } from "framer-motion";
//alert
import { toast } from "react-toastify";
//hooks
import { useMovies } from "../../../hooks/common/Movie";
import { formatDuration, formatDate } from "../../../hooks/common/Format";

const Now_showing = () => {
  //movies
  const { data: movies } = useMovies();

  //details page
  const navigate = useNavigate();
  const handleDetailsCardClick = (movieId) => {
    navigate(`/details`, { state: { movieId } });
  };

  //get tickets page
  const handleGetTicketsClick = (movieId) => {
    if (localStorage.getItem("token")) {
      navigate(`/booking`, { state: { movieId } });
    } else {
      toast.warning("Please log in to book tickets !");
    }
  };

  //filter movies
  const nowShowing = movies?.filter(
    (movie) =>
      movie.status === "nowShowing" && new Date(movie.closeDate) >= new Date()
  );

  return (
    <section className="w-[98%] mx-auto mt-[50px] text-white grid [grid-template-columns:repeat(auto-fit,_190px)] gap-[10px] justify-center cursor-default xl:gap-[30px] xl:[grid-template-columns:repeat(auto-fit,_300px)] xl:mt-[150px] ">
      {/* repeat */}
      {nowShowing?.map((movie) => (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-[190px] bg-[#1a1a1a] p-[5px] font-light rounded-[20px] hover:scale-102 transition duration-300 ease-out xl:w-[300px] xl:p-[10px] xl:items-start xl:justify-between xl:gap-[10px]"
          key={movie?._id}
        >
          <img
            className="w-[100%] h-[190px] object-cover rounded-[15px] xl:h-[260px] "
            src={movie?.mainImage || "default_movie.jpg"}
            alt={movie?.title}
          />
          <div className="w-[100%] mt-[5px] xl:mt-[10px]">
            <h5 className="uppercase">{movie?.title}</h5>
            <p className="opacity-[0.8] font-extralight capitalize mt-[5px] flex items-center xl:mt-[15px]">
              {formatDuration(movie?.runtime)}
              <span className="ml-auto text-[#f21f30] uppercase mr-[10px] pl-[5px] pr-[5px] border-l-[1px] border-r-[1px] border-gray-600 font-bold xl:text-[17px] ">
                {movie?.ratingCategory}
              </span>
            </p>
            <p className="hidden font-extralight opacity-[0.8] capitalize mt-[5px] xl:block">
              Released {formatDate(movie?.releaseDate)}
            </p>
            <div className="w-[100%] flex items-center justify-center mt-[10px] gap-[10px]">
              <button
                className="w-[100%] flex bg-[#f21f30] border-[1px] border-[#f21f30] hover:bg-[#1a1a1a] hover:text-[#f21f30] xl:hidden"
                onClick={() => handleDetailsCardClick(movie?._id)}
              >
                MORE
              </button>
              <button
                className="hidden xl:flex w-[100%] bg-[#f21f30] border-[1px] border-[#f21f30] hover:bg-[#1a1a1a] hover:text-[#f21f30]"
                onClick={() => handleGetTicketsClick(movie?._id)}
              >
                GET TICKETS
              </button>
              <button
                className="hidden xl:flex w-[100px] border-[1px] border-white hover:bg-white hover:text-black"
                onClick={() => handleDetailsCardClick(movie?._id)}
              >
                MORE
              </button>
            </div>
          </div>
        </motion.div>
      ))}
      {/* repeat */}
      {nowShowing?.length === 0 && (
        <p className="font-extralight opacity-[0.8]">no data to show</p>
      )}
    </section>
  );
};

export default Now_showing;
