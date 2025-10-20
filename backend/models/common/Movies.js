import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, required: true, default: "nowShowing" },
  runtime: { type: Number, required: true, min: 0 },
  genre: { type: [String], required: true },
  releaseDate: { type: Date, required: true },
  closeDate: { type: Date, required: true },
  ratingCategory: { type: String, required: true, default: "NR" },
  studio: { type: String, required: true },
  director: { type: String, required: true },
  trailerUrl: { type: String, required: true },
  plot: { type: String, required: true },
  mainImage: { type: String, required: true },
  poster: { type: String, required: true },
  galleryImages: { type: [String], required: true },
  addedDate: { type: Date, default: Date.now },
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
