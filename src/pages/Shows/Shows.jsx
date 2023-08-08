import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import ShowList from '../../components/show/ShowList';


function Shows() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      
      <Layout title="Shows">
      <main className="grow">
        <Heading 
         title="TV Shows"
         subtitle={`The most popular TV Shows in the world`}
        />
        <ShowList />
      </main>

      {/*  Site footer */}
      </Layout>
    </div>
  );
}

export default Shows;