import mongoose from "mongoose";

const seatSchema = new mongoose.Schema({
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
    required: true,
  },
  showtime: { type: Date, required: true },
  emptySeats: [{ type: String, required: true }],
  addedDate: { type: Date, default: Date.now },
});

const Seat = mongoose.model("Seat", seatSchema);

export default Seat;
