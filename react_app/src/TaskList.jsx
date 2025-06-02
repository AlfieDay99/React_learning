// This is a React component called TaskList
// Components in React are just JavaScript functions that return JSX (HTML-like syntax)
// The name of the component must start with a capital letter

// Import the Task component so we can use it
import Task from './Task'
// Import useState and useRef from React
import { useState, useRef } from 'react'

// TaskList now receives props from its parent component (App)
// We use destructuring to get the specific props we need
function TaskList({ tasks, onAddTask, onDeleteTask, onToggleTask }) {
  // This is our controlled input state
  const [newTask, setNewTask] = useState('');
  // This is our uncontrolled input ref
  const uncontrolledInputRef = useRef(null);
  // Add state for the search query
  const [searchQuery, setSearchQuery] = useState('');

  // This function handles the controlled input submission
  const handleControlledSubmit = (e) => {
    e.preventDefault();
    onAddTask(newTask);
    setNewTask('');
  };

  // This function handles the uncontrolled input submission
  const handleUncontrolledSubmit = (e) => {
    e.preventDefault();
    const value = uncontrolledInputRef.current.value;
    if (value.trim() !== '') {
      onAddTask(value);
      uncontrolledInputRef.current.value = '';
    }
  };

  // This is derived state - we compute visibleTasks based on tasks and searchQuery
  // We don't need to store this in state because it's derived from other state
  const visibleTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // The return statement is where we define what this component will render
  // We can only return one root element (in this case, the outer <div>)
  return (
    // This div is our root element that wraps everything
    <div>
      {/* This is a JSX comment. It won't show up in the browser */}
      {/* h1 is a heading element that will display "My Tasks" */}
      <h1>My Tasks</h1>
      
      {/* Search Input */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Search Tasks</h3>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search tasks..."
          style={{ width: '200px' }}
        />
        {/* Show how many tasks match the search */}
        <p>
          Showing {visibleTasks.length} of {tasks.length} tasks
          {searchQuery && ` matching "${searchQuery}"`}
        </p>
      </div>

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

      {/* Task List - now using visibleTasks instead of tasks */}
      {visibleTasks.length === 0 ? (
        <p>
          {tasks.length === 0 
            ? "No tasks yet! Add one above." 
            : "No tasks match your search."}
        </p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {visibleTasks.map((task, index) => (
            <Task 
              key={index} 
              title={task.title}
              completed={task.completed}
              onDelete={() => onDeleteTask(index)}
              onToggleComplete={() => onToggleTask(index)}
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