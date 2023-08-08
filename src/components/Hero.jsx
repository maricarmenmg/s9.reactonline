
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
              <div className="inline-flex items-center space-x-4 md:space-x-6">
                <div>
                  <div className="font-cabinet-grotesk text-2xl font-extrabold">82K</div>
                  <div className="text-gray-500">Movies</div>
                </div>
                <svg className="fill-gray-300" width="14" height="10" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.039 0c.099.006 1.237.621 1.649.787.391.17.735.41 1.067.667.682.515 1.387.995 2.089 1.48.102.071.196.153.284.245l.497-.172 1.76-.342.13-.097a.402.402 0 0 1 .206-.09l.107-.012c.218-.035.677-.132 1.143-.122l1.11-.062c.16-.001 1.67.295 1.691.339a.639.639 0 0 1 .026.129c.018.125-.035.29.09.352.045.022.167.292.084.41l-.137.203a.726.726 0 0 1-.147.164 5.18 5.18 0 0 1-.658.404l-.182.089a.534.534 0 0 0-.257.327c-.046.133-.134.134-.204.189-.376.26-.736.581-1.102.868L11 5.965l.219.284.55.784c.093.129.187.255.286.375.052.073.137.1.147.242.022.324.182.399.314.529.184.179.363.368.528.581.081.107.123.285.179.437.049.138-.138.362-.186.37-.137.023-.128.197-.178.312a.618.618 0 0 1-.058.116c-.03.034-1.375-.105-1.67-.162l-.09-.028-1.004-.368c-.552-.157-1.05-.462-1.167-.498-.117-.043-.19-.173-.275-.278l-1.604-.847c-.138-.113-.294-.199-.433-.311l-.162.083-.174.068c-.8.26-1.602.514-2.39.808-.385.15-.778.278-1.198.327-.439.038-1.692.294-1.788.271a3.114 3.114 0 0 1-.505-.227c-.09-.049-.306-.58-.324-.78-.056-.628.013-1.007.285-.96.11.02.29-.51.395-.536.06-.016.165-.088.287-.182l.334-.266c.157-.126.297-.234.363-.252.697-.205 1.325-.62 2.004-.878l.063-.035.07-.057-.01-.013a.425.425 0 0 0-.094-.115c-.586-.448-1.082-1.031-1.7-1.434-.058-.036-.165-.181-.284-.349L1.55 2.72c-.12-.168-.233-.316-.3-.356-.095-.056-.131-.619-.24-.632C.734 1.696.765 1.31.982.725 1.05.537 1.396.09 1.495.07c.192-.037.38-.07.544-.07Z"
                    fillRule="evenodd"
                  />
                </svg>
                <div>
                  <div className="font-cabinet-grotesk text-2xl font-extrabold">15K</div>
                  <div className="text-gray-500">TV Shows</div>
                </div>
                <svg className="fill-gray-300" width="14" height="10" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.039 0c.099.006 1.237.621 1.649.787.391.17.735.41 1.067.667.682.515 1.387.995 2.089 1.48.102.071.196.153.284.245l.497-.172 1.76-.342.13-.097a.402.402 0 0 1 .206-.09l.107-.012c.218-.035.677-.132 1.143-.122l1.11-.062c.16-.001 1.67.295 1.691.339a.639.639 0 0 1 .026.129c.018.125-.035.29.09.352.045.022.167.292.084.41l-.137.203a.726.726 0 0 1-.147.164 5.18 5.18 0 0 1-.658.404l-.182.089a.534.534 0 0 0-.257.327c-.046.133-.134.134-.204.189-.376.26-.736.581-1.102.868L11 5.965l.219.284.55.784c.093.129.187.255.286.375.052.073.137.1.147.242.022.324.182.399.314.529.184.179.363.368.528.581.081.107.123.285.179.437.049.138-.138.362-.186.37-.137.023-.128.197-.178.312a.618.618 0 0 1-.058.116c-.03.034-1.375-.105-1.67-.162l-.09-.028-1.004-.368c-.552-.157-1.05-.462-1.167-.498-.117-.043-.19-.173-.275-.278l-1.604-.847c-.138-.113-.294-.199-.433-.311l-.162.083-.174.068c-.8.26-1.602.514-2.39.808-.385.15-.778.278-1.198.327-.439.038-1.692.294-1.788.271a3.114 3.114 0 0 1-.505-.227c-.09-.049-.306-.58-.324-.78-.056-.628.013-1.007.285-.96.11.02.29-.51.395-.536.06-.016.165-.088.287-.182l.334-.266c.157-.126.297-.234.363-.252.697-.205 1.325-.62 2.004-.878l.063-.035.07-.057-.01-.013a.425.425 0 0 0-.094-.115c-.586-.448-1.082-1.031-1.7-1.434-.058-.036-.165-.181-.284-.349L1.55 2.72c-.12-.168-.233-.316-.3-.356-.095-.056-.131-.619-.24-.632C.734 1.696.765 1.31.982.725 1.05.537 1.396.09 1.495.07c.192-.037.38-.07.544-.07Z"
                    fillRule="evenodd"
                  />
                </svg>
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
