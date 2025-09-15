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
      <div className="w-[100%] h-[10px] rounded-tl-[100%] rounded-tr-[100%] bg-gray-400 my-6 relative xl:w-[70%] "></div>

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
                  className={`w-[60px] h-[40px] border-[1px] rounded-[5px] text-[14px] flex items-center cursor-pointer font-extralight justify-center transition md:rounded-tl-[40%] md:rounded-tr-[40%]
                    ${
                      isSelected
                        ? "bg-[#f21f30] border-[#f21f30]"
                        : "border-gray-600 "
                    }
                    ${seatClass}`}
                >
                  {seatId}
                </div>
              );
            })}
          </div>
        ))}
        <p className="w-[100%] lowercase h-[30px] text-[#000000] font-extralight ml-[20px]">
          console.error;
        </p>
      </div>

      <div className="w-[100%] bg-[#1a1a1a] rounded-[20px] p-[10px] mt-[60px] md:items-start md:p-[20px] ">
        <div>
          <input
            type="checkbox"
            id="react-option"
            value=""
            class="hidden peer"
            required=""
          />
          <label
            for="react-option"
            class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div class="block">
              <div class="w-full text-lg font-semibold">React Js</div>
              <div class="w-full text-sm">
                A JavaScript library for building user interfaces.
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Booking;
