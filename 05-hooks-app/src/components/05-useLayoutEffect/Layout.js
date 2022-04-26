import React, { useLayoutEffect, useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";
import "../../styles/components/05-useLayout/layout.css";

export const Layout = () => {
  const [counter, increment] = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0];

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({});
  useLayoutEffect(() => {
    !!pTag.current.clientWidth &&
      setBoxSize(pTag.current.getBoundingClientRect());

    return () => {};
  }, [quote]);

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />

      <div>
        <blockquote className="blockquote text-end">
          <p className="mb-1" ref={pTag}>
            {quote}
          </p>
        </blockquote>
      </div>
      <pre>{JSON.stringify(boxSize, null, 2)}</pre>
      <button onClick={() => increment()} className="btn btn-primary">
        Siguiente
      </button>
    </div>
  );
};
