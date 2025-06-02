// This is a new component called Task
// It's a smaller, reusable component that will display a single task
// The { title } in the parameters is using JavaScript destructuring
// This means we expect to receive a prop called 'title' when this component is used
function Task({ title }) {
  // This component simply returns a list item with the title inside
  // The {title} in JSX will display the value of the title prop
  return <li>{title}</li>;
}

// Don't forget to export the component so it can be used by other files
export default Task; 