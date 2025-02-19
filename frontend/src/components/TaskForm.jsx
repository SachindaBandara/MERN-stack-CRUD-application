import React from 'react';

const TaskForm = ({ newTask, handleChange, handleSubmit, editingTask }) => {
  return (
    <form onSubmit={handleSubmit} className="mb-6">
     
      <input
        type="text"
        name="title"
        value={newTask.title}
        placeholder="Enter Your Task Title"
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
        required
      />
       <textarea
        name="description"
        value={newTask.description}
        placeholder="Enter your task description"
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
      />
       <label className='pr-3'>Start Date</label>
      <input
        type="date"
        name="startDate"
        value={newTask.startDate}
        placeholder="Select Start Date"
        onChange={handleChange}
        className="w-1/3 p-2 border rounded mb-2"
        required
      />
      <label className='pr-3 pl-12'>End Date</label>
      <input
        type="date"
        name="endDate"
        value={newTask.endDate}
        placeholder="Select End Date"
        onChange={handleChange}
        className="w-1/3 p-2 border rounded mb-6"
        required
      />
     
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        {editingTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
