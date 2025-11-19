import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
//user routes
import userAuthRoutes from "./routes/user/Authentication.js";
import userContacRoutes from "./routes/common/Contact.js";
import userAccountRoutes from "./routes/user/Account.js";
import userMovieDetailsRoutes from "./routes/user/Movie.js";
import userRatingRoutes from "./routes/user/Rating.js";
import userInterestRoutes from "./routes/user/Interest.js";
import userShowTimeRoutes from "./routes/user/Showtime.js";
import userBookingRoutes from "./routes/user/Booking.js";
import userTicketRoutes from "./routes/user/Ticket.js";
//admin routes
import adminUserRoutes from "./routes/admin/User.js";
import adminContactRoutes from "./routes/common/Contact.js";
import adminMovieRoutes from "./routes/admin/Movie.js";
import adminBookingRoutes from "./routes/admin/Booking.js";
//common routes
import movieRoutes from "./routes/common/Movie.js";

//app config
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//db connection
connectDB();

app.get("/", (req, res) => {
  res.send("Api connected !");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//API routes
//user routes
app.use("/api/auth", userAuthRoutes);
app.use("/api/user", userContacRoutes);
app.use("/api/user", userAccountRoutes);
app.use("/api/movies", userMovieDetailsRoutes);
app.use("/api/movies", userRatingRoutes);
app.use("/api/user", userInterestRoutes);
app.use("/api/movies", userShowTimeRoutes);
app.use("/api/user", userBookingRoutes);
app.use("/api/user", userTicketRoutes);
//admin routes
app.use("/api/users", adminUserRoutes);
app.use("/api/users", adminContactRoutes);
app.use("/api/movies", adminMovieRoutes);
app.use("/api/bookings", adminBookingRoutes);
//common routes
app.use("/api/movies", movieRoutes);
