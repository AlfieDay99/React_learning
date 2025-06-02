// This is a React component called TaskList
// Components in React are just JavaScript functions that return JSX (HTML-like syntax)
// The name of the component must start with a capital letter

// Import the Task component so we can use it
import Task from './Task'
// Import useState from React - this is a hook that lets us add state to our component
import { useState } from 'react'

function TaskList() {
  // useState is a React Hook that lets us add state to our component
  // The first value (tasks) is our state variable
  // The second value (setTasks) is a function to update our state
  // The initial value is an array with two tasks
  const [tasks, setTasks] = useState(['Learn React', 'Build a To-Do App']);
  
  // This state will hold the current value of our input field
  const [newTask, setNewTask] = useState('');

  // This function will be called when the form is submitted
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    
    // Only add the task if it's not empty
    if (newTask.trim() !== '') {
      // Use the setTasks function to update our tasks array
      // We use the spread operator (...) to keep all existing tasks
      // and add our new task at the end
      setTasks([...tasks, newTask]);
      // Clear the input field after adding the task
      setNewTask('');
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

      {/* This is our unordered list that will contain our tasks */}
      <ul>
        {/* 
          We use the map function to create a Task component for each item in our tasks array
          map is a JavaScript array method that lets us transform each item in an array
          For each task in the array, we create a new Task component
          The key prop is required by React when rendering lists - it helps React keep track of each item
          We pass the task text as the title prop to our Task component
        */}
        {tasks.map((task, index) => (
          <Task key={index} title={task} />
        ))}
      </ul>
    </div>
  );
}

// This line makes the TaskList component available to be imported by other files
// Without this line, other files wouldn't be able to use this component
export default TaskList; 