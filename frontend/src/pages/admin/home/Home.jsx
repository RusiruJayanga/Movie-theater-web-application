import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
//countup
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Home = () => {
  //countup
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  return (
    <div className="text-white cursor-default flex flex-2 ">
      <div className="hidden md:block h-dvh w-[280px] bg-[#1a1a1a] sticky top-[100px] left-0 font-light ">
        <div className="w-[100%] flex items-center p-[20px] opacity-[1] hover:opacity-[1] transition-opacity duration-300 ease-out cursor-pointer bg-[#303030] ">
          <h5>
            <i className="bi bi-house"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Home</h5>
          <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
            <i className=" bi bi-chevron-right"></i>
          </h5>
        </div>
        <span className="font-extralight opacity-[0.8] text-[13px] mt-[20px] ml-[10px]">
          movies
        </span>
        <div className="w-[100%] flex items-center justify-center p-[20px] opacity-[0.8] hover:opacity-[1] transition-opacity duration-300 ease-out cursor-pointer ">
          <h5>
            <i className="bi bi-eye"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Now Showing</h5>
          <span className="flex items-center justify-center rounded-full mr-[20px] opacity-[0.8] bg-[#bdbdbd]/30 font-extralight w-[30px] h-[30px] text-[13px]">
            10+
          </span>
          <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
            <i className=" bi bi-chevron-right"></i>
          </h5>
        </div>
        <div className="w-[100%] flex items-center justify-center p-[20px] opacity-[0.8] hover:opacity-[1] transition-opacity duration-300 ease-out cursor-pointer ">
          <h5>
            <i className="bi bi-eye-slash"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Upcoming</h5>
          <span className="flex items-center justify-center rounded-full mr-[20px] opacity-[0.8] bg-[#bdbdbd]/30 font-extralight w-[30px] h-[30px] text-[13px]">
            10+
          </span>
          <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
            <i className=" bi bi-chevron-right"></i>
          </h5>
        </div>
        <div className="w-[100%] flex items-center justify-center p-[20px] opacity-[0.8] hover:opacity-[1] transition-opacity duration-300 ease-out cursor-pointer ">
          <h5>
            <i className="bi bi-plus-square"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Add Movies</h5>
          <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
            <i className=" bi bi-chevron-right"></i>
          </h5>
        </div>
        <span className="font-extralight opacity-[0.8] text-[13px] mt-[20px] ml-[10px]">
          book
        </span>
        <div className="w-[100%] flex items-center justify-center p-[20px] opacity-[0.8] hover:opacity-[1] transition-opacity duration-300 ease-out cursor-pointer ">
          <h5>
            <i className="bi bi-ticket-perforated-fill"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Seats</h5>
          <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
            <i className=" bi bi-chevron-right"></i>
          </h5>
        </div>
        <div className="w-[100%] flex items-center justify-center p-[20px] opacity-[0.8] hover:opacity-[1] transition-opacity duration-300 ease-out cursor-pointer ">
          <h5>
            <i className="bi bi-journal"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Bookings</h5>
          <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
            <i className=" bi bi-chevron-right"></i>
          </h5>
        </div>
        <span className="font-extralight opacity-[0.8] text-[13px] mt-[20px] ml-[10px]">
          user
        </span>
        <div className="w-[100%] flex items-center justify-center p-[20px] opacity-[0.8] hover:opacity-[1] transition-opacity duration-300 ease-out cursor-pointer ">
          <h5>
            <i className="bi bi-person-rolodex"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Contact</h5>
          <span className="flex items-center justify-center rounded-full mr-[20px] opacity-[0.8] bg-[#bdbdbd]/30 font-extralight w-[30px] h-[30px] text-[13px]">
            10+
          </span>
          <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
            <i className=" bi bi-chevron-right"></i>
          </h5>
        </div>
        <div className="w-[100%] flex items-center justify-center p-[20px] opacity-[0.8] hover:opacity-[1] transition-opacity duration-300 ease-out cursor-pointer ">
          <h5>
            <i className="bi bi-person"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Users</h5>
          <span className="flex items-center justify-center rounded-full mr-[20px] opacity-[0.8] bg-[#bdbdbd]/30 font-extralight w-[30px] h-[30px] text-[13px]">
            10+
          </span>
          <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
            <i className=" bi bi-chevron-right"></i>
          </h5>
        </div>
      </div>
      {/* info section */}
      <div className="h-[150vh] flex-1 p-[15px] md:p-[30px] font-light">
        <div className="w-[100%] h-[100%] ">
          <div className="rounded-[20px] bg-[#1a1a1a] p-[10px] " ref={ref}>
            <h4 className="text-[#f21f30] ">Now Show</h4>
            <p className="opacity-[0.8] ">
              Movies curontly showing in theater.
            </p>
            <div className="w-[100%] flex justify-between ">
              <div className="mt-[10px] ">
                <span className="font-bold text-[60px] text-[#f21f30] ">
                  {inView && <CountUp start={0} end={28} duration={3} />}
                </span>
                <Link
                  to=""
                  className="flex items-center justify-center w-[150px] h-[40px] rounded-[20px] border-[1px] border-white transition-colors duration-300 ease-out hover:bg-white hover:text-black"
                >
                  VIEW DETAILS
                </Link>
              </div>
              <img
                className="w-[150px] h-[150px] object-cover "
                src="admin-now.png"
                alt="now"
              />
            </div>
          </div>
          <div className="rounded-[20px] bg-[#1a1a1a] p-[10px] " ref={ref}>
            <h4 className="text-[#f21f30] ">Users</h4>
            <p className="opacity-[0.8] ">Right now page has</p>
            <div className="w-[100%] flex justify-between ">
              <img
                className="w-[150px] h-[150px] object-cover "
                src="admin-user.png"
                alt="now"
              />
              <div className="mt-[10px] ">
                <span className="font-bold text-[60px] text-[#f21f30] ">
                  {inView && <CountUp start={0} end={208} duration={3} />}
                </span>
                <Link
                  to=""
                  className="flex items-center justify-center w-[150px] h-[40px] rounded-[20px] border-[1px] border-white transition-colors duration-300 ease-out hover:bg-white hover:text-black"
                >
                  VIEW DETAILS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* */}
    </div>
  );
};

export default Home;
