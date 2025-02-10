import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: ''
  });
  const [editingTask, setEditingTask] = useState(null);

  // Adjust the backend URL as needed (make sure your backend is running)
  const backendUrl = 'http://localhost:5000/api/tasks';

  useEffect(() => {
    fetchTasks();
  }, []);

  // Fetch all tasks from the backend
  const fetchTasks = async () => {
    try {
      const response = await fetch(backendUrl);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // Handle input changes from the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  // Create or update a task
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingTask) {
        // Update existing task
        const response = await fetch(`${backendUrl}/${editingTask._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newTask),
        });
        const updatedTask = await response.json();
        setTasks(tasks.map(task => task._id === updatedTask._id ? updatedTask : task));
        setEditingTask(null);
      } else {
        // Create new task
        const response = await fetch(backendUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newTask),
        });
        const createdTask = await response.json();
        setTasks([...tasks, createdTask]);
      }
      // Reset the newTask state including dates
      setNewTask({
        title: '',
        description: '',
        startDate: '',
        endDate: ''
      });
    } catch (error) {
      console.error('Error saving task:', error);
    }
  };

  // Delete a task
  const handleDelete = async (id) => {
    try {
      await fetch(`${backendUrl}/${id}`, { method: 'DELETE' });
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // Prepare the form for editing a task
  const handleEdit = (task) => {
    setEditingTask(task);
    setNewTask({
      title: task.title,
      description: task.description,
      startDate: task.startDate,
      endDate: task.endDate
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Task Management</h1>
        <TaskForm 
          newTask={newTask}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          editingTask={editingTask}
        />
      </div>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow mt-4">
        <div className="text-2xl font-bold mb-4">Your Tasks</div>
        <TaskList 
          tasks={tasks}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
