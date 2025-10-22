import express from "express";
import { getShowTimeById } from "../../controllers/user/Showtime.js";

const router = express.Router();

router.get("/showtimedetails/:id", getShowTimeById);

export default router;
