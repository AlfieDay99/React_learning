// This is a new component called Task
// It's a smaller, reusable component that will display a single task
// We now receive title, onDelete, completed status, and toggle completion function as props

// Import the CSS file
import './Task.css'

function Task({ title, onDelete, completed, onToggleComplete }) {
  return (
    <li className={`task-item ${completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggleComplete}
        className="task-checkbox"
      />
      
      <span className="task-title">{title}</span>
      
      <button 
        onClick={onDelete}
        className="task-delete-button"
      >
        Delete
      </button>
    </li>
  );
}

// Don't forget to export the component so it can be used by other files
export default Task; 