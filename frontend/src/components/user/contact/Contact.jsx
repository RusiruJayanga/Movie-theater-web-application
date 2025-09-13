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
      className="w-[90%] mt-[150px] mx-auto p-[10px] text-white font-light cursor-default xl:w-[1075px] md:flex md:items-start md:justify-center md:gap-[30px] xl:mt-[200px] "
    >
      <div className="w-[100%] ">
        <h2 className="text-[#f21f30] font-extralight ">CONTACT US</h2>
        <h4 className="font-medium mt-[5px]">
          WE WOULD LOVE TO HEAR FROM YOU ! REACH OUT TO US THROUGH ANY OF THE
          CHANNELS BELOW.
        </h4>
      </div>
      <form id="contact-form" className="w-[100%] mt-[40px] md:mt-0 ">
        <div className="input-group">
          <input
            className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px]"
            type="email"
            name="email"
            max={100}
            required
          />
          <label className="label text-[16px] font-light" htmlFor="email">
            Your Email
          </label>
          <p className="w-[100%] lowercase h-[30px] text-[#000000] font-extralight ml-[20px]">
            console.error;
          </p>
        </div>
        <div className="input-group">
          <textarea
            className="input w-[100%] h-[100px] rounded-[20px] pl-[15px] p-[10px]"
            name="content"
            max={200}
            required
          ></textarea>
          <label className="label text-[16px] font-light" htmlFor="content">
            Content
          </label>
          <p className="w-[100%] lowercase h-[30px] text-[#000000] font-extralight ml-[20px]">
            console.error;
          </p>
        </div>
        <button
          className="w-[150px] mx-auto mt-[10px] flex bg-[#f21f30] font-medium border-[1px] border-[#f21f30] hover:bg-[#242124] hover:text-[#f21f30]"
          type="submit"
        >
          SEND
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
