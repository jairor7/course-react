import React, { useState } from "react";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";
import "../../styles/components/01-useState/counter.css";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>RealExampleRef</h1>
      <hr />
      {show && <MultipleCustomHooks />}
      <button className="btn btn-primary mt-3" onClick={() => setShow(!show)}>
        Show/Hide
      </button>
    </div>
  );
};
