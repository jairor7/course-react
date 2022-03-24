import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { useForm } from "../../hooks/useForm";
import "../../styles/components/08-useReducer/styles.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) ?? [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, null, init);
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length === 0) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };

    const action = {
      type: "ADD_TODO",
      payload: newTodo,
    };

    dispatch(action);
    reset();
  };

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

  return (
    <div>
      <h1>Todo App ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((t, index) => (
              <li key={t.id} className="list-group-item">
                <p className="">
                  {index + 1}. {t.description}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveTodo(t.id)}
                >
                  Borrar
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="New TODO"
              name="description"
              autoComplete="off"
              className="form-control"
              value={description}
              onChange={handleInputChange}
            />
            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-outline-primary btn-block mt-3"
              >
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
