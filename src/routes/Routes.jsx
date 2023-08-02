import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Shows from '../pages/Shows';
import NotFound from '../pages/NotFound';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="shows" element={<Shows />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default AppRouter;