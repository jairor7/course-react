import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";
import "../../styles/components/02-useEffect/effect.css";

export const MultipleCustomHooks = () => {
  const [counter, increment] = useCounter(1);
  // console.log(counter);
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];
  // console.log(!!data);
  // console.log(author, quote);

  return (
    <div>
      <h1>BreakingBAD Quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">
          Loading ...
        </div>
      ) : (
        <div>
          <blockquote className="blockquote text-end">
            <p className="mb-1">{quote}</p>
          </blockquote>
          <figcaption className="blockquote-footer text-end">
            {author}
          </figcaption>
        </div>
      )}
      {!loading && (
        <button
          onClick={() => increment()}
          className="btn btn-primary"
        >
          Siguiente
        </button>
      )}
    </div>
  );
};
