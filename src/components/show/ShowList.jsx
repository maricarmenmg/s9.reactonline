import useShows from '../../services/hooks/useShows';
import ShowCard from './ShowCard';


const ShowList = () => {

  const { topRatedShows } = useShows();

  return (
    <section>
     <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:pt-12 md:pb-20">
          {/* Section header */}
          <div className="pb-12 md:pb-14">
            <div className="relative text-center md:text-left">
            <h3 className="h3 font-medium font-spacegrotesk">{'Top rated'}</h3>
            </div>
          </div>
          {/* Content  */}
          <div>
            {/* SHows grid */}
            <div className="max-w-sm mx-auto sm:max-w-none grid gap-8 sm:grid-cols-2 md:grid-cols-5 items-start" data-aos="zoom-out">
            {topRatedShows.map((show) => (
            <ShowCard 
            key={show.id} 
            show={show} 
            />
           ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowList;