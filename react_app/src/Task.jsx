// This is a new component called Task
// It's a smaller, reusable component that will display a single task
// We now receive title, onDelete, completed status, and toggle completion function as props
function Task({ title, onDelete, completed, onToggleComplete }) {
  return (
    <li 
      // Use template literals to conditionally add the 'completed' class
      className={`task-item ${completed ? 'completed' : ''}`}
      // Add some basic inline styles that will be overridden by the completed class
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '5px',
        padding: '5px',
        textDecoration: completed ? 'line-through' : 'none',
        color: completed ? '#888' : 'inherit',
        backgroundColor: completed ? '#f0f0f0' : 'transparent',
        borderRadius: '4px',
        transition: 'all 0.3s ease'
      }}
    >
      {/* Add a checkbox to toggle completion status */}
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggleComplete}
        style={{ marginRight: '10px' }}
      />
      
      {/* Display the task title */}
      <span style={{ flex: 1 }}>{title}</span>
      
      {/* Delete button */}
      <button 
        onClick={onDelete}
        style={{
          padding: '2px 8px',
          backgroundColor: '#ff4444',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Delete
      </button>
    </li>
  );
}

// Don't forget to export the component so it can be used by other files
export default Task; 