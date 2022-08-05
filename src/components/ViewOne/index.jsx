import React, { useEffect, useState } from "react";

const ViewOne = () => {
  const [pokemons, setPokemons] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState();

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setisLoading(true);
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        setPokemons(data.results);
      } catch (error) {
        console.error(error);
        setPokemons([]);
        setError(error);
      } finally {
        setisLoading(false);
      }
    };
    fetchPokemons().catch(null);
  }, []);

  return (
    <div>
      <h1>View one</h1>
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
