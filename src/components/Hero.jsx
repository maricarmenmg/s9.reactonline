
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
              <p className="text-2xl text-project-100 mb-10">
              Millions of movies, TV shows and people to discover.</p>
              {/* Buttons */}
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 md:mb-20"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <div>
                  <Link className="btn text-white bg-project-200 hover:bg-blue-600 w-full shadow-sm" to="/signup">
                  Explora ahora
                  </Link>
                </div>

                <div>
   

    <input type="text" placeholder="Find...." className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
</div>



                <div>
                  <Link className="btn text-gray-600 bg-white hover:bg-blue-100 hover:text-blue-600 w-full shadow-sm" to="/signin">
                    Sign In
                  </Link>
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
              className="max-w-sm mx-auto md:max-w-none md:absolute md:left-[33rem] md:ml-16 lg:ml-32 xl:ml-52 mt-12 md:-mt-12"
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
