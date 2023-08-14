
import { Link } from 'react-router-dom';

import HeroImage from '../assets/images/hero/hero-image.png';


function Hero() {
  return (
    <section className="relative  ">
      <div className="absolute bg-gray-100  inset-0 r pointer-events-none -z-10" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Hero content */}
          <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row">
            {/* Content */}
            <div className="md:w-[640px]">
              {/* Copy */}
              <h1 className="h1 font-spacegrotesk text-project-100 mb-6">
               Welcome!
                <span className="relative font-spacegrotesk font-semibold inline-flex text-project-200">
                  Showflix.
                </span>
 
              </h1>
              <p className="text-1xl text-project-100 mb-10">
              Millions of movies, TV shows and people to discover.</p>
              {/* Buttons */}
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 md:mb-20"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <div>
                  <Link className="btn text-gray-700 bg-project-200 hover:bg-transparent hover:text-gray-900 hover:border-2 border-project-200  w-full shadow-sm" to="/signup">
                  JOIN THE COMMUNITY
                  </Link>
                </div>
                <div>
               </div>

              </div>
              {/* Stats */}
              <div className="inline-flex items-center space-x-4 md:space-x-12">
                <div>
                  <div className="font-cabinet-grotesk text-2xl font-extrabold">82K</div>
                  <div className="text-gray-500">Movies</div>
                </div>
                
                <div>
                  <div className="font-cabinet-grotesk text-2xl font-extrabold">15K</div>
                  <div className="text-gray-500">TV Shows</div>
                </div>
                
                <div>
                  <div className="font-cabinet-grotesk text-2xl font-extrabold">2M+</div>
                  <div className="text-gray-500">Community</div>
                </div>
              </div>
            </div>
            {/* Image */}
            <div
              className="max-w-sm mx-auto md:max-w-none md:absolute md:left-[33rem] md:ml-16 lg:ml-32 xl:ml-12 mt-12 md:-mt-12"
              data-aos="fade-left"
              data-aos-duration="1100"
            >
              <img src={HeroImage} className="md:max-w-none" width="584" height="659" alt="Hero Illustration" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
