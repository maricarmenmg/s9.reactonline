import { Link } from "react-router-dom";

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
        <p className="font-semibold">Average: {movie.vote_average}</p>
        <Link className="text-sm" to={`/movie/${movie.id}`}> 👁️ View More </Link>
      </div>

  );
};

export default MovieCard;
