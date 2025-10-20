import jwt from "jsonwebtoken";
import Interest from "../../models/user/Interests.js";

export const addUserInterests = async (req, res) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const { movieId } = req.body;

      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const existingInterests = await Interest.findOne({
        userId: decoded.id,
        movieId: movieId,
      });
      if (existingInterests) {
        return res.status(400).json({ message: "Interests already exists !" });
      }

      const interest = await Interest.create({
        userId: decoded.id,
        movieId: movieId,
      });

      res
        .status(201)
        .json({ message: "User interests added successfully !", interest });
    } catch (error) {
      console.error("Error adding user interests:", error);
      res.status(500).json({ message: "Internal server error !" });
    }
  }
};

//fetch interest
export const getUserInterests = async (req, res) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const interest = await Interest.find({ userId: decoded.id })
        .populate("movieId", "title ratingCategory runtime")
        .exec();

      res.status(200).json(interest);
    } catch (error) {
      console.error("Error fetching user interests:", error);
      res.status(500).json({ message: "Internal server error !" });
    }
  }
};
