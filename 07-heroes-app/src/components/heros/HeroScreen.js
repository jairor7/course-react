import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/heroes";

export const HeroScreen = () => {
  const { heroId } = useParams();
  const hero = useMemo(() => getHeroById(heroId), [heroId]);
  const navigate = useNavigate();
  if (!hero) {
    return <Navigate to="/" />;
  }
  const { superhero, publisher, alter_ego, first_appearance, characters, id } =
    hero;
  const imagePath = `/assets/${id}.jpg`;
  const handleReturn = () => {
    navigate(-1);
  };
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={imagePath} alt={superhero} className="img-thumbnail" />
      </div>

      <div className="col-8">
        <h2>{superhero}</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance:</b> {first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>

        <button className="btn btn-outline-info" onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};
