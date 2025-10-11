import express from "express";
import { contactUser } from "../../controllers/common/Contact.js";
import { getAllContacts } from "../../controllers/common/Contact.js";

const router = express.Router();

router.post("/contact", contactUser);
router.get("/contactinfo", getAllContacts);

export default router;
