import React from "react";

const Home = () => {
  return (
    <div>
      <video
        src="main_video.mp4"
        autoPlay
        loop
        muted
        className="hidden xl:block w-full h-[100vh] object-cover mt-[-60px] "
      ></video>
    </div>
  );
};

export default Home;
