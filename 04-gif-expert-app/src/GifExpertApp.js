import React, { useState } from "react";
import PropTypes from "prop-types";

const GifExpertApp = (props) => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  const handleAdd = () => {
    const category = "HunterXHunter";
    setCategories((preState) => [...preState, category]);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <button onClick={handleAdd}>Agregar</button>
      <ol>
        {categories.map((category, id) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};

GifExpertApp.propTypes = {};

export default GifExpertApp;
