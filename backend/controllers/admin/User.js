import User from "../../models/user/Authentication.js";

//fetch all users
//--
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    res.status(200).json(users);
  } catch (error) {
    console.error("Users fetching failed !:", error.message);
    res.status(500).json({ message: "Users fetching failed !" });
  }
};

//ban user
//--
export const banUser = async (req, res) => {
  try {
    const { id } = req.params;

    //validation
    if (!id) {
      return res.status(400).json({ message: "Id not provided !" });
    }

    const user = await User.findByIdAndUpdate(
      id,
      { status: "banned" },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found !" });
    }

    res.status(200).json({
      message: "User banned successfully",
      user,
    });
  } catch (error) {
    console.error("User banning failed !:", error.message);
    res.status(500).json({ message: "User banning failed !" });
  }
};

//active user
export const activateUser = async (req, res) => {
  try {
    const { id } = req.params;

    //validation
    if (!id) {
      return res.status(400).json({ message: "Id not provided !" });
    }

    const user = await User.findByIdAndUpdate(
      id,
      { status: "active" },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found !" });
    }

    res.status(200).json({
      message: "User activated successfully",
      user,
    });
  } catch (error) {
    console.error("User activation failed !:", error.message);
    res.status(500).json({ message: "User activation failed !" });
  }
};
