import React, { useState } from "react";
//loading
import Loading from "../../../hooks/common/Loading";
//animation
import { motion } from "framer-motion";
//hooks
import { useUsers } from "../../../hooks/admin/User";
import { useBanAccount, useActiveProfile } from "../../../hooks/admin/User";
import { formatDate } from "../../../hooks/common/Format";

const User = () => {
  //user toggle
  const [selectedUsers, setSelectedUsers] = useState("active");

  //fetch users function
  const { data: users, isLoading, isError } = useUsers();
  //filter users
  const filterUsers = users?.filter((user) => user?.status === selectedUsers);

  //ban user function
  const { mutate: BanUser } = useBanAccount();
  const handleBan = (id, name) => {
    if (window.confirm(`Are you sure you want to ban ${name}?`)) {
      BanUser(id);
    }
  };

  //active user function
  const { mutate: ActiveUser } = useActiveProfile();
  const handleActive = (id, name) => {
    if (window.confirm(`Are you sure you want to active ${name}?`)) {
      ActiveUser(id);
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
    <div>
      <div className="w-[310px] flex items-center justify-center gap-[10px] md:w-[420px]">
        <button
          className={`${
            selectedUsers === "active" ? "bg-white text-black" : "text-white"
          } flex w-[200px] border-[1px] border-white hover:bg-white hover:text-black`}
          onClick={() => setSelectedUsers("active")}
        >
          ACTIVE USERS
        </button>
        <button
          className={`${
            selectedUsers === "banned" ? "bg-white text-black" : "text-white"
          } flex w-[200px] border-[1px] border-white hover:bg-white hover:text-black`}
          onClick={() => setSelectedUsers("banned")}
        >
          BANNED USERS
        </button>
      </div>
      <section className="w-[100%] grid gap-[20px] mt-[20px] xl:[grid-template-columns:repeat(auto-fit,_580px)] ">
        {/* repeat */}
        {filterUsers?.map((user) => (
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
            key={user?._id}
          >
            <img
              className="w-[70px] h-[70px] rounded-full md:w-[90px] md:h-[90px]"
              src="person.jpg"
              alt="person"
            />
            <div className="mr-auto ml-[20px] md:ml-[40px]">
              <h4 className="w-[100%] font-medium text-white uppercase">
                {user?.name}
              </h4>
              <p className="mt-[5px]">{user?.email}</p>
              <p>{user?.mobile}</p>
              <p>Join Since - {formatDate(user?.addedDate)}</p>
            </div>
            <div className="flex ml-auto items-center justify-center">
              {user?.status === "active" ? (
                <h5
                  className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out "
                  onClick={() => handleBan(user?._id, user?.name)}
                >
                  <i className="bi bi-x-lg"></i>
                </h5>
              ) : (
                <h5
                  className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out "
                  onClick={() => handleActive(user?._id, user?.name)}
                >
                  <i className="bi bi-check-lg"></i>
                </h5>
              )}
            </div>
          </motion.div>
        ))}
        {/* repeat */}
        {filterUsers?.length === 0 && (
          <p className="font-extralight text-[#bdbdbd]">no data to show</p>
        )}
      </section>
    </div>
  );
};

export default User;
