import express from "express";
import { getMovieByIdWithRatings } from "../../config/OMDb.js";

const router = express.Router();

router.get("/rating/:id", getMovieByIdWithRatings);

export default router;
