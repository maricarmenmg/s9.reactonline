import { Link } from "react-router-dom";

const imagesURL = import.meta.env.VITE_TMDB_IMG;

const ShowCard = ({ show }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${show.id}`}>
        <div className="movie-card" data-aos="zoom-out-down">
          <img
            src={imagesURL + show.poster_path} 
            alt={show.title}
            className="w-100 h-90 object-cover rounded-md shadow-md"
          />
          <h2>{show.name}</h2>
          <p>{show.vote_average}</p>
          <p>Details</p>
        </div>
      </Link>
    </div>
  );
};

export default ShowCard;



