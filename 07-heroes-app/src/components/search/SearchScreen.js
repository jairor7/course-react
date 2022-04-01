import React from "react";
import { useForm } from "../../hooks/useForm";

export const SearchScreen = () => {
  const [form, handleInputChange, reset] = useForm({
    searchText: "",
  });
  const { searchText } = form;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.searchText);
    reset();
  };
  return (
    <>
      <h1>Search Screen</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h5>Search</h5>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-8">
                <input
                  className="form-control"
                  type="text"
                  name="searchText"
                  placeholder="Search"
                  value={searchText}
                  autoComplete={"off"}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-4">
                <button
                  className="btn btn-outline-primary"
                  type="submit"
                >
                  Buscar...
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
