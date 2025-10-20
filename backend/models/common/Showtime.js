import mongoose from "mongoose";

const showtimeSchema = new mongoose.Schema({
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
    required: true,
  },
  date: { type: String, required: true },
  time: { type: String, required: true },
  seatsAvailable: { type: Number, required: true, min: 0, default: 70 },
  seats: [
    {
      seatNumber: { type: String, required: true },
      isBooked: { type: Boolean, default: false },
      bookedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null,
      },
    },
  ],
  addedDate: { type: Date, default: Date.now },
});

const Showtime = mongoose.model("Showtime", showtimeSchema);

export default Showtime;
