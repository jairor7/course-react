import { heroes } from "../data/heroes";

const getHeroById = (id) => {
  return heroes.find((h) => h.id === id);
};

const getHeroesByPublisher = (publisher) => {
  const validPublisher = ["DC Comics", "Marvel Comics"];
  if (!validPublisher.includes(publisher)) {
    throw new Error(`Invalid publisher: ${publisher}`);
  }
  return heroes.filter((h) => h.publisher === publisher);
};

const getHeroByName = (name = "") => {
  if (name === "") return [];
  return heroes.filter((h) =>
    h.superhero.toLowerCase().includes(name.toLowerCase())
  );
};

export { getHeroById, getHeroesByPublisher, getHeroByName };
