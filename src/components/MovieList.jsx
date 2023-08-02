import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import TabCategory from "./elements/TabCategory";

const moviesURL = import.meta.env.VITE_TMDB_API;
const apiKey = import.meta.env.VITE_TMDB_API_KEY;

const MoviesList = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [category, setCategory] = useState('0');

  const getPopularMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setPopularMovies(data.results);
    } catch (error) {
      console.error('Error fetching popular movies:', error);
    }
  };

  useEffect(() => {
    const popularUrl = `${moviesURL}popular?${apiKey}`;
    getPopularMovies(popularUrl);
  }, []);

  //  Filter movies by category
  const filteredMovies = popularMovies.filter(movie => {
    if (category === '0') {
      return true; // Show all movies when category is '0'
    } else {
      // Filter movies by category ID (assuming movies have a 'category' property)
      return movie.category === category;
    }
  });

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:pt-32 md:pb-20">
          {/* Section header */}
          <div className="pb-12 md:pb-14">
            <div className="relative text-center md:text-left">
              <h2 className="h2 font-medium font-spacegrotesk">{' Trends '}</h2>
            </div>
          </div>

          {/* Content  */}
          <div>
            <TabCategory category={category} setCategory={setCategory} />
            {/* Movies grid */}
            <div className="max-w-sm mx-auto sm:max-w-none grid gap-8 sm:grid-cols-2 md:grid-cols-5 items-start" data-aos="zoom-y-out">
              {filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviesList;
