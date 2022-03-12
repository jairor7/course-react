import heroes from "../data/heroes";

export const getHeroesById = (id) => heroes.find((hero) => hero.id === id);
// console.log(getHeroesById(3));

export const getHeroesByOwner = (owner) =>
  heroes.filter((hero) => hero.owner === owner);
// console.log(getHeroesByOwner(owners[0]));
