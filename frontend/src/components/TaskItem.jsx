import React from 'react'

const TaskItem = ({ task, handleEdit, handleDelete }) => {

    // Option 1: Using toLocaleDateString for locale-specific formatting
    // const formattedStartDate = task.startDate ? new Date(task.startDate).toLocaleDateString() : '';
    // const formattedEndDate = task.endDate ? new Date(task.endDate).toLocaleDateString() : '';
  
    // Option 2: Slicing the ISO string to show only YYYY-MM-DD
    const formattedStartDate = task.startDate ? task.startDate.slice(0, 10) : '';
    const formattedEndDate = task.endDate ? task.endDate.slice(0, 10) : '';


  return (
    <li className='border p-2 rounded mb-2 flex justify-between items-center'>
      <div>
        <h2 className='font-bold'>{task.title}</h2>
        <p>{task.description}</p>
        <div className="mt-2">
        <span className="mr-4">Start: {formattedStartDate}</span>
        <span>End: {formattedEndDate}</span>
      </div>
      </div>

      <div>
        <button onClick={() => handleEdit(task)} className='bg-yellow-500 text-white p-1 rounded mr-2'>
          Edit
        </button>

        <button onClick={() => handleDelete(task._id)} className='bg-red-500 text-white p-1 rounded'>
          Delete
        </button>
      </div>

    </li>
  )
}

export default TaskItem
