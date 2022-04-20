import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroByName } from "../../selectors/heroes";
import { HeroCards } from "../heros/HeroCards";
export const SearchScreen = () => {
  const [heroesFilter, setHeroesFilter] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [{ searchText }, handleInputChange] = useForm({
    searchText: searchParams.get("hero") || "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const heroesSearched = searchParams.get("hero");
    if (!!heroesSearched)
      setHeroesFilter(getHeroByName(heroesSearched));
    else setHeroesFilter([]);
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Esta linea tambien funciona pero no con las pruebas
    setSearchParams({ hero: searchText });
    // navigate(`?hero=${searchText}`);
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
        <div className="col-7">
          <h5>Result</h5>
          <hr />
          {!searchParams.get("hero") ? (
            <div className="alert alert-info">Buscar un héroe</div>
          ) : (
            heroesFilter.length <= 0 && (
              <div className="alert alert-danger">
                No hay resultados: {searchParams.get("hero")}
              </div>
            )
          )}

          {heroesFilter.map((hero) => (
            <HeroCards key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
