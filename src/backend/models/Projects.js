import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tools: String,
  liveLink: String,
  repoLink: String,
  imgSrc: String,
}, { timestamps: true });

export default mongoose.model("Project", projectSchema);
