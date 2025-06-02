// Import statements tell our file what other files/code we want to use
// The './' means we're looking in the same directory as this file
import './App.css'  // This imports our CSS styles
import TaskList from './TaskList'  // This imports our TaskList component
// Import useState from React to manage our tasks state
import { useState } from 'react'

// This is our main App component
// In React, the App component is typically the root component of our application
function App() {
  // Move the tasks state up to the App component
  // This is called "lifting state up" - we move state to a common ancestor
  const [tasks, setTasks] = useState(['Learn React', 'Build a To-Do App']);

  // This function will be passed down to TaskList to add new tasks
  const addTask = (newTask) => {
    // Only add the task if it's not empty
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
    }
  };

  // Add a new function to handle task deletion
  const deleteTask = (indexToDelete) => {
    // Use filter to create a new array without the deleted task
    // filter keeps all items where the condition is true
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
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
      />
    </div>
  )
}

// This makes the App component available to be imported by other files
// In this case, it's imported by main.jsx which is the entry point of our application
export default App
