import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//loading
import Loading from "../../../hooks/common/Loading";
//error
import { Box } from "@mui/material";
//hooks
import { logout } from "../../../hooks/user/Auth.jsx";
import { useUserProfile } from "../../../hooks/user/Account.jsx";
import { useFetchUserInterests } from "../../../hooks/user/Interest.jsx";
import { useFetchUserTickets } from "../../../hooks/user/Ticket.jsx";
import { formatDuration, formatDate } from "../../../hooks/common/Format";

const Account = () => {
  //manue toggle
  const [menuInterestsOpen, set_menu_Interests_open] = useState(false);
  const [menuHistoryOpen, set_menu_History_open] = useState(false);
  const [menuSettingsOpen, set_menu_Settings_open] = useState(false);

  //fetch account details function
  const { data: userProfile, isLoading, isError } = useUserProfile();

  //logout function
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  //fetch interest function
  const { data: userInterests } = useFetchUserInterests();

  //fetch ticket function
  const { data: userTickets } = useFetchUserTickets();
  //filter tickets
  //filter time
  const startOfWeek = new Date();
  const day = startOfWeek.getDay();
  startOfWeek.setDate(startOfWeek.getDate() - day);
  startOfWeek.setHours(0, 0, 0, 0);

  const historyTickets = userTickets?.filter((ticket) => {
    const added = new Date(ticket.addedDate);
    return added < startOfWeek;
  });

  //navigate to details page
  const navigateDetails = useNavigate();
  const handleDetailsCardClick = (movieId) => {
    navigateDetails(`/details`, { state: { movieId } });
  };

  //loading
  if (isLoading) {
    return <Loading />;
  }
  //error
  if (isError) {
    return (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "1000000",
        }}
      >
        <div className="flex flex-col items-center justify-center font-medium">
          <img
            className="w-[150px] h-[150px] object-cover"
            src="gif/error.gif"
            alt="error"
          />
          <h1 className="text-white font-bold">Oops !</h1>
          <hp className="font-light text-[#bdbdbd]">
            your session has expired please login again !
          </hp>

          <button
            className="w-[150px] mt-[10px] flex bg-[#f21f30] text-white border-[1px] border-[#f21f30] hover:bg-transparent hover:text-[#f21f30]"
            onClick={handleLogout}
          >
            <i className="bi bi-box-arrow-right"></i>
          </button>
        </div>
      </Box>
    );
  }

  return (
    <div className="p-[10px] flex flex-col items-start text-white cursor-default mt-[40px] md:w-[80%] md:mx-auto xl:w-[920px] xl:mt-[20px] ">
      {/* account details */}
      <div className="w-[100%] flex items-center justify-between p-[20px] border-t-[1px] border-b-[1px] border-[#bdbdbd]/50 ">
        <img
          className="w-[70px] h-[70px] rounded-full md:w-[90px] md:h-[90px]"
          src="person.jpg"
          alt="person"
        />
        <div className="mr-auto ml-[20px] md:ml-[40px]">
          <h4 className="font-medium mt-[5px]">WELLCOME !</h4>
          <h2 className="text-[#f21f30] uppercase font-light ">
            {userProfile?.name || "N/A"}
          </h2>
          <p className="font-light text-[#bdbdbd] ">
            {userProfile?.email || "N/A"}
          </p>
          <p className="mt-[5px] font-light text-[#bdbdbd] ">
            {userProfile?.mobile || "N/A"}
          </p>
        </div>
        <h4
          className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out"
          onClick={handleLogout}
        >
          <i className="bi bi-box-arrow-right"></i>
        </h4>
      </div>
      {/* interests */}
      <div className="w-[100%] flex flex-col items-start mt-[100px] font-light ">
        <div
          className={`${
            menuInterestsOpen
              ? "border-[#bdbdbd] border-b-[1px]"
              : "border-[#bdbdbd]/50"
          } w-[100%] flex items-center justify-between p-[20px] border-t-[1px] transition-colors duration-300 ease-out`}
        >
          <h5>
            <i className="bi bi-heart"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Interests</h5>
          {userInterests?.length > 0 && (
            <span className="w-[25px] h-[25px] flex items-center justify-center rounded-full mr-[20px] opacity-[0.8] bg-[#bdbdbd]/30 font-extralight text-[13px]">
              {userInterests?.length > 10 ? "10+" : userInterests?.length}
            </span>
          )}
          <h5
            className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out"
            onClick={() => set_menu_Interests_open(!menuInterestsOpen)}
          >
            <i
              className={`${
                menuInterestsOpen ? "rotate-180" : "rotate-0"
              } bi bi-chevron-down transition-transform duration-300 ease-out`}
            ></i>
          </h5>
        </div>
        {/* repeat */}
        {userInterests?.map((interest) => (
          <div
            className={`${
              menuInterestsOpen ? "Flex" : "hidden"
            } flex w-[100%] items-center justify-start p-[20px] border-t-[1px] border-b-[1px] border-[#bdbdbd]/30 cursor-pointer text-[#bdbdbd] font-light `}
            key={interest?._id}
            onClick={() => handleDetailsCardClick(interest?.movieId?._id)}
          >
            <img
              className="hidden md:block w-[70px] h-[70px] object-cover rounded-full "
              src={interest?.movieId?.poster || "default_movie.jpg"}
              alt={interest?.movieId?.title || "movie"}
            />
            <h4 className="w-[150px] font-medium text-white uppercase md:ml-[20px] xl:w-[300px]">
              {interest?.movieId?.title || "N/A"}
            </h4>
            <h5 className="ml-[40px] text-[#f21f30] font-bold">
              {interest?.movieId?.ratingCategory || "N/A"}
            </h5>
            <p className="capitalize ml-auto">
              {formatDuration(interest?.movieId?.runtime) || "N/A"}
            </p>
            <p className="hidden xl:block ml-auto">
              {formatDate(interest?.addedDate) || "N/A"}
            </p>
          </div>
        ))}

        {userInterests?.length === 0 && (
          <div
            className={`${
              menuInterestsOpen ? "Flex" : "hidden"
            } flex w-[100%] items-center justify-center p-[20px] border-t-[1px] border-b-[1px] border-[#bdbdbd]/30 `}
          >
            <p className="font-extralight text-[#bdbdbd]">no data to show</p>
          </div>
        )}
        {/* repeat */}

        {/* history */}
        <div
          className={`${
            menuHistoryOpen ? "border-[#bdbdbd]" : "border-[#bdbdbd]/50"
          } w-[100%] flex items-center justify-between p-[20px] border-t-[1px] border-b-[1px] transition-colors duration-300 ease-out`}
        >
          <h5>
            <i className="bi bi-hourglass"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">History</h5>
          {historyTickets?.length > 0 && (
            <span className="w-[25px] h-[25px] flex items-center justify-center rounded-full mr-[20px] opacity-[0.8] bg-[#bdbdbd]/30 font-extralight text-[13px]">
              {historyTickets?.length > 10 ? "10+" : historyTickets?.length}
            </span>
          )}
          <h5
            className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out"
            onClick={() => set_menu_History_open(!menuHistoryOpen)}
          >
            <i
              className={`${
                menuHistoryOpen ? "rotate-180" : "rotate-0"
              } bi bi-chevron-down transition-transform duration-300 ease-out`}
            ></i>
          </h5>
        </div>
        {/* repeat */}
        {historyTickets?.map((historytickets) => (
          <div
            className={`${
              menuHistoryOpen ? "Flex" : "hidden"
            } flex w-[100%] items-center justify-start p-[20px] border-t-[1px] border-b-[1px] border-[#bdbdbd]/30 text-[#bdbdbd] font-light`}
            key={historytickets?._id}
          >
            <img
              className="w-[70px] h-[70px] object-cover rounded-full"
              src={historytickets?.movieId?.poster || "default_movie.jpg"}
              alt={historytickets?.movieId?.title || "movie"}
            />
            <div className="ml-[20px]">
              <h4 className="font-medium text-white uppercase">
                {historytickets?.movieId?.title || "N/A"}
              </h4>
              <p className="mt-[5px] capitalize">
                {formatDuration(historytickets?.movieId?.runtime) || "N/A"}
              </p>
              <p className="capitalize">
                {historytickets?.showtimeId?.date || "N/A"}{" "}
                {historytickets?.showtimeId?.time || "N/A"}
              </p>
              <p className="capitalize">
                Purchased {formatDate(historytickets?.addedDate) || "N/A"}
              </p>
              <p>
                {historytickets?.bookedSeats.map((seat) => (
                  <span
                    className=" pl-[10px] pr-[10px] border-l-[2px] border-[#bdbdbd] text-[#f21f30] mt-[5px]"
                    key={seat}
                  >
                    {seat || "N/A"}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
        {historyTickets?.length === 0 && (
          <div
            className={`${
              menuHistoryOpen ? "Flex" : "hidden"
            } flex w-[100%] items-center justify-center p-[20px] border-t-[1px] border-b-[1px] border-[#bdbdbd]/30 `}
          >
            <p className="font-extralight text-[#bdbdbd]">no data to show</p>
          </div>
        )}
        {/* repeat */}
      </div>
    </div>
  );
};

export default Account;
