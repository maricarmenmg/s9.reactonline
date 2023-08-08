import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Tabs from '../components/Tabs';
import MoviesList from '.././components/movie/MovieList';
import ShowsList from '.././components/show/ShowList';


function Home() {

  const tabs = [
    {id: 'movies', title: 'Movies'},
    {id: 'shows', title: 'Shows'}, 
  ]
  

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
     
      <Layout title="Home">
      <main className="grow ">
        <Hero />
        <Tabs tabs={tabs} contents={[<MoviesList />, <ShowsList />]} />
      </main>
      </Layout>
    </div>
  );
}

export default Home;