const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true, lowercase: true, unique: true },
  description: { type: String, required: true },
  client: { type: String, required: true },
  category: { type: String, required: true },
  img: { type: String, required: true },
  id: { type: Number, required: true, default: Date.now },
});

let Project = mongoose.model("Project", projectSchema);
module.exports = Project;
