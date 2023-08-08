
import useMovies from '../../services/hooks/useMovies';
import MovieCard from "./MovieCard";


const MoviesList = () => {
  const { popular }  = useMovies();

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:pt-12 md:pb-20">
          {/* Section header */}
          <div className="pb-12 md:pb-12">
            <div className="relative text-center md:text-left">
              <h3 className="h3 font-medium font-spacegrotesk">{'Popular Movies'}</h3>
            </div>
          </div>
          {/* Content  */}
          <div>

            {/* Movies grid */}
            <div className="max-w-sm mx-auto sm:max-w-none grid gap-8 sm:grid-cols-2 md:grid-cols-5 items-start aos-init aos-animate" data-aos="zoom-y-out">
            {popular.map((movie) => (
             <MovieCard 
              key={movie.id} 
              movie={movie}
            />
           ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviesList;