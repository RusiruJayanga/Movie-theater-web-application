import express from "express";
import { protect, getUserProfile } from "../../controllers/user/Account.js";

const router = express.Router();

router.get("/profile", protect, getUserProfile);

export default router;
