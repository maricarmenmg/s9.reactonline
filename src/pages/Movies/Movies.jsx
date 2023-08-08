import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import MoviesList from '../../components/movie/MovieList';
import Search from '../../components/Search';


function Movies() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      <Layout title="Movies">
      <main className="grow">
      <div>
      <h1>Buscador de películas y programas de TV</h1>
      <Search />
    </div>
        <Heading 
          title="Popular Movies"
          subtitle={`The most popular movies in the world`}
        />
        <MoviesList />
      </main>

      </Layout>

    </div>
  );
}

export default Movies;