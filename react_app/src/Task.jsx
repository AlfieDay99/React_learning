// This is a new component called Task
// It's a smaller, reusable component that will display a single task
// We now receive both title and onDelete as props
function Task({ title, onDelete }) {
  // This component simply returns a list item with the title inside
  // The {title} in JSX will display the value of the title prop
  return (
    <li>
      {/* Display the task title */}
      {title}
      {/* Add a delete button */}
      <button 
        onClick={onDelete}
        style={{ marginLeft: '10px' }}
      >
        Delete
      </button>
    </li>
  );
}

// Don't forget to export the component so it can be used by other files
export default Task; 