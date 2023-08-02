
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_TMDB_API;

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      headers: addApiKeyToHeaders({}),
    });

    const movies = response.data.results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
    }));

    return movies;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};


export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      headers: addApiKeyToHeaders({}),
    });

    const movie = {
      id: response.data.id,
      title: response.data.title,
      poster_path: response.data.poster_path,
      overview: response.data.overview,
      vote_average: response.data.vote_average,
      release_date: response.data.release_date,
    };

    return movie;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
}

