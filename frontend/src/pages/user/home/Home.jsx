import React from "react";

const Home = () => {
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
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]"></div>
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
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.2)]"></div>
          <img
            className="w-[150px] object-cover relative z-10"
            src="logo_text.png"
            alt="logo"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
