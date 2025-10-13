import express from "express";
import { getMovieById } from "../../controllers/user/Movie.js";

const router = express.Router();

router.get("/details/:id", getMovieById);

export default router;
