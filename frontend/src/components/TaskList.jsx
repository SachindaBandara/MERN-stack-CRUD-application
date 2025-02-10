import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks, handleEdit, handleDelete }) => {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task._id} task={task} handleEdit={handleEdit} handleDelete={handleDelete} />
      ))}
    </ul>
  )
}

export default TaskList
