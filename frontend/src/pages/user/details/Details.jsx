import React from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
//hooks
import { useMovie } from "../../../hooks/user/Details";
import { useMovieWithRatings } from "../../../hooks/user/Rating";
import { useAddUserInterests } from "../../../hooks/user/Interest";
import { formatDuration, formatDate } from "../../../hooks/common/Format";

const Details = () => {
  //movie id
  const location = useLocation();
  const movieId = location.state?.movieId;

  //movies
  const { data: movieDetails, isLoading, isError } = useMovie(movieId);
  const { data: movieRatings } = useMovieWithRatings(movieId);

  //interests function
  const { mutate: handleAddInterest } = useAddUserInterests();

  return (
    <div className="w-[100%] text-[#eeeeee] font-light cursor-default ">
      <div>
        <img
          className="w-[100%] h-[30vh] object-cover absolute xl:h-[60vh]"
          src={movieDetails?.mainImage || "default_movie.jpg"}
          alt={movieDetails?.title}
        />
        <div
          className={`w-[100%] h-[30vh] relative top-0 bg-[linear-gradient(0deg,rgba(12,12,12,1)_0%,rgba(0,0,0,0.6)_30%,rgba(12,12,12,0.1)_100%)] xl:h-[60vh] xl:mt-[-160px] xl:bg-[linear-gradient(0deg,rgba(12,12,12,1)_0%,rgba(0,0,0,0.7)_30%,rgba(0,0,0,0.6)_80%,rgba(12,12,12,0.8)_100%)]`}
        ></div>
      </div>
      <div className="w-[100%] p-[10px] mt-[-100px] relative xl:mt-[-200px] xl:w-[1240px] xl:mx-auto">
        <h2 className="font-medium text-white uppercase ">
          {movieDetails?.title}
        </h2>
        <div className="flex items-center justify-start mt-[10px] gap-[10px] ">
          <button className="w-[200px] flex bg-[#f21f30] text-white border-[1px] border-[#f21f30] hover:bg-transparent hover:text-[#f21f30]">
            GET TICKETS
          </button>
          <button
            className="flex w-[40px] border-[1px] text-white pt-[3px] border-white hover:bg-white hover:text-black"
            onClick={() => handleAddInterest(movieDetails?._id)}
          >
            <i className="bi bi-heart-fill"></i>
          </button>
        </div>
        <div className="w-[100%] flex flex-col gap-[20px] mt-[60px] ">
          <p className="text-[#bdbdbd] text-justify">
            {movieDetails?.plot || "N/A"}
          </p>
          <div className="flex justify-between flex-wrap">
            <div>
              <p>
                <span className="capitalize">
                  {formatDuration(movieDetails?.runtime) || "N/A"}
                </span>
                <span className="ml-[10px] pl-[10px] border-l-[2px] border-[#bdbdbd] text-[#f21f30] opacity-[1] font-bold ">
                  {movieDetails?.ratingCategory || "N/A"}
                </span>
              </p>
              <p className="mt-[5px]">
                {movieDetails?.status === "nowShowing" ? "Released" : "Release"}{" "}
                {formatDate(movieDetails?.releaseDate) || "N/A"}
              </p>
              {movieDetails?.status === "nowShowing" && (
                <p className="mt-[5px]">
                  Closing {formatDate(movieDetails?.closeDate) || "N/A"}
                </p>
              )}
              <p className="mt-[5px]">Studio {movieDetails?.studio || "N/A"}</p>
              <p className="mt-[5px]">
                Director {movieDetails?.director || "N/A"}
              </p>
              {movieDetails?.genre.map((genre) => (
                <span
                  className=" pl-[10px] pr-[10px] border-l-[2px] border-[#bdbdbd] text-[#f21f30] opacity-[1] mt-[5px]"
                  key={genre}
                >
                  {genre}
                </span>
              ))}
            </div>
            <div>
              <div className=" flex items-center justify-center gap-[10px]">
                <img className="w-[60px] " src="rating/imdb.png" alt="rating" />
                <h4>{movieRatings?.externalRatings?.imdb || "N/A"}/10</h4>
              </div>
              <div className=" flex items-center justify-center gap-[10px] md:justify-between md:w-[110px]">
                <img
                  className="w-[50px] mr-[15px]"
                  src="rating/roten.png"
                  alt="rating"
                />
                <h4>
                  {movieRatings?.externalRatings?.rottenTomatoes || "N/A"}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[40px]">
          <h4 className="text-white font-medium uppercase">
            More Trailers and Images for {movieDetails?.title}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Details;
