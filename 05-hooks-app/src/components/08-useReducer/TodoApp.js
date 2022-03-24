import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import "../../styles/components/08-useReducer/styles.css";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) ?? [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(
    todoReducer,
    null,
    init
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleRemoveTodo = (id) => {
    const action = {
      type: "REMOVE_TODO",
      payload: id,
    };
    dispatch(action);
  };

  const handleComplete = (id) => {
    const action = {
      type: "IS_COMPLETE_TODO",
      payload: id,
    };

    dispatch(action);
  };

  const handleAddTodo = (newTodo) => {
    const action = {
      type: "ADD_TODO",
      payload: newTodo,
    };
    dispatch(action);
  };

  return (
    <div>
      <h1>Todo App ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleComplete={handleComplete}
            handleRemoveTodo={handleRemoveTodo}
          />
        </div>

        <div className="col-5">
          <AddTodoForm handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
