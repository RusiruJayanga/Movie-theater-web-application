import mongoose from "mongoose";

const interestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
    required: true,
  },
  addedDate: { type: Date, default: Date.now },
});

const Interest = mongoose.model("Interest", interestSchema);

export default Interest;
