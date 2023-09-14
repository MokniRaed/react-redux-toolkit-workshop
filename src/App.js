// Import necessary styles and dependencies
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Redux/Counter/CounterSlice"; // Import Redux actions
import Kitchen from "./Components/Kitchen";

function App() {
  // Access the 'value' from the Redux store's 'counter' slice
  const counter = useSelector((state) => state.counter.value);

  // Get the dispatch function to dispatch Redux actions
  const dispatch = useDispatch();

  return (
    <div className="App">
      {/* Display the counter value */}
      <h2>{counter}</h2>

      {/* Button to increment the counter when clicked */}
      <button onClick={() => dispatch(increment())}>Increment</button>

      {/* Button to decrement the counter when clicked */}
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      {/* Render the 'Kitchen' component */}
      <Kitchen />
    </div>
  );
}

// Export the 'App' component as the default export
export default App;
