import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import Booking from "../../models/common/Booking.js";
import Showtime from "../../models/common/Showtime.js";

//add booking
//--
export const addBooking = async (req, res) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const {
        movieId,
        showtimeId,
        bookedSeats,
        totalAmount,
        weekRange,
        payment,
      } = req.body;

      //validation
      if (
        !movieId ||
        !showtimeId ||
        !bookedSeats ||
        !totalAmount ||
        !weekRange ||
        !payment
      ) {
        return res.status(400).json({ message: "All fields are required !" });
      }

      //token decode
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      if (!decoded.id) {
        return res.status(401).json({ message: "Not authorized, no token !" });
      }

      //format seats
      const seatsToBook = Array.isArray(bookedSeats)
        ? bookedSeats.map((s) => String(s).trim())
        : [String(bookedSeats).trim()];

      const showtime = await Showtime.findById(showtimeId);
      if (!showtime) {
        return res.status(404).json({ message: "Showtime not found !" });
      }

      //collect errors
      const notFoundSeats = [];
      const alreadyBookedSeats = [];

      for (const seatNum of seatsToBook) {
        const seat = showtime.seats.find((s) => s.seatNumber === seatNum);
        if (!seat) {
          notFoundSeats.push(seatNum);
        } else if (seat.isBooked) {
          alreadyBookedSeats.push(seatNum);
        }
      }

      if (notFoundSeats.length > 0) {
        return res.status(400).json({
          message: "Some seat numbers are invalid !",
          invalidSeats: notFoundSeats,
        });
      }

      if (alreadyBookedSeats.length > 0) {
        return res.status(409).json({
          message: "Some seats are already booked !",
          seats: alreadyBookedSeats,
        });
      }

      //create booking + update showtime
      const session = await mongoose.startSession();
      let bookingDoc;
      try {
        session.startTransaction();

        //create booking
        bookingDoc = await Booking.create(
          [
            {
              userId: decoded.id,
              movieId,
              showtimeId,
              bookedSeats: seatsToBook,
              totalAmount,
              weekRange,
              paypalId: payment?.id,
              paymentStatus: payment?.status,
            },
          ],
          { session }
        );

        //update seats
        let newlyBookedCount = 0;
        for (const seatNum of seatsToBook) {
          const seat = showtime.seats.find((s) => s.seatNumber === seatNum);
          if (seat && !seat.isBooked) {
            seat.isBooked = true;
            seat.bookedBy = decoded.id;
            newlyBookedCount++;
          }
        }

        //decrement seatsAvailable
        showtime.seatsAvailable = Math.max(
          0,
          showtime.seatsAvailable - newlyBookedCount
        );

        await showtime.save({ session });

        await session.commitTransaction();
        session.endSession();

        return res.status(201).json({
          message: "Booking added and seats updated successfully",
          booking: bookingDoc[0],
        });
      } catch (txErr) {
        try {
          await session.abortTransaction();
        } catch (e) {}
        session.endSession();
        throw txErr;
      }
    } catch (error) {
      console.error("Error adding booking / updating seats !:", error.message);

      if (
        error.name === "MongoError" &&
        (error.code === 11000 || error.codeName === "DuplicateKey")
      ) {
        return res.status(409).json({
          message:
            "Booking conflict — one or more seats were just booked by someone else. Try again !",
        });
      }

      return res.status(500).json({ message: "Internal server error !" });
    }
  } else {
    return res.status(401).json({ message: "Authorization token missing !" });
  }
};
