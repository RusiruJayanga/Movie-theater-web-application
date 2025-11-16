import jwt from "jsonwebtoken";
import User from "../../models/user/Authentication.js";

export const protect = async (req, res, next) => {
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

      //find user
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      return res
        .status(401)
        .json({ message: "Not authorized, token failed !" });
    }
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token !" });
  }
};

//fetch user
export const getUserProfile = async (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};
