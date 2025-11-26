import React, { useState } from "react";
//loading
import Loading from "../../../hooks/common/Loading";
//error
import Error from "../../../hooks/common/Error";
//qr code
import QRCode from "react-qr-code";
//hooks
import { useFetchUserTickets } from "../../../hooks/user/Ticket.jsx";
import { formatDuration } from "../../../hooks/common/Format";

const Ticket = () => {
  //manue toggle
  const [menuNewOpen, set_menu_New_open] = useState(false);
  const [menuDueOpen, set_menu_Due_open] = useState(false);

  //fetch ticket function
  const { data: userTickets, isLoading, isError } = useFetchUserTickets();
  //filter tickets
  //filter time
  const newTickets = userTickets?.filter(
    (newticket) =>
      new Date(newticket.addedDate).toDateString() === new Date().toDateString()
  );

  const startOfWeek = new Date();
  const day = startOfWeek.getDay();
  startOfWeek.setDate(startOfWeek.getDate() - day);
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  const dueTickets = userTickets?.filter((ticket) => {
    const added = new Date(ticket.addedDate);
    return added >= startOfWeek && added <= endOfWeek;
  });

  //loading
  if (isLoading) {
    return <Loading />;
  }
  //error
  if (isError) {
    return <Error />;
  }

  return (
    <div className="p-[10px] flex flex-col items-start text-white cursor-default mt-[40px] md:w-[80%] md:mx-auto xl:w-[920px] xl:mt-[20px] ">
      <div className="w-[100%] flex flex-col items-start font-light ">
        {/* new ticket */}
        <div
          className={`${
            menuNewOpen
              ? "border-[#bdbdbd] border-b-[1px]"
              : "border-[#bdbdbd]/50"
          } w-[100%] flex items-center justify-between p-[20px] border-t-[1px] transition-colors duration-300 ease-out`}
        >
          <h5>
            <i className="bi bi-ticket-perforated"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">New Tickets</h5>
          {newTickets?.length > 0 && (
            <span className="w-[25px] h-[25px] flex items-center justify-center rounded-full mr-[20px] opacity-[0.8] bg-[#bdbdbd]/30 font-extralight text-[13px]">
              {newTickets?.length > 10 ? "10+" : newTickets?.length}
            </span>
          )}
          <h5
            className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out"
            onClick={() => set_menu_New_open(!menuNewOpen)}
          >
            <i
              className={`${
                menuNewOpen ? "rotate-180" : "rotate-0"
              } bi bi-chevron-down transition-transform duration-300 ease-out`}
            ></i>
          </h5>
        </div>
        {/* repeat */}
        {newTickets?.map((newticket) => (
          <div
            className={`${
              menuNewOpen ? "Flex" : "hidden"
            } flex w-[100%] items-center justify-start p-[20px] border-t-[1px] border-b-[1px] border-[#bdbdbd]/30 text-[#bdbdbd] font-light`}
            key={newticket?._id}
          >
            <div
              className="w-[100px] h-[100px] rounded-[5px]"
              style={{
                background: "white",
                padding: "4px",
              }}
            >
              <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={JSON.stringify(newticket?._id)}
                viewBox={`0 0 256 256`}
              />
            </div>
            <div className="ml-[20px]">
              <h4 className="font-medium text-white uppercase">
                {newticket?.movieId?.title || "N/A"}
              </h4>
              <p className="mt-[5px] capitalize">
                {formatDuration(newticket?.movieId?.runtime) || "N/A"}
              </p>
              <p className="capitalize">
                This {newticket?.showtimeId?.date || "N/A"}{" "}
                {newticket?.showtimeId?.time || "N/A"}
              </p>
              <p>
                {newticket?.bookedSeats.map((seat) => (
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
        {newTickets?.length === 0 && (
          <div
            className={`${
              menuNewOpen ? "flex" : "hidden"
            } flex w-[100%] items-center justify-center p-[20px] border-t-[1px] border-b-[1px] border-[#bdbdbd]/30 `}
          >
            <p className="font-extralight text-[#bdbdbd]">no data to show</p>
          </div>
        )}
        {/* repeat */}

        {/* due tickets */}
        <div
          className={`${
            menuDueOpen ? "border-[#bdbdbd] " : "border-[#bdbdbd]/50"
          } w-[100%] flex items-center justify-between p-[20px] border-t-[1px] border-b-[1px] transition-colors duration-300 ease-out`}
        >
          <h5>
            <i className="bi bi-ticket-perforated-fill"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Due Tickets</h5>
          {dueTickets?.length > 0 && (
            <span className="w-[25px] h-[25px] flex items-center justify-center rounded-full mr-[20px] opacity-[0.8] bg-[#bdbdbd]/30 font-extralight text-[13px]">
              {dueTickets?.length > 10 ? "10+" : dueTickets?.length}
            </span>
          )}
          <h5
            className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out"
            onClick={() => set_menu_Due_open(!menuDueOpen)}
          >
            <i
              className={`${
                menuDueOpen ? "rotate-180" : "rotate-0"
              } bi bi-chevron-down transition-transform duration-300 ease-out`}
            ></i>
          </h5>
        </div>
        {/* repeat */}
        {dueTickets?.map((dueticket) => (
          <div
            className={`${
              menuDueOpen ? "Flex" : "hidden"
            } flex w-[100%] items-center justify-start p-[20px] border-t-[1px] border-b-[1px] border-[#bdbdbd]/30 text-[#bdbdbd] font-light`}
            key={dueticket?._id}
          >
            <div
              className="w-[100px] h-[100px] rounded-[5px]"
              style={{
                background: "white",
                padding: "4px",
              }}
            >
              <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={JSON.stringify(dueticket?._id)}
                viewBox={`0 0 256 256`}
              />
            </div>
            <div className="ml-[20px]">
              <h4 className="font-medium text-white uppercase">
                {dueticket?.movieId?.title || "N/A"}
              </h4>
              <p className="mt-[5px] capitalize">
                {formatDuration(dueticket?.movieId?.runtime) || "N/A"}
              </p>
              <p className="capitalize">
                This {dueticket?.showtimeId?.date || "N/A"}{" "}
                {dueticket?.showtimeId?.time || "N/A"}
              </p>
              <p>
                {dueticket?.bookedSeats.map((seat) => (
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
        {dueTickets?.length === 0 && (
          <div
            className={`${
              menuDueOpen ? "Flex" : "hidden"
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

export default Ticket;
