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
//admin routes
import adminUserRoutes from "./routes/admin/User.js";
import adminContactRoutes from "./routes/common/Contact.js";
import adminMovieRoutes from "./routes/admin/Movie.js";
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
//admin routes
app.use("/api/users", adminUserRoutes);
app.use("/api/users", adminContactRoutes);
app.use("/api/movies", adminMovieRoutes);
//common routes
app.use("/api/movies", movieRoutes);
