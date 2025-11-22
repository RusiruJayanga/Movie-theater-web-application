import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/user/Authentication.js";

//jwt token generate
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

//signup user
//--
export const signupUser = async (req, res) => {
  const { name, mobile, email, password } = req.body;

  //validation
  try {
    if (!name || !mobile || !email || !password) {
      return res.status(400).json({ message: "All fields are required !" });
    }

    //check user
    const userExists = await User.findOne({ email });
    if (userExists) {
      if (userExists.status === "banned") {
        return res
          .status(400)
          .json({ message: "Your account has been banned !" });
      }

      return res.status(400).json({ message: "User already exists !" });
    }

    const user = await User.create({
      name,
      mobile,
      email,
      password,
    });

    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        mobile: user.mobile,
        email: user.email,
        token: generateToken(user.id),
      });
    } else {
      res.status(400).json({ message: "Invalid user data !" });
    }
  } catch (error) {
    console.error("User signup failed !:", error.message);
    res.status(500).json({ message: "User signup failed !" });
  }
};

//login
//--
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  //validation
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required !" });
    }

    //check user
    const user = await User.findOne({ email });
    if (user) {
      if (user.status === "banned") {
        return res
          .status(400)
          .json({ message: "Your account has been banned !" });
      }
    }
    if (!user) {
      return res.status(400).json({ message: "User not found !" });
    }

    //password match
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials !" });
    }

    res.status(200).json({
      _id: user.id,
      name: user.name,
      mobile: user.mobile,
      email: user.email,
      token: generateToken(user.id),
    });
  } catch (error) {
    console.error("User login failed !:", error.message);
    res.status(500).json({ message: "User login failed !" });
  }
};
