import React from "react";
import useCounter from "../../hooks/useCounter";

const CounterTwo = () => {
  const { count, onIncrement, onDecrement } = useCounter(); //instancia hook

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
        <button onClick={onDecrement}>Previous</button>
        <button onClick={onIncrement}>Next</button>
      </div>
    </div>
  );
};

export default CounterTwo;
