import React, { useState } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
//loading
import Loading from "../../../hooks/common/Loading";
//error
import Error from "../../../hooks/common/Error";
//hooks
import { useMovie } from "../../../hooks/user/Details";
import { formatDuration } from "../../../hooks/common/Format";
import { useShowTime } from "../../../hooks/user/Showtime";

//seat select
const rows = [
  { row: "A", seats: 10 },
  { row: "B", seats: 10 },
  { row: "C", seats: 10 },
  { row: "D", seats: 10 },
  { row: "E", seats: 10 },
  { row: "F", seats: 10 },
  { row: "G", seats: 10 },
];
const seatPrice = 1000;

const Booking = () => {
  //movie id
  const location = useLocation();
  const movieId = location.state?.movieId;

  //movies
  const { data: movieDetails, isLoading, isError } = useMovie(movieId);
  //showtime
  const { data: showTimeDetails } = useShowTime(movieId);

  //seats function
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((s) => s !== seatId)
        : [...prev, seatId]
    );
  };

  const totalPrice = selectedSeats.length * seatPrice;

  //loading
  if (isLoading) {
    return <Loading />;
  }
  //error
  if (isError) {
    return <Error />;
  }

  return (
    <div className="w-[100%] p-[10px] text-[#eeeeee] font-light mt-[20px] cursor-default xl:mt-[20px] xl:w-[1240px] xl:mx-auto ">
      <div className="md:flex gap-[20px] ">
        <div>
          <div className="flex gap-[20px] ">
            <img
              className="w-[70px] h-[70px] rounded-full md:w-[90px] md:h-[90px] "
              src={movieDetails?.poster || "default_movie.jpg"}
              alt={movieDetails?.title}
            />
            <div>
              <h2 className="font-medium text-white uppercase ">
                {movieDetails?.title}
              </h2>
              <p>
                <span className="capitalize">
                  {formatDuration(movieDetails?.runtime) || "N/A"}
                </span>
                <span className="ml-[10px] pl-[10px] border-l-[2px] border-[#bdbdbd] text-[#f21f30] opacity-[1] font-bold ">
                  {movieDetails?.ratingCategory || "N/A"}
                </span>
              </p>
            </div>
          </div>
          <h4 className="text-white font-medium mt-[40px]">
            <i className="bi bi-geo-alt"></i> AMC MATARA PORT
          </h4>
          <div className="w-[320px] mt-[20px] flex flex-wrap gap-[10px] mx-auto md:w-[100%] ">
            {/* repeat */}
            {showTimeDetails?.map((showtime) => (
              <label
                className="w-[150px] h-[40px] rounded-[20px] border-[1px] cursor-pointer border-[#bdbdbd]/50 flex items-center justify-center transition-colors duration-300 ease-out"
                key={showtime?._id}
              >
                <p className="text-[#bdbdbd]">
                  {showtime?.date} {showtime?.time}
                </p>
              </label>
            ))}
            {/* repeat */}
          </div>
        </div>
        {/* summery */}
        <div className=" hidden md:block w-[300px] xl:ml-auto xl:w-[400px] ">
          <h4 className="text-white font-medium">SUMMARY</h4>
          <p className="text-[#bdbdbd] mt-[10px]">Selected Seats</p>
          <h5 className="w-[100%] font-light p-[5px] border-t-[1px] border-b-[1px] border-[#bdbdbd]/50 mt-[5px]">
            {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}
          </h5>
          <p className="text-[#bdbdbd] mt-[10px]">Total Price</p>
          <h5 className="w-[100%] p-[5px] font-light border-t-[1px] border-b-[1px] border-[#bdbdbd]/50 mt-[5px]">
            Rs.{totalPrice}.00
          </h5>
          <p className="w-[100%] lowercase h-[30px] text-[#000000] font-extralight">
            console.error;
          </p>
          <button
            className="flex w-[150px] bg-[#f21f30] text-white border-[1px] border-[#f21f30] hover:bg-[#1a1a1a] hover:text-[#f21f30]"
            to="/booking"
          >
            BOOK
          </button>
        </div>{" "}
      </div>
      <div className="mt-[60px]">
        {/* screen */}
        <div className="w-[90%] mx-auto h-[10px] rounded-tl-[100%] rounded-tr-[100%] bg-[#bdbdbd] my-6 relative xl:w-[70%] "></div>

        {/* seat grid */}
        <div className="w-[100%] flex flex-col gap-[20px] mt-[20px] xl:mt-[60px]">
          {rows.map((row) => (
            <div key={row.row} className="flex justify-center gap-[10px]">
              {Array.from({ length: row.seats }).map((_, i) => {
                const seatId = `${row.row}${i + 1}`;
                const seatMargin = i === 4 ? "md:mr-[40px]" : "";
                const isSelected = selectedSeats.includes(seatId);
                const seatClass = `seat ${seatMargin}`;

                return (
                  <div
                    key={seatId}
                    onClick={() => toggleSeat(seatId)}
                    className={`w-[60px] h-[40px] border-[2px] rounded-[5px] text-[14px] flex items-center cursor-pointer font-extralight justify-center transition duration-300 ease-out hover:border-[#bdbdbd] md:rounded-tl-[40%] md:rounded-tr-[40%]
                    ${
                      isSelected
                        ? "bg-[#f21f30] border-[#f21f30]"
                        : "border-[#bdbdbd]/50 "
                    }
                    ${seatClass}`}
                  >
                    {seatId}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      {/* summery */}
      <div className="w-[90%] mx-auto mt-[60px] md:hidden ">
        <h4 className="text-white font-medium">SUMMARY</h4>
        <p className="text-[#bdbdbd] mt-[10px]">Selected Seats</p>
        <h5 className="w-[100%] font-light p-[5px] border-t-[1px] border-b-[1px] border-[#bdbdbd]/30 mt-[5px]">
          {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}
        </h5>
        <p className="text-[#bdbdbd] mt-[10px]">Total Price</p>
        <h5 className="w-[100%] p-[5px] font-light border-t-[1px] border-b-[1px] border-[#bdbdbd]/30 mt-[5px]">
          Rs.{totalPrice}.00
        </h5>
        <p className="w-[100%] lowercase h-[30px] text-[#000000] font-extralight">
          console.error;
        </p>
        <button
          className="flex w-[150px] bg-[#f21f30] text-white border-[1px] border-[#f21f30] hover:bg-[#1a1a1a] hover:text-[#f21f30]"
          to="/booking"
        >
          BOOK
        </button>
      </div>
    </div>
  );
};

export default Booking;
