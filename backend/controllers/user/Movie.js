import Movie from "../../models/common/Movies.js";

export const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;

    const movie = await Movie.findById(id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found !" });
    }

    res.status(200).json(movie);
  } catch (error) {
    console.error("Error fetching movie:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
