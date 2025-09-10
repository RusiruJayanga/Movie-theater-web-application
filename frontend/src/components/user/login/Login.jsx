import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  // login signup toggle
  const [form, setForm] = useState("login");

  return (
    <div className="absolute top-0 left-0 w-full h-full object-cover flex items-center justify-center cursor-default ">
      <Link to="/">
        <div className="w-[60px] h-[40px] bg-[#f21f30] text-white absolute top-[20px] left-[20px] rounded-[20px] flex items-center justify-center text-[20px] cursor-pointer transition-all duration-300 ease-out hover:w-[80px]">
          <i className="bi bi-chevron-left"></i>
        </div>
      </Link>
      {form === "login" ? (
        <form
          id="login"
          className="w-[350px] bg-[#1a1a1a] rounded-[20px] p-[20px] flex flex-col items-center justify-center "
          action=""
        >
          <div className="flex flex-col items-center justify-center gap-[0px]  ">
            <h1 className=" text-white font-bold ">Login</h1>
            <p className="text-white font-extralight capitalize opacity-[0.8]">
              Welcome back !
            </p>
          </div>
          <div className="input-group w-[100%] mt-[30px] ">
            <input
              className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px] text-white font-medium"
              type="email"
              name="email"
              max={100}
              required
            />
            <label className="label text-[16px] font-medium" htmlFor="email">
              Email
            </label>
            <p className="w-[100%] h-[30px] text-[#000000] font-light ml-[20px]">
              console.error;
            </p>
          </div>

          <div className="input-group w-[100%] ">
            <input
              className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px] text-white font-medium"
              type="password"
              name="password"
              max={100}
              required
            />
            <label className="label text-[16px] font-medium" htmlFor="email">
              Password
            </label>
            <p className="w-[100%] h-[30px] text-[#000000] font-light ml-[20px]">
              console.error;
            </p>
          </div>
          <button
            className="w-[150px] mt-[20px] flex uppercase bg-[#f21f30] text-white font-medium border-[1px] border-[#f21f30] hover:bg-[#242124] hover:text-[#f21f30]"
            type="submit"
          >
            submit
          </button>
          <span className="text-white font-extralight transition duration-300 ease-out opacity-[0.8] hover:opacity-[1] text-[11px] mt-[20px]">
            Don't have an account?{" "}
            <span
              onClick={() => setForm("signup")}
              className="underline cursor-pointer"
            >
              Sign Up
            </span>
          </span>
        </form>
      ) : (
        <form
          id="login"
          className="w-[350px] bg-[#1a1a1a] rounded-[20px] p-[20px] flex flex-col items-center justify-center "
          action=""
        >
          <div className="flex flex-col items-center justify-center gap-[0px]  ">
            <h1 className=" text-white font-bold ">Sign Up</h1>
            <p className="text-white font-extralight capitalize opacity-[0.8]">
              Create your account
            </p>
          </div>
          <div className="input-group w-[100%] mt-[30px] ">
            <input
              className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px] text-white font-medium"
              type="email"
              name="email"
              max={100}
              required
            />
            <label className="label text-[16px] font-medium" htmlFor="email">
              Email
            </label>
            <p className="w-[100%] h-[30px] text-[#000000] font-light ml-[20px]">
              console.error;
            </p>
          </div>

          <div className="input-group w-[100%]">
            <input
              className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px] text-white font-medium"
              type="tel"
              name="mobile"
              max={100}
              required
            />
            <label className="label text-[16px] font-medium" htmlFor="mobile">
              Mobile Number
            </label>
            <p className="w-[100%] h-[30px] text-[#000000] font-light ml-[20px]">
              console.error;
            </p>
          </div>

          <div className="input-group w-[100%] ">
            <input
              className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px] text-white font-medium"
              type="password"
              name="password"
              max={100}
              required
            />
            <label className="label text-[16px] font-medium" htmlFor="password">
              Password
            </label>
            <p className="w-[100%] h-[30px] text-[#000000] font-light ml-[20px]">
              console.error;
            </p>
          </div>
          <button
            className="w-[150px] mt-[20px] flex uppercase bg-[#f21f30] text-white font-medium border-[1px] border-[#f21f30] hover:bg-[#242124] hover:text-[#f21f30]"
            type="submit"
          >
            submit
          </button>
          <span className="text-white font-extralight transition duration-300 ease-out opacity-[0.8] hover:opacity-[1] text-[11px] mt-[20px]">
            Already have an account?{" "}
            <span
              onClick={() => setForm("login")}
              className="underline cursor-pointer"
            >
              Login
            </span>
          </span>
        </form>
      )}
    </div>
  );
};

export default Login;
