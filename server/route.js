import express from "express";
import { getAllStocks, updateWatchList } from "./controller.js";

const router = express.Router();

router.get("/", getAllStocks);
router.post("/", updateWatchList);

export default router;
