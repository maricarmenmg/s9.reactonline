import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import SearchForm from './SearchForm';
import SearcResults from './SearchResults';
import { searchTMDB } from '../../services/api/Api';

const Search = () => {
  const [results, setResults] = useState([]);
  const navigate = useNavigate(); 

  
  const handleSearch = async (query) => {
    const searchResults = await searchTMDB(query);
    setResults(searchResults);
    navigate('/results', { state: { results: searchResults } }); 
  };

  return (

    <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:pt-5 md:pb-5">
          <div className="pb-12 md:pb-14">
            <div className="relative text-center md:text-center">
            <SearchForm onSearch={handleSearch} />
            </div>
          </div>
        </div>
      </div>

  );
};

export default Search;