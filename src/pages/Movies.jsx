import Header from '../components/Header';
import Footer from '../components/Footer';

import Heading from '../components/Heading';
import MoviesList from '../components/MovieList';


function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <Heading 
          title="Popular Movies"
          subtitle={`The most popular movies in the world`}
        />
        <MoviesList />

      </main>
      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;