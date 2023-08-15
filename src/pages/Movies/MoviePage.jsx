
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout';

import  { GenresMovies, DurationMovies, BudgetMovies, RevenueMovies } from '../../components/Details';
import  { CreditsMovies } from '../../components/Credits';

import useMovies from '../../services/hooks/useMovies'

import { LoadingSpinner } from '../../components/elements/spinner';
import { ClockIcon, CurrencyDollarIcon }  from '@heroicons/react/24/solid'


function MoviePage() {

  const { id } = useParams();
  const { movie, movieCredits } = useMovies(id); 
  const imagesURL = import.meta.env.VITE_TMDB_IMG;


  if (!movie || Object.keys(movie).length === 0) {
    return < div className="flex justify-center items-center h-screen">
    <LoadingSpinner />
    </div>
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

            {/* Item Title */}
            <div className="space-y-2">
                <h3 className="h3 font-bold">{movie.title}</h3>
                <p className="text-2xl  text-gray-500">{movie.tagline}</p>
              </div>

              {/* Item Average */}
              <div className="space-y-2">
                <h4 className="h4 font-bold">Average</h4>
                <p className="text-2xl font-semibold text-project-100 ">{movie.vote_average}</p>
              </div>

              {/* Item Synopsis */}
              <div className="space-y-2">
                <h4 className="text-xl  font-bold">{'Synopsis'}</h4>
                <p className="text-gray-500 text-1xl">{movie.overview}</p>
              </div>

              {/* Item Genres*/}
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
              

            {/* Item Budget */}
            <div className="space-y-1 space-x-1 flex items-center border-b-2 border-gray-200">
              <CurrencyDollarIcon className="w-6 h-6 text-project-100" />
              <h4 className="text-lg font-bold">Budget</h4>
              <BudgetMovies budget={movie.budget} />
           </div>


            {/* Item Revenue */}
            <div className="space-y-1 space-x-1 flex items-center border-b-2 border-gray-200">
              <CurrencyDollarIcon className="w-6 h-6 text-project-100" />
              <h4 className="text-lg font-bold">Revenue</h4>
              <RevenueMovies revenue={movie.revenue} />
           </div>

          </div>
        </div>
        
        <div className="space-y-2 space-x-2 ">
        <h3 className="h3 font-bold"> Main cast </h3>
        <CreditsMovies credits={movieCredits} />
        </div>

      </div>
      </div>
    </section>


</Layout>



  );
}

export default MoviePage;