import React from "react";
//animation
import { motion, AnimatePresence } from "framer-motion";
//validation
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
//hooks
import { useMovies } from "../../../hooks/common/Movie";
import { formatDuration, formatDate } from "../../../hooks/common/Format";

//validation schema
const updateMovieValidationSchema = Yup.object({
  closeDate: Yup.date().required("close date is required"),
});

const Upcoming = () => {
  //movies
  const { data: movies } = useMovies();

  return (
    <section className="w-[100%] grid gap-[20px] xl:[grid-template-columns:repeat(auto-fit,_580px)] ">
      {/* repeat */}
      {movies
        ?.filter((movie) => movie.status === "upComing")
        .map((movie) => (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex w-[100%] items-start justify-start p-[10px] font-extralight rounded-[20px] bg-[#1a1a1a] hover:scale-102 transition duration-300 ease-out "
            key={movie?._id}
          >
            <img
              className="w-[100px] h-[150px] object-cover rounded-[5px]"
              src={movie?.poster || "default_movie.jpg"}
              alt={movie?.title}
            />
            <div className="flex flex-col ml-[20px]">
              <h5 className="w-[100%] font-light uppercase ">{movie?.title}</h5>
              <p className=" mt-[10px] opacity-[0.8]">
                Release Date - {formatDate(movie?.releaseDate)}
              </p>
              <Formik
                initialValues={{ closeDate: "" }}
                validationSchema={updateMovieValidationSchema}
                onSubmit={(values, { resetForm }) => {
                  resetForm({ values: { closeDate: "" } });
                }}
              >
                <Form className="input-group mt-[20px] flex flex-col md:flex-row xl:gap-[10px] ">
                  <div>
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
                  <button
                    type="submit"
                    className="flex w-[150px] border-[1px] border-white hover:bg-white hover:text-black"
                  >
                    UPDATE
                  </button>
                </Form>
              </Formik>
            </div>
            <div className="flex ml-auto items-center justify-center">
              <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out ">
                <i className="bi bi-trash3"></i>
              </h5>
            </div>
          </motion.div>
        ))}
      {/* repeat */}
      {movies?.filter((movie) => movie.status === "upComing").length === 0 && (
        <p className="font-extralight opacity-[0.8] ">no data to show</p>
      )}
    </section>
  );
};

export default Upcoming;
