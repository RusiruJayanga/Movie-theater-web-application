import express from "express";
import { getUserTickets } from "../../controllers/user/Ticket.js";

const router = express.Router();

router.get("/ticketfetch", getUserTickets);

export default router;
