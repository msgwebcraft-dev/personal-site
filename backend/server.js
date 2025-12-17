// serve db
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import Project from "./models/Projects.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://www.mmeligabriel.online"
  ]
}));
app.use(express.json());

// GET all projects
app.get("/api/projects", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// ADD a project
app.post("/api/projects", async (req, res) => {
  const newProject = new Project(req.body);
  await newProject.save();
  res.json(newProject);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`? Server running on port ${PORT}`));

