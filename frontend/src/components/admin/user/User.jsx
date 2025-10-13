import React from "react";
//animation
import { motion, AnimatePresence } from "framer-motion";
//hooks
import { useUsers } from "../../../hooks/admin/User";
import { useDeleteAccount } from "../../../hooks/admin/User";

const User = () => {
  //user function
  const { data: users } = useUsers();
  const { mutate: deleteUser, isPending } = useDeleteAccount();

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      deleteUser(id);
    }
  };

  return (
    <section className="w-[100%] grid gap-[20px] xl:[grid-template-columns:repeat(auto-fit,_580px)] ">
      {/* repeat */}
      {users?.map((user) => (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex w-[100%] items-start justify-start p-[10px] font-extralight rounded-[20px] bg-[#1a1a1a] hover:scale-102 transition duration-300 ease-out "
          key={user._id}
        >
          <img
            className="w-[70px] h-[70px] rounded-full md:w-[90px] md:h-[90px]"
            src="person.jpg"
            alt="person"
          />
          <div className="mr-auto ml-[20px] md:ml-[40px]">
            <h5 className="text-[#f21f30] uppercase font-extralight ">
              {user.name}
            </h5>
            <p className="font-extralight opacity-[0.8] ">{user.email}</p>
            <p className="mt-[5px] font-extralight opacity-[0.8] ">
              {user.mobile}
            </p>
          </div>
          <div className="flex ml-auto items-center justify-center">
            <h5
              className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out "
              onClick={() => handleDelete(user._id, user.name)}
              disabled={isPending}
            >
              <i className="bi bi-trash3"></i>
            </h5>
          </div>
        </motion.div>
      ))}
      {/* repeat */}
      {users?.length === 0 && (
        <p className="font-extralight opacity-[0.8] ">no data to show</p>
      )}
    </section>
  );
};

export default User;
