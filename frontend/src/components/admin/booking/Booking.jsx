import React, { useState } from "react";
//loading
import Loading from "../../../hooks/common/Loading";
//animation
import { motion, AnimatePresence } from "framer-motion";
//hooks
import { useBookings } from "../../../hooks/admin/Booking";
import { formatDate } from "../../../hooks/common/Format";

const Booking = () => {
  //booking toggle
  const [selectedBooking, setSelectedBooking] = useState("due");

  //session function
  const { data: bookings, isLoading, isError } = useBookings();

  //filter time
  const startOfWeek = new Date();
  const day = startOfWeek.getDay();
  startOfWeek.setDate(startOfWeek.getDate() - day);
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  const dueBookings = bookings?.filter((booking) => {
    const added = new Date(booking.addedDate);
    return added >= startOfWeek && added <= endOfWeek;
  });

  //loading
  if (isLoading) {
    return <Loading />;
  }
  //error
  if (isError) {
    return <p className="font-extralight text-[#bdbdbd]">no data to show</p>;
  }

  return (
    <div>
      <div className="w-[310px] flex items-center justify-center gap-[10px] md:w-[420px]">
        <button
          className={`${
            selectedBooking === "due" ? "bg-white text-black" : "text-white"
          } flex w-[200px] border-[1px] border-white hover:bg-white hover:text-black`}
          onClick={() => setSelectedBooking("due")}
        >
          DUE BOOKINGS
        </button>
        <button
          className={`${
            selectedBooking === "all" ? "bg-white text-black" : "text-white"
          } flex w-[200px] border-[1px] border-white hover:bg-white hover:text-black`}
          onClick={() => setSelectedBooking("all")}
        >
          ALL BOOKINGS
        </button>
      </div>
      <section className="w-[100%] grid gap-[20px] mt-[20px] xl:[grid-template-columns:repeat(auto-fit,_580px)] ">
        {/* due bookings */}
        {/* repeat */}
        {selectedBooking === "due" &&
          dueBookings?.map((booking) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex w-[100%] items-start justify-start p-[10px] font-light rounded-[20px] bg-[#1a1a1a] text-[#bdbdbd] hover:scale-102 transition duration-300 ease-out "
              key={booking?._id}
            >
              <img
                className="w-[100px] h-[150px] object-cover rounded-[5px]"
                src={booking?.movieId?.poster || "default_movie.jpg"}
                alt={booking?.movieId?.title}
              />
              <div className="flex flex-col ml-[20px]">
                <h4 className="w-[100%] font-medium text-white uppercase">
                  {booking?.movieId?.title}
                </h4>
                <p className="capitalize mt-[5px]">
                  User Name -{" "}
                  <span className="ml-[10px] text-white font-medium ">
                    {booking?.userId?.name}
                  </span>
                </p>
                <p>User Email - {booking?.userId?.email}</p>
                <p>User Mobile - {booking?.userId?.mobile}</p>
                <p className="capitalize">
                  {booking?.showtimeId?.date} {booking?.showtimeId?.time}
                </p>
                <p>Week Range - {booking?.weekRange || "N/A"}</p>
                <p>Added Date - {formatDate(booking?.addedDate)}</p>
                <p>Total Amount - ${booking?.totalAmount || "N/A"}</p>
                <p className="capitalize"></p>
                <p className="capitalize">
                  Payment Status -
                  <span className="ml-[10px] text-white font-medium ">
                    {booking?.paymentStatus || "N/A"}
                  </span>
                </p>
                <p>
                  {booking?.bookedSeats.map((seat) => (
                    <span
                      className=" pl-[10px] pr-[10px] border-l-[2px] border-[#bdbdbd] text-[#f21f30] mt-[5px]"
                      key={seat}
                    >
                      {seat}
                    </span>
                  ))}
                </p>
              </div>
            </motion.div>
          ))}
        {/* repeat */}

        {/* all bookings */}
        {/* repeat */}
        {selectedBooking === "all" &&
          bookings?.map((booking) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex w-[100%] items-start justify-start p-[10px] font-light rounded-[20px] bg-[#1a1a1a] text-[#bdbdbd] hover:scale-102 transition duration-300 ease-out "
              key={booking?._id}
            >
              <img
                className="w-[100px] h-[150px] object-cover rounded-[5px]"
                src={booking?.movieId?.poster || "default_movie.jpg"}
                alt={booking?.movieId?.title}
              />
              <div className="flex flex-col ml-[20px]">
                <h4 className="w-[100%] font-medium text-white uppercase">
                  {booking?.movieId?.title}
                </h4>
                <p className="capitalize mt-[5px]">
                  User Name -{" "}
                  <span className="ml-[10px] text-white font-medium ">
                    {booking?.userId?.name}
                  </span>
                </p>
                <p>User Email - {booking?.userId?.email}</p>
                <p>User Mobile - {booking?.userId?.mobile}</p>
                <p className="capitalize">
                  {booking?.showtimeId?.date} {booking?.showtimeId?.time}
                </p>
                <p>Week Range - {booking?.weekRange || "N/A"}</p>
                <p>Added Date - {formatDate(booking?.addedDate)}</p>
                <p>Total Amount - ${booking?.totalAmount || "N/A"}</p>
                <p className="capitalize"></p>
                <p className="capitalize">
                  Payment Status -
                  <span className="ml-[10px] text-white font-medium ">
                    {booking?.paymentStatus || "N/A"}
                  </span>
                </p>
                <p>
                  {booking?.bookedSeats.map((seat) => (
                    <span
                      className=" pl-[10px] pr-[10px] border-l-[2px] border-[#bdbdbd] text-[#f21f30] mt-[5px]"
                      key={seat}
                    >
                      {seat}
                    </span>
                  ))}
                </p>
              </div>
            </motion.div>
          ))}
        {/* repeat */}

        {bookings?.length === 0 && selectedBooking === "all" && (
          <p className="font-extralight text-[#bdbdbd]">no data to show</p>
        )}
        {dueBookings?.length === 0 && selectedBooking === "due" && (
          <p className="font-extralight text-[#bdbdbd]">no data to show</p>
        )}
      </section>
    </div>
  );
};

export default Booking;
