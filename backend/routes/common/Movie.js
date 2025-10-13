import express from "express";
import { getAllMovies } from "../../controllers/common/Movie.js";

const router = express.Router();

router.get("/fetch", getAllMovies);

export default router;
