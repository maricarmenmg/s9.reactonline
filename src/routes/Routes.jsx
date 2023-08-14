import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
// Movies
import Movies from '../pages/Movies/Movies';
import MoviePage from '../pages/Movies/MoviePage';
// Shows
import Shows from '../pages/Shows/Shows';
import ShowPage from '../pages/Shows/ShowPage';

import Search from '../components/search/Search';
import Results from '../components/search/SearchResults';

import SignIn  from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import NotFound from '../pages/NotFound';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/*" element={<Movies />} />
      <Route path="/movie/:id" element={<MoviePage />} name="movie-detail"/> 
      <Route path="/shows" element={<Shows />} />
      <Route path="/show/:id" element={<ShowPage />} name="show-detail"/>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/search" element={<Search />} />
      <Route path="/results" element={<Results />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default AppRouter;

