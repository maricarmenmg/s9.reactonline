
import { useLocation } from 'react-router-dom';

import Layout from '../Layout';


const SearchResults = () => {
  const location = useLocation();
  const results = location.state ? location.state.results || [] : [];

  return (

    <Layout title="Results">
 <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:pt-5 md:pb-5">
          {/* Section header */}
          <div className="pb-12 md:pb-12">
            <div className="relative text-center md:text-left">
              <h3 className="h3 font-medium ">{'Resultado de la busqueda'}</h3>
            </div>
          </div>
          {/* Content  */}
          <div>

            {/* Movies grid */}
            <div className="max-w-sm mx-auto sm:max-w-none grid gap-8 sm:grid-cols-2 md:grid-cols-5 items-start aos-init aos-animate" data-aos="zoom-y-out">
            {results.map((result) => (
             <div key={result.id}>
             <h2>{result.title || result.name }</h2>

        </div>
      ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    </Layout>
  );
};

export default SearchResults;
