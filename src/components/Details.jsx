
import { ClockIcon }  from '@heroicons/react/24/solid'
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

// Average Movies
export const AverageMovies = ({ average }) => {
  return (
      <p className="py-1 px-3 text-lg">
        {average}
      </p>

  );
}

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




