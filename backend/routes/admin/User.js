import express from "express";
import { getAllUsers } from "../../controllers/admin/User.js";

const router = express.Router();

router.get("/profileinfo", getAllUsers);

export default router;
