
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import { GenresMovies, DurationMovies, AverageMovies, BudgetMovies } from '../../components/Details';
import useMovies from '../../services/hooks/useMovies'

import { ClockIcon }  from '@heroicons/react/24/solid'

function MoviePage() {
  const { id } = useParams(); // Obtén el ID de la película desde los parámetros de la URL
  const { movie } = useMovies(id); // Utiliza el ID para obtener los detalles de la película
  const imagesURL = import.meta.env.VITE_TMDB_IMG;

  
  // Si no se encuentra la película o no hay datos disponibles, puedes mostrar un mensaje de error o un indicador de carga.
  if (!movie || Object.keys(movie).length === 0) {
    return <div>Loading...</div>;
  }

  return (


<Layout title={movie.title}> 

<section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-b border-gray-100">
          {/* Section header */}
          <div className="pb-12 md:pb-20">
            <h2 className="h2 font-cabinet-grotesk"></h2>
          </div>
          {/* Columns */}
          <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
              <img 
                src={imagesURL + movie.poster_path}
                alt={movie.name}
               className="w-100 h-90 object-cover rounded-md shadow-md"
              />
              </div>

            </div>
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
            {/* Item */}
            <div className="space-y-2">
                <h3 className="h3 font-bold">{movie.title}</h3>
                <p className="text-2xl font-spacegrotesk  text-gray-500">{movie.tagline}</p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl  font-bold">{'Synopsis'}</h4>
                <p className="text-gray-500 text-1xl">{movie.overview}</p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl  font-bold">{'Genres'}</h4>
                <GenresMovies genres={movie.genres} />
              </div>
              {/* Item */}
              <div className="space-y-1 space-x-1 flex items-center  border-b-2 border-gray-200 ">
                <ClockIcon className="w-6 h-6 text-project-100" />
                <h4 className="text-lg font-bold ">Duration</h4>
                <DurationMovies duration={movie.runtime} />
              </div>
              
              {/* Item */}
              <div className="space-y-1 space-x-1 flex items-center border-b-2 border-gray-200">
                <ClockIcon className="w-6 h-6 text-project-100" />
                <h4 className="text-lg  font-bold">Average</h4>
                <AverageMovies average={movie.vote_average} />
            </div>
            {/* Item */}
            <div className="space-y-1 space-x-1 flex items-center border-b-2 border-gray-200">
              <ClockIcon className="w-6 h-6 text-project-100" />
              <h4 className="text-lg font-bold">Budget</h4>
              <BudgetMovies budget={movie.budget} />
          </div>
          </div>
        </div>
        <h1> Cast </h1>
      </div>
      </div>
    </section>


</Layout>



  );
}

export default MoviePage;