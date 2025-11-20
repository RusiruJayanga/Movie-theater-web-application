import express from "express";
import {
  getAllSessions,
  resetSession,
  deleteSession,
} from "../../controllers/admin/Session.js";

const router = express.Router();

router.get("/fetch", getAllSessions);
router.put("/reset/:Id", resetSession);
router.delete("/delete/:Id", deleteSession);

export default router;
