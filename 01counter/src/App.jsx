import "./App.css";
import { useState } from "react";

function App() {
  // let counter = 5;
  const [counter, setCounter] = useState(5);

  const addValue = () => {
    console.log("Add Code working");
    setCounter(counter + 1);
    console.log(counter);
  };
  const decreaseValue = () => {
    console.log("Decrease Code working");
    if (counter === 0) {
      console.log("Counter is already at 0");
      return;
    } else {
      setCounter(counter - 1);
    }
    console.log(counter);
  };
  return (
    <>
      <h1>React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>
      <p>Counter is getting updated : {counter}</p>
    </>
  );
}

export default App;
