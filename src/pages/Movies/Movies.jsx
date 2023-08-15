import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import MoviesList from '../../components/movie/MovieList';


function Movies() {

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      <Layout title="Movies">
      <main className="grow">
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