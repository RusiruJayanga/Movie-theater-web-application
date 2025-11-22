import Movie from "../../models/common/Movies.js";

//fetch movie details
//--
export const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;

    //validation
    if (!id) {
      return res.status(400).json({ message: "Id not provided !" });
    }

    const movie = await Movie.findById(id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found !" });
    }

    res.status(200).json(movie);
  } catch (error) {
    console.error("Movie fetching failed !:", error.message);
    res.status(500).json({ message: "Movie fetching failed !" });
  }
};
