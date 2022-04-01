import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/heroes";
import { HeroCards } from "./HeroCards";

export const HeroList = ({ publisher }) => {
  const heroList = useMemo(
    () => getHeroesByPublisher(publisher),
    [publisher]
  );
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
      {heroList.length > 0 &&
        heroList.map((hero) => <HeroCards key={hero.id} {...hero} />)}
    </div>
  );
};
