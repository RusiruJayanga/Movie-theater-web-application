import Showtime from "../../models/common/Showtime.js";

//fetch all sessions
//--
export const getAllSessions = async (req, res) => {
  try {
    const sessions = await Showtime.find()
      .populate("movieId", "title closeDate poster")
      .exec();
    res.status(200).json(sessions);
  } catch (error) {
    console.error("Sessions fetching failed !:", error.message);
    res.status(500).json({ message: "Sessions fetching failed !" });
  }
};

//reset session
//--
export const resetSession = async (req, res) => {
  try {
    const { Id } = req.params;

    //validation
    if (!Id) {
      return res.status(400).json({ message: "Id not provided !" });
    }

    const rows = ["A", "B", "C", "D", "E"];
    const newSeats = [];
    rows.forEach((r) => {
      for (let i = 1; i <= 10; i++) {
        newSeats.push({
          seatNumber: `${r}${i}`,
          isBooked: false,
          bookedBy: null,
        });
      }
    });

    //update showtime
    const session = await Showtime.findByIdAndUpdate(
      Id,
      {
        $set: {
          seats: newSeats,
          seatsAvailable: newSeats.length,
        },
      },
      { new: true }
    );

    if (!session) {
      return res.status(404).json({ message: "Session not found !" });
    }

    return res.status(200).json({
      message: "Session reset successfully",
      session,
    });
  } catch (error) {
    console.error("Session reset failed !:", error.message);
    res.status(500).json({ message: "Session reset failed !" });
  }
};

//delete session
//--
export const deleteSession = async (req, res) => {
  try {
    const { Id } = req.params;

    //validation
    if (!Id) {
      return res.status(400).json({ message: "Id not provided !" });
    }

    const session = await Showtime.findByIdAndDelete(Id);

    if (!session) {
      return res.status(404).json({ message: "Session not found !" });
    }

    res.status(200).json({
      message: "Session deleted successfully",
      session,
    });
  } catch (error) {
    console.error("Session delete failed !:", error.message);
    res.status(500).json({ message: "Session delete failed !" });
  }
};
