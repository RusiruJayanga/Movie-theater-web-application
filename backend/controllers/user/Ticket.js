import jwt from "jsonwebtoken";
import Booking from "../../models/common/Booking.js";

export const getUserTickets = async (req, res) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const booking = await Booking.find({ userId: decoded.id })
        .populate("movieId", "title runtime poster")
        .populate("showtimeId", "date time")
        .exec();

      res.status(200).json(booking);
    } catch (error) {
      console.error("Error fetching user tickets:", error);
      res.status(500).json({ message: "Internal server error !" });
    }
  }
};
