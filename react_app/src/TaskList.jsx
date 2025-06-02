// This is a React component called TaskList
// Components in React are just JavaScript functions that return JSX (HTML-like syntax)
// The name of the component must start with a capital letter

// Import the Task component so we can use it
import Task from './Task'
// Import useState from React - this is a hook that lets us add state to our component
import { useState } from 'react'

// TaskList now receives props from its parent component (App)
// We use destructuring to get the specific props we need
function TaskList({ tasks, onAddTask, onDeleteTask }) {
  // We only need to manage the input field state here
  // The tasks state is now managed by the parent component
  const [newTask, setNewTask] = useState('');

  // This function will be called when the form is submitted
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    
    // Call the onAddTask function that was passed as a prop
    // This will update the state in the parent component
    onAddTask(newTask);
    // Clear the input field after adding the task
    setNewTask('');
  };

  // The return statement is where we define what this component will render
  // We can only return one root element (in this case, the outer <div>)
  return (
    // This div is our root element that wraps everything
    <div>
      {/* This is a JSX comment. It won't show up in the browser */}
      {/* h1 is a heading element that will display "My Tasks" */}
      <h1>My Tasks</h1>
      
      {/* This is our form for adding new tasks */}
      <form onSubmit={handleSubmit}>
        {/* 
          This input field is controlled by our newTask state
          When the user types, the onChange event updates our state
          The value is always what's in our state
        */}
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add Task</button>
      </form>

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