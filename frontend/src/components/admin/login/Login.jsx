import React from "react";
import { useNavigate } from "react-router-dom";
//validation
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
//alert
import { toast } from "react-toastify";

//validation schema
const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("invalid email format")
    .required("email is required"),
  password: Yup.string()
    .min(6, "password must be at least 6 characters")
    .required("password is required"),
});

const Login = () => {
  //navigate
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/adminHome");
  };

  return (
    <div className="absolute text-white font-light top-0 left-0 w-full h-full bg-[linear-gradient(0deg,rgba(12,12,12,0.95)_0%,rgba(12,12,12,0.95)_100%),url(/auth_bg.jpg)] bg-no-repeat bg-cover bg-center flex items-center justify-center cursor-default ">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginValidationSchema}
        onSubmit={(values, { resetForm }) => {
          if (
            values.email === "admin@gmail.com" &&
            values.password === "admin123"
          ) {
            toast.success("Login successful !");
            resetForm({ values: { email: "", password: "" } });
            navigateTo();
          } else {
            toast.error("Incorrect email or password !");
          }
        }}
      >
        <Form className="w-[350px] bg-[#1a1a1a] rounded-[20px] p-[20px] flex flex-col items-center justify-center ">
          <div className="flex flex-col items-center justify-center gap-[0px]  ">
            <h1 className="font-bold ">Login</h1>
            <p className="font-extralight opacity-[0.8]">Welcome Back !</p>
          </div>
          <div className="input-group w-[100%] mt-[30px] ">
            <Field
              className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px] text-[#f21f30]"
              type="email"
              name="email"
              maxLength={100}
              required
            />
            <label
              className="label text-[16px] font-light text-[#f21f30]"
              htmlFor="email"
            >
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
              className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px] font-medium text-[#f21f30]"
              type="password"
              name="password"
              maxLength={100}
              required
            />
            <label
              className="label text-[16px] font-light text-[#f21f30]"
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
          >
            LOGIN
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
