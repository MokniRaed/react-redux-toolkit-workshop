import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, inrement } from "./Redux/Counter/CounterSlice";
import Kitchen from "./Components/Kitchen";

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()
  return (
    <div className="App">
    
     <h2>{counter}</h2>
     <button onClick={()=> dispatch(inrement()) }>Increment</button>
     <button onClick={()=> dispatch(decrement()) }>Decrement</button>

     <Kitchen/>
    </div>
  );
}

export default App;
