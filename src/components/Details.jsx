

// Genres Movies
export const GenresMovies = ({ genres }) => {
   const genreNames = genres.map(genre => genre.name);

  return (
    <ul className="flex space-x-2">
      {genreNames.map((genreName) => (
        <li
          key={genreName}
          className="bg-project-100 py-1 px-3 rounded-full text-white text-sm"
        >
          {genreName}
        </li>
      ))}
    </ul>
  );
};

// Duration Movies
export const DurationMovies = ({ duration }) => {
  return (
      <p className="py-1 px-3 text-lg">
        {duration} minutes
      </p>

  );
};



// Budget Movies

export const formatCurrency = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
};

export const BudgetMovies = ({ budget }) => {
  const formattedBudget = formatCurrency(budget);
  return (
      <p className="py-1 px-3 text-lg">
        {formattedBudget}
      </p>

  );
}

export const RevenueMovies = ({ revenue }) => {
  const formattedRevenue = formatCurrency(revenue);
  return (
      <p className="py-1 px-3 text-lg">
        {formattedRevenue}
      </p>

  );
}

// Genres Shows

export const GenresTVShows = ({ genres }) => {
  const genreNames = genres.map(genre => genre.name);

 return (
   <ul className="flex space-x-2">
     {genreNames.map((genreName) => (
       <li
         key={genreName}
         className="bg-project-100 py-1 px-3 rounded-full text-white text-sm"
       >
         {genreName}
       </li>
     ))}
   </ul>
 );
};

export const CreatorsTVShows = ({ creators }) => {
  const creatorNames = creators.map(creator => creator.name);
 return (
   <ul className="flex space-x-2">
     {creatorNames.map((creatorName) => (
       <li
         key={creatorName}
         className="py-1 px-3 text-lg"
       >
         {creatorName}
       </li>
     ))}
   </ul>
 );
}

export const NetworkInfo = ({ network }) => {
  return (
      <p className="py-1 px-3 text-lg">
        {network.name}
      </p>
  
  );
}








