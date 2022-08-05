import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value > 0 ? value - 1 : 0);
  };

  return (
    <div>
      <h1>Counter</h1>
      <div>
        <p>{value}</p>
        <button onClick={handleIncrement}>Sumar</button>
        <button onClick={handleDecrement}>Restar</button>
      </div>
    </div>
  );
};
export default Counter;
