import { Link } from "react-router-dom";

const imagesURL = import.meta.env.VITE_TMDB_IMG;

const MovieCard = ({ movie }) => {

  return (
    
    <Link to={`/movie/${movie.id}`}>
      <div className="movie-card" data-aos="zoom-out-down">
        <img 
        src={imagesURL + movie.poster_path}
        alt={movie.title}
        className="w-100 h-90 object-cover rounded-md shadow-md"
        />
        <h2>{movie.title}</h2>
        <p>{movie.vote_average}</p>
        <p>Details</p>
      </div>
    </Link>
  );
};

export default MovieCard;




