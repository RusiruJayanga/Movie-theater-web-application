import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Details = () => {
  return (
    <div>
      <div className="w-[100%] p-[10px] mt-[60px] cursor-default ">
        <div className="w-[100%] flex flex-col items-center justify-center p-[10px] ">
          <img
            className="w-[100%] rounded-[20px] "
            src="movies/1.jpg"
            alt="movie"
          />
          <div className="w-[100%] flex flex-wrap items-center justify-center gap-[10px] mt-[10px] ">
            <img
              className="w-[100%] h-[200px] object-cover rounded-[20px] "
              src="movies/1.jpg"
              alt="movie"
            />
            <img
              className="w-[100%] h-[200px] object-cover rounded-[20px] "
              src="movies/1.jpg"
              alt="movie"
            />
            <img
              className="w-[100%] h-[200px] object-cover rounded-[20px] "
              src="movies/1.jpg"
              alt="movie"
            />
            <img
              className="w-[100%] h-[200px] object-cover rounded-[20px] "
              src="movies/1.jpg"
              alt="movie"
            />
          </div>
        </div>
        <div className="w-[100%] flex flex-col items-center justify-center p-[10px] mt-[20px] ">
          <h2 className="text-[#f21f30] font-light uppercase ">
            Lorem ipsum dolor, sit amet consectetur adipisicing
          </h2>
          <div className="w-[100%] flex justify-between mt-[0px] ">
            <div className="w-[150px] flex items-center justify-center gap-[10px]">
              <img className="w-[60px] " src="rating/imdb.png" alt="rating" />
              <h4 className="text-white font-medium">7/10</h4>
            </div>
            <div className="w-[150px] flex items-center justify-center gap-[10px]">
              <img
                className="w-[40px] "
                src="rating/roten-bad.png"
                alt="rating"
              />
              <h4 className="text-white font-medium">90%</h4>
            </div>
          </div>
          <p className="text-white font-medium mt-[20px] text-justify ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            nesciunt necessitatibus officiis praesentium enim ipsam autem.
            Aliquid, repellat similique eveniet ad harum corrupti voluptatem
            quidem commodi necessitatibus corporis dolorem voluptatum?
            necessitatibus corporis dolorem voluptatum?
          </p>
          <div className="w-[100%] mt-[10px] ">
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
          <div className="w-[100%] flex flex-wrap items-center justify-center gap-[10px] mt-[30px]">
            <h3 className="w-[200px] h-[40px] flex items-center justify-center text-[#f21f30] font-light border-[1px] border-[#f21f30] rounded-[20px] transition-colors duration-300 ease-out hover:text-white ">
              25.00 PM
            </h3>
            <h3 className="w-[150px] h-[40px] flex items-center justify-center text-[#f21f30] font-light border-[1px] border-[#f21f30] rounded-[20px] transition-colors duration-300 ease-out hover:text-white ">
              25.00 PM
            </h3>
            <h3 className="w-[150px] h-[40px] flex items-center justify-center text-[#f21f30] font-light border-[1px] border-[#f21f30] rounded-[20px] transition-colors duration-300 ease-out hover:text-white ">
              25.00 PM
            </h3>
            <h3 className="w-[200px] h-[40px] flex items-center justify-center text-[#f21f30] font-light border-[1px] border-[#f21f30] rounded-[20px] transition-colors duration-300 ease-out hover:text-white ">
              25.00 PM
            </h3>
          </div>

          <div className="w-[100%] flex justify-center gap-[10px] mt-[20px]">
            <Link className="flex items-center justify-center w-[100%] h-[40px] rounded-[20px] uppercase bg-[#f21f30] text-white border-[1px] border-[#f21f30] transition-colors duration-300 ease-out hover:bg-[#242124] hover:text-[#f21f30] gap-[10px]">
              <i className="bi bi-ticket-perforated"></i> Get Tickets
            </Link>
            <button className="flex w-[50px] uppercase bg-[#242124] text-white border-[1px] border-white hover:bg-white hover:text-black">
              <i className="bi bi-heart-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
