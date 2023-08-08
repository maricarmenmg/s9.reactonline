
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';


import  NotFoundImage from '../assets/images/sheldon.png';


function NotFound() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      <Layout title="Not Found">

      {/*  Page content */}
      <main className="flex-grow">

        <section className="relative">
          <div className="max-w-6xl mx-auto pt-32 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto text-center">
                {/* Top image */}
                <div className="relative inline-flex flex-col mb-6 aos-init animate-float"  data-aos-delay="400">
                <img src={NotFoundImage} width="256" height="256" alt="Hero Images" />
                </div>
                {/* 404 content */}
                <h2 className="h2 mb-4 font-prompt font-semibold leading-tight">Oh no! wrong way</h2>
                <h4 className="h4 mb-4 font-prompt font-semibold leading-tight">I had forgotten that normal people have limits.<br/>
                Show me the <Link to="/" className="text-project-100 hover:text-gray-500 ">way </Link>.</h4>
              </div>
            </div>
          </div>
        </section>

      </main>

      </Layout>

    </div>
  );
}

export default NotFound;