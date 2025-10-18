import express from "express";
import multer from "multer";
import {
  addMovie,
  updateMovie,
  deleteMovie,
} from "../../controllers/admin/Movie.js";

const router = express.Router();
const upload = multer({ dest: "temp/" });

router.post(
  "/add",
  upload.fields([
    { name: "mainImage", maxCount: 1 },
    { name: "galleryImages", maxCount: 2 },
  ]),
  addMovie
);
router.put("/update", updateMovie);
router.delete("/delete/:Id", deleteMovie);

export default router;
