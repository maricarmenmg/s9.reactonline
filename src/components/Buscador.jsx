// Buscador.js
import { useState } from 'react';
import tmdbAPI from '../tmdbAPI';
import Pelicula from '../Pelicula';

const Buscador = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const results = await tmdbAPI.searchMovies(query);
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {searchResults.map((movie) => (
        <Pelicula key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Buscador;