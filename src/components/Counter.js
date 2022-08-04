import useState from "react";

const useCounter = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value > 0 ? value - 1 : 0);
  };

  return {
    count: value,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
  };
};

export default useCounter;
