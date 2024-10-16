const mongoose = require("mongoose");

const PortfolioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: { type: String, required: true },
  img: { type: String, required: true },
});

exports.PortfolioModel = mongoose.model("portfolios", PortfolioSchema);
