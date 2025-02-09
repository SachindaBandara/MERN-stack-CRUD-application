const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

//======================
//  Get all tasks
//======================

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//======================
//  Get a single task by ID
//======================

route.get("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found!" });
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//======================
//  Post create a new task
//======================

route.post("/", async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(404).json({ message: error.message });
  }
});


//======================
//  PUT/PATCH update an existing task
//======================

