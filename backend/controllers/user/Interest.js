import jwt from "jsonwebtoken";
import Interest from "../../models/user/Interests.js";

//add interest
//--
export const addUserInterests = async (req, res) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const { movieId } = req.body;

      //validation
      if (!movieId) {
        return res.status(400).json({ message: "Id not provided !" });
      }

      //token decode
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      if (!decoded.id) {
        return res.status(401).json({ message: "Not authorized, no token !" });
      }

      const existingInterests = await Interest.findOne({
        userId: decoded.id,
        movieId: movieId,
      });
      if (existingInterests) {
        return res.status(400).json({ message: "Interests already exists !" });
      }

      //create interest
      const interest = await Interest.create({
        userId: decoded.id,
        movieId: movieId,
      });

      res
        .status(201)
        .json({ message: "User interests added successfully", interest });
    } catch (error) {
      console.error("Interests adding failed !:", error.message);
      res.status(500).json({ message: "Interests adding failed !" });
    }
  }
};

//fetch interest
//--
export const getUserInterests = async (req, res) => {
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

      const interest = await Interest.find({ userId: decoded.id })
        .populate("movieId", "title ratingCategory runtime poster")
        .exec();

      res.status(200).json(interest);
    } catch (error) {
      console.error("Interests fetching failed !:", error.message);
      res.status(500).json({ message: "Interests fetching failed !" });
    }
  }
};
