import React from "react";
//countup
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const About = () => {
  //countup
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  return (
    <section className="w-[90%] mt-[150px] mx-auto p-[10px] text-white font-light cursor-default xl:w-[1075px] xl:flex xl:items-center xl:justify-center xl:gap-[50px] xl:mt-[200px]  ">
      <div className="w-[100%] ">
        <div className="w-[100%] ">
          <h2 className="text-[#f21f30] ">ABOUT US</h2>
          <h4 className="font-medium mt-[5px]">
            WE ARE A LEADING MOVIE THEATER CHAIN, DEDICATED TO PROVIDING THE
            BEST CINEMATIC EXPERIENCE TO OUR AUDIENCE.
          </h4>
        </div>
        <img
          className="w-[100%] h-[200px] object-cover mt-[20px] rounded-[20px] xl:h-[350px] "
          src="about/1.jpg"
          alt="about"
        />
      </div>
      <div className="w-[100%] ">
        <div className="md:flex flex-wrap flex-3 items-center gap-[20px] ">
          <img
            className="w-[100%] h-[200px] object-cover mt-[20px] rounded-[20px] md:flex-1  xl:hidden  "
            src="about/2.jpg"
            alt="about"
          />
          <img
            className="w-[100%] h-[200px] object-cover mt-[20px] rounded-[20px] md:flex-1 xl:w-[200px] "
            src="about/3.jpg"
            alt="about"
          />
          <img
            className="w-[100%] h-[200px] object-cover mt-[20px] rounded-[20px] md:flex-1 xl:w-[200px] "
            src="about/4.jpg"
            alt="about"
          />
        </div>
        <div>
          <p className="text-[#bdbdbd] mt-[20px] text-justify ">
            At AMC Theaters, we believe that movies are more than just
            entertainment – they’re an experience. Our mission is to bring
            stories to life on the big screen with the best in picture, sound,
            and comfort. From the latest blockbusters to timeless classics, AMC
            is dedicated to creating unforgettable moments for movie lovers of
            all ages. With state-of-the-art facilities, cozy seating, and a wide
            selection of snacks and beverages, we make sure every visit feels
            special. At AMC, it’s not just about watching a movie – it’s about
            living it !
          </p>
          <div
            className="w-[100%] h-[60px] flex items-center justify-between mt-[20px] md:w-[50%] md:mx-auto md:mt-[30px] xl:w-[70%] xl:h-[100px] "
            ref={ref}
          >
            <div className="w-[100px] flex flex-col items-center ">
              <h2 className="text-[#f21f30] font-bold ">
                {inView && <CountUp start={0} end={28} duration={3} />}
              </h2>
              <p>YEARS</p>
            </div>
            <div className="w-[100px] flex flex-col items-center ">
              <h2 className="text-[#f21f30] font-bold ">
                {inView && <CountUp start={200} end={600} duration={3} />}+
              </h2>
              <p>CLIENTS</p>
            </div>
            <div className="w-[100px] flex flex-col items-center ">
              <h2 className="text-[#f21f30] font-bold ">
                {inView && <CountUp start={100} end={289} duration={3} />}+
              </h2>
              <p>MOVIES</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
