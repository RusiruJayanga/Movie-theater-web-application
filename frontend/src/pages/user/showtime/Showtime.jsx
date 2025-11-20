import React from "react";
import { useNavigate } from "react-router-dom";
//loading
import Loading from "../../../hooks/common/Loading";
//error
import Error from "../../../hooks/common/Error";
//animation
import { motion } from "framer-motion";
//hooks
import { useMovies } from "../../../hooks/common/Movie";
import { formatDuration } from "../../../hooks/common/Format";
import { useShowTimeList } from "../../../hooks/user/Showtime";
import { useAddUserInterests } from "../../../hooks/user/Interest";
//alert
import { toast } from "react-toastify";

const Showtime = () => {
  //fetch movies function
  const { data: movies, isLoading, isError } = useMovies();
  //filter movies
  const nowShowing = movies?.filter(
    (movie) =>
      movie.status === "nowShowing" && new Date(movie.closeDate) >= new Date()
  );

  //fetch showtimes function
  const { data: showTimes } = useShowTimeList();

  //navigate to tickets page
  const navigate = useNavigate();
  const handleGetTickets = (movieId) => {
    if (localStorage.getItem("token")) {
      navigate(`/booking`, { state: { movieId } });
    } else {
      toast.warning("Please log in to book tickets !");
    }
  };

  //add interest function
  const { mutate: handleAddInterest } = useAddUserInterests();
  const handleAddInterestClick = (movieId) => {
    if (localStorage.getItem("token")) {
      handleAddInterest(movieId);
    } else {
      toast.warning("Please log in to add interests !");
    }
  };

  //loading
  if (isLoading) {
    return <Loading />;
  }
  //error
  if (isError) {
    return <Error />;
  }

  return (
    <section className="w-[90%] mt-[40px] mx-auto flex flex-col gap-[30px] text-white font-light cursor-default md:w-[650px] xl:w-[920px] ">
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
          className="w-[100%] flex gap-[20px]"
          key={movie?._id}
        >
          <img
            className="w-[180px] object-cover rounded-[5px] xl:w-[250px] xl:opacity-[0.88] hover:opacity-[1] transition duration-300 ease-out"
            src={movie?.poster || "default_movie.jpg"}
            alt={movie?.title || "movie"}
          />
          <div className="w-[100%]">
            <h3 className=" w-[100%] font-medium text-[#f21f30] uppercase ">
              {movie?.title || "N/A"}
            </h3>
            <p>
              <span className="capitalize text-[#eeeeee]">
                {formatDuration(movie?.runtime) || "N/A"}
              </span>
              <span className="ml-[10px] pl-[10px] border-l-[2px] border-[#bdbdbd] text-[#f21f30] opacity-[1] font-bold">
                {movie?.ratingCategory || "N/A"}
              </span>
            </p>
            <p className="text-[#bdbdbd] mt-[10px]">
              Showtimes for{" "}
              <span className="text-white uppercase ">
                {movie?.title || "N/A"}
              </span>
            </p>
            <div className="w-[100%] mt-[20px] grid [grid-template-columns:repeat(auto-fit,_150px)] gap-[10px] md:[grid-template-columns:repeat(auto-fit,_200px)] md:justify-start">
              {/* repeat */}
              {showTimes
                ?.filter((showTime) => showTime?.movieId === movie?._id)
                .map((showtime) => (
                  <label
                    className={` border-[#bdbdbd]/50 bg-[#0c0c0c] text-[#eeeeee] w-[150px] h-[40px] rounded-[20px] border-[1px] flex items-center justify-center transition-colors duration-300 ease-out md:w-[200px]`}
                  >
                    <p className="capitalize">
                      {showtime?.date || "N/A"} {showtime?.time || "N/A"}
                    </p>
                  </label>
                ))}
              {/* repeat */}
            </div>
            <div className="flex items-center justify-start mt-[10px] gap-[10px] xl:mt-[20px]">
              <button
                className="w-[150px] flex bg-[#f21f30] text-white border-[1px] border-[#f21f30] hover:bg-transparent hover:text-[#f21f30] md:w-[200px]"
                onClick={() => handleGetTickets(movie?._id)}
              >
                GET TICKETS
              </button>
              <button
                className="hidden md:flex w-[40px] border-[1px] text-white pt-[3px] border-white hover:bg-white hover:text-black"
                onClick={() => handleAddInterestClick(movie?._id)}
              >
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

export default Showtime;
