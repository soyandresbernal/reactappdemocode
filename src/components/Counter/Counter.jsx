import React from "react";
import useCounter from "../../hooks/useCounter";

const Counter = () => {
  const { count, onIncrement, onDecrement } = useCounter(); //instancia hook

  return (
    <div>
      <h1>Counter</h1>
      <div>
        <p>{count}</p>
        <button onClick={onIncrement}>Sumar</button>
        <button onClick={onDecrement}>Restar</button>
      </div>
    </div>
  );
};
export default Counter;
