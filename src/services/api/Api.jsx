
import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;


// 1.- Movies

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_TMDB_API + 'trending/movie/week', {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};


// 1.1._ Movie Details

export const getMovieDetails = async (id) => {

  try {
    const response = await axios.get(import.meta.env.VITE_TMDB_API + `movie/${id}`, {
      params: {
        api_key: API_KEY,
      }
    });

    return response.data;

  } catch (error) {
    console.error('Error fetching movie details', error);
    return {};
  }

}


// 2.- Shows

export const getPopularTVShows = async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_TMDB_API + 'tv/top_rated', {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular TV shows:', error);
    return [];
  }
};




