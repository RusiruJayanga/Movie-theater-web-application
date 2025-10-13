import Movies from "../../models/common/Movies.js";

//fetch all movies
export const getAllMovies = async (req, res) => {
  try {
    const movies = await Movies.find();
    res.status(200).json(movies);
  } catch (error) {
    console.error("Error fetching movies:", error);
    res.status(500).json({ message: error.message });
  }
};
