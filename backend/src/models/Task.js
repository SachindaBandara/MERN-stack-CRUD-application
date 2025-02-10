const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // note: changed "require" to "required"
    },
    description: String,
    completed: {
      type: Boolean,
      default: false,
    },
    startDate: {
      type: Date,
      required: true, // adjust as needed; you can remove this if it's optional
      default: Date.now, // sets current date as default for startDate
    },
    endDate: {
      type: Date,
      required: true, // adjust as needed; remove or change default if necessary
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tasks", TaskSchema);
