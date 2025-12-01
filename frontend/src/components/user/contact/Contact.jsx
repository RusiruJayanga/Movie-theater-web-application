import React from "react";
//animation
import { motion } from "framer-motion";
//validation
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
//hooks
import { useContact } from "../../../hooks/user/Contact";

//validation schema
const contactValidationSchema = Yup.object({
  email: Yup.string()
    .email("invalid email format")
    .required("email is required"),
  content: Yup.string()
    .max(200, "content must be at most 200 characters")
    .required("content is required"),
});

const Contact = () => {
  //add contact function
  const { mutate: contactUser } = useContact();

  return (
    <motion.section
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-[90%] mt-[150px] mx-auto p-[10px] text-white font-light cursor-default md:flex md:items-start md:justify-center md:gap-[30px] xl:w-[1075px] xl:mt-[200px] "
    >
      <div className="w-[100%] ">
        <h2 className="text-[#f21f30] font-light ">CONTACT US</h2>
        <h4 className="font-medium mt-[5px]">
          WE WOULD LOVE TO HEAR FROM YOU ! REACH OUT TO US THROUGH ANY OF THE
          CHANNELS BELOW.
        </h4>
      </div>
      <Formik
        initialValues={{ email: "", content: "" }}
        validationSchema={contactValidationSchema}
        onSubmit={(values, { resetForm }) => {
          contactUser(values);
          resetForm({ values: { email: "", content: "" } });
        }}
      >
        {({ isSubmitting }) => (
          <Form className="w-[100%] mt-[40px] md:mt-0 ">
            <div className="input-group">
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
                Your Email
              </label>
              <p className="w-[100%] h-[30px] text-[#f21f30] font-extralight ml-[20px]">
                <ErrorMessage
                  name="email"
                  className="text-[13px]"
                  component="span"
                />
              </p>
            </div>
            <div className="input-group">
              <Field
                className="input w-[100%] h-[100px] rounded-[20px] pl-[15px] p-[10px] text-[#f21f30]"
                name="content"
                maxLength={200}
                required
              ></Field>
              <label
                className="label text-[16px] font-light text-[#f21f30]"
                htmlFor="content"
              >
                Content
              </label>
              <p className="w-[100%] h-[30px] text-[#f21f30] font-extralight ml-[20px]">
                <ErrorMessage
                  name="content"
                  className="text-[13px]"
                  component="span"
                />
              </p>
            </div>
            <button
              className="w-[150px] mx-auto mt-[10px] flex bg-[#f21f30] border-[1px] border-[#f21f30] hover:bg-transparent hover:text-[#f21f30]"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "PROCESSING..." : "SEND"}
            </button>
          </Form>
        )}
      </Formik>
    </motion.section>
  );
};

export default Contact;
