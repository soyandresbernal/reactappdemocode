import { useState } from "react";

const useFetchPokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPokemons = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();
      setPokemons(data.results);
    } catch (error) {
      console.error(error);
      setPokemons([]);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    pokemons,
    error,
    isLoading,
    onFetchPokemons: fetchPokemons,
  };
};

export default useFetchPokemons;
