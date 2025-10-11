import React, { useState } from "react";
import { data, Link, NavLink, useNavigate } from "react-router-dom";
//validation
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
//alert
import { toast } from "react-toastify";
//hooks
import { useSignup, useLogin } from "../../../hooks/user/Auth";

//validation schema
const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("invalid email format")
    .required("email is required"),
  password: Yup.string()
    .min(6, "password must be at least 6 characters")
    .required("password is required"),
});

const signupValidationSchema = Yup.object({
  name: Yup.string().required("name is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "mobile number must be 10 digits")
    .required("mobile number is required"),
  email: Yup.string()
    .email("invalid email format")
    .required("email is required"),
  password: Yup.string()
    .min(6, "password must be at least 6 characters")
    .required("password is required"),
});

const Login = () => {
  //login signup toggle
  const [form, setForm] = useState("login");

  //signup function
  const navigate = useNavigate();
  const { mutate: signupUser } = useSignup((data) => {
    localStorage.setItem("token", data.token);
    navigate("/");
  });
  //login function
  const { mutate: loginUser } = useLogin((data) => {
    localStorage.setItem("token", data.token);
    navigate("/");
  });

  return (
    <div className="absolute text-white font-light top-0 left-0 w-full h-full bg-[linear-gradient(0deg,rgba(12,12,12,0.95)_0%,rgba(12,12,12,0.95)_100%),url(/auth_bg.jpg)] bg-no-repeat bg-cover bg-center flex items-center justify-center cursor-default ">
      <Link to="/">
        <div className="w-[60px] h-[40px] bg-[#f21f30] absolute top-[20px] left-[20px] rounded-[20px] flex items-center justify-center text-[20px] cursor-pointer transition-all duration-300 ease-out hover:w-[80px]">
          <i className="bi bi-chevron-left"></i>
        </div>
      </Link>
      {form === "login" ? (
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginValidationSchema}
          onSubmit={(values, { resetForm }) => {
            loginUser(values);
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form className="w-[350px] bg-[#1a1a1a] rounded-[20px] p-[20px] flex flex-col items-center justify-center ">
              <div className="flex flex-col items-center justify-center gap-[0px]  ">
                <h1 className="font-bold ">Login</h1>
                <p className="font-extralight opacity-[0.8]">Welcome Back !</p>
              </div>
              <div className="input-group w-[100%] mt-[30px] ">
                <Field
                  className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px]"
                  type="email"
                  name="email"
                  maxLength={100}
                  required
                />
                <label className="label text-[16px] font-light" htmlFor="email">
                  Email
                </label>
                <p className="w-[100%] h-[30px] text-[#f21f30] font-extralight ml-[20px]">
                  <ErrorMessage
                    name="email"
                    className="text-[13px]"
                    component="span"
                  />
                </p>
              </div>

              <div className="input-group w-[100%] ">
                <Field
                  className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px] font-medium"
                  type="password"
                  name="password"
                  maxLength={100}
                  required
                />
                <label
                  className="label text-[16px] font-light"
                  htmlFor="password"
                >
                  Password
                </label>
                <p className="w-[100%] h-[30px] text-[#f21f30] font-extralight ml-[20px]">
                  <ErrorMessage
                    name="password"
                    className="text-[13px]"
                    component="span"
                  />
                </p>
              </div>
              <button
                className="w-[150px] mt-[20px] flex bg-[#f21f30] border-[1px] border-[#f21f30] hover:bg-[#242124] hover:text-[#f21f30]"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "PROCESSING..." : "LOGIN"}
              </button>
              <span className="font-extralight transition duration-300 ease-out opacity-[0.8] hover:opacity-[1] text-[13px] mt-[20px]">
                Don't have an account?{" "}
                <span
                  onClick={() => setForm("signup")}
                  className="underline cursor-pointer"
                >
                  Sign Up
                </span>
              </span>
            </Form>
          )}
        </Formik>
      ) : (
        <Formik
          initialValues={{ name: "", mobile: "", email: "", password: "" }}
          validationSchema={signupValidationSchema}
          onSubmit={(values, { resetForm }) => {
            signupUser(values);
            resetForm({
              values: { name: "", mobile: "", email: "", password: "" },
            });
          }}
        >
          {({ isSubmitting }) => (
            <Form className="w-[350px] bg-[#1a1a1a] rounded-[20px] p-[20px] flex flex-col items-center justify-center ">
              <div className="flex flex-col items-center justify-center gap-[0px]  ">
                <h1 className="font-bold ">Sign Up</h1>
                <p className="font-extralight opacity-[0.8]">
                  Create Your Account !
                </p>
              </div>
              <div className="input-group w-[100%] mt-[30px] ">
                <Field
                  className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px]"
                  type="text"
                  name="name"
                  maxLength={100}
                  required
                />
                <label className="label text-[16px] font-light" htmlFor="name">
                  Name
                </label>
                <p className="w-[100%] h-[30px] text-[#f21f30] font-extralight ml-[20px]">
                  <ErrorMessage
                    name="name"
                    className="text-[13px]"
                    component="span"
                  />
                </p>
              </div>

              <div className="input-group w-[100%]">
                <Field
                  className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px]"
                  type="text"
                  name="mobile"
                  maxLength={100}
                  required
                />
                <label
                  className="label text-[16px] font-light"
                  htmlFor="mobile"
                >
                  Mobile Number
                </label>
                <p className="w-[100%] h-[30px] text-[#f21f30] font-extralight ml-[20px]">
                  <ErrorMessage
                    name="mobile"
                    className="text-[13px]"
                    component="span"
                  />
                </p>
              </div>

              <div className="input-group w-[100%] ">
                <Field
                  className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px]"
                  type="email"
                  name="email"
                  maxLength={100}
                  required
                />
                <label className="label text-[16px] font-light" htmlFor="email">
                  Email
                </label>
                <p className="w-[100%] h-[30px] text-[#f21f30] font-extralight ml-[20px]">
                  <ErrorMessage
                    name="email"
                    className="text-[13px]"
                    component="span"
                  />
                </p>
              </div>

              <div className="input-group w-[100%] ">
                <Field
                  className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px] font-medium"
                  type="password"
                  name="password"
                  maxLength={100}
                  required
                />
                <label
                  className="label text-[16px] font-light"
                  htmlFor="password"
                >
                  Password
                </label>
                <p className="w-[100%] h-[30px] text-[#f21f30] font-extralight ml-[20px]">
                  <ErrorMessage
                    name="password"
                    className="text-[13px]"
                    component="span"
                  />
                </p>
              </div>
              <button
                className="w-[150px] mt-[20px] flex bg-[#f21f30] border-[1px] border-[#f21f30] hover:bg-[#242124] hover:text-[#f21f30]"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "PROCESSING..." : "SIGN UP"}
              </button>
              <span className="font-extralight transition duration-300 ease-out opacity-[0.8] hover:opacity-[1] text-[13px] mt-[20px]">
                Already have an account?{" "}
                <span
                  onClick={() => setForm("login")}
                  className="underline cursor-pointer"
                >
                  Login
                </span>
              </span>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default Login;
