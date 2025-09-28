import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  closeDate: { type: Date, required: true },
  ratingCategory: { type: String, required: true },
  studio: { type: String, required: true },
  duration: { type: Number, required: true, min: 0 },
  director: { type: String, required: true },
  trailerUrl: { type: String, required: true },
  mainImage: { type: String, required: true },
  galleryImages: [{ type: String }],
  status: { type: String, required: true, default: "SHOWING" },
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
