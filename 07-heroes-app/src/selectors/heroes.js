import { heroes } from "../data/heroes";

const getHeroById = (id) => heroes.find((h) => h.id === id);

const getHeroesByPublisher = (publisher) => {
  const validPublisher = ["DC Comics", "Marvel Comics"];
  if (!validPublisher.includes(publisher)) {
    throw new Error(`Invalid publisher: ${publisher}`);
  }
  return heroes.filter((h) => h.publisher === publisher);
};

export { getHeroById, getHeroesByPublisher };
