import React from "react";
//slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
          <div className="relative z-10 flex items-center justify-center h-full">
            <img
              className="w-[600px] object-cover relative z-10"
              src="logo_text.png"
              alt="logo"
            />
          </div>
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
        <h3 className="text-white font-extralight uppercase">
          Now Showing <i className="bi bi-chevron-right"></i>
        </h3>
        <div className="w-[85%] h-auto mx-auto mt-[30px] xl:w-[90%]">
          <Slider {...settings}>
            {/* repeat */}
            {movies.map((movie) => (
              <div key={movie.id} className="px-2">
                <div className="w-auto h-[450px] bg-[#202020] rounded-[10px] border-[2px] border-solid border-[#202020]">
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
      <section className="w-[95%] h-auto mx-auto mt-[50px] cursor-default bg-amber-50">
        <div className="w-[190px] h-auto bg-amber-300 p-[5px] rounded-[5px] ">
          <img
            className="w-[100%] h-[150px] object-cover"
            src="movies/1.jpg"
            alt="movie"
          />
          <div>
            <h4 className="text-black font-semibold">Movie Title</h4>
            <p className="text-black">Movie Description</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
