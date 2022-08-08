import React from "react";
import useFetchPokemons from "../FetchPokemons";
//carga el usuarioel fetch
const ViewTwo = () => {
  const { error, isLoading, onFetchPokemons, pokemons } = useFetchPokemons();

  return (
    <div>
      <h1>View Two</h1>
      {isLoading && <p>Cargando....</p>}
      {!isLoading &&
        pokemons?.map(pokemon => (
          <div key={pokemon.name}>
            <p>{pokemon.name}</p>
          </div>
        ))}
      {error && <p>somenthig wrong!</p>}
      <button onClick={onFetchPokemons}>FETCH POKEMONS</button>
    </div>
  );
};

export default ViewTwo;
