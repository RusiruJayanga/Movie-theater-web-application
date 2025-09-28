import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/user/Authentication.js";

//jwt token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

//signup
export const signupUser = async (req, res) => {
  const { name, mobile, email, password } = req.body;

  //validation
  try {
    if (!name || !mobile || !email || !password) {
      return res.status(400).json({ message: "Please fill all fields !" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
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
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  //validation
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all fields !" });
    }

    //check user
    const user = await User.findOne({ email });
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
    res.status(500).json({ message: error.message });
  }
};
