// This is a React component called TaskList
// Components in React are just JavaScript functions that return JSX (HTML-like syntax)
// The name of the component must start with a capital letter

// Import the Task component so we can use it
import Task from './Task'
// Import useState and useRef from React
import { useState, useRef } from 'react'

// TaskList now receives props from its parent component (App)
// We use destructuring to get the specific props we need
function TaskList({ tasks, onAddTask, onDeleteTask }) {
  // This is our controlled input state
  const [newTask, setNewTask] = useState('');

  // This is our uncontrolled input ref
  // useRef creates a reference that persists across renders
  const uncontrolledInputRef = useRef(null);

  // This function handles the controlled input submission
  const handleControlledSubmit = (e) => {
    e.preventDefault();
    
    // Call the onAddTask function that was passed as a prop
    // This will update the state in the parent component
    onAddTask(newTask);
    // Clear the input field after adding the task
    setNewTask('');
  };

  // This function handles the uncontrolled input submission
  const handleUncontrolledSubmit = (e) => {
    e.preventDefault();
    // We access the input value directly from the ref
    const value = uncontrolledInputRef.current.value;
    if (value.trim() !== '') {
      onAddTask(value);
      // Clear the input by setting its value directly
      uncontrolledInputRef.current.value = '';
    }
  };

  // The return statement is where we define what this component will render
  // We can only return one root element (in this case, the outer <div>)
  return (
    // This div is our root element that wraps everything
    <div>
      {/* This is a JSX comment. It won't show up in the browser */}
      {/* h1 is a heading element that will display "My Tasks" */}
      <h1>My Tasks</h1>
      
      {/* Controlled Input Form */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Controlled Input (using useState)</h3>
        <form onSubmit={handleControlledSubmit}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a task (controlled)"
          />
          <button type="submit">Add Task</button>
        </form>
        {/* Show the current value of the controlled input */}
        <p>Current value: {newTask}</p>
      </div>

      {/* Uncontrolled Input Form */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Uncontrolled Input (using useRef)</h3>
        <form onSubmit={handleUncontrolledSubmit}>
          <input
            type="text"
            ref={uncontrolledInputRef}
            placeholder="Add a task (uncontrolled)"
          />
          <button type="submit">Add Task</button>
        </form>
        {/* We can't show the current value as easily with uncontrolled inputs */}
        <p>Value is managed by the DOM</p>
      </div>

      {/* 
        Use conditional rendering to show different content
        based on whether there are tasks or not
      */}
      {tasks.length === 0 ? (
        // If there are no tasks, show this message
        <p>No tasks yet! Add one above.</p>
      ) : (
        // If there are tasks, show the list
        <ul>
          {tasks.map((task, index) => (
            <Task 
              key={index} 
              title={task} 
              // Pass a function that will call onDeleteTask with the correct index
              onDelete={() => onDeleteTask(index)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

// This line makes the TaskList component available to be imported by other files
// Without this line, other files wouldn't be able to use this component
export default TaskList; 