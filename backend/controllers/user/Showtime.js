import Showtime from "../../models/common/Showtime.js";

export const getShowTimeById = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Showtime.find({ movieId: id });

    if (!movie) {
      return res.status(404).json({ message: "Showtime not found !" });
    }

    res.status(200).json(movie);
  } catch (error) {
    console.error("Error fetching showtime:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
