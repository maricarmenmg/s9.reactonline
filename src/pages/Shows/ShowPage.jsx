import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import useShows from '../../services/hooks/useShows';
import { GenresTVShows, CreatorsTVShows, NetworkInfo } from '../../components/Details';
import { CreditsTVShows } from '../../components/Credits';

import { LoadingSpinner } from '../../components/elements/spinner';
import { CalendarDaysIcon, RectangleStackIcon, StarIcon, TvIcon } from '@heroicons/react/24/solid';

function ShowPage() {
  const { id } = useParams();
  const { show, showCredits,} = useShows(id);
  const imagesURL = import.meta.env.VITE_TMDB_IMG;

 if (!show || Object.keys(showCredits).length === 0) {
  return < div className="flex justify-center items-center h-screen">
  <LoadingSpinner/>
  </div>
}
  return (

<Layout title={show.name}> 

<section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-b border-gray-100">
          {/* Section header */}
          <div className="pb-12 md:pb-20">
            <h2 className="h2"></h2>
          </div>
          {/* Columns */}
          <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
              <img
              src={imagesURL + show.poster_path} 
              alt={show.name}
              className="w-100 h-90 object-cover rounded-md shadow-md"
              />
              </div>

            </div>
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
            {/* Item */}
            <div className="space-y-2">
                <h3 className="h3 font-bold">{show.name}</h3>
                <p className="text-2xl  text-gray-500">{show.tagline}</p>
            </div>
            {/* Item */}
            <div className="space-y-2 ">
                <h4 className="h4 font-bold">Average</h4>
                <p className="text-2xl font-semibold text-project-100 ">{show.vote_average}</p>
            </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl  font-bold">{'Synopsis'}</h4>
                <p className="text-gray-500 text-1xl">
                {show.overview}
                </p>
              </div>

               {/* Item  Create By */}
               <div className="space-y-1 space-x-1 flex items-center  border-b-2 border-gray-200 ">
                <h4 className="text-lg font-bold ">Create By</h4>   
                <CreatorsTVShows creators={show.created_by} />      
              </div>

              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl  font-bold">{'Genres'}</h4>
                <GenresTVShows genres={show.genres} />
              </div>
             
              
{/* Item First air date */}
<div className="space-y-1 space-x-1 flex items-center border-b-2 border-gray-200">
                <CalendarDaysIcon className="w-6 h-6 text-project-100" />
                <h4 className="text-lg  font-bold">First air date</h4>
                <p className="py-1 px-3 text-lg">{show.first_air_date}</p>
                <h4 className="text-lg  font-bold">Last air date</h4>
                <p className="py-1 px-3 text-lg">{show.last_air_date}</p>
            </div>


              {/* Item Seasons*/}
              <div className="space-y-1 space-x-1 flex items-center border-b-2 border-gray-200">
                <RectangleStackIcon className="w-6 h-6 text-project-100" />
                <h4 className="text-lg  font-bold">Seasons</h4>
                <p className="py-1 px-3 text-lg">{show.number_of_seasons} sesions</p>
            </div>

          {/* Item Status */}
            <div className="space-y-1 space-x-1 flex items-center border-b-2 border-gray-200">
                <StarIcon className="w-6 h-6 text-project-100" />
                <h4 className="text-lg  font-bold">Status</h4>
                <p className="py-1 px-3 text-lg">{show.status}</p>
            </div>


            {/* Item Network */}
            <div className="space-y-1 space-x-1 flex items-center border-b-2 border-gray-200">
              <TvIcon className="w-6 h-6 text-project-100" />
              <h4 className="text-lg font-bold">Network</h4>
              <NetworkInfo network={show.networks[0]} />
              
          </div>
          </div>
        </div>
        
        <div className="space-y-2 space-x-2 ">
        <h4 className="h4 font-semibold uppercase p-5"> Main cast </h4>
        <CreditsTVShows creditsTV={showCredits} />
        </div>

      </div>
      </div>
    </section>


</Layout>

  );
}

export default ShowPage;

