import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//hooks
import { logout } from "../../../hooks/user/Auth.jsx";
import { useUserProfile } from "../../../hooks/user/Account.jsx";
import { useFetchUserInterests } from "../../../hooks/user/Interest.jsx";

const Account = () => {
  //manue open
  const [menuInterestsOpen, set_menu_Interests_open] = useState(false);
  const [menuHistoryOpen, set_menu_History_open] = useState(false);
  const [menuSettingsOpen, set_menu_Settings_open] = useState(false);

  //fetch account
  const { data: userProfile } = useUserProfile();

  //logout
  const navigate = useNavigate();
  const handle_logout = () => {
    logout();
    navigate("/");
  };

  //interest function
  const { data: userInterests } = useFetchUserInterests();

  //function to format duration
  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours > 0 ? `${hours} h ` : ""}${remainingMinutes} min`;
  };

  //details page
  const navigateDetails = useNavigate();
  const handleDetailsCardClick = (movieId) => {
    navigateDetails(`/details`, { state: { movieId } });
  };

  return (
    <div className="p-[10px] flex flex-col items-start text-white cursor-default mt-[40px] md:w-[80%] md:mx-auto xl:w-[920px] xl:mt-[20px] ">
      <div className="w-[100%] flex items-center justify-between p-[20px] border-t-[1px] border-b-[1px] border-[#bdbdbd]/50 ">
        <img
          className="w-[70px] h-[70px] rounded-full md:w-[90px] md:h-[90px]"
          src="person.jpg"
          alt="person"
        />
        <div className="mr-auto ml-[20px] md:ml-[40px]">
          <h4 className="font-medium mt-[5px]">WELLCOME !</h4>
          <h2 className="text-[#f21f30] uppercase font-light ">
            {userProfile?.name}
          </h2>
          <p className="font-light text-[#bdbdbd] ">{userProfile?.email}</p>
          <p className="mt-[5px] font-light text-[#bdbdbd] ">
            {userProfile?.mobile}
          </p>
        </div>
        <h4
          className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out"
          onClick={handle_logout}
        >
          <i className="bi bi-box-arrow-right"></i>
        </h4>
      </div>
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
            } flex w-[100%] items-center justify-start p-[20px] font-extralight border-t-[1px] border-b-[1px] border-[#bdbdbd]/30 cursor-pointer opacity-[0.8] hover:opacity-[1] transition-opacity duration-300 ease-out `}
            key={interest?._id}
            onClick={() => handleDetailsCardClick(interest?.movieId?._id)}
          >
            <p className="w-[150px] uppercase ml-[40px] md:w-[300px] ">
              {interest?.movieId?.title}
            </p>
            <h5 className="ml-[40px] text-[#f21f30] uppercase font-bold">
              {interest?.movieId?.ratingCategory}
            </h5>
            <p className="capitalize ml-auto">
              {formatDuration(interest?.movieId?.runtime)}
            </p>
            <p className="hidden xl:block ml-auto">
              {new Date(interest?.addedDate).toLocaleDateString()}
            </p>
          </div>
        ))}
        {userInterests?.length === 0 && (
          <div
            className={`${
              menuInterestsOpen ? "Flex" : "hidden"
            } flex w-[100%] items-center justify-center p-[20px] border-t-[1px] border-b-[1px] border-[#bdbdbd]/30 opacity-[0.8] `}
          >
            <p className="font-extralight ">no data to show</p>
          </div>
        )}
        {/* repeat */}

        <div
          className={`${
            menuHistoryOpen
              ? "border-[#bdbdbd] border-b-[1px]"
              : "border-[#bdbdbd]/50"
          } w-[100%] flex items-center justify-between p-[20px] border-t-[1px] transition-colors duration-300 ease-out`}
        >
          <h5>
            <i className="bi bi-hourglass"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">History</h5>
          <span className="w-[25px] h-[25px] flex items-center justify-center rounded-full mr-[20px] opacity-[0.8] bg-[#bdbdbd]/30 font-extralight text-[13px]">
            10+
          </span>
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
        <div
          className={`${
            menuHistoryOpen ? "Flex" : "hidden"
          } flex w-[100%] items-center justify-start p-[20px] font-extralight border-t-[1px] border-b-[1px] border-[#bdbdbd]/30 cursor-pointer opacity-[0.8] hover:opacity-[1] transition-opacity duration-300 ease-out `}
        >
          <p className="w-[150px] uppercase ml-[40px] md:w-[300px] ">
            Movie Title
          </p>
          <h5 className="ml-[40px] text-[#f21f30] uppercase font-bold">PG</h5>
          <p className="capitalize ml-auto">1 h 35 min</p>
          <p className="hidden xl:block ml-auto">D2</p>
          <p className="hidden xl:block ml-auto">2/9/2025</p>
        </div>
        <div
          className={`${
            menuHistoryOpen ? "Flex" : "hidden"
          } flex w-[100%] items-center justify-center p-[20px] border-t-[1px] border-b-[1px] border-[#bdbdbd]/30 opacity-[0.8] `}
        >
          <p className="font-extralight ">no data to show</p>
        </div>
        {/* repeat */}

        <div
          className={`${
            menuSettingsOpen ? "border-[#bdbdbd] " : "border-[#bdbdbd]/50"
          } w-[100%] flex items-center justify-between p-[20px] border-t-[1px] border-b-[1px] transition-colors duration-300 ease-out`}
        >
          <h5>
            <i className="bi bi-gear"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Settings</h5>
          <h5
            className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out"
            onClick={() => set_menu_Settings_open(!menuSettingsOpen)}
          >
            <i
              className={`${
                menuSettingsOpen ? "rotate-180" : "rotate-0"
              } bi bi-chevron-down transition-transform duration-300 ease-out`}
            ></i>
          </h5>
        </div>
        {/* repeat */}
        <div
          className={`${
            menuSettingsOpen ? "Flex" : "hidden"
          } flex w-[100%] items-center justify-start p-[20px] font-extralight border-t-[1px] border-b-[1px] border-[#bdbdbd]/30 cursor-pointer opacity-[0.8] hover:opacity-[1] transition-opacity duration-300 ease-out `}
        >
          <p className="w-[150px] uppercase ml-[40px] md:w-[300px] ">
            Movie Title
          </p>
          <h5 className="ml-[40px] text-[#f21f30] uppercase font-bold">PG</h5>
          <h5 className="uppercase ml-auto">1 h 35 min</h5>
        </div>

        {/* repeat */}
      </div>
    </div>
  );
};

export default Account;
