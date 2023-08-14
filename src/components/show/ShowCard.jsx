import { Link } from "react-router-dom";


const imagesURL = import.meta.env.VITE_TMDB_IMG;

const ShowCard = ({ show }) => {

 
  return (

    <div className="" data-aos="zoom-out-down">
          <img
            src={imagesURL + show.poster_path} 
            alt={show.name}
            className="w-100 h-90 object-cover rounded-md shadow-md"
            
          />
        <h2 className="mt-2 text-project-100 ">{show.name}</h2>
        <p className="font-semibold">Average: {show.vote_average}</p>
        <Link className="text-sm" to={`/show/${show.id}`}> View More</Link>
       
    </div>

  );
};

export default ShowCard;



