import React from "react";

const Checkout = () => {
  return (
    <div className="p-[10px] flex flex-col items-start text-white cursor-default mt-[40px] md:w-[80%] md:mx-auto xl:w-[920px] xl:mt-[20px] ">
      <div className="w-[100%] flex flex-col items-start font-light ">
        <div className=" w-[100%] flex items-center justify-between p-[20px] border-t-[1px] border-[#bdbdbd]/50 border-b-[1px] transition-colors duration-300 ease-out">
          <h5>
            <i className="bi bi-ticket-perforated"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">New Tickets</h5>
        </div>
        <div className="w-[100%] flex flex-col items-center justify-start gap-[20px] md:items-start xl:flex-row xl:items-start xl:justify-between ">
          <div className="flex flex-col items-center justify-start w-[100%] xl:items-start xl:w-[65%] ">
            {/* repeat */}
            <div className="flex w-[100%] items-start justify-start p-[20px] font-extralight border-t-[1px] border-b-[1px] border-[#bdbdbd]/30 opacity-[0.8] hover:opacity-[1] transition-opacity duration-300 ease-out ">
              <img
                className="w-[100px] h-[150px] object-cover rounded-[5px]"
                src="movies/1.jpg"
                alt="movie"
              />
              <div className="flex flex-col ml-[20px]">
                <h5 className="w-[100%] font-light uppercase ">Movie Title</h5>
                <p className="capitalize mt-[20px] opacity-[0.8]">1 h 35 min</p>
                <p className="mt-[5px] opacity-[0.8]">Seat - 2/95</p>
                <p className="mt-[5px] opacity-[0.8]">Due - 2/9/2025</p>
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
          </div>

          <div className="w-[300px] ">
            <div className="w-[100%] bg-[#1a1a1a] rounded-[20px] p-[10px] pt-[20px] mt-[20px] ">
              <div className="w-[100%] flex items-center justify-start p-[20px] pl-[15px] border-t-[1px] border-b-[1px] border-[#bdbdbd]/50">
                <h5 className="text-[#f21f30]">ORDER SUMMARY</h5>
              </div>
              <div className="w-[100%] flex items-center justify-start p-[15px] border-b-[1px] border-[#bdbdbd]/30">
                <p>Subtotal</p>
                <p className="ml-auto">Rs.12.99</p>
              </div>
              <div className="w-[100%] flex items-center justify-start p-[15px] border-b-[1px] border-[#bdbdbd]/30">
                <p className="opacity-[0.8]">Vat</p>
                <p className="ml-auto opacity-[0.8]">Rs.12.99</p>
              </div>
              <div className="w-[100%] flex items-center justify-start p-[15px] border-t-[1px] border-b-[1px] border-[#bdbdbd]/50 mt-[100px] ">
                <h4>TOTAL</h4>
                <h4 className="ml-auto">Rs.12.99</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
