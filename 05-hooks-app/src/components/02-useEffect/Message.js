import React from "react";
import { useCoords } from "../../hooks/useCoords";

export const Message = () => {
  const [coords, x, y] = useCoords();
  return (
    <>
      <h3>Eres genial</h3>
      <p>
        posición del mouse: {x} , {y}
      </p>
      <pre>{JSON.stringify(coords)}</pre>
    </>
  );
};
