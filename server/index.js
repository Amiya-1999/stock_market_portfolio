import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import { getAllStocks, updateWatchList } from "./controller.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// Error Handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

// API calls to database
app.use("/api/stocks", getAllStocks);
app.use("/api/watchlist", updateWatchList);

// Default Get
app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello MERN Developer",
  });
});

// Function to Connect to MongoDB
const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected");
    return true;
  } catch (error) {
    console.log("Failed to connect to MongoDB");
    console.error(error);
    return false;
  }
};

// Function to Start the Server
const startServer = async () => {
  try {
    const isConnectedToDB = await connectToDB();
    if (isConnectedToDB) {
      app.listen(PORT, () => console.log("Server started on port", PORT));
    } else {
      console.log("Server not started because DB connection failed");
    }
  } catch (error) {
    console.error("Error while starting the server:", error);
  }
};

startServer();
