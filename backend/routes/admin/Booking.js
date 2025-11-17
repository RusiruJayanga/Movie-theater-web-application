import express from "express";
import { getAllBookings } from "../../controllers/admin/Booking.js";

const router = express.Router();

router.get("/fetch", getAllBookings);

export default router;
