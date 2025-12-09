import React, { useState } from "react";
//components
import Dashboard from "../../../components/admin/dashboard/Dashboard";
import Now_showing from "../../../components/admin/now_showing/Now_showing";
import Upcoming from "../../../components/admin/upcoming/Upcoming";
import History from "../../../components/admin/history/History";
import Add from "../../../components/admin/add/Add";
import Session from "../../../components/admin/session/Session";
import Booking from "../../../components/admin/booking/Booking";
import Contact from "../../../components/admin/contact/Contact";
import User from "../../../components/admin/user/User";
//hooks
import { useMovies } from "../../../hooks/common/Movie";
import { useContact } from "../../../hooks/admin/Contact";
import { useUsers } from "../../../hooks/admin/User";

const Home = () => {
  //get tocken
  const tocken = localStorage.getItem("admin");

  //component toggle
  const [component, setComponent] = useState("dashbord");

  //fetch movies function
  const { data: movies } = useMovies();
  //filter movies
  const nowShowing = movies?.filter(
    (movie) =>
      movie.status === "nowShowing" && new Date(movie.closeDate) >= new Date()
  );
  const upcoming = movies?.filter((movie) => movie.status === "upComing");
  const history = movies?.filter(
    (movie) =>
      movie.status === "nowShowing" && new Date(movie.closeDate) < new Date()
  );

  //fetch contacts function
  const { data: contacts } = useContact();
  //fetch users function
  const { data: users } = useUsers();

  return (
    <div>
      {/* responsive menu */}
      {tocken ? (
        <div className="w-[100%] p-[10px] grid [grid-template-columns:repeat(auto-fit,_150px)] gap-[5px] justify-center font-light text-white sm:hidden">
          <h5
            className={`${
              component === "dashbord"
                ? "bg-[#303030] text-white"
                : "bg-[#1a1a1a] text-[#bdbdbd]"
            } w-[150px] h-[40px] flex justify-center border-[1px] border-[#bdbdbd]/50 rounded-[5px] items-center cursor-pointer`}
            onClick={() => setComponent("dashbord")}
          >
            Home
          </h5>
          <h5
            className={`${
              component === "now"
                ? "bg-[#303030] text-white"
                : "bg-[#1a1a1a] text-[#bdbdbd]"
            } w-[150px] h-[40px] flex justify-center border-[1px] border-[#bdbdbd]/50 rounded-[5px] items-center cursor-pointer`}
            onClick={() => setComponent("now")}
          >
            Now Showing
          </h5>
          <h5
            className={`${
              component === "upcoming"
                ? "bg-[#303030] text-white"
                : "bg-[#1a1a1a] text-[#bdbdbd]"
            } w-[150px] h-[40px] flex justify-center border-[1px] border-[#bdbdbd]/50 rounded-[5px] items-center cursor-pointer`}
            onClick={() => setComponent("upcoming")}
          >
            Upcoming
          </h5>
          <h5
            className={`${
              component === "history"
                ? "bg-[#303030] text-white"
                : "bg-[#1a1a1a] text-[#bdbdbd]"
            } w-[150px] h-[40px] flex justify-center border-[1px] border-[#bdbdbd]/50 rounded-[5px] items-center cursor-pointer`}
            onClick={() => setComponent("history")}
          >
            History
          </h5>
          <h5
            className={`${
              component === "add"
                ? "bg-[#303030] text-white"
                : "bg-[#1a1a1a] text-[#bdbdbd]"
            } w-[150px] h-[40px] flex justify-center border-[1px] border-[#bdbdbd]/50 rounded-[5px] items-center cursor-pointer`}
            onClick={() => setComponent("add")}
          >
            Add Movies
          </h5>
          <h5
            className={`${
              component === "session"
                ? "bg-[#303030] text-white"
                : "bg-[#1a1a1a] text-[#bdbdbd]"
            } w-[150px] h-[40px] flex justify-center border-[1px] border-[#bdbdbd]/50 rounded-[5px] items-center cursor-pointer`}
            onClick={() => setComponent("session")}
          >
            Sessions
          </h5>
          <h5
            className={`${
              component === "booking"
                ? "bg-[#303030] text-white"
                : "bg-[#1a1a1a] text-[#bdbdbd]"
            } w-[150px] h-[40px] flex justify-center border-[1px] border-[#bdbdbd]/50 rounded-[5px] items-center cursor-pointer`}
            onClick={() => setComponent("booking")}
          >
            Bookings
          </h5>
          <h5
            className={`${
              component === "contact"
                ? "bg-[#303030] text-white"
                : "bg-[#1a1a1a] text-[#bdbdbd]"
            } w-[150px] h-[40px] flex justify-center border-[1px] border-[#bdbdbd]/50 rounded-[5px] items-center cursor-pointer`}
            onClick={() => setComponent("contact")}
          >
            Contact
          </h5>
          <h5
            className={`${
              component === "user"
                ? "bg-[#303030] text-white"
                : "bg-[#1a1a1a] text-[#bdbdbd]"
            } w-[150px] h-[40px] flex justify-center border-[1px] border-[#bdbdbd]/50 rounded-[5px] items-center cursor-pointer`}
            onClick={() => setComponent("user")}
          >
            Users
          </h5>
        </div>
      ) : (
        <p className="font-extralight text-[#bdbdbd]">no token</p>
      )}

      {tocken ? (
        <div className="font-light text-[#bdbdbd] cursor-default flex flex-2 ">
          <div className="hidden md:block h-dvh w-[280px] bg-[#1a1a1a] sticky top-[100px] left-0 ">
            <div
              className={`${
                component === "dashbord"
                  ? "bg-[#303030] text-white"
                  : "bg-[#1a1a1a] text-[#bdbdbd]"
              } w-[100%] flex items-center p-[20px] hover:text-white transition duration-300 ease-out cursor-pointer `}
              onClick={() => setComponent("dashbord")}
            >
              <h5>
                <i className="bi bi-house"></i>
              </h5>
              <h5 className="mr-auto ml-[20px]">Home</h5>
              <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
                <i className=" bi bi-chevron-right"></i>
              </h5>
            </div>
            <span className="font-extralight opacity-[0.8] text-[13px] mt-[20px] ml-[10px]">
              Movies
            </span>
            <div
              className={`${
                component === "now"
                  ? "bg-[#303030] text-white"
                  : "bg-[#1a1a1a] text-[#bdbdbd]"
              } w-[100%] flex items-center p-[20px] hover:text-white transition duration-300 ease-out cursor-pointer  `}
              onClick={() => setComponent("now")}
            >
              <h5>
                <i className="bi bi-eye"></i>
              </h5>
              <h5 className="mr-auto ml-[20px]">Now Showing</h5>
              {nowShowing?.length > 0 && (
                <span className="w-[25px] h-[25px] flex items-center justify-center rounded-full mr-[20px] opacity-[0.8] bg-[#bdbdbd]/30 text-white font-extralight text-[13px]">
                  {nowShowing?.length > 10 ? "10+" : nowShowing?.length}
                </span>
              )}
              <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
                <i className=" bi bi-chevron-right"></i>
              </h5>
            </div>
            <div
              className={`${
                component === "upcoming"
                  ? "bg-[#303030] text-white"
                  : "bg-[#1a1a1a] text-[#bdbdbd]"
              } w-[100%] flex items-center p-[20px] hover:text-white transition duration-300 ease-out cursor-pointer  `}
              onClick={() => setComponent("upcoming")}
            >
              <h5>
                <i className="bi bi-eye-slash"></i>
              </h5>
              <h5 className="mr-auto ml-[20px]">Upcoming</h5>
              {upcoming?.length > 0 && (
                <span className="w-[25px] h-[25px] flex items-center justify-center rounded-full mr-[20px] opacity-[0.8] bg-[#bdbdbd]/30 text-white font-extralight text-[13px]">
                  {upcoming?.length > 10 ? "10+" : upcoming?.length}
                </span>
              )}
              <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
                <i className=" bi bi-chevron-right"></i>
              </h5>
            </div>
            <div
              className={`${
                component === "history"
                  ? "bg-[#303030] text-white"
                  : "bg-[#1a1a1a] text-[#bdbdbd]"
              } w-[100%] flex items-center p-[20px] hover:text-white transition duration-300 ease-out cursor-pointer  `}
              onClick={() => setComponent("history")}
            >
              <h5>
                <i className="bi bi-clock-history"></i>
              </h5>
              <h5 className="mr-auto ml-[20px]">History</h5>
              {history?.length > 0 && (
                <span className="w-[25px] h-[25px] flex items-center justify-center rounded-full mr-[20px] opacity-[0.8] bg-[#bdbdbd]/30 text-white font-extralight text-[13px]">
                  {history?.length}
                </span>
              )}
              <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
                <i className=" bi bi-chevron-right"></i>
              </h5>
            </div>
            <div
              className={`${
                component === "add"
                  ? "bg-[#303030] text-white"
                  : "bg-[#1a1a1a] text-[#bdbdbd]"
              } w-[100%] flex items-center p-[20px] hover:text-white transition duration-300 ease-out cursor-pointer  `}
              onClick={() => setComponent("add")}
            >
              <h5>
                <i className="bi bi-plus-square"></i>
              </h5>
              <h5 className="mr-auto ml-[20px]">Add Movies</h5>
              <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
                <i className=" bi bi-chevron-right"></i>
              </h5>
            </div>
            <span className="font-extralight opacity-[0.8] text-[13px] mt-[20px] ml-[10px]">
              Bookings
            </span>
            <div
              className={`${
                component === "session"
                  ? "bg-[#303030] text-white"
                  : "bg-[#1a1a1a] text-[#bdbdbd]"
              } w-[100%] flex items-center p-[20px] hover:text-white transition duration-300 ease-out cursor-pointer  `}
              onClick={() => setComponent("session")}
            >
              <h5>
                <i className="bi bi-ticket-perforated-fill"></i>
              </h5>
              <h5 className="mr-auto ml-[20px]">Sessions</h5>
              <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
                <i className=" bi bi-chevron-right"></i>
              </h5>
            </div>
            <div
              className={`${
                component === "booking"
                  ? "bg-[#303030] text-white"
                  : "bg-[#1a1a1a] text-[#bdbdbd]"
              } w-[100%] flex items-center p-[20px] hover:text-white transition duration-300 ease-out cursor-pointer  `}
              onClick={() => setComponent("booking")}
            >
              <h5>
                <i className="bi bi-journal"></i>
              </h5>
              <h5 className="mr-auto ml-[20px]">Bookings</h5>
              <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
                <i className=" bi bi-chevron-right"></i>
              </h5>
            </div>
            <span className="font-extralight opacity-[0.8] text-[13px] mt-[20px] ml-[10px]">
              User
            </span>
            <div
              className={`${
                component === "contact"
                  ? "bg-[#303030] text-white"
                  : "bg-[#1a1a1a] text-[#bdbdbd]"
              } w-[100%] flex items-center p-[20px] hover:text-white transition duration-300 ease-out cursor-pointer  `}
              onClick={() => setComponent("contact")}
            >
              <h5>
                <i className="bi bi-person-rolodex"></i>
              </h5>
              <h5 className="mr-auto ml-[20px]">Contact</h5>
              {contacts?.length > 0 && (
                <span className="w-[25px] h-[25px] flex items-center justify-center rounded-full mr-[20px] opacity-[0.8] bg-[#bdbdbd]/30 text-white font-extralight text-[13px]">
                  {contacts?.length > 10 ? "10+" : contacts?.length}
                </span>
              )}
              <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
                <i className=" bi bi-chevron-right"></i>
              </h5>
            </div>
            <div
              className={`${
                component === "user"
                  ? "bg-[#303030] text-white"
                  : "bg-[#1a1a1a] text-[#bdbdbd]"
              } w-[100%] flex items-center p-[20px] hover:text-white transition duration-300 ease-out cursor-pointer  `}
              onClick={() => setComponent("user")}
            >
              <h5>
                <i className="bi bi-person"></i>
              </h5>
              <h5 className="mr-auto ml-[20px]">Users</h5>
              {users?.length > 0 && (
                <span className="w-[25px] h-[25px] flex items-center justify-center rounded-full mr-[20px] opacity-[0.8] bg-[#bdbdbd]/30 text-white font-extralight text-[13px]">
                  {users?.length > 10 ? "10+" : users?.length}
                </span>
              )}
              <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
                <i className=" bi bi-chevron-right"></i>
              </h5>
            </div>
          </div>
          <div className="flex-1 p-[20px] md:p-[30px] font-light">
            {component === "dashbord" ? (
              <Dashboard />
            ) : component === "now" ? (
              <Now_showing />
            ) : component === "upcoming" ? (
              <Upcoming />
            ) : component === "history" ? (
              <History />
            ) : component === "add" ? (
              <Add />
            ) : component === "session" ? (
              <Session />
            ) : component === "booking" ? (
              <Booking />
            ) : component === "contact" ? (
              <Contact />
            ) : component === "user" ? (
              <User />
            ) : (
              <p className="font-extralight opacity-[0.8] ">no data to show</p>
            )}
          </div>
        </div>
      ) : (
        <p className="font-extralight text-[#bdbdbd]">no token</p>
      )}
    </div>
  );
};

export default Home;
