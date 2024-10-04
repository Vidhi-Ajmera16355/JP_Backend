import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config();

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: "https://jp-frontend-theta.vercel.app/" || "http://localhost:5173", // Adjust as necessary
  credentials: true,
};

app.use(cors(corsOptions));

// Define a route for the root path
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

// API Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

const PORT = process.env.PORT || 8000;

connectDB();
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
