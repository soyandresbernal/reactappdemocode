import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const { count, onIncrement, onDecrement } = Counter();
  return (
    <div className='App'>
      <div>
        <h1>Counter</h1>
      </div>
      <p>{count}</p>
      <button onClick={onIncrement}>ADD</button>
      <button onClick={onDecrement}>SUSTRACT</button>
    </div>
  );
}

export default App;
