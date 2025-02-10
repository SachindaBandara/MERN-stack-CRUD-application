import React from 'react'

const TaskItem = ({ task, handleEdit, handleDelete }) => {
  return (
    <li className='border p-2 rounded mb-2 flex justify-between items-center'>
      <div>
        <h2 className='font-bold'>Task Title</h2>
        <p>Task description</p>
      </div>

      <div>
        <button className='bg-yellow-500 text-white p-1 rounded mr-2'>
          Edit
        </button>

        <button className='bg-red-500 text-white p-1 rounded'>
          Delete
        </button>
      </div>

    </li>
  )
}

export default TaskItem
