
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

export const getPopularShows = async () => {

  try {
    const response = await axios.get(`${BASE_URL}/${tvPopular}`, {
      headers: addApiKeyToHeaders({}) 
    });

    const shows = response.data.results.map(show => ({
      id: show.id,
      name: show.name, 
      poster_path: show.poster_path
    }));

    return shows;

  } catch (error) {
    console.error('Error fetching popular shows:', error);
    throw error; 
  }

}


export const getShowDetails = async (showId) => {
  try {
    const response = await axios.get(`${BASE_URL}/tv/${showId}`, {
      headers: addApiKeyToHeaders({}),
    });

    const show = {
      id: response.data.id,
      name: response.data.name,
      poster_path: response.data.poster_path,
      overview: response.data.overview,
      vote_average: response.data.vote_average,
      first_air_date: response.data.first_air_date,
    };

    return show;
  } catch (error) {
    console.error('Error fetching show details:', error);
    throw error;
  }
}
// MOVIE
export const moviePopular = 'movie/popular';
export const movieTopRated = 'movie/top_rated';


// TV
export const tvPopular = 'tv/popular';
export const tvTopRated = 'tv/top_rated';
