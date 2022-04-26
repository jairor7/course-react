import React from "react";
import { Link } from "react-router-dom";
import { herosImages } from "../../helpers/heroImages";

export const HeroCards = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const imagePath = herosImages(`./${id}.jpg`);
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-5">
            <img
              src={imagePath}
              alt={superhero}
              className="card-img-top"
            ></img>
          </div>
          <div className="col-7">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {alter_ego !== characters && (
                <p className="card-text">
                  <small className="text-muted">{characters}</small>
                </p>
              )}
              <p className="text-muted">{first_appearance}</p>
              <Link to={`/hero/${id}`}>Mas información</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
