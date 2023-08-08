import { Link } from "react-router-dom";

//import { FilmIcon } from '@heroicons/react/24/solid'

const imagesURL = import.meta.env.VITE_TMDB_IMG;
const MovieCard = ({ movie }) => {

  return (
  
      <div className="" data-aos="zoom-out-down">
        <img 
        src={imagesURL + movie.poster_path}
        alt={movie.name}
        className="w-80 h-90 object-cover rounded-md shadow-md"
        />
        <h2 className="mt-2 text-project-100 ">{movie.title}</h2>
        <p className="">{movie.vote_average}</p>
        <Link to={`/movie/${movie.id}`}>View More</Link>
      </div>

  );
};

export default MovieCard;
