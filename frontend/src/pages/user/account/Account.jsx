import React from "react";

const Account = () => {
  return (
    <div className="p-[10px] flex flex-col items-start text-white cursor-default mt-[40px] md:w-[80%] md:mx-auto xl:w-[60%] xl:mt-[20px] ">
      <div className="w-[100%] flex items-center justify-between p-[20px] border-t-[1px] border-b-[1px] border-gray-600 ">
        <img
          className="w-[70px] h-[70px] rounded-full md:w-[90px] md:h-[90px]"
          src="person.jpg"
          alt="person"
        />
        <div className="mr-auto ml-[20px]">
          <p className="font-extralight opacity-[0.8]">Wellcome !</p>
          <h2 className="text-[#f21f30] uppercase font-extralight ">
            Rusiru Jayanga
          </h2>
        </div>
        <h4 className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
          <i className="bi bi-box-arrow-right"></i>
        </h4>
      </div>
      <div className="w-[100%] flex flex-col items-start mt-[100px] xl:mt-[150px] font-light ">
        <div className="w-[100%] flex items-center justify-between p-[20px] border-t-[1px] border-b-[1px] border-gray-600">
          <h5>
            <i className="bi bi-heart"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Interests</h5>
          <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
            <i className="bi bi-chevron-down"></i>
          </h5>
        </div>
        <div className="w-[100%] flex items-center justify-between p-[20px] border-t-[1px] border-b-[1px] border-gray-600">
          <h5>
            <i className="bi bi-hourglass"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">History</h5>
          <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
            <i className="bi bi-chevron-down"></i>
          </h5>
        </div>
        <div className="w-[100%] flex items-center justify-between p-[20px] border-t-[1px] border-b-[1px] border-gray-600">
          <h5>
            <i className="bi bi-gear"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Settings</h5>
          <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
            <i className="bi bi-chevron-down"></i>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Account;
