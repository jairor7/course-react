import React, { useMemo, useState } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import { useCounter } from "../../hooks/useCounter";
import "../../styles/components/02-useEffect/effect.css";

export const MemoHook = () => {
  const [counter, increment] = useCounter(5000);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);
  return (
    <div>
      <h1>
        Memo Hook <small>{counter}</small>
      </h1>
      <hr />
      <p>{memoProcesoPesado}</p>
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>
      <button
        className="btn btn-outline-primary ms-3"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
