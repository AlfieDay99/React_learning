// Import statements tell our file what other files/code we want to use
// The './' means we're looking in the same directory as this file
import './App.css'  // This imports our CSS styles
import TaskList from './TaskList'  // This imports our TaskList component

// This is our main App component
// In React, the App component is typically the root component of our application
function App() {
  // The return statement defines what this component will render
  return (
    // className="App" is how we add CSS classes in React (instead of class="App" in HTML)
    // This div will be the container for our entire application
    <div className="App">
      {/* 
        This is how we use our TaskList component
        It looks like an HTML tag, but it's actually our custom component
        The name must match exactly what we exported from TaskList.jsx
      */}
      <TaskList />
    </div>
  )
}

// This makes the App component available to be imported by other files
// In this case, it's imported by main.jsx which is the entry point of our application
export default App
