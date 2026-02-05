import express from "express";
import Project from "../models/Project.js";

const router = express.Router();

/* GET all projects */
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

/* POST new project */
router.post("/", async (req, res) => {
  try {
    const project = new Project(req.body);
    const saved = await project.save();
    res.status(201).json(saved);
  } catch {
    res.status(400).json({ error: "Failed to add project" });
  }
});

export default router;
