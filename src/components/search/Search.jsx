import { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchTMDB();
  };

  const searchTMDB = () => {
    const apiKey = '729985b2425e06c255352da54d0994d2'; // Reemplaza con tu clave de API de TMDB
    const url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${query}`;

    axios.get(url)
      .then((response) => {
        setResults(response.data.results);
      })
      .catch((error) => {
        console.error('Error al buscar:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Buscar películas o programas de televisión"
        />
        <button type="submit">Buscar....</button>
      </form>

      {results.map((result) => (
        <div key={result.id}>
          <h2>{result.title || result.name}</h2>
          <p>{result.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default Search;