import React, { useState } from "react";
import ProtoTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);
  const handleAdd = (e) => {
    setCounter(counter + 1);
  };
  const handleSubtract = (e) => {
    setCounter(counter - 1);
  };
  const handleReset = (e) => {
    setCounter(value);
  };
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleSubtract}>-1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleAdd}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: ProtoTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: 10,
};

export default CounterApp;
