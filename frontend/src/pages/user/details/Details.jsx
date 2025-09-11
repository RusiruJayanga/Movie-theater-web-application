import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Details = () => {
  return (
    <div>
      <div className="w-[100%] p-[10px] mt-[10px] cursor-default md:mt-[40px] md:w-[95%] md:mx-auto xl:w-[1240px] ">
        <div className="w-[100%] flex items-center justify-center gap-[20px] xl:gap-[10px] ">
          <img
            className="hidden w-[100%] h-[250px] object-cover rounded-[10px] md:block md:w-[250px] md:h-[370px] "
            src="movies/1.jpg"
            alt="movie"
          />
          <div className="w-[100%] h-[200px] object-cover rounded-[10px] md:h-[370px] xl:w-[60%] ">
            <video controls className="w-full h-full rounded-[10px] ">
              <source
                src="https://youtu.be/BAx2GaMW2qA?si=CyEGwzR70-wfjhM3"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="hidden xl:flex flex-col flex-wrap items-center justify-center gap-[10px] ">
            <img
              className="w-[250px] h-[180px] object-cover rounded-[10px] "
              src="movies/1.jpg"
              alt="movie"
            />
            <img
              className="w-[250px] h-[180px] object-cover rounded-[10px] "
              src="movies/1.jpg"
              alt="movie"
            />
          </div>
        </div>
        <div className="w-[100%] flex flex-col items-center justify-center bg-[#1a1a1a] rounded-[20px] p-[10px] mt-[20px] md:items-start md:p-[20px] ">
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
          <div className="w-[100%] flex justify-center gap-[10px] mt-[10px] text-white font-light md:w-[35%] xl:w-[280px] ">
            <Link className="flex items-center justify-center w-[100%] h-[40px] rounded-[20px] uppercase bg-[#f21f30] border-[1px] border-[#f21f30] transition-colors duration-300 ease-out hover:bg-[#1a1a1a] hover:text-[#f21f30]">
              Get Tickets
            </Link>
            <button className="flex w-[50px] uppercase border-[1px] border-white hover:bg-white hover:text-black">
              <i className="bi bi-heart-fill"></i>
            </button>
          </div>
          <p className="text-white opacity-[0.8] font-extralight mt-[40px] text-justify ">
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
          <div className="w-[100%] mt-[10px] text-white font-medium md:flex md:justify-between xl:mt-[20px]">
            <div>
              <p className="mt-[5px] flex items-center gap-[5px]">
                <span className="text-[11px] font-extralight uppercase">
                  Duration -
                </span>
                1h 35min
              </p>
              <p className="mt-[5px] flex items-center gap-[5px]">
                <span className="text-[11px] font-extralight uppercase">
                  Released -
                </span>
                2023-01-01
              </p>
              <p className="mt-[5px] flex items-center gap-[5px]">
                <span className="text-[11px] font-extralight uppercase">
                  Director -
                </span>
                rusiru jayanga
              </p>
              <p className="mt-[5px] flex items-center gap-[5px]">
                <span className="text-[11px] font-extralight uppercase">
                  Age Rating -
                </span>
                16+
              </p>
            </div>
            <div className="hidden md:flex flex-col justify-between gap-[10px] mr-[30px] ">
              <div className="w-[150px] flex items-center justify-center gap-[10px] md:justify-between md:w-[110px]">
                <img className="w-[50px] " src="rating/imdb.png" alt="rating" />
                <h4 className="text-[#f21f30] font-medium">7/10</h4>
              </div>
              <div className="w-[150px] flex items-center justify-center gap-[10px] md:justify-between md:w-[110px]">
                <img
                  className="w-[30px] ml-[10px] "
                  src="rating/roten-good.png"
                  alt="rating"
                />
                <h4 className="text-[#f21f30] font-medium">90%</h4>
              </div>
            </div>
          </div>
          <div className="w-[100%] flex justify-between md:w-[30%] md:hidden ">
            <div className="w-[150px] flex items-center justify-center gap-[10px] md:justify-between md:w-[110px]">
              <img className="w-[60px] " src="rating/imdb.png" alt="rating" />
              <h4 className="text-[#f21f30] font-medium">7/10</h4>
            </div>
            <div className="w-[150px] flex items-center justify-center gap-[10px] md:justify-between md:w-[110px]">
              <img
                className="w-[40px] "
                src="rating/roten-good.png"
                alt="rating"
              />
              <h4 className="text-[#f21f30] font-medium">90%</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
