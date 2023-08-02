import { Link } from "react-router-dom";

const imagesURL = import.meta.env.VITE_TMDB_IMG;

const ShowCard = ({ show, showLink = true }) => {

  return (
    <div className="movie-card">
      <img
        src={imagesURL + show.poster_path}
        alt={show.title}
        className="w-100 h-90 object-cover rounded-md shadow-md"
      />
      <h2 className="font-sora text-lg">{show.title}</h2>
      <p className="percent">
        {show.vote_average}
      </p>
      {showLink && <Link to={`/show/${show.id}`}>Details</Link>}
    </div>
  );
};

export default ShowCard;




