import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
//slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//animation
import { motion, AnimatePresence } from "framer-motion";
//hooks
import { useMovies } from "../../../hooks/common/Movie";
import { formatDuration, formatDate } from "../../../hooks/common/Format";

const Slick_slider = () => {
  //movies
  const { data: movies } = useMovies();

  //filter movies
  const nowShowing = movies?.filter(
    (movie) =>
      movie.status === "nowShowing" && new Date(movie.closeDate) >= new Date()
  );

  //slick slider settings
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute top-1/2 right-[-20px] z-10 hidden xl:flex items-center justify-center 
                 w-[40px] h-[40px] rounded-full border-[2px] border-white text-white 
                 cursor-pointer -translate-y-1/2 bg-black/40 hover:bg-black/70 transition"
      >
        <i className="bi bi-chevron-right"></i>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute top-1/2 left-[-20px] z-10 hidden xl:flex items-center justify-center 
                 w-[40px] h-[40px] rounded-full border-[2px] border-white text-white 
                 cursor-pointer -translate-y-1/2 bg-black/40 hover:bg-black/70 transition"
      >
        <i className="bi bi-chevron-left"></i>
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { breakpoint: 1260, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  //details page
  const navigate = useNavigate();
  const handleDetailsCardClick = (movieId) => {
    navigate(`/details`, { state: { movieId } });
  };

  return (
    <motion.section
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-[90%] text-white font-light mx-auto cursor-default xl:mt-[0vh] xl:z-20 xl:relative "
    >
      <h3 className="xl:hidden">
        NOW SHOWING <i className="bi bi-chevron-right"></i>
      </h3>
      <h2 className="hidden xl:block">
        NOW SHOWING <i className="bi bi-chevron-right"></i>
      </h2>
      <div className="w-[85%] mx-auto mt-[30px] xl:w-[1240px]">
        <Slider {...settings}>
          {/* repeat */}
          {nowShowing?.map((movie) => (
            <div className="px-2" key={movie?._id}>
              <div className="w-auto rounded-[10px]">
                <img
                  className="w-full h-full object-cover opacity-[0.8] rounded-[10px] hover:opacity-[1] transition duration-300 ease-out"
                  src={movie?.poster || "default_movie.jpg"}
                  alt={movie?.title}
                />
                <div className="text-center mt-[5px] ">
                  <h4 className="h-[40px] w-[100%] font-medium text-[#f21f30] uppercase ">
                    {movie?.title}
                  </h4>
                  <p>
                    <span className="capitalize text-[#eeeeee]">
                      {formatDuration(movie?.runtime)}
                    </span>
                    <span className="ml-[10px] pl-[10px] border-l-[2px] border-[#bdbdbd] text-[#f21f30] opacity-[1] font-medium ">
                      {movie?.ratingCategory}
                    </span>
                  </p>
                  <p className="mt-[5px] text-[#eeeeee]">
                    Released {formatDate(movie?.releaseDate)}
                  </p>
                  <button
                    className="w-[200px] flex bg-[#f21f30] border-[1px] border-[#f21f30] mt-[10px] mx-auto hover:bg-[#0c0c0c] hover:text-[#f21f30]"
                    onClick={() => handleDetailsCardClick(movie?._id)}
                  >
                    MORE
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* repeat */}
        </Slider>
        {nowShowing?.length === 0 && (
          <p className="font-extralight opacity-[0.8]">no data to show</p>
        )}
      </div>
    </motion.section>
  );
};

export default Slick_slider;
