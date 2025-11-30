import React from "react";
import { useNavigate } from "react-router-dom";
//animation
import { motion } from "framer-motion";
//hooks
import { useMovies } from "../../../hooks/common/Movie";
import { useAddUserInterests } from "../../../hooks/user/Interest";
import { formatDuration, formatDate } from "../../../hooks/common/Format";

const Upcoming = () => {
  //fetch movies function
  const { data: movies } = useMovies();
  //filter movies
  const upcoming = movies?.filter((movie) => movie.status === "upComing");

  //navigate to details page
  const navigate = useNavigate();
  const handleDetailsCardClick = (movieId) => {
    navigate(`/details`, { state: { movieId } });
  };

  //add interests function
  const { mutate: handleAddInterest } = useAddUserInterests();

  return (
    <section className="w-[98%] mx-auto mt-[50px] p-[10px] text-[#eeeeee] grid [grid-template-columns:repeat(auto-fit,_350px)] gap-[10px] justify-center cursor-default md:[grid-template-columns:repeat(auto-fit,_400px)] xl:gap-[30px] xl:[grid-template-columns:repeat(auto-fit,_450px)] xl:mt-[30px] ">
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
          className="w-[350px] font-light flex items-start justify-center p-[5px] rounded-[20px] md:w-[400px] xl:w-[450px]"
          key={movie?._id}
        >
          <img
            className="w-[180px] object-cover rounded-[5px] xl:w-[250px] xl:opacity-[0.88] hover:opacity-[1] transition duration-300 ease-out"
            src={movie?.poster || "default_movie.jpg"}
            alt={movie?.title || "movie"}
          />
          <div className="w-[100%] p-[10px]">
            <h4 className=" w-[100%] font-medium text-[#f21f30] uppercase ">
              {movie?.title || "N/A"}
            </h4>
            <p className="mt-[10px]">
              <span className="capitalize">
                {formatDuration(movie?.runtime) || "N/A"}
              </span>
              <span className="ml-[10px] pl-[10px] border-l-[2px] border-[#bdbdbd] text-[#f21f30] opacity-[1] font-bold ">
                {movie?.ratingCategory || "N/A"}
              </span>
            </p>
            <p className="mt-[5px]">
              Release {formatDate(movie?.releaseDate) || "N/A"}
            </p>
            <div className="w-[100%] flex items-center justify-center mt-[10px] gap-[10px] xl:w-[200px] xl:ml-auto">
              <button
                className="w-[150px] flex bg-[#f21f30] border-[1px] text-white border-[#f21f30] hover:bg-transparent hover:text-[#f21f30]"
                onClick={() => handleDetailsCardClick(movie?._id)}
              >
                MORE
              </button>
              <button
                className="hidden md:flex w-[40px] border-[1px] text-white pt-[3px] border-white hover:bg-white hover:text-black"
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
