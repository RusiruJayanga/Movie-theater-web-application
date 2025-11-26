import React from "react";
//loading
import Loading from "../../../hooks/common/Loading";
//animation
import { motion } from "framer-motion";
//hooks
import {
  useSessions,
  useResetSession,
  useDeleteSession,
} from "../../../hooks/admin/Session";
import { formatDate } from "../../../hooks/common/Format";

const Session = () => {
  //fetch sessions function
  const { data: sessions, isLoading, isError } = useSessions();

  //reset session function
  const { mutate: resetSession } = useResetSession();
  const handleReset = (id) => {
    if (window.confirm(`Are you sure you want to reset this session?`)) {
      resetSession(id);
    }
  };

  //delete session function
  const { mutate: deleteSession } = useDeleteSession();
  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete this session?`)) {
      deleteSession(id);
    }
  };

  //loading
  if (isLoading) {
    return <Loading />;
  }
  //error
  if (isError) {
    return <p className="font-extralight text-[#bdbdbd]">no data to show</p>;
  }

  return (
    <section className="w-[100%] grid gap-[20px] xl:[grid-template-columns:repeat(auto-fit,_580px)] ">
      {/* repeat */}
      {sessions?.map((session) => (
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
          key={session?._id}
        >
          <img
            className="w-[100px] h-[150px] object-cover rounded-[5px]"
            src={session?.movieId?.poster || "default_movie.jpg"}
            alt={session?.movieId?.title || "movie"}
          />
          <div className="flex flex-col ml-[20px]">
            <h4 className="w-[100%] font-medium text-white uppercase">
              {session?.movieId?.title || "N/A"}
            </h4>
            <p className="capitalize mt-[5px]">
              {session?.date || "N/A"} {session?.time || "N/A"}
            </p>
            <p className="capitalize">
              Close Date -{" "}
              <span
                className={`${
                  new Date(session?.movieId?.closeDate) <= new Date() &&
                  "text-[#f21f30]"
                }`}
              >
                {formatDate(session?.movieId?.closeDate) || "N/A"}
              </span>
            </p>
            <p className="capitalize">
              Booked
              <span className="ml-[10px] text-white font-medium ">
                {50 - session?.seatsAvailable || "N/A"}
              </span>
            </p>
            <p className="capitalize">
              Available
              <span className="ml-[10px] text-white font-medium ">
                {session?.seatsAvailable || "N/A"}
              </span>
            </p>
          </div>
          <div className="h-[100%] flex flex-col ml-auto items-center justify-between">
            <h5
              className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out "
              onClick={() => handleDelete(session?._id)}
            >
              <i className="bi bi-trash3"></i>
            </h5>
            <h5
              className={`${
                new Date(session?.movieId?.closeDate) <= new Date()
                  ? "text-[#f21f30]"
                  : "text-white"
              } w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer border-[1px] border-white hover:bg-white hover:text-black transition-colors duration-300 ease-out`}
              onClick={() =>
                new Date(session?.movieId?.closeDate) > new Date() &&
                handleReset(session?._id)
              }
            >
              <i className="bi bi-arrow-repeat"></i>
            </h5>
          </div>
        </motion.div>
      ))}
      {/* repeat */}
      {sessions?.length === 0 && (
        <p className="font-extralight text-[#bdbdbd]">no data to show</p>
      )}
    </section>
  );
};

export default Session;
