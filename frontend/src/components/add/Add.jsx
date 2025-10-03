import React from "react";
//validation
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
//alert
import { toast } from "react-toastify";

//validation schema
const contactValidationSchema = Yup.object({
  email: Yup.string()
    .email("invalid email format")
    .required("email is required"),
  content: Yup.string()
    .max(200, "content must be at most 200 characters")
    .required("content is required"),
});

const Add = () => {
  return (
    <section className="w-[100%] mx-auto mt-[40px] md:w-[80%] xl:w-[600px] ">
      <Formik
        initialValues={{ email: "", content: "" }}
        validationSchema={contactValidationSchema}
        onSubmit={(values, { resetForm }) => {
          toast.success("Message sent successfully !");
          resetForm({ values: { email: "", content: "" } });
        }}
      >
        {({ isSubmitting }) => (
          <Form className="w-[100%] mt-[40px] md:mt-0 ">
            <div className="input-group">
              <Field
                className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px]"
                type="email"
                name="email"
                max={100}
                required
              />
              <label className="label text-[16px] font-light" htmlFor="email">
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
                className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px]"
                type="email"
                name="email"
                max={100}
                required
              />
              <label className="label text-[16px] font-light" htmlFor="email">
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
                className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px]"
                type="email"
                name="email"
                max={100}
                required
              />
              <label className="label text-[16px] font-light" htmlFor="email">
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
                className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px]"
                type="email"
                name="email"
                max={100}
                required
              />
              <label className="label text-[16px] font-light" htmlFor="email">
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
                className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px]"
                type="email"
                name="email"
                max={100}
                required
              />
              <label className="label text-[16px] font-light" htmlFor="email">
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
                className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px]"
                type="email"
                name="email"
                max={100}
                required
              />
              <label className="label text-[16px] font-light" htmlFor="email">
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
                className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px]"
                type="email"
                name="email"
                max={100}
                required
              />
              <label className="label text-[16px] font-light" htmlFor="email">
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
                className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px]"
                type="email"
                name="email"
                max={100}
                required
              />
              <label className="label text-[16px] font-light" htmlFor="email">
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
                className="input w-[100%] h-[100px] rounded-[20px] pl-[15px] p-[10px]"
                name="content"
                max={200}
                required
              ></Field>
              <label className="label text-[16px] font-light" htmlFor="content">
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
            <div>
              <label className="custom-file-upload w-[100%] h-[100px] rounded-[20px] p-[10px]">
                <Field type="file" name="file" />
                <h2 className="mt-[15px]">
                  <i className="bi bi-cloud-arrow-up-fill"></i>
                </h2>
              </label>
              <p className="w-[100%] h-[30px] text-[#f21f30] font-extralight ml-[20px]">
                <ErrorMessage
                  name="content"
                  className="text-[13px]"
                  component="span"
                />
              </p>
            </div>
            <div>
              <label className="custom-file-upload w-[100%] h-[100px] rounded-[20px] p-[10px]">
                <Field type="file" name="file" />
                <h2 className="mt-[15px]">
                  <i className="bi bi-cloud-arrow-up-fill"></i>
                </h2>
              </label>
              <p className="w-[100%] h-[30px] text-[#f21f30] font-extralight ml-[20px]">
                <ErrorMessage
                  name="content"
                  className="text-[13px]"
                  component="span"
                />
              </p>
            </div>
            <div>
              <label className="custom-file-upload w-[100%] h-[100px] rounded-[20px] p-[10px]">
                <Field type="file" name="file" />
                <h2 className="mt-[15px]">
                  <i className="bi bi-cloud-arrow-up-fill"></i>
                </h2>
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
              className="w-[150px] mx-auto mt-[10px] flex bg-[#f21f30] font-medium border-[1px] border-[#f21f30] hover:bg-[#242124] hover:text-[#f21f30]"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "PROCESSING..." : "SEND"}
            </button>
          </Form>
        )}
      </Formik>
      <div></div>
    </section>
  );
};

export default Add;
