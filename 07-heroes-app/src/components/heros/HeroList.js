import React from "react";
import { getHeroesByPublisher } from "../../selectors/heroes";
import { HeroCards } from "./HeroCards";

export const HeroList = ({ publisher }) => {
  const heroList = getHeroesByPublisher(publisher);
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroList.length > 0 &&
        heroList.map((hero) => <HeroCards key={hero.id} {...hero} />)}
    </div>
  );
};
