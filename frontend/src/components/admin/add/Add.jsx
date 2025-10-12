import React from "react";
//validation
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
//alert
import { toast } from "react-toastify";
//hooks
import { useAddMovie } from "../../../hooks/admin/Movie";

//validation schema
const addMovieValidationSchema = Yup.object({
  title: Yup.string()
    .max(100, "title must be at most 100 characters")
    .required("movie title is required"),
  status: Yup.string()
    .max(50, "status must be at most 50 characters")
    .required("status is required"),
  duration: Yup.number()
    .typeError("duration must be a number")
    .positive("duration must be positive")
    .integer("duration must be an integer")
    .required("duration is required"),
  releaseDate: Yup.date().required("release date is required"),
  closeDate: Yup.date().min(
    Yup.ref("releaseDate"),
    "close date cannot be before release date"
  ),
  ratingCategory: Yup.string()
    .max(20, "rating category must be at most 20 characters")
    .required("rating category is required"),
  studio: Yup.string()
    .max(100, "studio name too long")
    .required("studio is required"),
  director: Yup.string()
    .max(100, "director name too long")
    .required("director is required"),
  trailerUrl: Yup.string()
    .url("enter a valid URL")
    .required("trailer URL is required"),
  description: Yup.string()
    .max(500, "description must be at most 500 characters")
    .required("description is required"),
  mainImage: Yup.mixed().required("main image is required"),
  poster: Yup.mixed().required("poster image is required"),
  galleryImages: Yup.mixed()
    .required("gallery images are required")
    .test(
      "has-files",
      "at least one gallery image required",
      (value) => value && value.length > 0
    )
    .test(
      "fileCount",
      "only up to 2 images allowed",
      (value) => value && value.length <= 2
    ),
  showDate1: Yup.string().max(50, "show date too long"),
  showDate2: Yup.string().max(50, "show date too long"),
  showDate3: Yup.string().max(50, "show date too long"),
  showTime1: Yup.string().max(50, "show time too long"),
  showTime2: Yup.string().max(50, "show time too long"),
  showTime3: Yup.string().max(50, "show time too long"),
});

