import React from "react";
//slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//hooks
import { useMovies } from "../../../hooks/common/Movie";

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

  return (
    <section className="w-[90%] text-white font-extralight mx-auto cursor-default xl:mt-[-11vh] xl:z-20 xl:relative ">
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
              <div className="w-auto h-[450px] bg-[#242124] rounded-[10px]">
                <img
                  className="w-full h-full object-cover opacity-[0.7] rounded-[10px] hover:opacity-[1] transition duration-300 ease-out"
                  src={movie?.poster || "default_movie.jpg"}
                  alt={movie?.title}
                />
              </div>
            </div>
          ))}
          {/* repeat */}
        </Slider>
        {nowShowing?.length === 0 && (
          <p className="font-extralight opacity-[0.8]">no data to show</p>
        )}
      </div>
    </section>
  );
};

export default Slick_slider;
