import Showtime from "../../models/common/Showtime.js";

//fetch all showtimes
//--
export const getAllShowtimes = async (req, res) => {
  try {
    const today = new Date();
    //get now showing, close date greater than today
    const showtimes = await Showtime.aggregate([
      {
        $lookup: {
          from: "movies",
          localField: "movieId",
          foreignField: "_id",
          as: "movie",
        },
      },
      { $unwind: "$movie" },
      {
        $match: {
          "movie.status": "nowShowing",
          "movie.closeDate": { $gte: today },
        },
      },
    ]);
    res.status(200).json(showtimes);
  } catch (error) {
    console.error("Showtimes fetching failed !:", error.message);
    res.status(500).json({ message: "Showtimes fetching failed !" });
  }
};

//fetch showtime by id
//--
export const getShowTimeById = async (req, res) => {
  try {
    const { id } = req.params;

    //validation
    if (!id) {
      return res.status(400).json({ message: "Id not provided !" });
    }

    const showtime = await Showtime.find({ movieId: id });

    if (!showtime) {
      return res.status(404).json({ message: "Showtime not found !" });
    }

    res.status(200).json(showtime);
  } catch (error) {
    console.error("Showtime fetching failed !:", error.message);
    res.status(500).json({ message: "Showtime fetching failed !" });
  }
};
