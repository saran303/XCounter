import React, { useState } from "react";

function App() {
  const[counter, setCounter] = useState(0)

  const handleIncrement = () => {
    setCounter(previous => previous+1)
  }
  const handleDecrement = () => {
    setCounter(previous => previous-1)
  }
  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}> Decrement</button>
    </div>
  );
}

export default App;
