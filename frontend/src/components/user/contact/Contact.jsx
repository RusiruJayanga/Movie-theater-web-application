import React from "react";
//animation
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-[90%] mt-[150px] mx-auto p-[10px] cursor-default xl:w-[70%] md:flex md:items-start md:justify-center md:gap-[30px] xl:mt-[200px] "
    >
      <div className="w-[100%] ">
        <h2 className="text-[#f21f30] uppercase font-extralight ">
          Contact Us
        </h2>
        <h4 className="text-white uppercase font-medium mt-[5px]">
          We would love to hear from you ! Reach out to us through any of the
          channels below.
        </h4>
      </div>
      <form className="w-[100%] mt-[40px] md:mt-0 ">
        <input
          className="w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px] text-white border-1 border-[#f21f30] "
          type="email"
          placeholder="Your Email"
          max={100}
        />
        <textarea
          className="w-[100%] h-[100px] rounded-[20px] pl-[15px] p-[10px] text-white border-1 border-[#f21f30] mt-[20px]"
          placeholder="Content"
          max={200}
        ></textarea>
        <button
          className="w-[150px] mx-auto mt-[20px] flex uppercase bg-[#f21f30] text-white border-[1px] border-[#f21f30] hover:bg-[#242124] hover:text-[#f21f30]"
          type="submit"
        >
          Send
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
