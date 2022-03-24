import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  handleComplete,
  handleRemoveTodo,
}) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={index}
          handleComplete={handleComplete}
          handleRemoveTodo={handleRemoveTodo}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleComplete: PropTypes.func.isRequired,
  handleRemoveTodo: PropTypes.func.isRequired,
};

export default TodoList;
