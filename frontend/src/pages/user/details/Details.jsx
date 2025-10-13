import React from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
//hooks
import { useMovie } from "../../../hooks/user/Details";

const Details = () => {
  //movie id
  const location = useLocation();
  const movieId = location.state?.movieId;

  //movies
  const { data: movieDetails, isLoading, isError } = useMovie(movieId);

  //function to format duration
  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours > 0 ? `${hours} h ` : ""}${remainingMinutes} min`;
  };

  return (
    <div className="w-[100%] p-[10px] mt-[10px] text-white font-light cursor-default md:mt-[40px] md:w-[95%] md:mx-auto xl:w-[1240px] ">
      <div className="w-[100%] flex items-center justify-center gap-[20px] xl:gap-[10px] ">
        <img
          className="hidden w-[100%] h-[250px] object-cover rounded-[10px] md:block md:w-[250px] md:h-[370px] "
          src={movieDetails?.poster || "default_movie.jpg"}
          alt={movieDetails?.title}
        />
        <div className="w-[100%] h-[200px] object-cover rounded-[10px] md:h-[370px] xl:w-[60%] ">
          <video controls className="w-full h-full rounded-[10px] ">
            <source
              src={movieDetails?.trailerUrl || "default_trailer.mp4"}
              type="video/mp4"
            />
          </video>
        </div>
        <div className="hidden xl:flex flex-col flex-wrap items-center justify-center gap-[10px] ">
          <img
            className="w-[250px] h-[180px] object-cover rounded-[10px] "
            src={movieDetails?.galleryImages[0] || "default_movie.jpg"}
            alt={movieDetails?.title}
          />
          <img
            className="w-[250px] h-[180px] object-cover rounded-[10px] "
            src={movieDetails?.galleryImages[1] || "default_movie.jpg"}
            alt={movieDetails?.title}
          />
        </div>
      </div>
      <div className="w-[100%] flex flex-col items-center justify-center bg-[#1a1a1a] rounded-[20px] p-[10px] mt-[20px] md:items-start md:p-[20px] ">
        <div className="w-[100%] flex items-start justify-center gap-[15px] md:mt-[10px] md:justify-start ">
          <img
            className=" w-[150px] h-[220px] rounded-[20px] md:hidden "
            src={movieDetails?.poster || "default_movie.jpg"}
            alt={movieDetails?.title}
          />
          <h2 className="text-[#f21f30] uppercase">{movieDetails?.title}</h2>
        </div>
        <div className="w-[100%] flex justify-center gap-[10px] mt-[10px] md:w-[35%] xl:w-[280px] ">
          {movieDetails?.status === "nowShowing" && (
            <Link
              className="flex items-center justify-center w-[100%] h-[40px] rounded-[20px] bg-[#f21f30] border-[1px] border-[#f21f30] transition-colors duration-300 ease-out hover:bg-[#1a1a1a] hover:text-[#f21f30]"
              to="/booking"
            >
              GET TICKETS
            </Link>
          )}

          <button className="flex w-[50px] border-[1px] border-white hover:bg-white hover:text-black">
            <i className="bi bi-heart-fill"></i>
          </button>
        </div>
        <p className=" opacity-[0.8] font-extralight mt-[40px] text-justify ">
          {movieDetails?.description}
        </p>
        <div className="w-[100%] mt-[20px] md:flex md:justify-between xl:mt-[30px]">
          <div className="capitalize">
            <h5 className="mt-[5px] text-[#f21f30] uppercase font-bold">
              {movieDetails?.ratingCategory}
            </h5>
            <h5>{formatDuration(movieDetails?.duration)}</h5>
            <h5 className="mt-[5px]">
              Opening {new Date(movieDetails?.releaseDate).toLocaleDateString()}
            </h5>
            <h5 className="mt-[5px]">
              Closing {new Date(movieDetails?.closeDate).toLocaleDateString()}
            </h5>
            <h5 className="mt-[5px]">{movieDetails?.studio}</h5>
          </div>
          <div className="hidden md:flex flex-col justify-center gap-[10px] mr-[30px] font-medium">
            <div className="w-[150px] flex items-center justify-center gap-[20px] md:justify-between md:w-[110px]">
              <img className="w-[60px] " src="rating/imdb.png" alt="rating" />
              <h4>7/10</h4>
            </div>
            <div className="w-[150px] flex items-center justify-center gap-[20px] md:justify-between md:w-[110px]">
              <img
                className="w-[55px] ml-[5px] "
                src="rating/roten.png"
                alt="rating"
              />
              <h4>90%</h4>
            </div>
          </div>
        </div>
        <div className="w-[100%] mt-[10px] flex justify-between  font-medium md:hidden">
          <div className="w-[150px] flex items-center justify-center gap-[10px] md:justify-between md:w-[110px]">
            <img className="w-[60px] " src="rating/imdb.png" alt="rating" />
            <h4>7/10</h4>
          </div>
          <div className="w-[150px] flex items-center justify-center gap-[10px] md:justify-between md:w-[110px]">
            <img className="w-[50px] " src="rating/roten.png" alt="rating" />
            <h4>90%</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
