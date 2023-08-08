
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo/logo.svg';
import { FilmIcon, TvIcon  } from '@heroicons/react/24/solid'


function Header() {


  return (
    <header className="absolute w-full z-30 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <img src={logo} width="150" height="150" alt="logo" />
            </Link>
          </div>
          {/* Desktop navigation */}
          <nav className="flex grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
            <FilmIcon className="h-6 w-6 text-gray-500" />
              <li>
                <Link
                  className="font-medium text-gray-600 decoration-blue-500 decoration-2 underline-offset-2 hover:underline px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  to="/movies"
                >
                 
                  Movies
                </Link>
              </li>
              <TvIcon className="h-6 w-6 text-gray-500" />
              <li>
                <Link
                  className="font-medium text-gray-600 decoration-blue-500 decoration-2 underline-offset-2 hover:underline px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  to="/shows"
                >
                  TV Shows
                </Link>
              </li>
               
                <li>
                <Link
                  className="font-medium text-gray-600 decoration-blue-500 decoration-2 underline-offset-2 hover:underline px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  to="/signin"
                >
                  Sign in
                </Link>
              </li>

              <li className="ml-3">
                <Link className="btn-sm text-gray-700 bg-project-200 hover:bg-blue-600 w-full shadow-sm" to="/signup">
                  Join The Community
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
