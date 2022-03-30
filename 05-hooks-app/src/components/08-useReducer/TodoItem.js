import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({
  todo: t,
  index,
  handleComplete,
  handleRemoveTodo,
}) => {
  return (
    <li key={t.id} className="list-group-item">
      <p
        className={`todo-task${t.done ? " complete" : ""}`}
        onClick={() => handleComplete(t.id)}
      >
        {index + 1}. {t.description}
      </p>
      <button
        className="btn btn-danger"
        onClick={() => handleRemoveTodo(t.id)}
      >
        Borrar
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  // index: PropTypes.number.isRequired,
  // handleComplete: PropTypes.func.isRequired,
  // handleRemoveTodo: PropTypes.func.isRequired,
};

export default TodoItem;
