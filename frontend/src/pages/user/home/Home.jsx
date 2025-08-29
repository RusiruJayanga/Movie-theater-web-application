import React from "react";
//slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//animation
import { motion, AnimatePresence } from "framer-motion";

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
            className="w-[150px] object-cover relative z-10"
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
                    className="w-full h-full object-cover opacity-[0.65] rounded-[10px] hover:opacity-[1] transition duration-300 ease-out"
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
              hidden: { opacity: 0, y: 70 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            key={new_movie}
            className="w-[190px] h-auto bg-[#242124] p-[5px] rounded-[20px] border-[1px] hover:scale-102 transition duration-300 ease-out xl:w-[300px] xl:p-[10px] xl: xl:items-start xl:justify-between xl:gap-[10px]"
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
              <p className="text-[#aaaaaa] opacity-[0.7] mt-[5px] xl:mt-[20px] xl:flex xl:items-center xl:gap-[5px] xl:opacity-[1]">
                <span className="hidden xl:block text-[11px] uppercase">
                  <i className="bi bi-dot"></i> Duration -
                </span>
                1h 35min
              </p>
              <p className="hidden text-[#aaaaaa] opacity-[0.7] xl:mt-[5px] xl:flex xl:items-center xl:gap-[5px] xl:opacity-[1]">
                <span className="hidden xl:block text-[11px] uppercase">
                  <i className="bi bi-dot"></i> Released -
                </span>
                2023-01-01
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
      <section className="w-[100%] h-[70vh] grid grid-flow-col grid-rows-3 gap-[10px] mt-[100px] p-[10px] cursor-default ">
        <div className="bg-[#242124] rounded-[20px] p-[10px] flex flex-col items-center justify-center gap-[10px] row-span-2 ">
          <img className="w-[110px] " src="ice_cream.png" alt="add" />
          <div className="w-[200px] h-auto">
            <h3 className="text-white font-medium">Sweet Treats</h3>
            <p className="text-[#cccccc] font-extralight mt-[5px]">
              Try our ice creams, chocolate bars, and desserts available at the
              snack counter !
            </p>
            <h2 className="text-white font-extrabold w-[100%] h-[50px] bg-[#f21f30] mt-[20px] flex items-center justify-center rounded-[10px]">
              Rs.700
            </h2>
          </div>
        </div>
        <div className="bg-[#242124] rounded-[20px] p-[10px] flex items-center justify-center gap-[10px] col-span-2 ">
          <img className="w-[110px] " src="popcorn.png" alt="add" />
          <div>
            <h3 className="text-white font-medium">Popcorn Combo Deal</h3>
            <p className="text-[#cccccc] font-extralight mt-[5px]">
              Get a large popcorn + 2 drinks at a special combo price. Don’t
              miss !
            </p>
            <h2 className="text-white font-extrabold w-[100%] h-[50px] bg-[#f21f30] mt-[20px] flex items-center justify-center rounded-[10px]">
              Rs.2000
            </h2>
          </div>
        </div>
        <div className="bg-[#f21f30] rounded-[20px] p-[10px] flex items-center justify-center gap-[10px]  ">
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="w-[200px] "
            src="payment.png"
            alt="payment"
          />
        </div>
        <div className="bg-white rounded-[20px] p-[10px] flex items-center justify-center gap-[10px]  ">
          <div>
            <h3 className="font-light ">Card Payment</h3>
            <h2 className="font-bold uppercase">available</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
