// This is a React component called TaskList
// Components in React are just JavaScript functions that return JSX (HTML-like syntax)
// The name of the component must start with a capital letter

// Import the Task component so we can use it
import Task from './Task'

function TaskList() {
  // This is our array of tasks
  // In a real app, this might come from a database or API
  const tasks = ['Learn React', 'Build a To-Do App', 'Test app'];

  // The return statement is where we define what this component will render
  // We can only return one root element (in this case, the outer <div>)
  return (
    // This div is our root element that wraps everything
    <div>
      {/* This is a JSX comment. It won't show up in the browser */}
      {/* h1 is a heading element that will display "My Tasks" */}
      <h1>My Tasks</h1>
      
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