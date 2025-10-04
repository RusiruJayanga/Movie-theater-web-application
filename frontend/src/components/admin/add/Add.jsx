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
                className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px] text-[#bdbdbd] "
                type="text"
                name="title"
                maxLength={100}
                required
              />
              <label
                className="label text-[16px] font-light text-[#bdbdbd]"
                htmlFor="text"
              >
                Movie Title
              </label>
              <p className="w-[100%] h-[30px] text-[#f21f30] font-extralight ml-[20px]">
                <ErrorMessage
                  name="title"
                  className="text-[13px]"
                  component="span"
                />
              </p>
            </div>
            <div className="input-group">
              <Field
                className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px] text-[#bdbdbd] "
                type="text"
                name="status"
                maxLength={100}
                required
              />
              <label
                className="label text-[16px] font-light text-[#bdbdbd]"
                htmlFor="text"
              >
                Status
              </label>
              <p className="w-[100%] h-[30px] text-[#f21f30] font-extralight ml-[20px]">
                <ErrorMessage
                  name="status"
                  className="text-[13px]"
                  component="span"
                />
              </p>
            </div>
            <div className="input-group">
              <Field
                className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px] text-[#bdbdbd]"
                type="text"
                name="duration"
                maxLength={100}
                required
              />
              <label
                className="label text-[16px] font-light text-[#bdbdbd]"
                htmlFor="text"
              >
                Time Duration {"(min)"}
              </label>
              <p className="w-[100%] h-[30px] text-[#f21f30] font-extralight ml-[20px]">
                <ErrorMessage
                  name="duration"
                  className="text-[13px]"
                  component="span"
                />
              </p>
            </div>
            <div className="input-group">
              <Field
                className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px] text-[#bdbdbd]"
                type="date"
                name="releaseDate"
                required
              />
              <label
                className="label text-[16px] font-light text-[#bdbdbd] opacity-0"
                htmlFor="date"
              >
                Release Date
              </label>
              <p className="w-[100%] h-[30px] text-[#f21f30] font-extralight ml-[20px]">
                <ErrorMessage
                  name="releaseDate"
                  className="text-[13px]"
                  component="span"
                />
              </p>
            </div>
            <div className="input-group">
              <Field
                className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px] text-[#bdbdbd]"
                type="date"
                name="closeDate"
                required
              />
              <label
                className="label text-[16px] font-light text-[#bdbdbd] opacity-0"
                htmlFor="date"
              >
                Close Date
              </label>
              <p className="w-[100%] h-[30px] text-[#f21f30] font-extralight ml-[20px]">
                <ErrorMessage
                  name="closeDate"
                  className="text-[13px]"
                  component="span"
                />
              </p>
            </div>
            <div className="input-group">
              <Field
                className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px] text-[#bdbdbd]"
                type="text"
                name="ratingCategory"
                maxLength={100}
                required
              />
              <label
                className="label text-[16px] font-light text-[#bdbdbd]"
                htmlFor="ratingCategory"
              >
                Rating Category
              </label>
              <p className="w-[100%] h-[30px] text-[#f21f30] font-extralight ml-[20px]">
                <ErrorMessage
                  name="ratingCategory"
                  className="text-[13px]"
                  component="span"
                />
              </p>
            </div>
            <div className="input-group">
              <Field
                className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px] text-[#bdbdbd]"
                type="text"
                name="studio"
                maxLength={100}
                required
              />
              <label
                className="label text-[16px] font-light text-[#bdbdbd]"
                htmlFor="text"
              >
                Studio
              </label>
              <p className="w-[100%] h-[30px] text-[#f21f30] font-extralight ml-[20px]">
                <ErrorMessage
                  name="studio"
                  className="text-[13px]"
                  component="span"
                />
              </p>
            </div>
            <div className="input-group">
              <Field
                className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px] text-[#bdbdbd]"
                type="text"
                name="director"
                maxLength={100}
                required
              />
              <label
                className="label text-[16px] font-light text-[#bdbdbd]"
                htmlFor="text"
              >
                Director
              </label>
              <p className="w-[100%] h-[30px] text-[#f21f30] font-extralight ml-[20px]">
                <ErrorMessage
                  name="director"
                  className="text-[13px]"
                  component="span"
                />
              </p>
            </div>
            <div className="input-group">
              <Field
                className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px] text-[#bdbdbd]"
                type="text"
                name="trailerUrl"
                maxLength={200}
                required
              />
              <label
                className="label text-[16px] font-light text-[#bdbdbd]"
                htmlFor="text"
              >
                Trailer Url
              </label>
              <p className="w-[100%] h-[30px] text-[#f21f30] font-extralight ml-[20px]">
                <ErrorMessage
                  name="trailerUrl"
                  className="text-[13px]"
                  component="span"
                />
              </p>
            </div>
            <div className="input-group">
              <Field
                className="input w-[100%] h-[100px] rounded-[20px] pl-[15px] p-[10px] text-[#bdbdbd]"
                name="description"
                maxLength={500}
                required
              ></Field>
              <label
                className="label text-[16px] font-light text-[#bdbdbd]"
                htmlFor="text"
              >
                Description
              </label>
              <p className="w-[100%] h-[30px] text-[#f21f30] font-extralight ml-[20px]">
                <ErrorMessage
                  name="description"
                  className="text-[13px]"
                  component="span"
                />
              </p>
            </div>
            <div>
              <label className="custom-file-upload w-[100%] h-[100px] rounded-[20px] p-[10px] text-[#bdbdbd]">
                <Field type="file" name="file" />
                <h2 className="flex flex-col items-center justify-center ">
                  <i className="bi bi-cloud-arrow-up-fill"></i>
                  <span className="text-[16px] font-light text-[#bdbdbd]">
                    Main Image
                  </span>
                </h2>
              </label>
              <p className="w-[100%] h-[30px] text-[#f21f30] font-extralight ml-[20px]">
                <ErrorMessage
                  name="mainImage"
                  className="text-[13px]"
                  component="span"
                />
              </p>
            </div>
            <div>
              <label className="custom-file-upload w-[100%] h-[100px] rounded-[20px] p-[10px] text-[#bdbdbd]">
                <Field type="file" name="file" />
                <h2 className="flex flex-col items-center justify-center ">
                  <i className="bi bi-cloud-arrow-up-fill"></i>
                  <span className="text-[16px] font-light text-[#bdbdbd]">
                    Poster
                  </span>
                </h2>
              </label>
              <p className="w-[100%] h-[30px] text-[#f21f30] font-extralight ml-[20px]">
                <ErrorMessage
                  name="poster"
                  className="text-[13px]"
                  component="span"
                />
              </p>
            </div>
            <div>
              <label className="custom-file-upload w-[100%] h-[100px] rounded-[20px] p-[10px] text-[#bdbdbd]">
                <Field type="file" name="file" />
                <h2 className="flex flex-col items-center justify-center ">
                  <i className="bi bi-cloud-arrow-up-fill"></i>
                  <span className="text-[16px] font-light text-[#bdbdbd]">
                    Gallery Images
                  </span>
                </h2>
              </label>
              <p className="w-[100%] h-[30px] text-[#f21f30] font-extralight ml-[20px]">
                <ErrorMessage
                  name="galleryImages"
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
