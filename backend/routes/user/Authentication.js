import express from "express";
import { signupUser } from "../../controllers/user/Authentication.js";
import { loginUser } from "../../controllers/user/Authentication.js";

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);

export default router;
