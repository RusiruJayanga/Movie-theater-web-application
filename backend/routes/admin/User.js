import express from "express";
import { getAllUsers } from "../../controllers/admin/User.js";
import { deleteUser } from "../../controllers/admin/User.js";

const router = express.Router();

router.get("/profileinfo", getAllUsers);
router.delete("/profiledelete/:id", deleteUser);

export default router;
