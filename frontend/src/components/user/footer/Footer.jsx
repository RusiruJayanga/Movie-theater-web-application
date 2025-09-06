import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="w-[100%] bg-[#242124] relative bottom-0 mt-[250px] p-[10px] pt-[30px] text-amber-50 cursor-default ">
        <div className="w-[100%] flex flex-wrap justify-center gap-[20px] ">
          <img
            className="w-[100px] h-[100px] object-cover xl:w-[150px] xl:h-[150px] "
            src="logo.png"
            alt="logo"
          />
          <div className="w-[250px] xl:w-[300px]">
            <h5 className="font-bold text-[#f21f30] uppercase">us</h5>
            <p className=" text-[#bdbdbd] font-medium hover:text-white transition duration-300 ease-out ">
              Our mission is to provide a seamless and efficient platform for
              movie enthusiasts to explore, book, and enjoy their favorite
              films.
            </p>
          </div>

          <div className="w-[100px] flex flex-col gap-[5px] md:w-[150px] xl:w-[200px]">
            <h5 className="font-bold text-[#f21f30] uppercase">Quick Links</h5>
            <a
              className="text-[#bdbdbd] text-[13px] hover:text-white transition duration-300 ease-out mt-[5px]"
              href="#home"
            >
              Home
            </a>
            <a
              className="text-[#bdbdbd] text-[13px] hover:text-white transition duration-300 ease-out"
              href="#new"
            >
              New
            </a>
            <a
              className="text-[#bdbdbd] text-[13px] hover:text-white transition duration-300 ease-out"
              href="#upcoming"
            >
              Upcoming
            </a>
            <a
              className="text-[#bdbdbd] text-[13px] hover:text-white transition duration-300 ease-out"
              href="#contact"
            >
              Contact
            </a>
          </div>

          <div className="xl:w-[300px] flex flex-col gap-[5px]">
            <h5 className="font-bold text-[#f21f30] uppercase">Contact us</h5>
            <p className="text-[#bdbdbd] hover:text-white transition duration-300 ease-out ">
              Gmail: amc@gmail.com
            </p>
            <p className="text-[#bdbdbd] hover:text-white transition duration-300 ease-out ">
              Phone: +94 776 679 711
            </p>
            <p className="text-[#bdbdbd] hover:text-white transition duration-300 ease-out ">
              Location: Matara, Sri Lanka
            </p>
            <ul className="flex gap-[10px] mt-[10px] xl:gap-[15px]">
              <a href="#">
                <i className="bi bi-facebook text-[#bdbdbd] hover:text-white transition duration-300 ease-out"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram text-[#bdbdbd] hover:text-white transition duration-300 ease-out"></i>
              </a>
              <a href="#">
                <i className="bi bi-twitter-x text-[#bdbdbd] hover:text-white transition duration-300 ease-out"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin text-[#bdbdbd] hover:text-white transition duration-300 ease-out"></i>
              </a>
            </ul>
          </div>
        </div>
        {/* footer bottem */}
        <div className="w-[80%] mx-auto h-[20vh] border-t border-t-white flex text-center justify-center items-start mt-[20px] md:h-[10vh] xl:h-[15vh] ">
          <p className="text-white font-light mt-[20px]">
            &copy; 2025 AMC theater. All rights reserved.
          </p>
        </div>
        <div className="hidden xl:flex items-end justify-end p-[20px] w-[100%] h-[23vh] bg-[url('footer.png')] bg-cover bg-center">
          <img
            className="hidden xl:block h-[60px] filter grayscale-100 "
            src="com.png"
            alt="company logo"
          />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
