// Encapsulates logic for fetching shows from the API
import { useEffect, useState } from 'react';
import { getPopularMovies, getMovieDetails } from '../api/Api';

function useMovies(id) {
  const [popular, setPopular] = useState([]); 
  const [movie, setMovie] = useState({});

  useEffect(() => {
    
    const fetchPopular = async () => {
      const movies = await getPopularMovies();
      setPopular(movies);
    }

    const fetchMovieDetails = async () => {
      if (id) {
        const details = await getMovieDetails(id);
        setMovie(details);
      }
    };

    fetchPopular();
    fetchMovieDetails();
  }, [id]);

  return { popular, movie };
}

export default useMovies;