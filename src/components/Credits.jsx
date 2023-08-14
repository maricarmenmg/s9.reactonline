import noImage from "../assets/images/no_image.png";

export const CreditsMovies = ({ credits }) => {
    return (
      <div className="overflow-x-scroll scrollbar-thumb-blue-500 scrollbar-track-blue-200">
        <div className="flex space-x-4 p-4">
          {credits?.cast?.map((cast) => (
            <div key={cast.id} className="flex-shrink-0">
              <img
                src={cast.profile_path ? `https://image.tmdb.org/t/p/w200${cast.profile_path}` : noImage}
                alt={cast.profile_path ? `${cast.name} Profile` : "No Image"}
                className="w-100 h-90 object-cover rounded-md shadow-md"
              />
              <p className="text-lg mt-2">{cast.name}</p>
              <p className="text-gray-500 text-sm">{cast.character}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };


  export const CreditsTVShows = ({ creditsTV }) => {
    return (
      <div className="overflow-x-scroll scrollbar-thumb-blue-500 scrollbar-track-blue-200">
        <div className="flex space-x-4 p-5">
          {creditsTV?.cast?.map((cast) => (
            <div key={cast.id} className="flex-shrink-0">
              <img
                src={cast.profile_path ? `https://image.tmdb.org/t/p/w200${cast.profile_path}` : noImage}
                alt={cast.profile_path ? `${cast.name} Profile` : "No Image"}
                className="w-100 h-90 object-cover rounded-md shadow-md"
              />
              <p className="text-lg mt-2">{cast.name}</p>
              <p className="text-gray-500 text-sm">{cast.character}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
