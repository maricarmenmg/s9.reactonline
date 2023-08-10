
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.svg';
import { FilmIcon, TvIcon, MagnifyingGlassCircleIcon} from '@heroicons/react/24/solid'

function Header() {
  return (
    <header className="fixed  w-full z-30 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <img src={logo} width="150" height="150" alt="logo" />
            </Link>
          </div>
          {/* Desktop navigation */}
          <nav className="flex grow items-center">
            {/* Desktop sign in links */}
            <ul className="flex-grow flex items-center justify-end space-x-4">
              <li className="flex items-center">
                <FilmIcon className="h-6 w-6 text-gray-500 mr-1" />
                <Link
                  className="font-medium text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                  to="/movies"
                >
                  Movies
                </Link>
              </li>
              <li className="flex items-center">
                <TvIcon className="h-6 w-6 text-gray-500 mr-1" />
                <Link
                  className="font-medium text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                  to="/shows"
                >
                  TV Shows
                </Link>
              </li>

              <li className="flex items-center">
                <MagnifyingGlassCircleIcon className="h-6 w-6 text-gray-500 mr-1" />
                <Link
                  className="font-bold text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                  to="/search"
                >
                  Search
                </Link>
              </li>

              <li className="flex items-center">
                /
              </li>
              

              <li>
                <Link
                  className="font-medium uppercase text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                  to="/signin"
                >
                  Sign in
                </Link>
              </li>
              <li className="ml-3">
                <Link className="btn-sm text-gray-700 uppercase bg-project-200 hover:bg-blue-600 w-full shadow-sm" to="/signup">
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
