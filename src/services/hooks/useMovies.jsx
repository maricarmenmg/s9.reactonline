// Encapsulates logic for fetching shows from the API

import { useEffect, useState } from 'react';
import { 
  getPopularMovies, 
  getMovieDetails, 
  getMovieCredits 
} from '../api/Api';

function useMovies(id) {
  const [popular, setPopular] = useState([]); 
  const [movie, setMovie] = useState({});
  const [movieCredits, setMovieCredits] = useState({});

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
    }

    const fetchMovieCredits = async () => {
      if (id) {
        const credits = await getMovieCredits(id);
        console.log('Movie Credits:', credits); 
        setMovieCredits(credits);
      }
    }

    fetchPopular();
    fetchMovieDetails();
    fetchMovieCredits();
  }, [id]);

  return { popular, movie, movieCredits };
}

export default useMovies;