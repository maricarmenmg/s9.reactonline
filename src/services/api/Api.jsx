
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

// 1.2.- Movie Details
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

// 1.3.- Movie Credits
export const getMovieCredits = async (id) => {

  try {
    const response = await axios.get(import.meta.env.VITE_TMDB_API + `movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
      }
    });

    return response.data;

  } catch (error) {
    console.error('Error fetching movie credits', error);
    return {};
  }

}

// TV SHOWS

// 2.- Shows
  export const getTopRatedTVShows = async () => {
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

// 2.1.- TV Show Details
    export const getTVShowDetails = async (id) => {
  
    try {
      const response = await axios.get(import.meta.env.VITE_TMDB_API + `tv/${id}`, {
        params: {
          api_key: API_KEY,
        }
      });
  
      return response.data;
  
    } catch (error) {
      console.error('Error fetching TV show details', error);
      return {};
    }
  
  }

  // 2.2.- TV Show Credits
  export const getTVShowCredits = async (id) => {
    
    try {
      const response = await axios.get(import.meta.env.VITE_TMDB_API + `tv/${id}/credits`, {
        params: {
          api_key: API_KEY,
        }
      });
  
      return response.data;
  
    } catch (error) {
      console.error('Error fetching TV show credits', error);
      return {};
    }
  
  }

  

// 3.- Search Movies and TV Shows

export const searchTMDB = async (query) => {
  try {
    const response = await axios.get(import.meta.env.VITE_TMDB_API + 'search/multi', {
      params: {
        api_key: API_KEY,
        query: query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching TMDB:', error);
    return [];
  }
};


