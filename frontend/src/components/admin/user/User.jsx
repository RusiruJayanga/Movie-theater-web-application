import React from "react";
//animation
import { motion, AnimatePresence } from "framer-motion";

const User = () => {
  //user
  const new_User = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="w-[100%] grid gap-[20px] xl:[grid-template-columns:repeat(auto-fit,_580px)] ">
      {/* repeat */}
      {new_User.map((new_user) => (
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
        >
          <img
            className="w-[70px] h-[70px] rounded-full md:w-[90px] md:h-[90px]"
            src="person.jpg"
            alt="person"
          />
          <div className="mr-auto ml-[20px] md:ml-[40px]">
            <h5 className="text-[#f21f30] uppercase font-extralight ">
              Rusiru Jayanga
            </h5>
            <p className="font-extralight opacity-[0.8] ">
              rusirujayanga@gmail.com
            </p>
            <p className="mt-[5px] font-extralight opacity-[0.8] ">
              077 667 9711
            </p>
          </div>
          <div className="flex ml-auto items-center justify-center">
            <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out ">
              <i className="bi bi-trash3"></i>
            </h5>
          </div>
        </motion.div>
      ))}
      {/* repeat */}
    </section>
  );
};

export default User;
