import React, { useState } from "react";

const CounterTwo = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  return (
    <div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quia
          quidem commodi pariatur dolorem, earum perspiciatis, architecto
          numquam rerum quis ex tenetur praesentium nesciunt corporis dolor
          voluptatem ullam, magni nostrum!
        </p>
        <img src='https://dummyimage.com/600/000/fff.jpg' alt='sample' />
      </div>
      <div>
        <h2>{count}</h2>
        <button onClick={handleDecrement}>Previous</button>
        <button onClick={handleIncrement}>Next</button>
      </div>
    </div>
  );
};

export default CounterTwo;
