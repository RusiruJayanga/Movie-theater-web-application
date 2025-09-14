import React from "react";

const Checkout = () => {
  return (
    <div className="p-[10px] flex flex-col items-start text-white cursor-default mt-[40px] md:w-[80%] md:mx-auto xl:w-[60%] xl:mt-[20px] ">
      <div className="w-[100%] flex flex-col items-start font-light ">
        <div className=" w-[100%] flex items-center justify-between p-[20px] border-t-[1px] border-gray-600 border-b-[1px] transition-colors duration-300 ease-out">
          <h5>
            <i className="bi bi-ticket-perforated"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">New Tickets</h5>
          <h5 className="w-[30px] h-[30px] flex items-center justify-center">
            <i className=" bi bi-chevron-down transition-transform duration-300 ease-out"></i>
          </h5>
        </div>
        <div className="w-[100%] flex flex-col items-center justify-start gap-[20px] md:items-start xl:flex-row xl:items-start xl:justify-between ">
          {/* repeat */}
          <div className="flex w-[100%] items-start justify-start p-[20px] font-extralight border-t-[1px] border-b-[1px] border-gray-800 opacity-[0.8] hover:opacity-[1] transition-opacity duration-300 ease-out xl:w-[60%] ">
            <img
              className="w-[100px] h-[150px] object-cover rounded-[5px]"
              src="movies/1.jpg"
              alt="movie"
            />
            <div className="flex flex-col ml-[20px]">
              <h5 className="w-[100%] font-normal uppercase ">Movie Title</h5>
              <p className="capitalize mt-[20px]">1 h 35 min</p>
              <p className="mt-[5px]">Seat - 2/95</p>
              <p className="mt-[5px]">Due - 2/9/2025</p>
              <h5 className="mt-[5px] text-[#f21f30] uppercase font-bold">
                PG
              </h5>
            </div>
            <div className="flex ml-auto items-center justify-center">
              <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out ">
                <i className="bi bi-x-lg"></i>
              </h5>
            </div>
          </div>
          {/* repeat */}
          <div className="w-[300px] h-[400px] bg-amber-50"></div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
