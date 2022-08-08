import React, { useEffect } from "react";
import useFetchPokemons from "../FetchPokemons";

const ViewOne = () => {
  const { error, isLoading, onFetchPokemons, pokemons } = useFetchPokemons();

  useEffect(() => {
    onFetchPokemons().catch(null);
  }, []);

  return (
    <div>
      <h1>View One</h1>
      {isLoading && <p>Cargando....</p>}
      {!isLoading &&
        pokemons?.map(pokemon => (
          <div key={pokemon.name}>
            <p>{pokemon.name}</p>
          </div>
        ))}
      {error && <p>somenthig wrong!</p>}
    </div>
  );
};

export default ViewOne;
