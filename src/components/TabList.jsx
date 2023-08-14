import { useState } from 'react';
import MoviesList from './movie/MovieList';
import ShowsList from './show/ShowList';


function TabList({activeTab}) {
  const [currentTab, setCurrentTab] = useState(activeTab);

  const onTabChange = (tab) => {
    setCurrentTab(tab);
  };

  return (

    <div className="relative">
      <ul className="justify-normal">
        <li
          onClick={() => onTabChange('movies')}
          className={`relative font-medium font-spacegrotesk text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 cursor-pointer ${
            currentTab === 'movies' ? 'bg-gray-100 border-project-200' : 'bg-gray-100 border-gray-200'
          }`}
        >
          <div className="flex items-center justify-center">
          <span>Movies</span>
          <span
              className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${
                currentTab === 'movies' ? 'text-white bg-project-200' : 'text-gray-400 bg-gray-100'
              }`}
            >
              82K
            </span>
          </div>
        </li>

        <li
          onClick={() => onTabChange('shows')}
          className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 cursor-pointer ${
            currentTab === 'shows' ? 'bg-gray-100 border-blue-300' : 'bg-white border-gray-200'
          }`}
        >
          <div className="flex items-center justify-center">
            <span>TV Shows</span>
            <span
              className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${
                currentTab === 'shows' ? 'text-white bg-project-200' : 'text-gray-400 bg-gray-100'
              }`}
            >
              15K
            </span>
          </div>
        </li>
      </ul>
      {currentTab === 'movies' && <MoviesList />}
      {currentTab === 'shows' && <ShowsList />}
      </div>


);
}

export default TabList;
