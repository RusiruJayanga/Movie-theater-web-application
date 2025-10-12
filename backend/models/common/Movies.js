import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, required: true, default: "nowShowing" },
  duration: { type: Number, required: true, min: 0 },
  releaseDate: { type: Date, required: true },
  closeDate: { type: Date, required: true, default: Date.now },
  ratingCategory: { type: String, required: true },
  studio: { type: String, required: true },
  director: { type: String, required: true },
  time: [{ showDate: String, showTimes: String }],
  trailerUrl: { type: String, required: true },
  description: { type: String, required: true },
  mainImage: { type: String, required: true },
  poster: { type: String, required: true },
  galleryImages: { type: [String], required: true },
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
