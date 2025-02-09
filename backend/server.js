const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRoutes = require("./src/routes/taskRoutes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tasks", taskRoutes);

// Connect to mongooDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB Successfully");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error(error));
