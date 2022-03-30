import React from "react";
import { getHeroesByPublisher } from "../../selectors/heroes";

export const HeroList = ({ publisher }) => {
  const heroList = getHeroesByPublisher(publisher);
  return (
    <>
      {heroList.length > 0 && (
        <ul>
          {heroList.map((hero) => (
            <li key={hero.id}>{hero.superhero}</li>
          ))}
        </ul>
      )}
    </>
  );
};
