import { useState } from "react";

const useCounter = () => {
  const { value, count, setCount } = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  return {
    count: value,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
  };
};

export default useCounter;