const Add = () => {
  //add movie function
  const { mutate, isPending: isAdding } = useAddMovie();

  return (
    <section className="w-[100%] mx-auto mt-[40px] md:w-[80%] xl:w-[600px] ">
      <Formik
        initialValues={{
          title: "",
          status: "",
          duration: "",
          releaseDate: "",
          closeDate: "",
          ratingCategory: "",
          studio: "",
          director: "",
          showDate1: "",
          showDate2: "",
          showDate3: "",
          showTime1: "",
          showTime2: "",
          showTime3: "",
          trailerUrl: "",
          description: "",
          mainImage: null,
          poster: null,
          galleryImages: null,
        }}
        validationSchema={addMovieValidationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          const time = [];
          if (values.showDate1 && values.showTime1) {
            time.push({
              showDate: values.showDate1,
              showTimes: values.showTime1,
            });
          }
          if (values.showDate2 && values.showTime2) {
            time.push({
              showDate: values.showDate2,
              showTimes: values.showTime2,
            });
          }
          if (values.showDate3 && values.showTime3) {
            time.push({
              showDate: values.showDate3,
              showTimes: values.showTime3,
            });
          }
          const formData = new FormData();
          formData.append("title", values.title);
          formData.append("status", values.status);
          formData.append("duration", values.duration);
          formData.append("releaseDate", values.releaseDate);
          formData.append("closeDate", values.closeDate);
          formData.append("ratingCategory", values.ratingCategory);
          formData.append("studio", values.studio);
          formData.append("director", values.director);
          formData.append("trailerUrl", values.trailerUrl);
          formData.append("description", values.description);
          formData.append("time", JSON.stringify(time));

          if (values.mainImage) {
            formData.append("mainImage", values.mainImage);
          }
          if (values.poster) {
            formData.append("poster", values.poster);
          }
          if (values.galleryImages) {
            Array.from(values.galleryImages).forEach((file) => {
              formData.append("galleryImages", file);
            });
          }
          mutate(formData, {
            onSuccess: () => {
              resetForm();
              setSubmitting(false);
            },
            onError: () => {
              setSubmitting(false);
            },
          });
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
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
                as="select"
                name="status"
                required
              >
                <option value="">Select Status</option>
                <option value="nowShowing">Now Showing</option>
                <option value="upComing">Upcoming</option>
              </Field>
              <label
                className="label text-[16px] font-light text-[#bdbdbd]"
                htmlFor="text"
              ></label>
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
                as="select"
                name="ratingCategory"
                required
              >
                <option value="">Select Rating</option>
                <option value="G">G</option>
                <option value="PG">PG</option>
                <option value="PG-13">PG-13</option>
                <option value="R">R</option>
                <option value="NC-17">NC-17</option>
              </Field>
              <label
                className="label text-[16px] font-light text-[#bdbdbd]"
                htmlFor="ratingCategory"
              ></label>
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
            <div className="flex items-center gap-[20px] ">
              <div className="w-[50%] ">
                <div className="input-group">
                  <Field
                    className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px] text-[#bdbdbd]"
                    type="text"
                    name="showDate1"
                    maxLength={50}
                  />
                  <label
                    className="label text-[16px] font-light text-[#bdbdbd]"
                    htmlFor="text"
                  >
                    Show Date 1
                  </label>
                  <p className="w-[100%] h-[30px] text-[#f21f30] font-extralight ml-[20px]">
                    <ErrorMessage
                      name="showDate1"
                      className="text-[13px]"
                      component="span"
                    />
                  </p>
                </div>
                <div className="input-group">
                  <Field
                    className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px] text-[#bdbdbd]"
                    type="text"
                    name="showDate2"
                    maxLength={50}
                  />
                  <label
                    className="label text-[16px] font-light text-[#bdbdbd]"
                    htmlFor="text"
                  >
                    Show Date 2
                  </label>
                  <p className="w-[100%] h-[30px] text-[#f21f30] font-extralight ml-[20px]">
                    <ErrorMessage
                      name="showDate2"
                      className="text-[13px]"
                      component="span"
                    />
                  </p>
                </div>
                <div className="input-group">
                  <Field
                    className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px] text-[#bdbdbd]"
                    type="text"
                    name="showDate3"
                    maxLength={50}
                  />
                  <label
                    className="label text-[16px] font-light text-[#bdbdbd]"
                    htmlFor="text"
                  >
                    Show Date 3
                  </label>
                  <p className="w-[100%] h-[30px] text-[#f21f30] font-extralight ml-[20px]">
                    <ErrorMessage
                      name="showDate3"
                      className="text-[13px]"
                      component="span"
                    />
                  </p>
                </div>
              </div>
              <div className="w-[50%] ">
                <div className="input-group">
                  <Field
                    className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px] text-[#bdbdbd]"
                    type="text"
                    name="showTime1"
                    maxLength={50}
                  />
                  <label
                    className="label text-[16px] font-light text-[#bdbdbd]"
                    htmlFor="text"
                  >
                    Show Time 1
                  </label>
                  <p className="w-[100%] h-[30px] text-[#f21f30] font-extralight ml-[20px]">
                    <ErrorMessage
                      name="showTime1"
                      className="text-[13px]"
                      component="span"
                    />
                  </p>
                </div>
                <div className="input-group">
                  <Field
                    className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px] text-[#bdbdbd]"
                    type="text"
                    name="showTime2"
                    maxLength={50}
                  />
                  <label
                    className="label text-[16px] font-light text-[#bdbdbd]"
                    htmlFor="text"
                  >
                    Show Time 2
                  </label>
                  <p className="w-[100%] h-[30px] text-[#f21f30] font-extralight ml-[20px]">
                    <ErrorMessage
                      name="showTime2"
                      className="text-[13px]"
                      component="span"
                    />
                  </p>
                </div>
                <div className="input-group">
                  <Field
                    className="input w-[100%] h-[40px] rounded-[20px] pl-[15px] p-[10px] text-[#bdbdbd]"
                    type="text"
                    name="showTime3"
                    maxLength={50}
                  />
                  <label
                    className="label text-[16px] font-light text-[#bdbdbd]"
                    htmlFor="text"
                  >
                    Show Time 3
                  </label>
                  <p className="w-[100%] h-[30px] text-[#f21f30] font-extralight ml-[20px]">
                    <ErrorMessage
                      name="showTime3"
                      className="text-[13px]"
                      component="span"
                    />
                  </p>
                </div>
              </div>
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
                <input
                  type="file"
                  name="mainImage"
                  accept="image/*"
                  onChange={(event) =>
                    setFieldValue("mainImage", event.currentTarget.files[0])
                  }
                />
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
                <input
                  type="file"
                  name="poster"
                  accept="image/*"
                  onChange={(event) =>
                    setFieldValue("poster", event.currentTarget.files[0])
                  }
                />
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
                <input
                  type="file"
                  name="galleryImages"
                  accept="image/*"
                  multiple
                  onChange={(event) =>
                    setFieldValue("galleryImages", event.currentTarget.files)
                  }
                />
                <h2 className="flex flex-col items-center justify-center ">
                  <i className="bi bi-cloud-arrow-up-fill"></i>
                  <span className="text-[16px] font-light text-[#bdbdbd]">
                    Gallery Images (up to 2)
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
              disabled={isSubmitting || isAdding}
            >
              {isSubmitting || isAdding ? "PROCESSING..." : "ADD MOVIE"}
            </button>
          </Form>
        )}
      </Formik>
      <div></div>
    </section>
  );
};

export default Add;
