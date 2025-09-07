import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Details = () => {
  return (
    <div>
      <div className="w-[100%] p-[10px] mt-[10px] cursor-default md:mt-[40px] md:w-[95%] md:mx-auto xl:w-[1200px] ">
        <div className="w-[100%] flex items-center justify-center gap-[20px] xl:gap-[10px] ">
          <img
            className="hidden w-[100%] h-[250px] object-cover rounded-[20px] md:block md:w-[250px] md:h-[370px] "
            src="movies/1.jpg"
            alt="movie"
          />
          <img
            className="w-[100%] h-[200px] object-cover rounded-[20px] md:h-[370px] xl:w-[60%] "
            src="movies/1.jpg"
            alt="movie"
          />
          <div className="hidden xl:flex flex-col flex-wrap items-center justify-center gap-[10px] ">
            <img
              className="w-[250px] h-[180px] object-cover rounded-[20px] "
              src="movies/1.jpg"
              alt="movie"
            />
            <img
              className="w-[250px] h-[180px] object-cover rounded-[20px] "
              src="movies/1.jpg"
              alt="movie"
            />
          </div>
        </div>
        <div className="w-[100%] flex flex-col items-center justify-center bg-[#242124] rounded-[20px] p-[10px] mt-[20px] md:items-start md:p-[20px] ">
          <div className="w-[100%] flex items-start justify-center gap-[15px] md:mt-[10px] md:justify-start ">
            <img
              className=" w-[150px] h-[220px] rounded-[20px] md:hidden "
              src="movies/1.jpg"
              alt="movie"
            />
            <h2 className="text-[#f21f30] font-light uppercase ">
              Lorem ipsum dolor, sit amet consectetur adipisicing
            </h2>
          </div>
          <div className="w-[100%] flex justify-center gap-[10px] mt-[10px] md:w-[35%] xl:w-[20%] ">
            <Link className="flex items-center justify-center w-[100%] h-[40px] rounded-[20px] uppercase bg-[#f21f30] text-white border-[1px] border-[#f21f30] transition-colors duration-300 ease-out hover:bg-[#242124] hover:text-[#f21f30]">
              Get Tickets
            </Link>
            <button className="flex w-[50px] uppercase bg-[#242124] text-white border-[1px] border-white hover:bg-white hover:text-black">
              <i className="bi bi-heart-fill"></i>
            </button>
          </div>
          <p className="text-white font-medium mt-[40px] text-justify ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            nesciunt necessitatibus officiis praesentium enim ipsam autem.
            Aliquid, repellat similique eveniet ad harum corrupti voluptatem
            quidem commodi necessitatibus corporis dolorem voluptatum?
            necessitatibus corporis dolorem voluptatum? Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Deserunt nesciunt necessitatibus
            officiis praesentium enim ipsam autem. Aliquid, repellat similique
            eveniet ad harum corrupti voluptatem quidem commodi necessitatibus
            corporis dolorem voluptatum? necessitatibus corporis dolorem
            voluptatum?
          </p>
          <div className="w-[100%] mt-[10px] md:flex md:justify-between xl:mt-[20px] ">
            <div>
              <p className="text-[#bdbdbd]  mt-[5px] flex items-center gap-[5px]">
                <span className="text-[11px] uppercase">Duration -</span>
                1h 35min
              </p>
              <p className="text-[#bdbdbd]  mt-[5px] flex items-center gap-[5px]">
                <span className="text-[11px] uppercase">Released -</span>
                2023-01-01
              </p>
              <p className="text-[#bdbdbd]  mt-[5px] flex items-center gap-[5px]">
                <span className="text-[11px] uppercase">Director -</span>
                rusiru jayanga
              </p>
              <p className="text-[#bdbdbd]  mt-[5px] flex items-center gap-[5px]">
                <span className="text-[11px] uppercase">Age Rating -</span>
                16+
              </p>
            </div>
            <div className="hidden md:flex flex-col justify-between gap-[10px] mr-[30px] ">
              <div className="w-[150px] flex items-center justify-center gap-[10px] md:justify-between md:w-[110px]">
                <img className="w-[50px] " src="rating/imdb.png" alt="rating" />
                <h4 className="text-white font-medium">7/10</h4>
              </div>
              <div className="w-[150px] flex items-center justify-center gap-[10px] md:justify-between md:w-[110px]">
                <img
                  className="w-[30px]"
                  src="rating/roten-good.png"
                  alt="rating"
                />
                <h4 className="text-white font-medium">90%</h4>
              </div>
            </div>
          </div>
          <div className="w-[100%] flex justify-between md:w-[30%] md:hidden ">
            <div className="w-[150px] flex items-center justify-center gap-[10px] md:justify-between md:w-[110px]">
              <img className="w-[60px] " src="rating/imdb.png" alt="rating" />
              <h4 className="text-white font-medium">7/10</h4>
            </div>
            <div className="w-[150px] flex items-center justify-center gap-[10px] md:justify-between md:w-[110px]">
              <img
                className="w-[40px] "
                src="rating/roten-good.png"
                alt="rating"
              />
              <h4 className="text-white font-medium">90%</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
