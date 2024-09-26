import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  initial_price: {
    type: Number,
    required: true,
  },
  price_2002: {
    type: Number,
  },
  price_2007: {
    type: Number,
  },
  symbol: {
    type: String,
    required: true,
  },
});

const Stock = mongoose.model("Stock", stockSchema);

export default Stock;
