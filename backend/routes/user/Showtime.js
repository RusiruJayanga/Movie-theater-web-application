import express from "express";
import {
  getAllShowtimes,
  getShowTimeById,
} from "../../controllers/user/Showtime.js";

const router = express.Router();

router.get("/showtimefetch", getAllShowtimes);
router.get("/showtimedetails/:id", getShowTimeById);

export default router;
