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

router.get("/:id", async (req, res) => {
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

router.post("/", async (req, res) => {
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

router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).josn({ message: "Task not found" });

    if (req.body.title != null) task.title = req.body.title;
    if (req.body.description != null) task.description = req.body.description;
    if (req.body.completed != null) task.completed = req.body.completed;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


//======================
//  DELETE remove a task
//======================

router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    await task.remove();
    res.json({ message: "Task Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;