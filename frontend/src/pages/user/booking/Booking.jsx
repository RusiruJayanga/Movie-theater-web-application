import React, { useState } from "react";

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
const seatPrice = 500;

const Booking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((s) => s !== seatId)
        : [...prev, seatId]
    );
  };

  const totalPrice = selectedSeats.length * seatPrice;

  return (
    <div className="w-[90%] mx-auto min-h-screen text-white flex flex-col items-center mt-[40px] cursor-default xl:mt-[20px] xl:w-[1240px] ">
      {/* screen */}
      <div className="w-[100%] h-[10px] rounded-tl-[100%] rounded-tr-[100%] bg-[#bdbdbd] my-6 relative xl:w-[70%] "></div>

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

      <div className="w-[100%] bg-[#1a1a1a] rounded-[20px] p-[10px] mt-[60px] md:items-center md:p-[20px] md:flex md:justify-between ">
        <div className="w-[100%] flex items-start justify-start gap-[10px] font-extralight ">
          <img
            className="w-[150px] h-[250px] object-cover rounded-[10px] md:w-[200px] md:h-auto xl:w-[250px] xl:h-[320px] "
            src="movies/1.jpg"
            alt="movie"
          />
          <div className="hidden xl:flex flex-col items-center justify-center gap-[10px] w-[250px] ">
            <img
              className="w-[250px] h-[160px] object-cover rounded-[10px]"
              src="movies/1.jpg"
              alt="movie"
            />
            <img
              className="w-[250px] h-[160px] object-cover rounded-[10px]"
              src="movies/1.jpg"
              alt="movie"
            />
          </div>
          <div className="flex flex-col ml-[10px] ">
            <h5 className="w-[100%] font-light uppercase ">Movie Title</h5>
            <p className="capitalize font-light mt-[20px] opacity-[0.8]">
              1 h 35 min
            </p>
            <h5 className="mt-[5px] text-[#f21f30] uppercase font-bold">PG</h5>
            <p className="opacity-[0.8] font-light mt-[10px]">Selected Seats</p>
            <h5 className="w-[100%] font-light p-[5px] border-t-[1px] border-b-[1px] border-[#bdbdbd]/30 mt-[5px]">
              {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}
            </h5>
            <p className="opacity-[0.8] mt-[10px]">Total Price</p>
            <h5 className="w-[100%] p-[5px] font-light border-t-[1px] border-b-[1px] border-[#bdbdbd]/30 mt-[5px]">
              Rs.{totalPrice}.00
            </h5>
            <p className="w-[100%] lowercase h-[30px] text-[#000000] font-extralight">
              console.error;
            </p>
            <button
              className="flex w-[150px] font-light bg-[#f21f30] border-[1px] border-[#f21f30] hover:bg-[#1a1a1a] hover:text-[#f21f30]"
              to="/booking"
            >
              BOOK
            </button>
          </div>
        </div>
        <div className="w-[100%] flex flex-col items-start justify-between mt-[20px] font-light md:mt-0 md:w-[350px] ">
          {/* repeat */}
          <div className="w-[100%] ">
            <div>
              <input
                type="checkbox"
                id="date-option1"
                value=""
                class="hidden peer"
                required=""
              />
              <label
                for="date-option1"
                class="flex items-center justify-center w-[100%] p-[10px] opacity-[0.8] bg-[#303030] border-[1px] border-[#303030] rounded-[10px] cursor-pointer peer-checked:border-[#bdbdbd] hover:opacity-[1] peer-checked:opacity-[1] transition-opacity duration-300 ease-out "
              >
                <h5>Tuesday 8.00 AM </h5>
              </label>
            </div>
          </div>
          {/* repeat */}
          <div className="w-[100%] mt-[20px]">
            <div>
              <input
                type="checkbox"
                id="date-option2"
                value=""
                class="hidden peer"
                required=""
              />
              <label
                for="date-option2"
                class="flex items-center justify-center w-[100%] p-[10px] opacity-[0.8] bg-[#303030] border-[1px] border-[#303030] rounded-[10px] cursor-pointer peer-checked:border-[#bdbdbd] hover:opacity-[1] peer-checked:opacity-[1] transition-opacity duration-300 ease-out "
              >
                <h5>Tuesday 8.00 AM </h5>
              </label>
            </div>
          </div>
          {/* repeat */}
          <div className="w-[100%] mt-[20px]">
            <div>
              <input
                type="checkbox"
                id="date-option3"
                value=""
                class="hidden peer"
                required=""
              />
              <label
                for="date-option3"
                class="flex items-center justify-center w-[100%] p-[10px] opacity-[0.8] bg-[#303030] border-[1px] border-[#303030] rounded-[10px] cursor-pointer peer-checked:border-[#bdbdbd] hover:opacity-[1] peer-checked:opacity-[1] transition-opacity duration-300 ease-out "
              >
                <h5>Tuesday 8.00 AM </h5>
              </label>
            </div>
          </div>
          {/* repeat */}
          <div className="w-[100%] mt-[20px]">
            <div>
              <input
                type="checkbox"
                id="date-option4"
                value=""
                class="hidden peer"
                required=""
              />
              <label
                for="date-option4"
                class="flex items-center justify-center w-[100%] p-[10px] opacity-[0.8] bg-[#303030] border-[1px] border-[#303030] rounded-[10px] cursor-pointer peer-checked:border-[#bdbdbd] hover:opacity-[1] peer-checked:opacity-[1] transition-opacity duration-300 ease-out "
              >
                <h5>Tuesday 8.00 AM </h5>
              </label>
            </div>
          </div>
          {/* repeat */}
          <div className="w-[100%] mt-[20px]">
            <div>
              <input
                type="checkbox"
                id="date-option5"
                value=""
                class="hidden peer"
                required=""
              />
              <label
                for="date-option5"
                class="flex items-center justify-center w-[100%] p-[10px] opacity-[0.8] bg-[#303030] border-[1px] border-[#303030] rounded-[10px] cursor-pointer peer-checked:border-[#bdbdbd] hover:opacity-[1] peer-checked:opacity-[1] transition-opacity duration-300 ease-out "
              >
                <h5>Tuesday 8.00 AM </h5>
              </label>
            </div>
          </div>
          {/* repeat */}
        </div>
      </div>
    </div>
  );
};

export default Booking;
