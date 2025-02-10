import React from 'react'

const TaskForm = ({ newTask, handleChange, handleSubmit, editingTask }) => {
  return (
    <form onSubmit={handleSubmit} className='mb-6'>
      <input type="text" name='title' placeholder='Enter Your task title' onChange={handleChange} className='w-full p-2 border rounded mb-2' required />
      <textarea name="description" placeholder="Enter your task description" onChange={handleChange} className='w-full p-2 border rounded mb-2' />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        {editingTask ? 'UpdateTask' : 'Add task'}
      </button>
    </form>
  )
}

export default TaskForm
