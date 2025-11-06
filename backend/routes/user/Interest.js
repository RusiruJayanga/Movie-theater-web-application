import express from "express";
import {
  addUserInterests,
  getUserInterests,
} from "../../controllers/user/Interest.js";

const router = express.Router();

router.post("/interestadd", addUserInterests);
router.get("/interestfetch", getUserInterests);

export default router;
