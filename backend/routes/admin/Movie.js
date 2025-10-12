import express from "express";
import multer from "multer";
import { addMovie } from "../../controllers/admin/Movie.js";

const router = express.Router();
const upload = multer({ dest: "temp/" });

router.post(
  "/addmovie",
  upload.fields([
    { name: "mainImage", maxCount: 1 },
    { name: "poster", maxCount: 1 },
    { name: "galleryImages", maxCount: 2 },
  ]),
  addMovie
);

export default router;
