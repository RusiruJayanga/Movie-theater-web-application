import jwt from "jsonwebtoken";
import Booking from "../../models/common/Booking.js";

//fetch ticket
//--
export const getUserTickets = async (req, res) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //token decode
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      if (!decoded.id) {
        return res.status(401).json({ message: "Not authorized, no token !" });
      }

      const booking = await Booking.find({ userId: decoded.id })
        .populate("movieId", "title runtime poster")
        .populate("showtimeId", "date time")
        .exec();

      res.status(200).json(booking);
    } catch (error) {
      console.error("Tickets fetching failed !:", error.message);
      res.status(500).json({ message: "Tickets fetching failed !" });
    }
  }
};
