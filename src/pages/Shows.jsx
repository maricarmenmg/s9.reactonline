import Header from '../components/Header';
import Footer from '../components/Footer';

import Heading from '../components/Heading';


function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <Heading 
         title="TV Shows"
        subtitle={`The most popular TV Shows in the world`}
        />
      </main>


      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;