import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

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
    console.log(popularUrl);
    getPopularMovies(popularUrl);
  }, []);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:pt-32 md:pb-20">
          {/* Section header */}
          <div className="pb-12 md:pb-14">
            <div className="relative text-center md:text-left">
              <h2 className="h2 font-medium font-spacegrotesk">{' Trends'}</h2>
            </div>
          </div>

          {/* Content Start */}
           <div>
            {/* Category */}
            <div className="mb-8">
              <div className="flex flex-wrap justify-center md:justify-start -m-1.5">
                <button className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${category === '0' ? 'bg-blue-100 border-blue-300': 'bg-white border-gray-200'}`} onClick={() => setCategory('0')}>
                  <div className="flex items-center justify-center">
                    <span>View All</span>
                    <span className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${category === '0' ? 'text-white bg-blue-300': 'text-gray-400 bg-gray-100'}`}>2.7K</span>
                  </div>
                </button>
                <button className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${category === '1' ? 'bg-blue-100 border-blue-300': 'bg-white border-gray-200'}`} onClick={() => setCategory('1')}>
                  <div className="flex items-center justify-center">
                    <span>Movies</span>
                    <span className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${category === '1' ? 'text-white bg-blue-300': 'text-gray-400 bg-gray-100'}`}>1.2K</span>
                  </div>
                </button>
                <button className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${category === '2' ? 'bg-blue-100 border-blue-300': 'bg-white border-gray-200'}`} onClick={() => setCategory('2')}>
                  <div className="flex items-center justify-center">
                    <span>Tv Shows </span>
                    <span className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${category === '2' ? 'text-white bg-blue-300': 'text-gray-400 bg-gray-100'}`}>1.4K</span>
                  </div>
                </button>
                
                </div>
              </div>
            </div>

          {/* Movies grid */}
          <div className="max-w-sm mx-auto sm:max-w-none grid gap-8 sm:grid-cols-2 md:grid-cols-5 items-start" data-aos="zoom-y-out">
            {popularMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default MoviesList;
