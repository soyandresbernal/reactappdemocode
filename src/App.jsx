import React from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import CounterTwo from "./components/Counter/CounterTwo";

function App() {
  return (
    <div className='App'>
      <CounterTwo />
      <Counter />
    </div>
  );
}

export default App;
