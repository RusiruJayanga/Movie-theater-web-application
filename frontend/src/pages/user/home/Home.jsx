import React from "react";
//animation
import { motion, AnimatePresence } from "framer-motion";
//slick slider
import Slick_slider from "../../../components/user/slider/Slick_slider";
//now showing
import Now_showing from "../../../components/user/now_showing/Now_showing";
//upcoming
import Upcoming from "../../../components/user/upcoming/Upcoming";
//about
import About from "../../../components/user/about/About";
//contact
import Contact from "../../../components/user/contact/Contact";

const Home = () => {
  return (
    <div>
      {/* main section */}
      <section className=" sm:mt-[-60px] xl:mt-[-160px] ">
        <div className="hidden xl:block relative w-full h-screen overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/main_video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(12,12,12,1)_0%,rgba(0,0,0,0.4)_51%,rgba(0,0,0,0.7)_100%)]"></div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 70 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10 flex items-center justify-center h-full xl:mt-[50px]"
          >
            <img
              className="w-[600px] object-cover relative z-10"
              src="logo_text.png"
              alt="logo"
            />
          </motion.div>
        </div>
        {/* main section responsive */}
        <div className="relative w-full h-[25vh] flex items-center justify-center bg-[url(/main_image.jpg)] bg-cover bg-center bg-no-repeat xl:hidden">
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(12,12,12,1)_0%,rgba(0,0,0,0.4)_51%,rgba(0,0,0,0.4)_100%)]"></div>
          <img
            className="w-[250px] object-cover relative z-10"
            src="logo_text.png"
            alt="logo"
          />
        </div>
      </section>

      {/* now show section */}
      <Slick_slider />

      {/* margin section */}
      <section className="flex items-center justify-center w-[100%] h-[30vh] gap-[10px] mt-[150px] p-[10px] cursor-default bg-[linear-gradient(0deg,rgba(12,12,12,1)_0%,rgba(0,0,0,0.5)_20%,rgba(0,0,0,0.5)_80%,rgba(12,12,12,1)_100%),url(/margin_bg.jpg)] bg-cover bg-center bg-no-repeat xl:h-[70vh] ">
        <motion.img
          variants={{
            hidden: { opacity: 0, y: 70 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-[280px] xl:w-[600px] "
          src="margin_image.png"
          alt="imax"
        />
      </section>

      {/* upcoming card section */}
      <section className="w-[90%] text-white font-extralight mx-auto cursor-default xl:mt-[-11vh] xl:z-20 xl:relative ">
        <h3 className="xl:hidden">
          UPCOMING MOVIES <i className="bi bi-chevron-right"></i>
        </h3>
        <h2 className="hidden xl:block">
          UPCOMING MOVIES <i className="bi bi-chevron-right"></i>
        </h2>
      </section>
      <Upcoming />

      {/* about section */}
      <About />

      {/* contact section */}
      <Contact />
    </div>
  );
};

export default Home;
