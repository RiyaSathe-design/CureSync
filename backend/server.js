import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import adminRouter from "./routes/adminRoute.js";

// Initialize app and connect to services
const app = express();
const port = process.env.PORT || 4000;

// Connect to Database and Cloudinary
connectDB(); // Function to connect to MongoDB
connectCloudinary(); // Function to configure Cloudinary

// Middlewares
app.use(express.json()); // Parse JSON payloads
app.use(cors()); // Enable Cross-Origin Resource Sharing

// API Endpoints
app.use("/api/user", userRouter); // User routes
app.use("/api/admin", adminRouter); // Admin routes
app.use("/api/doctor", doctorRouter); // Doctor routes

// Health Check Endpoint
app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

// Centralized Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log error stack
  res.status(500).send({ error: "Internal Server Error" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
