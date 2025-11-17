import express from "express";
import { addBooking } from "../../controllers/user/Booking.js";

const router = express.Router();

router.post("/bookingadd", addBooking);

export default router;
