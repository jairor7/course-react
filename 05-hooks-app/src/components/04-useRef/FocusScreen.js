import React, { useRef } from "react";
import "../../styles/components/01-useState/counter.css";

export const FocusScreen = () => {
  const inputRef = useRef();
  console.log(inputRef);

  const handleClick = () => {
    inputRef.current.select();
  };
  return (
    <div>
      <h1>FocusScreen</h1>

      <input className="form-control" placeholder="Su nombre" ref={inputRef} />
      <button className="btn btn-primary mt-3" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
