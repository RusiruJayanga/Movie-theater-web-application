import Booking from "../../models/common/Booking.js";

//fetch all bookings
//--
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("movieId", "title poster")
      .populate("showtimeId", "date time")
      .populate("userId", "name mobile email")
      .exec();
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Bookings fetching failed !:", error.message);
    res.status(500).json({ message: "Bookings fetching failed !" });
  }
};
