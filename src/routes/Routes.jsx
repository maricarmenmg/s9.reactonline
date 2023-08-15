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

import Signin from '../pages/Signin';
import SignUp from '../pages/SignUp';
import NotFound from '../pages/NotFound';

const AppRouter = () => (
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/*" element={<Movies />} name="movie-detail"/> 
        <Route path="/movie/:id" element={<MoviePage />} name="movie-detail"/> 
        <Route path="/shows" element={<Shows />} name="movie-detail"/> 
        <Route path="/show/:id" element={<ShowPage />} name="show-detail"/>
        <Route path="/signin" element={<Signin />} /> 
        <Route path="/signup" element={<SignUp />} name="movie-detail"/> 
        <Route path="/search" element={<Search />} name="movie-detail"/> 
        <Route path="/results" element={<Results />} name="movie-detail"/> 
        <Route path="*" element={<NotFound />} />
      </Routes>
  </Router>
);

export default AppRouter;