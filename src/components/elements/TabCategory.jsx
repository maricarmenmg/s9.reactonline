

const TabCategory = ({ category, setCategory }) => {
    return (
      <div className="mb-8">
        <div className="flex flex-wrap justify-center md:justify-start -m-1.5">
          <button
            className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${
              category === '0' ? 'bg-blue-100 border-blue-300' : 'bg-white border-gray-200'
            }`}
            onClick={() => setCategory('0')}
          >
            <div className="flex items-center justify-center">
              <span>View All</span>
              <span
                className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${
                  category === '0' ? 'text-white bg-blue-300' : 'text-gray-400 bg-gray-100'
                }`}
              >
                2.7K
              </span>
            </div>
          </button>
          <button
            className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${
              category === '1' ? 'bg-blue-100 border-blue-300' : 'bg-white border-gray-200'
            }`}
            onClick={() => setCategory('1')}
          >
            <div className="flex items-center justify-center">
              <span>🤖 Movies</span>
              <span
                className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${
                  category === '1' ? 'text-white bg-blue-300' : 'text-gray-400 bg-gray-100'
                }`}
              >
                1.2K
              </span>
            </div>
          </button>
          <button
            className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${
              category === '2' ? 'bg-blue-100 border-blue-300' : 'bg-white border-gray-200'
            }`}
            onClick={() => setCategory('2')}
          >
            <div className="flex items-center justify-center">
              <span>🪩 Tv Shows </span>
              <span
                className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${
                  category === '2' ? 'text-white bg-blue-300' : 'text-gray-400 bg-gray-100'
                }`}
              >
                1.4K
              </span>
            </div>
          </button>
        </div>
      </div>
    );
  };
  
  export default TabCategory;
  