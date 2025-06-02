// Import statements tell our file what other files/code we want to use
// The './' means we're looking in the same directory as this file
import './App.css'  // This imports our CSS styles
import TaskList from './TaskList'  // This imports our TaskList component
// Import useState from React to manage our tasks state
import { useState } from 'react'

// This is our main App component
// In React, the App component is typically the root component of our application
function App() {
  // Update the tasks state to include completion status
  // Each task is now an object with title and completed properties
  const [tasks, setTasks] = useState([
    { title: 'Learn React', completed: false },
    { title: 'Build a To-Do App', completed: false }
  ]);

  // This function will be passed down to TaskList to add new tasks
  const addTask = (newTask) => {
    // Only add the task if it's not empty
    if (newTask.trim() !== '') {
      // Add new task with completed set to false
      setTasks([...tasks, { title: newTask, completed: false }]);
    }
  };

  // Add a new function to handle task deletion
  const deleteTask = (indexToDelete) => {
    // Use filter to create a new array without the deleted task
    // filter keeps all items where the condition is true
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  // Add function to toggle task completion
  const toggleTaskCompletion = (index) => {
    setTasks(tasks.map((task, i) => 
      i === index 
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  // The return statement defines what this component will render
  return (
    // className="App" is how we add CSS classes in React (instead of class="App" in HTML)
    // This div will be the container for our entire application
    <div className="App">
      {/* 
        Pass the tasks array, addTask function, and deleteTask function as props to TaskList
        This is how parent components communicate with child components
      */}
      <TaskList 
        tasks={tasks} 
        onAddTask={addTask} 
        onDeleteTask={deleteTask}
        onToggleTask={toggleTaskCompletion}
      />
    </div>
  )
}

// This makes the App component available to be imported by other files
// In this case, it's imported by main.jsx which is the entry point of our application
export default App
