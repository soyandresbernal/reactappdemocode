import React from "react";
import "./App.css";

function App() {
  const onSubmit = e => {
    e.preventDefault();

    console.log("ON SUBMIT");
  };

  const handleButtonClick = e => {
    e.preventDefault();
    console.log("Hey yeahh!");
  };
  return (
    <div className='App'>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name</label>
          <input type='text' />
        </div>
        <div>
          <label>LastName</label>
          <input type='text' />
          <button type='submit'>send Data</button>
          <button onClick={handleButtonClick} type='submit'>
            lucky Time
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
