import React from "react";
//slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//animation
import { motion, AnimatePresence } from "framer-motion";
//countup
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Home = () => {
  //slick slider settings
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute top-1/2 right-[-20px] z-10 hidden xl:flex items-center justify-center 
                 w-[40px] h-[40px] rounded-full border-[2px] border-white text-white 
                 cursor-pointer -translate-y-1/2 bg-black/40 hover:bg-black/70 transition"
      >
        <i className="bi bi-chevron-right"></i>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute top-1/2 left-[-20px] z-10 hidden xl:flex items-center justify-center 
                 w-[40px] h-[40px] rounded-full border-[2px] border-white text-white 
                 cursor-pointer -translate-y-1/2 bg-black/40 hover:bg-black/70 transition"
      >
        <i className="bi bi-chevron-left"></i>
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { breakpoint: 1260, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };
  const movies = [
    { id: 1, title: "Movie 1", image: "movies/1.jpg" },
    { id: 2, title: "Movie 2", image: "movies/2.jpg" },
    { id: 3, title: "Movie 3", image: "movies/3.jpg" },
    { id: 4, title: "Movie 4", image: "movies/4.jpg" },
    { id: 5, title: "Movie 5", image: "movies/5.jpg" },
    { id: 6, title: "Movie 6", image: "movies/6.jpg" },
    { id: 7, title: "Movie 7", image: "movies/7.jpg" },
    { id: 8, title: "Movie 8", image: "movies/8.jpg" },
    { id: 9, title: "Movie 9", image: "movies/9.jpg" },
  ];

  //movies
  const new_Movie = [1, 2, 3, 4, 5, 6, 7, 8];
  const upcome_movie = [1, 2, 3, 4, 5, 6];

  //countup
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  return (
    <div>
      {/* main section */}
      <section className=" sm:mt-[-60px]  ">
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
            className="relative z-10 flex items-center justify-center h-full"
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
      <section className="w-[90%] h-auto mx-auto cursor-default xl:mt-[-11vh] xl:z-20 xl:relative ">
        <h3 className="text-white font-extralight uppercase xl:hidden">
          Now Showing <i className="bi bi-chevron-right"></i>
        </h3>
        <h2 className="hidden text-white font-extralight uppercase xl:block">
          Now Showing <i className="bi bi-chevron-right"></i>
        </h2>
        <div className="w-[85%] h-auto mx-auto mt-[30px] xl:w-[90%]">
          <Slider {...settings}>
            {/* repeat */}
            {movies.map((movie) => (
              <div key={movie.id} className="px-2">
                <div className="w-auto h-[450px] bg-[#242124] rounded-[10px]">
                  <img
                    className="w-full h-full object-cover opacity-[0.7] rounded-[10px] hover:opacity-[1] transition duration-300 ease-out"
                    src={movie.image}
                    alt="movie"
                  />
                </div>
              </div>
            ))}
            {/* repeat */}
          </Slider>
        </div>
      </section>

      {/* now show card section */}
      <section className="w-[98%] h-auto mx-auto mt-[50px] grid [grid-template-columns:repeat(auto-fit,_190px)] gap-[10px] justify-center cursor-default xl:gap-[30px] xl:[grid-template-columns:repeat(auto-fit,_300px)] xl:mt-[150px] ">
        {/* repeat */}
        {new_Movie.map((new_movie) => (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            key={new_movie}
            className="w-[190px] h-auto bg-[#242124] p-[5px] rounded-[20px] border-[1px] hover:scale-102 transition duration-300 ease-out xl:w-[300px] xl:p-[10px] xl:items-start xl:justify-between xl:gap-[10px]"
          >
            <img
              className="w-[100%] h-[190px] object-cover rounded-[15px] xl:h-[260px]"
              src="movies/1.jpg"
              alt="movie"
            />
            <div className="w-[100%] h-auto mt-[5px] xl:mt-[10px]">
              <h4 className="text-white font-medium xl:font-extralight ">
                Movie Title
              </h4>
              <p className="text-[#bdbdbd] mt-[5px] flex items-center gap-[5px] xl:mt-[20px]">
                <span className="hidden xl:block ml-[5px] text-[11px] uppercase">
                  Duration -
                </span>
                1h 35min
                <span className="ml-auto">
                  3/5 &nbsp;
                  <i className="bi bi-star-fill text-amber-400"></i>
                </span>
              </p>
              <p className="hidden text-[#bdbdbd] mt-[5px] items-center gap-[5px] xl:flex ">
                <span className="hidden xl:block ml-[5px] text-[11px] uppercase">
                  Director -
                </span>
                Rusiru jayanga
              </p>
              <div className="w-[100%] h-auto flex items-center justify-center mt-[5px] gap-[10px] xl:mt-[10px]">
                <button className="w-[100%] flex uppercase bg-[#f21f30] text-white border-[1px] border-[#f21f30] hover:bg-[#242124] hover:text-[#f21f30] xl:hidden">
                  More
                </button>
                <button className="hidden xl:flex w-[100%]  uppercase bg-[#f21f30] text-white border-[1px] border-[#f21f30] hover:bg-[#242124] hover:text-[#f21f30] gap-[10px]">
                  <i className="bi bi-ticket-perforated"></i> Get Tickets
                </button>
                <button className="hidden xl:flex w-[100px] uppercase bg-[#242124] text-white border-[1px] border-white hover:bg-white hover:text-black">
                  More
                </button>
              </div>
            </div>
          </motion.div>
        ))}
        {/* repeat */}
      </section>
      {/* margin section */}
      <section className="flex items-center justify-center w-[100%] h-[30vh] gap-[10px] mt-[150px] p-[10px] cursor-default bg-[linear-gradient(0deg,rgba(12,12,12,1)_0%,rgba(0,0,0,0.5)_20%,rgba(0,0,0,0.5)_80%,rgba(12,12,12,1)_100%),url(/margin_bg.jpg)] bg-cover bg-center bg-no-repeat xl:h-[70vh] xl:mt-[200px] ">
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
      <section className="w-[90%] h-auto mx-auto cursor-default xl:mt-[-11vh] xl:z-20 xl:relative ">
        <h3 className="text-white font-extralight uppercase xl:hidden">
          upcoming movies <i className="bi bi-chevron-right"></i>
        </h3>
        <h2 className="hidden text-white font-extralight uppercase xl:block">
          upcoming movies <i className="bi bi-chevron-right"></i>
        </h2>
      </section>
      <section className="w-[98%] h-auto mx-auto mt-[50px] p-[10px] grid [grid-template-columns:repeat(auto-fit,_350px)] gap-[10px] justify-center cursor-default md:[grid-template-columns:repeat(auto-fit,_400px)] xl:gap-[30px] xl:[grid-template-columns:repeat(auto-fit,_450px)] xl:mt-[30px] ">
        {/* repeat */}
        {upcome_movie.map((upcome_movie) => (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            key={upcome_movie}
            className="w-[350px] h-auto bg-[#242124] flex items-start justify-center p-[5px] rounded-[20px] border-[1px] hover:scale-102 transition duration-300 ease-out md:w-[400px] xl:w-[450px]"
          >
            <img
              className="w-[150px] h-[200px] object-cover rounded-[15px] xl:h-[250px] xl:w-[200px]"
              src="movies/1.jpg"
              alt="movie"
            />
            <div className="w-[100%] h-auto p-[10px]">
              <h4 className="text-white font-medium xl:font-extralight ">
                Movie Title
              </h4>
              <p className="text-[#bdbdbd]  mt-[20px] flex items-center gap-[5px]">
                <span className="ml-[5px] text-[11px] uppercase">
                  Released -
                </span>
                2023-01-01
                <span className="hidden md:block ml-auto">
                  3/5 &nbsp;
                  <i className="bi bi-star-fill text-amber-400"></i>
                </span>
              </p>
              <p className="text-[#bdbdbd]  mt-[5px] flex items-center gap-[5px]">
                <span className="ml-[5px] text-[11px] uppercase">
                  Director -
                </span>
                rusiru jayanga
              </p>
              <p className="text-[#bdbdbd]  mt-[5px] flex items-center gap-[5px]">
                <span className="ml-[5px] text-[11px] uppercase">
                  Age Rating -
                </span>
                16+
              </p>
              <div className="w-[100%] h-auto flex items-center justify-center mt-[20px] gap-[10px] xl:mt-[60px]">
                <button className="w-[100%] flex uppercase bg-[#f21f30] text-white border-[1px] border-[#f21f30] hover:bg-[#242124] hover:text-[#f21f30]">
                  More
                </button>
                <button className="flex w-[50px] uppercase bg-[#242124] text-white border-[1px] border-white hover:bg-white hover:text-black">
                  <i className="bi bi-heart-fill"></i>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
        {/* repeat */}
      </section>

      {/* about section */}
      <section className="w-[90%] h-auto mt-[150px] mx-auto p-[10px] cursor-default xl:w-[70%] xl:flex xl:items-center xl:justify-center xl:gap-[50px] xl:mt-[200px]  ">
        <div className="w-[100%] h-auto ">
          <div className="w-[100%] h-auto ">
            <h2 className="text-[#f21f30] uppercase font-extralight ">
              About Us
            </h2>
            <h4 className="text-white uppercase font-medium mt-[5px]">
              We are a leading movie theater chain, dedicated to providing the
              best cinematic experience to our audience.
            </h4>
          </div>
          <img
            className="w-[100%] h-[200px] object-cover mt-[20px] rounded-[20px] xl:h-[350px] "
            src="about/1.jpg"
            alt="about"
          />
        </div>
        <div className="w-[100%] h-auto ">
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
            <p className="text-[#bdbdbd] font-medium mt-[20px] text-justify ">
              At AMC Theaters, we believe that movies are more than just
              entertainment – they’re an experience. Our mission is to bring
              stories to life on the big screen with the best in picture, sound,
              and comfort. From the latest blockbusters to timeless classics,
              AMC is dedicated to creating unforgettable moments for movie
              lovers of all ages. With state-of-the-art facilities, cozy
              seating, and a wide selection of snacks and beverages, we make
              sure every visit feels special. At AMC, it’s not just about
              watching a movie – it’s about living it !
            </p>
            <div
              className="w-[100%] h-[60px] flex items-center justify-between mt-[20px] md:w-[50%] md:mx-auto md:mt-[30px] xl:w-[70%] xl:h-[100px] "
              ref={ref}
            >
              <div className="w-[100px] flex flex-col items-center ">
                <h2 className="text-[#f21f30] font-bold ">
                  {inView && <CountUp start={0} end={28} duration={3} />}
                </h2>
                <span className="text-white text-[12px] uppercase font-medium">
                  years
                </span>
              </div>
              <div className="w-[100px] flex flex-col items-center ">
                <h2 className="text-[#f21f30] font-bold ">
                  {inView && <CountUp start={200} end={600} duration={3} />}+
                </h2>
                <span className="text-white text-[12px] uppercase font-medium">
                  clients
                </span>
              </div>
              <div className="w-[100px] flex flex-col items-center ">
                <h2 className="text-[#f21f30] font-bold ">
                  {inView && <CountUp start={100} end={289} duration={3} />}+
                </h2>
                <span className="text-white text-[12px] uppercase font-medium">
                  movies
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact section */}
      <motion.section
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-[90%] h-auto mt-[150px] mx-auto p-[10px] cursor-default xl:w-[70%] md:flex md:items-start md:justify-center md:gap-[30px] xl:mt-[200px] "
      >
        <div className="w-[100%] h-auto ">
          <h2 className="text-[#f21f30] uppercase font-extralight ">
            Contact Us
          </h2>
          <h4 className="text-white uppercase font-medium mt-[5px]">
            We would love to hear from you ! Reach out to us through any of the
            channels below.
          </h4>
        </div>
        <form className="w-[100%] h-auto mt-[40px] md:mt-0 ">
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
    </div>
  );
};

export default Home;
