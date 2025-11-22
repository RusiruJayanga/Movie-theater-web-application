import express from "express";
import { getAllUsers } from "../../controllers/admin/User.js";
import { banUser, activateUser } from "../../controllers/admin/User.js";

const router = express.Router();

router.get("/profileinfo", getAllUsers);
router.put("/profileban/:id", banUser);
router.put("/profileactivate/:id", activateUser);

export default router;
