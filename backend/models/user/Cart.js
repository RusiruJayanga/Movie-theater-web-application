import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
    required: true,
  },
  showtime: { type: Date, required: true },
  seats: [{ type: String, required: true }],
  totalAmount: { type: Number, required: true, min: 0 },
  date: { type: Date, default: Date.now },
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
