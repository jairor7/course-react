import React from "react";
import PropTypes from "prop-types";
import { useForm } from "../../hooks/useForm";

const AddTodoForm = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] =
    useForm({
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
    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
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
    </>
  );
};

AddTodoForm.propTypes = {
  handleAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
